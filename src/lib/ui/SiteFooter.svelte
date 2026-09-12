<script lang="ts">
	import { requestAnalyticsSettings, trackContactClick } from '$lib/analytics';
	import { site, type Locale } from '$lib/content';
	import { legalNav } from '$lib/legalContent';
	import { siteNav } from '$lib/ui/nav';

	let { locale, tagline }: { locale: Locale; tagline: string } = $props();

	const legalIndexHref = $derived(siteNav[locale][2].href);
</script>

<footer class="site-footer">
	<div class="identity">
		<strong>{site.name}</strong>
		<span>{tagline}</span>
		<!-- 아동 그림책 임프린트. 별도 도메인으로 운영한다. -->
		<a class="imprint" href="https://seoritales.com/">
			{locale === 'ko'
				? 'Seori Tales — 전래동화 그림책'
				: 'Seori Tales — Korean folktales for children'}
		</a>
	</div>
	<nav aria-label={locale === 'ko' ? '법적 고지' : 'Legal'}>
		{#each legalNav[locale] as item (item.href)}
			<a href={item.href}>{item.label}</a>
		{/each}
		<a href={legalIndexHref}>{locale === 'ko' ? '문서 전체' : 'All documents'}</a>
		<button type="button" onclick={requestAnalyticsSettings}>
			{locale === 'ko' ? '개인정보 설정' : 'Privacy settings'}
		</button>
		<a href={`mailto:${site.email}`} onclick={() => trackContactClick('footer')}>{site.email}</a>
	</nav>
</footer>

<style>
	.site-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		width: min(var(--container), calc(100% - 40px));
		margin: 0 auto;
		padding: 28px 0;
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.9rem;
	}

	.identity {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.identity strong {
		color: var(--c-text-strong);
	}

	.imprint:hover {
		color: var(--c-accent);
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
	}

	nav a:hover,
	nav button:hover {
		color: var(--c-accent);
	}

	nav button {
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	@media (max-width: 860px) {
		.site-footer {
			display: grid;
			gap: 14px;
			width: calc(100% - 32px);
		}

		.identity {
			display: grid;
			gap: 4px;
		}

		nav {
			gap: 14px;
		}
	}
</style>
