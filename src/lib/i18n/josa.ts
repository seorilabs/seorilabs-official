const HANGUL_BASE = 0xac00;
const HANGUL_LAST = 0xd7a3;

/** 마지막 글자에 받침이 있는지. 한글이 아니면 판단하지 않는다. */
function hasFinalConsonant(word: string): boolean | null {
	const last = word.trimEnd().at(-1);
	if (!last) return null;
	const code = last.charCodeAt(0);
	if (code < HANGUL_BASE || code > HANGUL_LAST) return null;
	return (code - HANGUL_BASE) % 28 !== 0;
}

/**
 * 앞 단어의 받침에 맞는 조사를 고른다.
 * 제품 이름이 데이터에서 오므로 조사를 문장에 박아 둘 수 없다.
 * 한글로 끝나지 않으면 받침 없는 쪽을 쓴다.
 */
export function josa(word: string, withFinal: string, withoutFinal: string): string {
	return hasFinalConsonant(word) ? withFinal : withoutFinal;
}
