import type { Locale } from '$lib/content';

export type NavItem = { label: string; href: string };

/** 헤더 주 내비게이션. 홈 앵커가 아니라 실제 페이지를 가리킨다. */
export const siteNav: Record<Locale, NavItem[]> = {
	ko: [
		{ label: '앱', href: '/apps/' },
		{ label: '고객지원', href: '/support/' },
		{ label: '법적 고지', href: '/legal/' }
	],
	en: [
		{ label: 'Apps', href: '/en/apps/' },
		{ label: 'Support', href: '/en/support/' },
		{ label: 'Legal', href: '/en/legal/' }
	]
};

export const homeHref = (locale: Locale) => (locale === 'ko' ? '/' : '/en/');

export const otherLocale = (locale: Locale): Locale => (locale === 'ko' ? 'en' : 'ko');

export const languageToggle: Record<Locale, { label: string; text: string }> = {
	ko: { label: 'Switch to English', text: 'EN' },
	en: { label: '한국어로 보기', text: 'KR' }
};
