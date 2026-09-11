import { site } from '$lib/content';
import { absoluteUrl } from '$lib/seo/urls';

export const ORGANIZATION_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

// 공개 개발자 페이지. Organization을 스토어 계정과 연결한다.
const STORE_PROFILES = [
	'https://play.google.com/store/apps/dev?id=5851687664284043768',
	'https://apps.apple.com/kr/developer/seori-labs/id994468959'
];

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': ORGANIZATION_ID,
		name: site.name,
		alternateName: '서리랩스',
		url: `${site.url}/`,
		logo: absoluteUrl('/brand/seori-labs-logo.svg'),
		email: site.email,
		sameAs: STORE_PROFILES
	};
}

export function webSiteSchema(inLanguage: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': WEBSITE_ID,
		name: site.name,
		url: `${site.url}/`,
		inLanguage,
		publisher: { '@id': ORGANIZATION_ID }
	};
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path)
		}))
	};
}
