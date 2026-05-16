import { content, site, type Locale } from '$lib/content';

export const prerender = true;

const pages: Array<{ locale: Locale; path: string }> = [
	{ locale: 'ko', path: '/' },
	{ locale: 'en', path: '/en/' }
];

export function GET() {
	const updated = new Date().toISOString();
	const urls = pages
		.map(({ locale, path }) => {
			const canonical = `${site.url}${path === '/' ? '/' : path}`;
			const alternates = pages
				.map(
					(page) =>
						`<xhtml:link rel="alternate" hreflang="${content[page.locale].hreflang}" href="${site.url}${page.path === '/' ? '/' : page.path}" />`
				)
				.join('');

			return `<url><loc>${canonical}</loc>${alternates}<lastmod>${updated}</lastmod><changefreq>monthly</changefreq><priority>${locale === 'ko' ? '1.0' : '0.8'}</priority></url>`;
		})
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
