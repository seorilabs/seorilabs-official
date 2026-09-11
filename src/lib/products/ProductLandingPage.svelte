<script lang="ts">
	import { ArrowLeft, Mail } from '@lucide/svelte';
	import { site, type Locale } from '$lib/content';
	import { shortName } from '$lib/products/derive';
	import { appLandings } from '$lib/products/landings';
	import { channelUrl } from '$lib/products/storeLinks';
	import type { Product } from '$lib/products/types';
	import { breadcrumbSchema, ORGANIZATION_ID } from '$lib/seo/jsonld';
	import { absoluteUrl, ogImage } from '$lib/seo/urls';
	import Seo from '$lib/seo/Seo.svelte';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';
	import StoreLinks from '$lib/ui/StoreLinks.svelte';
	import { homeHref } from '$lib/ui/nav';

	let { product, locale }: { product: Product; locale: Locale } = $props();

	const c = $derived(appLandings[product.slug][locale]);
	const prefix = $derived(locale === 'ko' ? '' : '/en');
	const path = $derived(`${prefix}/apps/${product.slug}/`);
	const otherPath = $derived(`${locale === 'ko' ? '/en' : ''}/apps/${product.slug}/`);
	const appsHref = $derived(`${prefix}/apps/`);
	const supportHref = $derived(`${prefix}/support/`);
	const privacyDoc = $derived(product.legal.find((doc) => doc.kind === 'privacy'));

	const installUrls = $derived(
		product.channels
			.map((channel) => channelUrl(channel))
			.filter((url): url is string => url !== null)
	);

	const appSchema = $derived({
		'@context': 'https://schema.org',
		'@type': ['SoftwareApplication', 'MobileApplication'],
		name: product.name[locale],
		description: product.description?.[locale],
		applicationCategory: c.applicationCategory,
		operatingSystem: c.operatingSystem,
		contentRating: c.contentRating,
		url: absoluteUrl(path),
		...(product.media.icon ? { image: absoluteUrl(product.media.icon) } : {}),
		...(installUrls.length > 0 ? { installUrl: installUrls } : {}),
		...(product.releasedOn ? { datePublished: product.releasedOn } : {}),
		publisher: { '@id': ORGANIZATION_ID },
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' }
	});

	const faqSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: c.faq.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a }
		}))
	});
</script>

<Seo
	title={c.metaTitle}
	description={c.metaDescription}
	{path}
	{locale}
	alternates={[
		{ hreflang: 'ko-KR', path: `/apps/${product.slug}/` },
		{ hreflang: 'en', path: `/en/apps/${product.slug}/` }
	]}
	xDefaultPath={`/apps/${product.slug}/`}
	image={product.media.ogImage ? ogImage(product.media.ogImage[locale], c.title) : undefined}
	jsonLd={[
		breadcrumbSchema([
			{ name: site.name, path: homeHref(locale) },
			{ name: locale === 'ko' ? '앱' : 'Apps', path: appsHref },
			{ name: product.name[locale], path }
		]),
		appSchema,
		faqSchema
	]}
/>

<div class="page">
	<SiteHeader {locale} otherLocalePath={otherPath} currentPath={path} />

	<main>
		<section class="hero">
			<a class="back" href={appsHref}>
				<ArrowLeft size={17} aria-hidden="true" />
				<span>{c.backLabel}</span>
			</a>
			<div class="hero-head">
				{#if product.media.icon}
					<img class="app-icon" src={product.media.icon} alt="" width="88" height="88" />
				{/if}
				<div>
					<p class="kicker">{c.kicker}</p>
					<h1>{c.title}</h1>
				</div>
			</div>
			<p class="lead">{c.lead}</p>
			<StoreLinks
				channels={product.channels}
				{locale}
				productName={shortName(product, locale)}
				size="large"
			/>
			<ul class="facts">
				{#each c.quickFacts as fact (fact)}
					<li>{fact}</li>
				{/each}
			</ul>
		</section>

		{#each c.sections as section (section.id)}
			<section class="section" id={section.id} aria-labelledby={`${section.id}-title`}>
				<h2 id={`${section.id}-title`}>
					{section.title}
					{#if section.kind === 'changelog'}<span class="version">{section.version}</span>{/if}
				</h2>

				{#if section.kind === 'prose'}
					{#each section.paragraphs as paragraph (paragraph)}
						<p class="prose">{paragraph}</p>
					{/each}
				{:else if section.kind === 'feature-list' || section.kind === 'audience'}
					<ul class="items" class:audience={section.kind === 'audience'}>
						{#each section.items as item (item.title)}
							<li>
								<strong>{item.title}</strong>
								<span>{item.body}</span>
							</li>
						{/each}
					</ul>
				{:else if section.kind === 'policy' || section.kind === 'changelog'}
					<ul class="bullets">
						{#each section.bullets as bullet (bullet)}
							<li>{bullet}</li>
						{/each}
					</ul>
				{/if}

				{#if section.kind !== 'policy' && section.kind !== 'changelog' && section.media}
					<div class="shots" class:single={section.media.length === 1}>
						{#each section.media as media (media.src)}
							<img
								src={media.src}
								alt={media.alt}
								width={media.width}
								height={media.height}
								loading="lazy"
								decoding="async"
							/>
						{/each}
					</div>
				{/if}
			</section>
		{/each}

		<section class="install" aria-labelledby="install-title">
			<h2 id="install-title">{c.installCtaTitle}</h2>
			<StoreLinks
				channels={product.channels}
				{locale}
				productName={shortName(product, locale)}
				size="large"
			/>
		</section>

		<section class="section" id="faq" aria-labelledby="faq-title">
			<h2 id="faq-title">{locale === 'ko' ? '자주 묻는 질문' : 'Frequently asked questions'}</h2>
			<dl class="faq">
				{#each c.faq as item (item.q)}
					<div>
						<dt>{item.q}</dt>
						<dd>{item.a}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="support" aria-labelledby="support-title">
			<h2 id="support-title">{c.support.title}</h2>
			<ul>
				{#if privacyDoc}
					<li><a href={privacyDoc.path[locale]}>{c.support.privacyLabel}</a></li>
				{/if}
				<li><a href={supportHref}>{c.support.supportLabel}</a></li>
				<li>
					<a href={`mailto:${site.email}`}>
						<Mail size={16} aria-hidden="true" />
						<span>{site.email}</span>
					</a>
				</li>
			</ul>
		</section>
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
		width: min(880px, calc(100% - 40px));
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

	.hero-head {
		display: flex;
		align-items: center;
		gap: 18px;
		margin-top: 26px;
	}

	.app-icon {
		width: 88px;
		height: 88px;
		border-radius: 20px;
		image-rendering: pixelated;
	}

	.kicker {
		margin: 0;
		color: var(--c-accent);
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h1 {
		margin: 8px 0 0;
		color: #10191e;
		font-size: 2.3rem;
		line-height: 1.16;
		word-break: keep-all;
	}

	.lead {
		margin: 20px 0 24px;
		max-width: 64ch;
		color: rgba(19, 32, 39, 0.78);
		font-size: 1.06rem;
		line-height: 1.78;
		word-break: keep-all;
	}

	.facts {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 22px 0 0;
		padding: 0;
		list-style: none;
	}

	.facts li {
		padding: 5px 12px;
		border-radius: 999px;
		background: var(--c-surface-alt);
		color: var(--c-accent-strong);
		font-size: 0.84rem;
		font-weight: 700;
	}

	.section {
		margin-top: 64px;
	}

	.section h2 {
		margin: 0;
		color: var(--c-text-strong);
		font-size: 1.54rem;
		line-height: 1.3;
		word-break: keep-all;
	}

	.version {
		margin-left: 8px;
		color: var(--c-muted);
		font-size: 0.94rem;
		font-weight: 700;
		font-variant-numeric: tabular-nums;
	}

	.prose {
		margin: 16px 0 0;
		max-width: 64ch;
		color: rgba(19, 32, 39, 0.78);
		line-height: 1.8;
		word-break: keep-all;
	}

	.items {
		display: grid;
		gap: 18px;
		margin: 24px 0 0;
		padding: 0;
		list-style: none;
	}

	.items.audience {
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	}

	.items li {
		display: grid;
		gap: 5px;
	}

	.items strong {
		color: var(--c-text-strong);
		font-size: 1rem;
	}

	.items span {
		max-width: 62ch;
		color: rgba(19, 32, 39, 0.72);
		line-height: 1.72;
		word-break: keep-all;
	}

	.bullets {
		margin: 22px 0 0;
		padding-left: 20px;
		max-width: 66ch;
		color: rgba(19, 32, 39, 0.78);
		line-height: 1.8;
	}

	.bullets li {
		margin-bottom: 10px;
		word-break: keep-all;
	}

	.shots {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 270px));
		gap: 16px;
		margin-top: 28px;
	}

	.shots img {
		width: 100%;
		height: auto;
		border: 1px solid rgba(19, 32, 39, 0.1);
		border-radius: var(--r-sm);
		background: #fff;
		image-rendering: pixelated;
	}

	.install {
		margin-top: 64px;
		padding: 32px;
		border-radius: var(--r-sm);
		background: var(--c-surface-alt);
	}

	.install h2 {
		margin: 0 0 20px;
		color: var(--c-text-strong);
		font-size: 1.4rem;
		word-break: keep-all;
	}

	.faq {
		margin: 26px 0 0;
		border-top: 1px solid rgba(19, 32, 39, 0.1);
	}

	.faq div {
		padding: 18px 0;
		border-bottom: 1px solid rgba(19, 32, 39, 0.1);
	}

	.faq dt {
		color: var(--c-text-strong);
		font-weight: 700;
		word-break: keep-all;
	}

	.faq dd {
		margin: 8px 0 0;
		max-width: 66ch;
		color: rgba(19, 32, 39, 0.74);
		line-height: 1.75;
		word-break: keep-all;
	}

	.support {
		margin-top: 56px;
	}

	.support h2 {
		margin: 0;
		color: var(--c-text-strong);
		font-size: 1.2rem;
	}

	.support ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin: 16px 0 0;
		padding: 0;
		list-style: none;
	}

	.support a {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--c-accent);
		font-weight: 700;
	}

	.support a:hover {
		color: var(--c-accent-strong);
	}

	@media (max-width: 720px) {
		main {
			width: calc(100% - 32px);
		}

		h1 {
			font-size: 1.8rem;
		}

		.hero-head {
			gap: 14px;
		}

		.app-icon {
			width: 66px;
			height: 66px;
			border-radius: 16px;
		}

		.install {
			padding: 24px 20px;
		}

		.shots {
			grid-template-columns: 1fr;
			max-width: 300px;
		}
	}
</style>
