<script lang="ts">
	import type { AnalyticsPlacement } from '$lib/analytics';
	import type { Locale } from '$lib/content';
	import { shortName } from '$lib/products/derive';
	import type { Product } from '$lib/products/types';
	import StoreLinks from '$lib/ui/StoreLinks.svelte';

	let {
		product,
		locale,
		placement
	}: { product: Product; locale: Locale; placement: AnalyticsPlacement } = $props();

	// 출시 전 제품은 랜딩도 스토어 버튼도 만들지 않는다. 미공개 채널이 원장에 적혀 있어도
	// 스토어 페이지가 없어 죽은 링크가 되기 때문이다.
	const isLive = $derived(product.status === 'live');
	const landingHref = $derived(
		isLive && product.hasLanding ? `${locale === 'ko' ? '' : '/en'}/apps/${product.slug}/` : null
	);
	const name = $derived(product.name[locale]);
</script>

<article class="card">
	{#if product.media.icon}
		<img class="icon" src={product.media.icon} alt="" width="56" height="56" loading="lazy" />
	{/if}
	<div class="body">
		<h3>
			{#if landingHref}
				<a href={landingHref}>{name}</a>
			{:else}
				{name}
			{/if}
		</h3>
		<p class="tagline">{product.tagline[locale]}</p>
		<ul class="badges">
			{#each product.badges[locale] as badge (badge)}
				<li>{badge}</li>
			{/each}
		</ul>
		{#if isLive}
			<StoreLinks
				channels={product.channels}
				{locale}
				productSlug={product.slug}
				productName={shortName(product, locale)}
				{placement}
			/>
		{/if}
		{#if landingHref}
			<a class="more" href={landingHref}>
				{locale === 'ko' ? '자세히 보기' : 'Learn more'} →
			</a>
		{/if}
	</div>
</article>

<style>
	.card {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 16px;
		padding: 22px;
		border: 1px solid rgba(19, 32, 39, 0.1);
		border-radius: var(--r-sm);
		background: #fff;
	}

	.icon {
		width: 56px;
		height: 56px;
		border-radius: 13px;
		image-rendering: pixelated;
	}

	h3 {
		margin: 0;
		color: var(--c-text-strong);
		font-size: 1.06rem;
		line-height: 1.4;
		word-break: keep-all;
	}

	h3 a:hover {
		color: var(--c-accent);
	}

	.tagline {
		margin: 8px 0 0;
		color: rgba(19, 32, 39, 0.7);
		font-size: 0.94rem;
		line-height: 1.65;
		word-break: keep-all;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin: 12px 0 14px;
		padding: 0;
		list-style: none;
	}

	.badges li {
		padding: 3px 9px;
		border-radius: 999px;
		background: var(--c-frost);
		color: var(--c-muted);
		font-size: 0.76rem;
		font-weight: 700;
	}

	.more {
		display: inline-block;
		margin-top: 14px;
		color: var(--c-accent);
		font-size: 0.9rem;
		font-weight: 800;
	}

	@media (max-width: 560px) {
		.card {
			grid-template-columns: 1fr;
			gap: 14px;
		}
	}
</style>
