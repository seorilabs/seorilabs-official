<script lang="ts">
	import { ArrowLeft, Mail } from '@lucide/svelte';
	import { privacyLocales, site, type Locale } from '$lib/content';
	import { globalLegalDocs, LEGAL_DOC_KIND_LABEL } from '$lib/legal/docs';
	import { legalIndexContent } from '$lib/legal/legalIndexContent';
	import { products } from '$lib/products/registry';
	import { breadcrumbSchema } from '$lib/seo/jsonld';
	import Seo from '$lib/seo/Seo.svelte';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';
	import { homeHref } from '$lib/ui/nav';

	let { locale }: { locale: Locale } = $props();

	const c = $derived(legalIndexContent[locale]);
	const path = $derived(locale === 'ko' ? '/legal/' : '/en/legal/');
	const otherPath = $derived(locale === 'ko' ? '/en/legal/' : '/legal/');

	const nativeLabel = new Map(privacyLocales.map((meta) => [meta.hreflang, meta.nativeLabel]));

	// 문서를 보유한 제품만 노출한다. 출시 전 제품도 방침은 이미 심사에 쓰이고 있다.
	const documented = products
		.filter((product) => product.legal.length > 0)
		.sort((a, b) => a.order - b.order);
</script>

<Seo
	title={c.metaTitle}
	description={c.metaDescription}
	{path}
	{locale}
	alternates={[
		{ hreflang: 'ko-KR', path: '/legal/' },
		{ hreflang: 'en', path: '/en/legal/' }
	]}
	xDefaultPath="/legal/"
	jsonLd={[
		breadcrumbSchema([
			{ name: site.name, path: homeHref(locale) },
			{ name: c.title, path }
		])
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

		<section class="group" aria-labelledby="global-docs">
			<h2 id="global-docs">{c.globalHeading}</h2>
			<ul class="doc-list">
				{#each globalLegalDocs as doc (doc.id)}
					<li>
						<div class="doc-name">{doc.label[locale]}</div>
						<div class="doc-links">
							{#each doc.paths as target (target.path)}
								<a href={target.path}>{nativeLabel.get(target.hreflang) ?? target.hreflang}</a>
							{/each}
						</div>
						<div class="doc-date">{c.updatedLabel} {doc.updated}</div>
					</li>
				{/each}
			</ul>
		</section>

		<section class="group" aria-labelledby="product-docs">
			<h2 id="product-docs">{c.productHeading}</h2>
			<p class="group-note">{c.productNote}</p>
			{#each documented as product (product.slug)}
				<article class="product">
					<h3>{product.name[locale]}</h3>
					<ul class="doc-list">
						{#each product.legal as doc (doc.kind)}
							<li>
								<div class="doc-name">{LEGAL_DOC_KIND_LABEL[doc.kind][locale]}</div>
								<div class="doc-links">
									{#if doc.legacyAnchor}
										<a href={`${doc.legacyAnchor.path}#${doc.legacyAnchor.id}`}>
											{locale === 'ko' ? '방침 내 해당 항목' : 'Section in the policy'}
										</a>
									{:else}
										<a href={doc.path.ko}>한국어</a>
										<a href={doc.path.en}>English</a>
									{/if}
								</div>
								<div class="doc-date">{c.updatedLabel} {doc.updated}</div>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</section>

		<section class="contact">
			<p>
				{locale === 'ko'
					? '문서 내용이나 개인정보 열람·삭제 요청은 아래 주소로 보내주세요.'
					: 'Questions about these documents, or access and deletion requests, go to the address below.'}
			</p>
			<a href={`mailto:${site.email}`}>
				<Mail size={18} aria-hidden="true" />
				<span>{site.email}</span>
			</a>
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
		width: min(860px, calc(100% - 40px));
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

	.group {
		margin-top: 56px;
	}

	.group h2 {
		margin: 0;
		color: var(--c-text-strong);
		font-size: 1.34rem;
	}

	.group-note {
		margin: 10px 0 0;
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.94rem;
		line-height: 1.7;
		word-break: keep-all;
	}

	.product {
		margin-top: 30px;
	}

	.product h3 {
		margin: 0 0 10px;
		color: var(--c-text-strong);
		font-size: 1.02rem;
		word-break: keep-all;
	}

	.doc-list {
		margin: 16px 0 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid rgba(19, 32, 39, 0.1);
	}

	.doc-list li {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto auto;
		align-items: center;
		gap: 16px;
		padding: 14px 0;
		border-bottom: 1px solid rgba(19, 32, 39, 0.1);
	}

	.doc-name {
		color: var(--c-text-strong);
		font-weight: 700;
		word-break: keep-all;
	}

	.doc-links {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		font-size: 0.9rem;
		font-weight: 700;
	}

	.doc-links a {
		color: var(--c-accent);
	}

	.doc-links a:hover {
		color: var(--c-accent-strong);
	}

	.doc-date {
		color: rgba(19, 32, 39, 0.54);
		font-size: 0.84rem;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}

	.contact {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-top: 56px;
		padding: 24px;
		border-radius: var(--r-sm);
		background: var(--c-surface-alt);
	}

	.contact p {
		margin: 0;
		max-width: 52ch;
		color: rgba(19, 32, 39, 0.76);
		line-height: 1.7;
		word-break: keep-all;
	}

	.contact a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--c-accent);
		font-weight: 800;
	}

	@media (max-width: 720px) {
		main {
			width: calc(100% - 32px);
		}

		h1 {
			font-size: 1.9rem;
		}

		.doc-list li {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.doc-date {
			font-size: 0.8rem;
		}
	}
</style>
