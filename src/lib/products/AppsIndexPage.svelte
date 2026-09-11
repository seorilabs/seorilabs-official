<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';
	import { site, type Locale } from '$lib/content';
	import { appsIndexContent } from '$lib/products/appsIndexContent';
	import { liveProducts, upcomingProducts } from '$lib/products/derive';
	import { breadcrumbSchema } from '$lib/seo/jsonld';
	import { absoluteUrl, ogImage } from '$lib/seo/urls';
	import Seo from '$lib/seo/Seo.svelte';
	import ProductCard from '$lib/ui/ProductCard.svelte';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';
	import { homeHref } from '$lib/ui/nav';

	let { locale }: { locale: Locale } = $props();

	const c = $derived(appsIndexContent[locale]);
	const path = $derived(locale === 'ko' ? '/apps/' : '/en/apps/');
	const otherPath = $derived(locale === 'ko' ? '/en/apps/' : '/apps/');

	const itemList = $derived({
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: c.title,
		itemListElement: liveProducts.map((product, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: product.name[locale],
			...(product.hasLanding
				? { url: absoluteUrl(`${locale === 'ko' ? '' : '/en'}/apps/${product.slug}/`) }
				: {})
		}))
	});
</script>

<Seo
	title={c.metaTitle}
	description={c.metaDescription}
	{path}
	{locale}
	alternates={[
		{ hreflang: 'ko-KR', path: '/apps/' },
		{ hreflang: 'en', path: '/en/apps/' }
	]}
	xDefaultPath="/apps/"
	image={ogImage(locale === 'ko' ? '/og/apps-1200x630.png' : '/og/apps-en-1200x630.png', c.title)}
	jsonLd={[
		breadcrumbSchema([
			{ name: site.name, path: homeHref(locale) },
			{ name: c.title, path }
		]),
		itemList
	]}
/>

<div class="page">
	<SiteHeader {locale} otherLocalePath={otherPath} currentPath={path} />

	<main>
		<section class="hero">
			<a class="back" href={homeHref(locale)}>
				<ArrowLeft size={17} aria-hidden="true" />
				<span>{c.backLabel}</span>
			</a>
			<p class="kicker">{c.kicker}</p>
			<h1>{c.title}</h1>
			<p class="intro">{c.intro}</p>
		</section>

		<section class="grid" aria-label={c.title}>
			{#each liveProducts as product (product.slug)}
				<ProductCard {product} {locale} />
			{/each}
		</section>

		{#if upcomingProducts.length > 0}
			<section class="upcoming" aria-labelledby="upcoming-title">
				<h2 id="upcoming-title">{c.upcomingHeading}</h2>
				<p class="upcoming-note">{c.upcomingNote}</p>
				<ul>
					{#each upcomingProducts as product (product.slug)}
						<li>
							<strong>{product.name[locale]}</strong>
							<span>{product.tagline[locale]}</span>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</main>

	<SiteFooter {locale} tagline={c.tagline} />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100svh;
		background: var(--c-surface);
	}

	main {
		flex: 1;
		width: min(var(--container), calc(100% - 40px));
		margin: 0 auto;
		padding: 24px 0 72px;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--c-accent);
		font-size: 0.9rem;
		font-weight: 700;
	}

	.kicker {
		margin: 26px 0 0;
		color: var(--c-accent);
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 10px 0 0;
		color: #10191e;
		font-size: 2.6rem;
		line-height: 1.12;
		word-break: keep-all;
	}

	.intro {
		margin: 16px 0 0;
		max-width: 62ch;
		color: rgba(19, 32, 39, 0.76);
		line-height: 1.75;
		word-break: keep-all;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 18px;
		margin-top: 44px;
	}

	.upcoming {
		margin-top: 64px;
		padding-top: 40px;
		border-top: 1px solid rgba(19, 32, 39, 0.12);
	}

	.upcoming h2 {
		margin: 0;
		color: var(--c-text-strong);
		font-size: 1.3rem;
	}

	.upcoming-note {
		margin: 10px 0 0;
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.94rem;
		line-height: 1.7;
		word-break: keep-all;
	}

	.upcoming ul {
		margin: 22px 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 14px;
	}

	.upcoming li {
		display: grid;
		gap: 4px;
	}

	.upcoming strong {
		color: var(--c-text-strong);
	}

	.upcoming span {
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.92rem;
		line-height: 1.6;
		word-break: keep-all;
	}

	@media (max-width: 720px) {
		main {
			width: calc(100% - 32px);
		}

		h1 {
			font-size: 1.9rem;
		}

		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
