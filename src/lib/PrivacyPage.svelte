<script lang="ts">
	import { ArrowLeft, Globe2, Mail } from '@lucide/svelte';
	import { site, privacyLocales, privacyPath, type PrivacyLocaleKey } from '$lib/content';
	import { legalNav } from '$lib/legalContent';
	import { privacyContent, type PrivacyContent } from '$lib/privacyContent';

	export let localeKey: PrivacyLocaleKey;
	export let contentOverride: PrivacyContent | undefined = undefined;
	export let productSlug = '';

	const meta = privacyLocales.find((l) => l.key === localeKey) ?? privacyLocales[0];
	const c = contentOverride ?? privacyContent[localeKey];
	const pageLocales = productSlug
		? privacyLocales.filter((locale) => locale.key === 'ko' || locale.key === 'en')
		: privacyLocales;
	const pagePath = (prefix: string) =>
		productSlug
			? `${prefix ? `/${prefix}` : ''}/apps/${productSlug}/privacy/`
			: privacyPath(prefix);

	const canonical = `${site.url}${pagePath(meta.urlPrefix)}`;
	const homeHref = localeKey === 'ko' ? '/' : '/en/';

	// 상단 legal 내비게이션. ko/en은 자체 nav, 그 외 언어는 privacy만 자국어 경로로 두고
	// terms/support는 영어 페이지로 폴백한다.
	const navItems =
		localeKey === 'ko'
			? legalNav.ko
			: localeKey === 'en'
				? legalNav.en
				: [
						{ label: 'Privacy', href: privacyPath(meta.urlPrefix) },
						{ label: 'Terms', href: '/en/terms/' },
						{ label: 'Support', href: '/en/support/' }
					];
</script>

<svelte:head>
	<title>{c.title} - {site.name}</title>
	<meta name="description" content={c.description} />
	<meta name="theme-color" content="#f6f8f8" />
	<link rel="canonical" href={canonical} />
	{#each pageLocales as loc}
		<link rel="alternate" hreflang={loc.hreflang} href={`${site.url}${pagePath(loc.urlPrefix)}`} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={`${site.url}${pagePath('')}`} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={`${c.title} - ${site.name}`} />
	<meta property="og:description" content={c.description} />
	<meta property="og:url" content={canonical} />
</svelte:head>

<main class="legal-page" lang={meta.htmlLang}>
	<header class="legal-header">
		<a class="brand" href={homeHref} aria-label={site.name}>
			<span class="brand-mark">S</span>
			<span>{site.name}</span>
		</a>
		<nav aria-label="Legal pages">
			{#each navItems as item}
				<a href={item.href} aria-current={item.href.endsWith('/privacy/') ? 'page' : undefined}>
					{item.label}
				</a>
			{/each}
		</nav>
	</header>

	<section class="legal-hero">
		<a class="back-link" href={homeHref}>
			<ArrowLeft size={17} aria-hidden="true" />
			<span>{c.backLabel}</span>
		</a>
		<p class="kicker">{c.kicker}</p>
		<h1>{c.title}</h1>
		<p class="intro">{c.intro}</p>
		<div class="meta-row">
			<span>{c.lastUpdatedLabel}: {c.lastUpdated}</span>
		</div>
		<div class="lang-switch">
			<span class="lang-switch-label">
				<Globe2 size={16} aria-hidden="true" />
				<span>{c.languageLabel}</span>
			</span>
			<ul>
				{#each pageLocales as loc}
					<li>
						<a
							href={pagePath(loc.urlPrefix)}
							hreflang={loc.hreflang}
							lang={loc.htmlLang}
							class:active={loc.key === localeKey}
							aria-current={loc.key === localeKey ? 'true' : undefined}
						>
							{loc.nativeLabel}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="legal-content" aria-label={c.title}>
		{#each c.sections as section}
			<article>
				<h2>{section.title}</h2>
				{#each section.body as paragraph}
					<p>{paragraph}</p>
				{/each}
			</article>
		{/each}
	</section>

	<section class="legal-note">
		<p>{c.footerNote}</p>
		<a href={`mailto:${site.email}`}>
			<Mail size={18} aria-hidden="true" />
			<span>{site.email}</span>
		</a>
	</section>
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		color: #182126;
		background: #f6f8f8;
		font-family:
			Inter,
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.legal-page {
		min-height: 100vh;
		background: linear-gradient(180deg, #f6f8f8 0%, #eef4f3 100%), #f6f8f8;
	}

	.legal-header,
	.legal-hero,
	.legal-content,
	.legal-note {
		width: min(920px, calc(100% - 40px));
		margin: 0 auto;
	}

	.legal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		padding: 24px 0;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-weight: 800;
	}

	.brand-mark {
		display: inline-grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border: 1px solid rgba(19, 32, 39, 0.16);
		background: rgba(255, 255, 255, 0.8);
		color: #0f6f8a;
		font-weight: 900;
		border-radius: 8px;
	}

	.legal-header nav {
		display: inline-flex;
		align-items: center;
		gap: 16px;
		color: rgba(19, 32, 39, 0.68);
		font-size: 0.92rem;
		font-weight: 800;
	}

	.legal-header nav a {
		display: inline-flex;
		align-items: center;
		min-height: 36px;
	}

	.legal-header nav a[aria-current='page'] {
		color: #0f6f8a;
	}

	.legal-hero {
		padding: 74px 0 54px;
	}

	.back-link,
	.meta-row,
	.legal-note a {
		display: inline-flex;
		align-items: center;
	}

	.back-link {
		gap: 8px;
		margin-bottom: 34px;
		color: #0f6f8a;
		font-size: 0.92rem;
		font-weight: 900;
	}

	.kicker {
		margin: 0 0 16px;
		color: #0f6f8a;
		font-size: 0.84rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	h1,
	h2,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 22px;
		color: #10191e;
		font-size: 4rem;
		line-height: 1;
		letter-spacing: 0;
	}

	.intro {
		max-width: 780px;
		margin-bottom: 28px;
		color: rgba(19, 32, 39, 0.72);
		font-size: 1.12rem;
		line-height: 1.78;
		word-break: keep-all;
	}

	.meta-row {
		flex-wrap: wrap;
		gap: 12px;
		color: rgba(19, 32, 39, 0.62);
		font-size: 0.92rem;
		font-weight: 800;
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
		gap: 7px;
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
		border: 1px solid rgba(15, 111, 138, 0.18);
		background: rgba(255, 255, 255, 0.76);
		color: #0f6f8a;
		font-size: 0.9rem;
		font-weight: 800;
		border-radius: 8px;
	}

	.lang-switch a.active {
		border-color: #0f6f8a;
		background: #0f6f8a;
		color: #fff;
	}

	.legal-content {
		display: grid;
		gap: 12px;
		padding-bottom: 30px;
	}

	.legal-content article,
	.legal-note {
		border: 1px solid rgba(18, 33, 40, 0.1);
		background: rgba(255, 255, 255, 0.74);
		border-radius: 8px;
	}

	.legal-content article {
		padding: 28px;
	}

	h2 {
		margin-bottom: 16px;
		color: #132027;
		font-size: 1.35rem;
		line-height: 1.25;
	}

	.legal-content p {
		margin-bottom: 10px;
		color: rgba(19, 32, 39, 0.72);
		font-size: 1rem;
		line-height: 1.78;
		word-break: keep-all;
	}

	.legal-content p:last-child {
		margin-bottom: 0;
	}

	.legal-note {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		margin-bottom: 64px;
		padding: 22px 24px;
	}

	.legal-note p {
		margin-bottom: 0;
		color: rgba(19, 32, 39, 0.72);
		line-height: 1.65;
		word-break: keep-all;
	}

	.legal-note a {
		flex: 0 0 auto;
		gap: 8px;
		color: #0f6f8a;
		font-weight: 900;
	}

	@media (max-width: 720px) {
		.legal-header,
		.legal-hero,
		.legal-content,
		.legal-note {
			width: calc(100% - 28px);
		}

		.legal-header {
			display: grid;
			gap: 18px;
		}

		.legal-header nav {
			justify-content: space-between;
			gap: 10px;
			width: 100%;
			font-size: 0.86rem;
		}

		.legal-hero {
			padding: 48px 0 38px;
		}

		h1 {
			font-size: 2.55rem;
		}

		.intro,
		.legal-content p,
		.legal-note p {
			overflow-wrap: anywhere;
		}

		.legal-content article {
			padding: 22px;
		}

		.legal-note {
			display: grid;
		}
	}
</style>
