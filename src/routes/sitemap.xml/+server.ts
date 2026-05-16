import { content, site, type Locale } from '$lib/content';

export const prerender = true;

const pageGroups: Array<{ priority: string; pages: Array<{ locale: Locale; path: string }> }> = [
	{
		priority: '1.0',
		pages: [
			{ locale: 'ko', path: '/' },
			{ locale: 'en', path: '/en/' }
		]
	},
	{
		priority: '0.7',
		pages: [
			{ locale: 'ko', path: '/privacy/' },
			{ locale: 'en', path: '/en/privacy/' }
		]
	},
	{
		priority: '0.7',
		pages: [
			{ locale: 'ko', path: '/terms/' },
			{ locale: 'en', path: '/en/terms/' }
		]
	},
	{
		priority: '0.7',
		pages: [
			{ locale: 'ko', path: '/support/' },
			{ locale: 'en', path: '/en/support/' }
		]
	}
];

export function GET() {
	const updated = new Date().toISOString();
	const urls = pageGroups
		.flatMap((group) =>
			group.pages.map(({ path }) => {
				const canonical = `${site.url}${path === '/' ? '/' : path}`;
				const alternates = group.pages
					.map(
						(page) =>
							`<xhtml:link rel="alternate" hreflang="${content[page.locale].hreflang}" href="${site.url}${page.path === '/' ? '/' : page.path}" />`
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
