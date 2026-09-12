<script lang="ts">
	import { ArrowLeft, Globe2, Mail } from '@lucide/svelte';
	import { trackContactClick } from '$lib/analytics';
	import { privacyLocales, privacyPath, site, type PrivacyLocaleKey } from '$lib/content';
	import type { LegalDocContent } from '$lib/legal/types';
	import { productBySlug } from '$lib/products/derive';
	import type { LegalDocKind } from '$lib/products/types';
	import { breadcrumbSchema } from '$lib/seo/jsonld';
	import Seo from '$lib/seo/Seo.svelte';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';
	import { homeHref } from '$lib/ui/nav';

	let {
		content,
		locale,
		docKind,
		/** 제품 문서일 때의 slug. 경로와 breadcrumb을 원장에서 가져온다. */
		productSlug = undefined,
		contactHref = undefined
	}: {
		content: LegalDocContent;
		locale: PrivacyLocaleKey;
		docKind: LegalDocKind | 'support';
		productSlug?: string;
		contactHref?: string;
	} = $props();

	const product = $derived(productSlug ? productBySlug(productSlug) : undefined);

	/**
	 * 이 문서가 제공되는 로케일과 경로.
	 * 제품 문서는 원장에서, 회사 공통 개인정보처리방침은 8개 언어, 나머지는 ko/en이다.
	 */
	const localePaths = $derived.by((): Array<{ key: PrivacyLocaleKey; path: string }> => {
		if (product) {
			const doc = product.legal.find((entry) => entry.kind === docKind);
			if (!doc) return [];
			return [
				{ key: 'ko', path: doc.path.ko },
				{ key: 'en', path: doc.path.en }
			];
		}
		if (docKind === 'privacy') {
			return privacyLocales.map((meta) => ({ key: meta.key, path: privacyPath(meta.urlPrefix) }));
		}
		return [
			{ key: 'ko', path: `/${docKind}/` },
			{ key: 'en', path: `/en/${docKind}/` }
		];
	});

	const path = $derived(localePaths.find((entry) => entry.key === locale)?.path ?? '/');
	const koPath = $derived(localePaths.find((entry) => entry.key === 'ko')?.path ?? '/');
	const uiLocale = $derived(locale === 'ko' ? ('ko' as const) : ('en' as const));
	const otherPath = $derived(
		localePaths.find((entry) => entry.key === (uiLocale === 'ko' ? 'en' : 'ko'))?.path ?? koPath
	);

	const localeMeta = $derived(
		localePaths.map((entry) => ({
			...entry,
			meta: privacyLocales.find((candidate) => candidate.key === entry.key)!
		}))
	);

	const lastUpdatedLabel = $derived(
		content.lastUpdatedLabel ?? (uiLocale === 'ko' ? '최종 수정일' : 'Last updated')
	);
	const backLabel = $derived(content.backLabel ?? (uiLocale === 'ko' ? '홈으로' : 'Back home'));
	const languageLabel = $derived(
		content.languageLabel ?? (uiLocale === 'ko' ? '언어' : 'Language')
	);
	const tagline = $derived(
		uiLocale === 'ko'
			? '모바일 게임과 생활 앱을 직접 만들고 운영합니다.'
			: 'We build our own mobile games and everyday apps, and we run them.'
	);

	/** 제품 랜딩 경로. 랜딩이 없는 제품은 null이다. */
	const landingPath = $derived(
		product?.hasLanding ? `${uiLocale === 'ko' ? '' : '/en'}/apps/${product.slug}/` : null
	);

	const breadcrumb = $derived(
		product
			? [
					{ name: site.name, path: homeHref(uiLocale) },
					{
						name: uiLocale === 'ko' ? '앱' : 'Apps',
						path: uiLocale === 'ko' ? '/apps/' : '/en/apps/'
					},
					...(landingPath ? [{ name: product.name[uiLocale], path: landingPath }] : []),
					{ name: content.title, path }
				]
			: [
					{ name: site.name, path: homeHref(uiLocale) },
					{ name: content.title, path }
				]
	);

	const anchored = $derived(content.sections.filter((section) => section.id));
</script>

<Seo
	title={`${content.title} - ${site.name}`}
	description={content.description}
	{path}
	{locale}
	alternates={localeMeta.map((entry) => ({ hreflang: entry.meta.hreflang, path: entry.path }))}
	xDefaultPath={koPath}
	jsonLd={[breadcrumbSchema(breadcrumb)]}
/>

<div class="page">
	<SiteHeader locale={uiLocale} otherLocalePath={otherPath} currentPath={path} />

	<main class="legal-page">
		<section class="legal-hero">
			<a class="back-link" href={landingPath ?? homeHref(uiLocale)}>
				<ArrowLeft size={17} aria-hidden="true" />
				<span>{landingPath && product ? product.name[uiLocale] : backLabel}</span>
			</a>
			<p class="kicker">{content.kicker}</p>
			<h1>{content.title}</h1>
			<p class="intro">{content.intro}</p>
			{#each anchored as section (section.id)}
				<p class="jump"><a href={`#${section.id}`}>{section.title}</a></p>
			{/each}
			<div class="meta-row">
				<span>{lastUpdatedLabel}: {content.lastUpdated}</span>
			</div>
			{#if localeMeta.length > 1}
				<div class="lang-switch">
					<span class="lang-switch-label">
						<Globe2 size={16} aria-hidden="true" />
						<span>{languageLabel}</span>
					</span>
					<ul>
						{#each localeMeta as entry (entry.key)}
							<li>
								<a
									href={entry.path}
									hreflang={entry.meta.hreflang}
									lang={entry.meta.htmlLang}
									class:active={entry.key === locale}
									aria-current={entry.key === locale ? 'true' : undefined}
								>
									{entry.meta.nativeLabel}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</section>

		<section class="legal-content" aria-label={content.title}>
			{#each content.sections as section (section.title)}
				<article id={section.id}>
					<h2>{section.title}</h2>
					{#each section.body as paragraph (paragraph)}
						<p>{paragraph}</p>
					{/each}
				</article>
			{/each}
		</section>

		<section class="legal-note">
			<p>{content.footerNote}</p>
			<a
				href={contactHref ?? `mailto:${site.email}`}
				onclick={() => trackContactClick('legal_support')}
			>
				<Mail size={18} aria-hidden="true" />
				<span>{site.email}</span>
			</a>
		</section>
	</main>

	<SiteFooter locale={uiLocale} {tagline} />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100svh;
		background: linear-gradient(180deg, var(--c-surface) 0%, var(--c-surface-alt) 100%);
	}

	.legal-page {
		flex: 1;
	}

	.legal-hero,
	.legal-content,
	.legal-note {
		width: min(860px, calc(100% - 40px));
		margin: 0 auto;
	}

	.legal-hero {
		padding: 24px 0 34px;
	}

	.back-link {
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
		font-size: 2.4rem;
		line-height: 1.16;
		word-break: keep-all;
	}

	.intro {
		margin: 16px 0 0;
		max-width: 64ch;
		color: rgba(19, 32, 39, 0.76);
		line-height: 1.78;
		word-break: keep-all;
	}

	.jump {
		margin: 10px 0 0;
	}

	.jump a {
		color: var(--c-accent);
		font-weight: 700;
	}

	.meta-row {
		margin-top: 18px;
		color: rgba(19, 32, 39, 0.56);
		font-size: 0.86rem;
	}

	.lang-switch {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		margin-top: 18px;
	}

	.lang-switch-label {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: rgba(19, 32, 39, 0.62);
		font-size: 0.86rem;
		font-weight: 800;
	}

	.lang-switch ul {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.lang-switch a {
		display: inline-flex;
		align-items: center;
		min-height: 34px;
		padding: 0 12px;
		border: 1px solid rgba(19, 32, 39, 0.14);
		border-radius: var(--r-sm);
		background: rgba(255, 255, 255, 0.76);
		font-size: 0.9rem;
		font-weight: 800;
	}

	.lang-switch a.active {
		border-color: var(--c-accent);
		background: var(--c-accent);
		color: #fff;
	}

	.legal-content article {
		padding: 26px 0;
		border-top: 1px solid rgba(19, 32, 39, 0.1);
	}

	.legal-content h2 {
		margin: 0 0 12px;
		color: var(--c-text-strong);
		font-size: 1.2rem;
		word-break: keep-all;
	}

	.legal-content p {
		margin: 0 0 12px;
		max-width: 68ch;
		color: rgba(19, 32, 39, 0.78);
		line-height: 1.8;
		word-break: keep-all;
	}

	.legal-content p:last-child {
		margin-bottom: 0;
	}

	.legal-note {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		margin-top: 34px;
		margin-bottom: 56px;
		padding: 24px;
		border-radius: var(--r-sm);
		background: rgba(255, 255, 255, 0.7);
	}

	.legal-note p {
		margin: 0;
		max-width: 56ch;
		color: rgba(19, 32, 39, 0.72);
		line-height: 1.7;
		word-break: keep-all;
	}

	.legal-note a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--c-accent);
		font-weight: 800;
	}

	@media (max-width: 720px) {
		.legal-hero,
		.legal-content,
		.legal-note {
			width: calc(100% - 32px);
		}

		h1 {
			font-size: 1.8rem;
		}
	}
</style>
