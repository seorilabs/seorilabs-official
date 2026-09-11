import type { PrivacyLocaleKey } from '$lib/content';

// og:locale은 hreflang과 형식이 다르다(language_TERRITORY).
const OG_LOCALE: Record<PrivacyLocaleKey, string> = {
	ko: 'ko_KR',
	en: 'en_US',
	ja: 'ja_JP',
	zh: 'zh_CN',
	'zh-tw': 'zh_TW',
	de: 'de_DE',
	fr: 'fr_FR',
	es: 'es_ES'
};

export function ogLocaleFor(key: PrivacyLocaleKey): string {
	return OG_LOCALE[key];
}
