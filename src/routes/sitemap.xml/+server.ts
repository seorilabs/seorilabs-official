import { content, site, type Locale } from '$lib/content';
import { globalLegalDocs } from '$lib/legal/docs';
import { landingProducts, productLegalDocs } from '$lib/products/derive';

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

const groups: SitemapGroup[] = [
	{ priority: '1.0', lastmod: SITE_PAGES_UPDATED, pages: pair('/', '/en/') },
	{ priority: '0.9', lastmod: SITE_PAGES_UPDATED, pages: pair('/apps/', '/en/apps/') },
	{ priority: '0.5', lastmod: SITE_PAGES_UPDATED, pages: pair('/legal/', '/en/legal/') },

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
