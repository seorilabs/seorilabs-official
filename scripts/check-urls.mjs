/**
 * 스토어 콘솔에 등록돼 외부에서 참조 중인 URL이 빌드에 남아 있는지 검사한다.
 *
 * 이 목록은 의도적으로 리터럴이다. 제품 원장에서 파생시키면 원장의 오타가
 * 그대로 통과해 검사가 무의미해진다. 경로를 옮겨야 할 일이 생기면 먼저 스토어
 * 콘솔을 바꾸고, 그 다음에 이 목록을 고친다.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const KO_PATHS = [
	'/privacy/',
	'/terms/',
	'/support/',
	'/ja/privacy/',
	'/zh/privacy/',
	'/zh-tw/privacy/',
	'/de/privacy/',
	'/fr/privacy/',
	'/es/privacy/',
	'/apps/babycare/privacy/',
	'/apps/babycare/account-deletion/',
	'/apps/cycle-pair/privacy/',
	'/apps/cycle-pair/account-deletion/',
	'/apps/jomul/privacy/',
	'/apps/lizard-tycoon/privacy/',
	'/apps/lord-ledger/privacy/',
	'/apps/lucid-reversi/privacy/',
	'/apps/matgo/privacy/',
	'/apps/ungeul/privacy/',
	'/apps/ungeul/terms/'
];

// 영어 미러는 다국어 개인정보처리방침 경로를 제외한 나머지에만 존재한다.
const EN_MIRRORS = KO_PATHS.filter((path) => !/^\/(ja|zh|zh-tw|de|fr|es)\//.test(path)).map(
	(path) => `/en${path}`
);

const REQUIRED = [...KO_PATHS, ...EN_MIRRORS];

const buildDir = process.argv[2] ?? 'build';
const missing = REQUIRED.filter((path) => !existsSync(join(buildDir, path, 'index.html')));

if (missing.length > 0) {
	console.error(`외부에 등록된 URL ${missing.length}개가 빌드에 없습니다:`);
	for (const path of missing) console.error(`  ${path}`);
	console.error('스토어 콘솔이 이 주소를 참조하고 있습니다. 경로를 되돌리세요.');
	process.exit(1);
}

console.log(`check-urls: 고정 URL ${REQUIRED.length}개 확인`);
