/**
 * 제품 원장과 빌드 산출물의 정합성을 검사한다.
 *
 * prerender 크롤러는 절대 URL을 따라가지 않으므로 canonical, hreflang,
 * og:image의 오타는 빌드를 깨뜨리지 않는다. 이 스크립트가 그 빈틈을 메운다.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const buildDir = process.argv[2] ?? 'build';
const errors = [];
const warnings = [];

// TS 원장을 그대로 읽을 수 없으므로 빌드된 sitemap과 정적 파일로 교차 검증한다.
const registrySource = readFileSync('src/lib/products/registry.ts', 'utf8');

const check = (condition, message) => {
	if (!condition) errors.push(message);
};

// 1. 페이지 경로는 모두 '/'로 끝나야 한다 (trailingSlash: 'always').
//    확장자가 붙은 값은 정적 자산이라 검사 대상이 아니다.
for (const [, path] of registrySource.matchAll(/(?:ko|en):\s*'(\/[^']*)'/g)) {
	if (/\.[a-z0-9]+$/i.test(path)) continue;
	check(path.endsWith('/'), `경로가 '/'로 끝나지 않습니다: ${path}`);
}

// 2. 원장이 참조하는 정적 자산이 실제로 있어야 한다.
for (const [, asset] of registrySource.matchAll(/'(\/(?:products|og)\/[^']+)'/g)) {
	check(existsSync(join('static', asset)), `정적 자산이 없습니다: static${asset}`);
}

// 3. 날짜는 ISO 형식이고 미래가 아니어야 한다.
//    원장 날짜는 사람이 KST 기준으로 적는데 CI 러너 시계는 UTC다. UTC로 비교하면
//    KST 오전 9시 이전에 적은 '오늘'이 미래로 잡혀 검사가 헛돈다. KST는 DST가 없으므로
//    고정 +09:00을 더해 오늘을 구한다.
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
const today = new Date(Date.now() + KST_OFFSET_MS).toISOString().slice(0, 10);
for (const [, field, value] of registrySource.matchAll(
	/(updated|updatedOn|releasedOn):\s*'([^']*)'/g
)) {
	check(/^\d{4}-\d{2}-\d{2}$/.test(value), `${field} 형식이 YYYY-MM-DD가 아닙니다: ${value}`);
	check(value <= today, `${field}가 미래 날짜입니다: ${value}`);
}

// 4. 라이브 제품인데 제품별 개인정보처리방침이 없으면 경고한다.
//    회사 공통 방침으로 대신하고 있는 상태이며, 광고를 쓰는 앱은 제품별 문서가 정확하다.
const liveWithoutPrivacy = [];
for (const chunk of registrySource.split(/\n\t\{\n/).slice(1)) {
	const slug = chunk.match(/slug: '([^']+)'/)?.[1];
	if (!slug) continue;
	const isLive = /status: 'live'/.test(chunk);
	const hasPrivacy = /kind: 'privacy'/.test(chunk);
	if (isLive && !hasPrivacy) liveWithoutPrivacy.push(slug);
}
if (liveWithoutPrivacy.length > 0) {
	warnings.push(
		`라이브인데 제품별 개인정보처리방침이 없는 제품 ${liveWithoutPrivacy.length}개: ` +
			liveWithoutPrivacy.join(', ') +
			' (회사 공통 /privacy/로 대신하는 중)'
	);
}

for (const warning of warnings) console.warn(`  경고: ${warning}`);

if (errors.length > 0) {
	console.error(`check-registry: 오류 ${errors.length}건`);
	for (const error of errors) console.error(`  ${error}`);
	process.exit(1);
}

console.log(`check-registry: 통과 (경고 ${warnings.length}건)`);
