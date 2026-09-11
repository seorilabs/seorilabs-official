import { privacyLocales, privacyPath, type Locale } from '$lib/content';

/**
 * 제품에 속하지 않는 회사 공통 법무 문서.
 * 화면 표시용 lastUpdated는 각 콘텐츠 파일에 있고, 여기 updated는
 * sitemap lastmod 전용 ISO 값이다.
 */
export type GlobalLegalDoc = {
	id: 'privacy' | 'terms' | 'support';
	label: Record<Locale, string>;
	/** 문서가 제공되는 모든 경로. hreflang 코드를 키로 쓴다. */
	paths: Array<{ hreflang: string; path: string }>;
	updated: string;
};

export const globalLegalDocs: GlobalLegalDoc[] = [
	{
		id: 'privacy',
		label: { ko: '개인정보 처리방침', en: 'Privacy Policy' },
		paths: privacyLocales.map((locale) => ({
			hreflang: locale.hreflang,
			path: privacyPath(locale.urlPrefix)
		})),
		updated: '2026-07-19'
	},
	{
		id: 'terms',
		label: { ko: '이용약관', en: 'Terms of Service' },
		paths: [
			{ hreflang: 'ko-KR', path: '/terms/' },
			{ hreflang: 'en', path: '/en/terms/' }
		],
		updated: '2026-05-16'
	},
	{
		id: 'support',
		label: { ko: '고객지원', en: 'Support' },
		paths: [
			{ hreflang: 'ko-KR', path: '/support/' },
			{ hreflang: 'en', path: '/en/support/' }
		],
		updated: '2026-05-16'
	}
];

export const LEGAL_DOC_KIND_LABEL: Record<string, Record<Locale, string>> = {
	privacy: { ko: '개인정보 처리방침', en: 'Privacy Policy' },
	terms: { ko: '이용약관', en: 'Terms of Service' },
	'account-deletion': { ko: '계정·데이터 삭제', en: 'Account & Data Deletion' }
};
