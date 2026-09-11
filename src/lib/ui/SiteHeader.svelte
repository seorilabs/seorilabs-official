<script lang="ts">
	import { Globe2 } from '@lucide/svelte';
	import { site, type Locale } from '$lib/content';
	import { homeHref, languageToggle, otherLocale, siteNav } from '$lib/ui/nav';

	let {
		locale,
		/** 언어 전환 링크가 가리킬 반대 언어 경로. */
		otherLocalePath,
		/** 현재 페이지 경로. 내비게이션 현재 항목 표시에 쓴다. */
		currentPath = ''
	}: { locale: Locale; otherLocalePath: string; currentPath?: string } = $props();

	const toggle = $derived(languageToggle[locale]);
</script>

<header class="site-header">
	<a class="brand" href={homeHref(locale)} aria-label={site.name}>
		<img src="/brand/seori-labs-mark.svg" alt="" width="30" height="30" aria-hidden="true" />
		<span>{site.name}</span>
	</a>
	<nav class="nav" aria-label={locale === 'ko' ? '주 메뉴' : 'Main'}>
		{#each siteNav[locale] as item (item.href)}
			<a href={item.href} aria-current={currentPath.startsWith(item.href) ? 'page' : undefined}>
				{item.label}
			</a>
		{/each}
	</nav>
	<a
		class="language"
		href={otherLocalePath}
		hreflang={otherLocale(locale)}
		aria-label={toggle.label}
	>
		<Globe2 size={16} aria-hidden="true" />
		<span>{toggle.text}</span>
	</a>
</header>

<style>
	.site-header {
		display: flex;
		align-items: center;
		gap: 20px;
		width: min(var(--container), calc(100% - 40px));
		margin: 0 auto;
		padding: 20px 0;
		color: var(--c-text-strong);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-right: auto;
		font-weight: 800;
		font-size: 1rem;
	}

	.nav {
		display: inline-flex;
		align-items: center;
		gap: 20px;
		font-size: 0.92rem;
		font-weight: 700;
		color: rgba(19, 32, 39, 0.72);
	}

	.nav a:hover,
	.nav a[aria-current='page'] {
		color: var(--c-accent);
	}

	.language {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		min-width: 72px;
		min-height: 38px;
		padding: 0 12px;
		border: 1px solid rgba(19, 32, 39, 0.14);
		border-radius: var(--r-sm);
		background: rgba(255, 255, 255, 0.72);
		font-size: 0.88rem;
		font-weight: 800;
	}

	.language:hover {
		color: var(--c-accent);
	}

	@media (max-width: 720px) {
		.site-header {
			flex-wrap: wrap;
			gap: 12px;
			width: calc(100% - 32px);
		}

		.nav {
			order: 3;
			width: 100%;
			gap: 16px;
			font-size: 0.86rem;
		}

		.language {
			min-width: 64px;
		}
	}
</style>
