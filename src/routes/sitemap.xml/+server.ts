import { content, site, type Locale } from '$lib/content';
import { globalLegalDocs } from '$lib/legal/docs';
import { landingProducts, liveProducts, productLegalDocs } from '$lib/products/derive';
import { products } from '$lib/products/registry';

export const prerender = true;

type SitemapPage = { path: string; hreflang: string };
type SitemapGroup = { priority: string; lastmod: string; pages: SitemapPage[] };

const HREFLANG: Record<Locale, string> = {
	ko: content.ko.hreflang,
	en: content.en.hreflang
};

/** ko/en 한 쌍으로 제공되는 페이지. */
const pair = (koPath: string, enPath: string): SitemapPage[] => [
	{ path: koPath, hreflang: HREFLANG.ko },
	{ path: enPath, hreflang: HREFLANG.en }
];

/**
 * 콘텐츠가 바뀌지 않았는데 lastmod가 갱신되면 크롤러 신뢰도만 떨어진다.
 * 원장과 문서 메타에 적어 둔 ISO 날짜를 쓰고, 빌드 시각은 쓰지 않는다.
 */
const SITE_PAGES_UPDATED = '2026-09-11';

/** 둘 중 나중 날짜. 전부 ISO 날짜라 사전순 비교가 곧 날짜 비교다. */
const latest = (...dates: string[]): string => dates.reduce((a, b) => (a > b ? a : b));

/**
 * 목록 페이지는 원장에서 그려진다. 홈과 /apps/는 제품 카드를, /legal/은 문서 목록을
 * 읽는다. 그래서 원장이 바뀌면 이 페이지들의 내용도 같이 바뀐다.
 *
 * 위 상수 하나로 손수 관리하면 제품을 추가한 날 갱신을 잊고, 바뀐 페이지가
 * 'SITE_PAGES_UPDATED 이후로 그대로'라고 크롤러에 알리게 된다. 실제로 루시드
 * 리버시를 추가했을 때 이 여섯 페이지의 lastmod가 11일에 멈춰 있었다.
 * 상수는 원장과 무관한 문구나 구조를 고쳤을 때의 하한으로만 남긴다.
 */
const HOME_UPDATED = latest(
	SITE_PAGES_UPDATED,
	...liveProducts.map((product) => product.updatedOn)
);
const APPS_UPDATED = latest(SITE_PAGES_UPDATED, ...products.map((product) => product.updatedOn));
const LEGAL_INDEX_UPDATED = latest(
	SITE_PAGES_UPDATED,
	...globalLegalDocs.map((doc) => doc.updated),
	// legacyAnchor 문서도 인덱스에 줄이 하나 생기므로 productLegalDocs가 아니라 원장을 본다.
	...products.flatMap((product) => product.legal.map((doc) => doc.updated))
);

const groups: SitemapGroup[] = [
	{ priority: '1.0', lastmod: HOME_UPDATED, pages: pair('/', '/en/') },
	{ priority: '0.9', lastmod: APPS_UPDATED, pages: pair('/apps/', '/en/apps/') },
	{ priority: '0.5', lastmod: LEGAL_INDEX_UPDATED, pages: pair('/legal/', '/en/legal/') },

	// 제품 랜딩 페이지.
	...landingProducts.map((product) => ({
		priority: '0.9',
		lastmod: product.updatedOn,
		pages: pair(`/apps/${product.slug}/`, `/en/apps/${product.slug}/`)
	})),

	// 회사 공통 법무 문서. 개인정보처리방침은 8개 언어를 한 그룹으로 묶는다.
	...globalLegalDocs.map((doc) => ({
		priority: '0.5',
		lastmod: doc.updated,
		pages: doc.paths
	})),

	// 제품별 법무 문서. 원장에서 파생되므로 새 제품을 추가해도 누락되지 않는다.
	...productLegalDocs.map(({ doc }) => ({
		priority: '0.5',
		lastmod: doc.updated,
		pages: pair(doc.path.ko, doc.path.en)
	}))
];

export function GET() {
	const seen = new Set<string>();
	const urls: string[] = [];

	for (const group of groups) {
		const alternates = group.pages
			.map(
				(page) =>
					`<xhtml:link rel="alternate" hreflang="${page.hreflang}" href="${site.url}${page.path}" />`
			)
			.join('');

		for (const page of group.pages) {
			if (seen.has(page.path)) continue;
			seen.add(page.path);
			urls.push(
				`<url><loc>${site.url}${page.path}</loc>${alternates}` +
					`<lastmod>${group.lastmod}</lastmod><changefreq>monthly</changefreq>` +
					`<priority>${group.priority}</priority></url>`
			);
		}
	}

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`,
		{ headers: { 'content-type': 'application/xml; charset=utf-8' } }
	);
}
