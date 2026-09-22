/**
 * 빌드 산출물을 검사한다. head 태그와, 모든 페이지가 지켜야 하는 불변식.
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

/**
 * 색인되는 모든 페이지에 있어야 하는 링크.
 * 임프린트 사이트는 별도 도메인이라 자체 링크로는 크롤러가 도달하지 못한다.
 * 푸터를 손보다 링크가 빠지면 화면상 티가 나지 않으므로 여기서 막는다.
 * noindex 페이지(정적 404 등)는 크롤러 발견에 기여하지 않아 제외한다.
 */
const REQUIRED_ON_EVERY_PAGE = [{ name: 'Seori Tales', href: 'https://seoritales.com/' }];

const errors = [];
const pages = htmlFiles(buildDir);
/** 색인 대상 페이지의 루트 상대 경로. sitemap 누락 검사에 쓴다. */
const indexablePaths = new Set();

for (const file of pages) {
	const rel = '/' + relative(buildDir, file);
	// 이 페이지가 스스로 가져야 할 주소. trailingSlash: 'always'라 디렉터리는 '/'로 끝난다.
	const ownPath = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
	const html = readFileSync(file, 'utf8');
	// Search Console 소유권 검증 파일처럼 문서가 아닌 정적 파일은 건너뛴다.
	if (!html.includes('<html')) continue;
	// noindex 페이지는 색인 대상이 아니라 canonical과 공유 이미지를 요구하지 않는다.
	const noindex = /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html);
	const head = /<head>([\s\S]*?)<\/head>/.exec(html)?.[1] ?? '';

	if (html.includes('%lang%')) {
		errors.push(`${rel}: %lang% 자리표시자가 치환되지 않았습니다 (hooks.server.ts 확인)`);
	}

	const lang = /<html lang="([^"]*)"/.exec(html)?.[1];
	if (!lang) errors.push(`${rel}: <html lang> 이 없습니다`);

	if (!noindex) indexablePaths.add(ownPath);

	const canonical = /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/.exec(head)?.[1];
	if (!canonical) {
		if (!noindex) errors.push(`${rel}: canonical 링크가 없습니다`);
	} else if (!resolvesInBuild(canonical)) {
		errors.push(`${rel}: canonical이 빌드에 없는 주소를 가리킵니다 -> ${canonical}`);
	} else if (canonical !== SITE + ownPath) {
		// 이 사이트는 URL 하나에 페이지 하나를 prerender한다. canonical이 남을 가리키면
		// 구글은 그 페이지를 색인에서 지우고 지목된 주소로 합친다. 다른 주소가 실재하므로
		// 위의 resolvesInBuild는 통과한다. 자기 참조 여부를 따로 확인해야 하는 이유다.
		errors.push(`${rel}: canonical이 자기 자신이 아닙니다 -> ${canonical}`);
	}

	for (const [, href] of head.matchAll(/<link[^>]*rel="alternate"[^>]*href="([^"]*)"/g)) {
		if (!resolvesInBuild(href)) {
			errors.push(`${rel}: hreflang이 빌드에 없는 주소를 가리킵니다 -> ${href}`);
		}
	}

	for (const link of REQUIRED_ON_EVERY_PAGE) {
		if (noindex) continue;
		if (!html.includes(`href="${link.href}"`)) {
			errors.push(`${rel}: ${link.name} 링크가 없습니다 -> ${link.href}`);
		}
	}

	const ogImage = /<meta[^>]*property="og:image"[^>]*content="([^"]*)"/.exec(head)?.[1];
	if (!ogImage) {
		if (!noindex) errors.push(`${rel}: og:image가 없습니다`);
	} else if (!resolvesInBuild(ogImage)) {
		errors.push(`${rel}: og:image 파일이 없습니다 -> ${ogImage}`);
	}
}

// sitemap의 lastmod가 전부 오늘로 찍히는 회귀를 감지한다.
const sitemapPath = join(buildDir, 'sitemap.xml');
if (existsSync(sitemapPath)) {
	const sitemap = readFileSync(sitemapPath, 'utf8');
	const lastmods = [...sitemap.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)].map((m) => m[1]);
	// 여기서 찾는 것은 빌드 시각이 lastmod로 새는 회귀다. 그 값은 러너 시계의 UTC로
	// 찍히므로 원장 날짜와 달리 KST가 아니라 UTC 오늘과 비교하는 것이 맞다.
	const today = new Date().toISOString().slice(0, 10);
	const todayCount = lastmods.filter((value) => value.startsWith(today)).length;
	if (lastmods.length > 0 && todayCount === lastmods.length) {
		errors.push(
			`sitemap.xml: lastmod ${lastmods.length}개가 전부 오늘(${today})입니다. ` +
				'빌드 시각을 쓰고 있지 않은지 확인하세요.'
		);
	}
	const listed = new Set();
	for (const [, loc] of sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)) {
		listed.add(loc);
		if (!resolvesInBuild(loc)) errors.push(`sitemap.xml: 없는 주소를 등재했습니다 -> ${loc}`);
	}
	// 반대 방향. sitemap은 원장에서 파생되므로, 원장을 거치지 않고 추가한 라우트는
	// 여기서만 드러난다. 사이트 안에서 링크되지 않는 고아 페이지도 같이 걸린다.
	for (const path of indexablePaths) {
		if (!listed.has(SITE + path)) {
			errors.push(`sitemap.xml: 색인 대상 페이지가 빠졌습니다 -> ${path}`);
		}
	}
}

if (errors.length > 0) {
	console.error(`check-build: 오류 ${errors.length}건`);
	for (const error of errors.slice(0, 40)) console.error(`  ${error}`);
	if (errors.length > 40) console.error(`  ... 외 ${errors.length - 40}건`);
	process.exit(1);
}

console.log(`check-build: 페이지 ${pages.length}개 통과`);
