<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import {
		getAnalyticsConsent,
		initializeAnalytics,
		onAnalyticsSettingsRequest,
		saveAnalyticsConsent
	} from '$lib/analytics';

	const locale = $derived(
		page.url.pathname === '/en/' || page.url.pathname.startsWith('/en/') ? 'en' : 'ko'
	);
	const privacyHref = $derived(locale === 'ko' ? '/privacy/' : '/en/privacy/');

	let open = $state(false);

	onMount(() => {
		const consent = getAnalyticsConsent();
		if (consent === 'granted') initializeAnalytics();
		if (consent === null) open = true;

		return onAnalyticsSettingsRequest(() => {
			open = true;
		});
	});

	function choose(granted: boolean): void {
		const wasGranted = getAnalyticsConsent() === 'granted';
		saveAnalyticsConsent(granted ? 'granted' : 'denied');
		open = false;

		if (!granted && wasGranted) window.location.reload();
	}
</script>

{#if open}
	<div class="consent" aria-labelledby="analytics-consent-title" role="dialog">
		<div>
			<strong id="analytics-consent-title">
				{locale === 'ko' ? '웹사이트 분석' : 'Website analytics'}
			</strong>
			<p>
				{locale === 'ko'
					? '방문 페이지와 스토어 링크 선택을 익명 통계로 살펴 서비스 안내를 개선합니다. 광고 개인화에는 사용하지 않습니다.'
					: 'We use aggregate page and store-link activity to improve our site. It is never used for advertising personalisation.'}
			</p>
			<a href={privacyHref}>{locale === 'ko' ? '개인정보 처리방침' : 'Privacy Policy'}</a>
		</div>
		<div class="actions">
			<button class="deny" type="button" onclick={() => choose(false)}>
				{locale === 'ko' ? '거부' : 'Decline'}
			</button>
			<button class="allow" type="button" onclick={() => choose(true)}>
				{locale === 'ko' ? '분석 허용' : 'Allow analytics'}
			</button>
		</div>
	</div>
{/if}

<style>
	.consent {
		position: fixed;
		z-index: 20;
		right: 20px;
		bottom: 20px;
		display: flex;
		align-items: end;
		gap: 20px;
		width: min(560px, calc(100% - 32px));
		padding: 20px;
		border: 1px solid rgba(19, 32, 39, 0.16);
		border-radius: var(--r-sm);
		background: #fff;
		box-shadow: 0 18px 44px rgba(19, 32, 39, 0.18);
		color: var(--c-text-strong);
	}

	strong {
		display: block;
		font-size: 0.98rem;
	}

	p {
		margin: 8px 0;
		color: rgba(19, 32, 39, 0.72);
		font-size: 0.88rem;
		line-height: 1.6;
		word-break: keep-all;
	}

	a {
		color: var(--c-accent);
		font-size: 0.84rem;
		font-weight: 800;
	}

	.actions {
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
	}

	button {
		min-height: 38px;
		padding: 0 12px;
		border-radius: var(--r-sm);
		font: inherit;
		font-size: 0.86rem;
		font-weight: 800;
		cursor: pointer;
	}

	.deny {
		border: 1px solid rgba(19, 32, 39, 0.18);
		background: #fff;
		color: var(--c-text-strong);
	}

	.allow {
		border: 1px solid var(--c-ink);
		background: var(--c-ink);
		color: #fff;
	}

	@media (max-width: 620px) {
		.consent {
			right: 16px;
			bottom: 16px;
			align-items: stretch;
			flex-direction: column;
			gap: 16px;
		}

		.actions {
			width: 100%;
		}

		button {
			flex: 1;
		}
	}
</style>
