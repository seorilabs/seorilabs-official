<script lang="ts">
	import { ArrowUpRight, Compass, Mail } from '@lucide/svelte';
	import { content, site, type Locale } from '$lib/content';
	import { liveProducts, liveStats } from '$lib/products/derive';
	import { organizationSchema, webSiteSchema } from '$lib/seo/jsonld';
	import Seo from '$lib/seo/Seo.svelte';
	import { ogImage } from '$lib/seo/urls';
	import ProductCard from '$lib/ui/ProductCard.svelte';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';

	export let locale: Locale;

	const c = content[locale];
	const homePath = locale === 'ko' ? '/' : '/en/';
	const otherPath = locale === 'ko' ? '/en/' : '/';
	const appsHref = locale === 'ko' ? '/apps/' : '/en/apps/';
	const mailHref = `mailto:${site.email}`;

	// 개수는 원장에서 센다. 앱이 늘거나 내려가도 문구가 틀리지 않는다.
	const proofs = [
		{ value: String(liveStats.total), label: c.studio.proofLabels.products },
		{ value: String(liveStats.games), label: c.studio.proofLabels.games },
		{ value: String(liveStats.channels), label: c.studio.proofLabels.channels }
	];
</script>

<Seo
	title={c.metaTitle}
	description={c.metaDescription}
	path={homePath}
	{locale}
	alternates={[
		{ hreflang: 'ko-KR', path: '/' },
		{ hreflang: 'en', path: '/en/' }
	]}
	xDefaultPath="/"
	image={ogImage(
		locale === 'ko' ? '/og/home-1200x630.png' : '/og/home-en-1200x630.png',
		c.metaTitle
	)}
	jsonLd={[organizationSchema(), webSiteSchema(c.hreflang)]}
/>

<div class="page">
	<SiteHeader {locale} otherLocalePath={otherPath} currentPath={homePath} />

	<main>
		<section class="hero" aria-labelledby="hero-title">
			<p class="eyebrow">{c.hero.eyebrow}</p>
			<h1 id="hero-title">{c.hero.title}</h1>
			<p class="lead">{c.hero.lead}</p>
			<div class="actions">
				<a class="button primary" href={appsHref}>
					<Compass size={18} aria-hidden="true" />
					<span>{c.hero.primaryCta}</span>
				</a>
				<a class="button secondary" href="#support">
					<Mail size={18} aria-hidden="true" />
					<span>{c.hero.secondaryCta}</span>
				</a>
			</div>
			<ul class="keywords" aria-label={locale === 'ko' ? '출시 마켓' : 'Stores'}>
				{#each c.hero.keywords as keyword}
					<li>{keyword}</li>
				{/each}
			</ul>
		</section>

		<section class="section products" id="apps" aria-labelledby="products-title">
			<div class="section-head">
				<p class="kicker">{c.products.kicker}</p>
				<h2 id="products-title">{c.products.title}</h2>
				<p>{c.products.body}</p>
			</div>
			<div class="product-grid">
				{#each liveProducts as product (product.slug)}
					<ProductCard {product} {locale} />
				{/each}
			</div>
			<a class="section-cta" href={appsHref}>{c.products.cta} →</a>
		</section>

		<section class="section how" id="how" aria-labelledby="how-title">
			<div class="section-head narrow">
				<p class="kicker light">{c.how.kicker}</p>
				<h2 id="how-title">{c.how.title}</h2>
			</div>
			<div class="how-list">
				{#each c.how.items as item, index (item.title)}
					<article>
						<span class="index">{String(index + 1).padStart(2, '0')}</span>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="section studio" id="studio" aria-labelledby="studio-title">
			<div class="studio-inner">
				<div>
					<p class="kicker">{c.studio.kicker}</p>
					<h2 id="studio-title">{c.studio.title}</h2>
				</div>
				<div>
					<p class="studio-body">{c.studio.body}</p>
					<div class="proofs">
						{#each proofs as proof (proof.label)}
							<div>
								<strong>{proof.value}</strong>
								<span>{proof.label}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section class="support" id="support" aria-labelledby="support-title">
			<div class="support-inner">
				<div>
					<p class="kicker">{c.support.kicker}</p>
					<h2 id="support-title">{c.support.title}</h2>
					<p class="support-body">{c.support.body}</p>
					<nav class="support-links" aria-label={c.support.kicker}>
						{#each c.support.links as link (link.href)}
							<a href={link.href}>{link.label}</a>
						{/each}
					</nav>
				</div>
				<a class="button contact" href={mailHref}>
					<Mail size={19} aria-hidden="true" />
					<span>{c.support.cta}</span>
					<ArrowUpRight size={18} aria-hidden="true" />
				</a>
			</div>
		</section>
	</main>

	<SiteFooter {locale} tagline={c.footer.tagline} />
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
	}

	.hero {
		width: min(var(--container), calc(100% - 40px));
		margin: 0 auto;
		padding: 72px 0 88px;
	}

	.eyebrow {
		margin: 0;
		color: var(--c-accent);
		font-size: 0.86rem;
		font-weight: 800;
		letter-spacing: 0.04em;
	}

	h1 {
		margin: 18px 0 0;
		max-width: 18ch;
		color: #10191e;
		font-size: 3.6rem;
		line-height: 1.14;
		letter-spacing: -0.01em;
		word-break: keep-all;
	}

	.lead {
		margin: 24px 0 0;
		max-width: 56ch;
		color: rgba(19, 32, 39, 0.76);
		font-size: 1.12rem;
		line-height: 1.78;
		word-break: keep-all;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 32px;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		min-height: 50px;
		padding: 0 22px;
		border-radius: var(--r-sm);
		font-weight: 700;
	}

	.primary {
		background: var(--c-ink);
		color: #fff;
	}

	.primary:hover {
		background: var(--c-accent-strong);
	}

	.secondary {
		border: 1px solid rgba(19, 32, 39, 0.18);
		background: #fff;
		color: var(--c-text-strong);
	}

	.secondary:hover {
		border-color: var(--c-accent);
		color: var(--c-accent);
	}

	.keywords {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 28px 0 0;
		padding: 0;
		list-style: none;
	}

	.keywords li {
		padding: 5px 12px;
		border-radius: 999px;
		background: var(--c-surface-alt);
		color: var(--c-accent-strong);
		font-size: 0.84rem;
		font-weight: 700;
	}

	.section {
		padding: 84px 0;
	}

	.section-head,
	.product-grid,
	.how-list,
	.studio-inner,
	.support-inner {
		width: min(var(--container), calc(100% - 40px));
		margin: 0 auto;
	}

	.section-head.narrow {
		max-width: 720px;
		margin-left: auto;
		margin-right: auto;
	}

	.kicker {
		margin: 0;
		color: var(--c-accent);
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.kicker.light {
		color: var(--c-accent-light);
	}

	.section-head h2 {
		margin: 12px 0 0;
		max-width: 20ch;
		color: var(--c-text-strong);
		font-size: 2.3rem;
		line-height: 1.2;
		word-break: keep-all;
	}

	.section-head p:not(.kicker) {
		margin: 16px 0 0;
		max-width: 58ch;
		color: rgba(19, 32, 39, 0.72);
		line-height: 1.75;
		word-break: keep-all;
	}

	.products {
		background: linear-gradient(180deg, var(--c-surface-alt), var(--c-surface));
	}

	.product-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 16px;
		margin-top: 40px;
	}

	.section-cta {
		display: block;
		width: min(var(--container), calc(100% - 40px));
		margin: 28px auto 0;
		color: var(--c-accent);
		font-weight: 800;
	}

	.how {
		background: #111c22;
		color: rgba(255, 255, 255, 0.78);
	}

	.how .section-head h2 {
		color: #fff;
	}

	.how-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0;
		margin-top: 44px;
		border-top: 1px solid rgba(255, 255, 255, 0.14);
	}

	.how-list article {
		padding: 32px 28px 32px 0;
		border-right: 1px solid rgba(255, 255, 255, 0.14);
	}

	.how-list article:last-child {
		border-right: 0;
	}

	.how-list article:not(:first-child) {
		padding-left: 28px;
	}

	.index {
		color: var(--c-accent-light);
		font-size: 0.9rem;
		font-weight: 800;
		font-variant-numeric: tabular-nums;
	}

	.how-list h3 {
		margin: 14px 0 10px;
		color: #fff;
		font-size: 1.12rem;
		word-break: keep-all;
	}

	.how-list p {
		margin: 0;
		line-height: 1.75;
		word-break: keep-all;
	}

	.studio-inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
		gap: 48px;
	}

	.studio h2 {
		margin: 12px 0 0;
		color: var(--c-text-strong);
		font-size: 2.1rem;
		line-height: 1.24;
		word-break: keep-all;
	}

	.studio-body {
		margin: 0;
		color: rgba(19, 32, 39, 0.76);
		font-size: 1.04rem;
		line-height: 1.8;
		word-break: keep-all;
	}

	.proofs {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		margin-top: 32px;
		padding-top: 26px;
		border-top: 1px solid rgba(19, 32, 39, 0.12);
	}

	.proofs strong {
		display: block;
		color: var(--c-accent);
		font-size: 2rem;
		font-variant-numeric: tabular-nums;
		line-height: 1;
	}

	.proofs span {
		display: block;
		margin-top: 8px;
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.9rem;
	}

	.support {
		padding: 76px 0;
		background: linear-gradient(120deg, #dff0ef, #f9f4e8);
	}

	.support-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}

	.support h2 {
		margin: 12px 0 0;
		max-width: 22ch;
		color: var(--c-text-strong);
		font-size: 2rem;
		line-height: 1.24;
		word-break: keep-all;
	}

	.support-body {
		margin: 16px 0 0;
		max-width: 56ch;
		color: rgba(19, 32, 39, 0.74);
		line-height: 1.75;
		word-break: keep-all;
	}

	.support-links {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
		margin-top: 20px;
		font-weight: 700;
	}

	.support-links a {
		color: var(--c-accent);
	}

	.support-links a:hover {
		color: var(--c-accent-strong);
	}

	.contact {
		min-width: 260px;
		background: var(--c-ink);
		color: #fff;
	}

	.contact:hover {
		background: var(--c-accent-strong);
	}

	@media (max-width: 980px) {
		h1 {
			font-size: 2.8rem;
		}

		.how-list {
			grid-template-columns: 1fr;
		}

		.how-list article,
		.how-list article:not(:first-child) {
			padding: 26px 0;
			border-right: 0;
			border-bottom: 1px solid rgba(255, 255, 255, 0.14);
		}

		.how-list article:last-child {
			border-bottom: 0;
		}

		.studio-inner {
			grid-template-columns: 1fr;
			gap: 28px;
		}
	}

	@media (max-width: 720px) {
		.hero,
		.section-head,
		.product-grid,
		.how-list,
		.studio-inner,
		.support-inner,
		.section-cta {
			width: calc(100% - 32px);
		}

		.hero {
			padding: 48px 0 64px;
		}

		h1 {
			font-size: 2.05rem;
		}

		.lead {
			font-size: 1.02rem;
		}

		.section,
		.support {
			padding: 60px 0;
		}

		.section-head h2 {
			font-size: 1.7rem;
		}

		.studio h2,
		.support h2 {
			font-size: 1.6rem;
		}

		.button {
			width: 100%;
		}

		.product-grid {
			grid-template-columns: 1fr;
		}

		.proofs {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.proofs strong {
			font-size: 1.6rem;
		}

		.contact {
			width: 100%;
			min-width: 0;
		}
	}
</style>
