import { content, site, privacyLocales, privacyPath } from '$lib/content';

export const prerender = true;

type SitemapPage = { path: string; hreflang: string };

const pageGroups: Array<{ priority: string; pages: SitemapPage[] }> = [
	{
		priority: '1.0',
		pages: [
			{ path: '/', hreflang: content.ko.hreflang },
			{ path: '/en/', hreflang: content.en.hreflang }
		]
	},
	{
		// privacy는 다국어(ko/en + ja/zh/zh-tw/de/fr/es)를 제공한다.
		priority: '0.7',
		pages: privacyLocales.map((l) => ({ path: privacyPath(l.urlPrefix), hreflang: l.hreflang }))
	},
	{
		// 앱별 개인정보 처리방침(함께봄 / BabyNest).
		priority: '0.6',
		pages: [{ path: '/babycare/privacy/', hreflang: content.ko.hreflang }]
	},
	{
		priority: '0.7',
		pages: [
			{ path: '/terms/', hreflang: content.ko.hreflang },
			{ path: '/en/terms/', hreflang: content.en.hreflang }
		]
	},
	{
		priority: '0.7',
		pages: [
			{ path: '/support/', hreflang: content.ko.hreflang },
			{ path: '/en/support/', hreflang: content.en.hreflang }
		]
	}
];

export function GET() {
	const updated = new Date().toISOString();
	const urls = pageGroups
		.flatMap((group) =>
			group.pages.map(({ path }) => {
				const canonical = `${site.url}${path}`;
				const alternates = group.pages
					.map(
						(page) =>
							`<xhtml:link rel="alternate" hreflang="${page.hreflang}" href="${site.url}${page.path}" />`
					)
					.join('');

				return `<url><loc>${canonical}</loc>${alternates}<lastmod>${updated}</lastmod><changefreq>monthly</changefreq><priority>${group.priority}</priority></url>`;
			})
		)
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
		{
			headers: {
				'content-type': 'application/xml; charset=utf-8'
			}
		}
	);
}
