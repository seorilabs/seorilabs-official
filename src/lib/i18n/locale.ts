import { privacyLocales } from '$lib/content';

// URL 첫 세그먼트 -> <html lang> 값. ko는 접두어가 없으므로 기본값으로 처리한다.
const htmlLangBySegment = new Map(
	privacyLocales
		.filter((locale) => locale.urlPrefix)
		.map((locale) => [locale.urlPrefix, locale.htmlLang])
);

const DEFAULT_HTML_LANG = 'ko';

export function htmlLangForPath(pathname: string): string {
	return htmlLangBySegment.get(pathname.split('/')[1] ?? '') ?? DEFAULT_HTML_LANG;
}
