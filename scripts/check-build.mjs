/**
 * 빌드 산출물의 head 태그를 검사한다.
 *
 * prerender 크롤러는 루트 상대 링크만 따라가고 절대 URL은 큐에 넣지 않는다.
 * 따라서 canonical, hreflang, og:image가 404를 가리켜도 빌드는 조용히 통과한다.
 * 이 스크립트가 그 사각지대를 메운다.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const buildDir = process.argv[2] ?? 'build';
const SITE = 'https://www.seorilabs.com';

function htmlFiles(dir) {
	const out = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			if (entry === '_app') continue;
			out.push(...htmlFiles(full));
		} else if (entry.endsWith('.html')) {
			out.push(full);
		}
	}
	return out;
}

/** 사이트 내부 절대 URL이 실제 산출물을 가리키는지 확인한다. */
function resolvesInBuild(url) {
	if (!url.startsWith(SITE)) return true; // 외부 링크는 검사 대상이 아니다
	const path = url.slice(SITE.length) || '/';
	if (path.endsWith('/')) return existsSync(join(buildDir, path, 'index.html'));
	return existsSync(join(buildDir, path));
}

const errors = [];
const pages = htmlFiles(buildDir);

for (const file of pages) {
	const rel = '/' + relative(buildDir, file);
	const html = readFileSync(file, 'utf8');
	// Search Console 소유권 검증 파일처럼 문서가 아닌 정적 파일은 건너뛴다.
	if (!html.includes('<html')) continue;
	const head = /<head>([\s\S]*?)<\/head>/.exec(html)?.[1] ?? '';

	if (html.includes('%lang%')) {
		errors.push(`${rel}: %lang% 자리표시자가 치환되지 않았습니다 (hooks.server.ts 확인)`);
	}

	const lang = /<html lang="([^"]*)"/.exec(html)?.[1];
	if (!lang) errors.push(`${rel}: <html lang> 이 없습니다`);

	for (const tag of ['canonical']) {
		const href = new RegExp(`<link[^>]*rel="${tag}"[^>]*href="([^"]*)"`).exec(head)?.[1];
		if (!href) {
			errors.push(`${rel}: ${tag} 링크가 없습니다`);
		} else if (!resolvesInBuild(href)) {
			errors.push(`${rel}: canonical이 빌드에 없는 주소를 가리킵니다 -> ${href}`);
		}
	}

	for (const [, href] of head.matchAll(/<link[^>]*rel="alternate"[^>]*href="([^"]*)"/g)) {
		if (!resolvesInBuild(href)) {
			errors.push(`${rel}: hreflang이 빌드에 없는 주소를 가리킵니다 -> ${href}`);
		}
	}

	const ogImage = /<meta[^>]*property="og:image"[^>]*content="([^"]*)"/.exec(head)?.[1];
	if (!ogImage) {
		errors.push(`${rel}: og:image가 없습니다`);
	} else if (!resolvesInBuild(ogImage)) {
		errors.push(`${rel}: og:image 파일이 없습니다 -> ${ogImage}`);
	}
}

if (errors.length > 0) {
	console.error(`check-build: 오류 ${errors.length}건`);
	for (const error of errors.slice(0, 40)) console.error(`  ${error}`);
	if (errors.length > 40) console.error(`  ... 외 ${errors.length - 40}건`);
	process.exit(1);
}

console.log(`check-build: 페이지 ${pages.length}개 통과`);
