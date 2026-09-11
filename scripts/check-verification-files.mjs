/**
 * 검색엔진 소유권 확인 파일을 검사한다.
 *
 * 네이버와 Google은 발급한 파일의 내용을 그대로 대조한다. 포맷터가 줄바꿈 하나만
 * 더해도 소유 확인이 깨지는데, 깨진 사실이 사이트 어디에도 드러나지 않는다.
 * 조용히 실패하는 종류라 빌드에서 막는다.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const staticDir = 'static';
const buildDir = process.argv[2] ?? 'build';

const VERIFICATION_PATTERNS = [
	{ name: 'Google Search Console', re: /^google[0-9a-f]+\.html$/ },
	{ name: 'Naver Search Advisor', re: /^naver[0-9a-f]{32}\.html$/ },
	{ name: 'Bing Webmaster', re: /^BingSiteAuth\.xml$/ }
];

const UNSAFE = /<script|<iframe|javascript:|onerror\s*=|onload\s*=/i;

// XML 확인 파일에 외부 엔티티 선언이 있으면 파서에 따라 외부 자원을 읽으려 든다.
// 발급된 확인 파일에는 있을 이유가 없다.
const XML_UNSAFE = /<!DOCTYPE|<!ENTITY/i;

const errors = [];
const checked = [];

for (const entry of readdirSync(staticDir)) {
	const matched = VERIFICATION_PATTERNS.find((pattern) => pattern.re.test(entry));
	if (!matched) continue;

	const source = readFileSync(join(staticDir, entry));
	const output = join(buildDir, entry);

	// 산출물에 존재하고 원본과 바이트 단위로 같아야 한다.
	if (!existsSync(output)) {
		errors.push(`${entry}: 빌드 산출물에 없습니다`);
		continue;
	}
	if (!source.equals(readFileSync(output))) {
		errors.push(`${entry}: 빌드 산출물이 원본과 다릅니다 (포맷터가 건드렸는지 확인하세요)`);
	}

	const text = source.toString('utf8');

	// 공개 사이트 루트에 올라가는 외부 발급 파일이라 실행 가능한 내용이 없어야 한다.
	if (UNSAFE.test(text)) {
		errors.push(`${entry}: 실행 가능한 내용이 들어 있습니다`);
	}

	if (entry.endsWith('.xml') && XML_UNSAFE.test(text)) {
		errors.push(`${entry}: 외부 엔티티 선언이 있습니다`);
	}

	// 네이버는 파일명의 해시가 내용에도 그대로 들어간다.
	const nameHash = /^naver([0-9a-f]{32})\.html$/.exec(entry)?.[1];
	if (nameHash && !text.includes(nameHash)) {
		errors.push(`${entry}: 파일명 해시가 내용에 없습니다. 발급받은 파일이 맞는지 확인하세요`);
	}

	checked.push(`${matched.name} (${entry})`);
}

if (errors.length > 0) {
	console.error(`check-verification-files: 오류 ${errors.length}건`);
	for (const error of errors) console.error(`  ${error}`);
	process.exit(1);
}

if (checked.length === 0) {
	console.log('check-verification-files: 확인 파일 없음');
} else {
	console.log(`check-verification-files: ${checked.join(', ')} 확인`);
}
