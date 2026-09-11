<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import type { Locale } from '$lib/content';
	import { CHANNEL_LABEL, channelUrl } from '$lib/products/storeLinks';
	import type { StoreChannel } from '$lib/products/types';

	let {
		channels,
		locale,
		productName,
		size = 'small'
	}: {
		channels: StoreChannel[];
		locale: Locale;
		productName: string;
		size?: 'small' | 'large';
	} = $props();

	// 앱인토스는 공개 웹 URL이 없다. 버튼처럼 보이면 눌렀다가 실망하므로
	// 링크가 아닌 안내 문장으로 분리한다.
	const linkable = $derived(channels.filter((channel) => channelUrl(channel) !== null));
	const hasAppsInToss = $derived(channels.some((channel) => channel.kind === 'apps-in-toss'));
</script>

{#if linkable.length > 0}
	<div class="store-links" class:large={size === 'large'}>
		{#each linkable as channel (channel.kind)}
			<a class="store-link" href={channelUrl(channel)} rel="noopener" target="_blank">
				<span>{CHANNEL_LABEL[channel.kind]}</span>
				<ArrowUpRight size={size === 'large' ? 18 : 15} aria-hidden="true" />
			</a>
		{/each}
	</div>
{/if}

{#if hasAppsInToss}
	<p class="toss-note">
		<span class="chip">{CHANNEL_LABEL['apps-in-toss']}</span>
		{locale === 'ko'
			? `토스 앱에서 '${productName}'을 검색하면 설치 없이 바로 플레이할 수 있습니다.`
			: `Search for "${productName}" inside the Toss app to play without installing.`}
	</p>
{/if}

<style>
	.store-links {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.store-link {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		min-height: 38px;
		padding: 0 14px;
		border: 1px solid rgba(19, 32, 39, 0.16);
		border-radius: var(--r-sm);
		background: #fff;
		color: var(--c-text-strong);
		font-size: 0.88rem;
		font-weight: 700;
	}

	.store-link:hover {
		border-color: var(--c-accent);
		color: var(--c-accent);
	}

	.large .store-link {
		min-height: 50px;
		padding: 0 22px;
		background: var(--c-ink);
		border-color: var(--c-ink);
		color: #fff;
		font-size: 1rem;
	}

	.large .store-link:hover {
		background: var(--c-accent-strong);
		border-color: var(--c-accent-strong);
		color: #fff;
	}

	.toss-note {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
		margin: 12px 0 0;
		color: rgba(19, 32, 39, 0.68);
		font-size: 0.88rem;
		line-height: 1.6;
		word-break: keep-all;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		padding: 3px 9px;
		border-radius: 999px;
		background: var(--c-surface-alt);
		color: var(--c-accent-strong);
		font-size: 0.78rem;
		font-weight: 800;
	}
</style>
