const MEASUREMENT_ID = 'G-P9RMVQWTXL';
const CONSENT_STORAGE_KEY = 'seorilabs.analytics-consent.v1';
const SETTINGS_EVENT = 'seorilabs:open-analytics-settings';

type ConsentDecision = 'granted' | 'denied';

export type AnalyticsPlacement =
	| 'home_card'
	| 'apps_card'
	| 'landing_hero'
	| 'landing_install'
	| 'home_support'
	| 'product_support'
	| 'legal_support'
	| 'footer';

export type StoreChannel = 'google_play' | 'app_store';

declare global {
	interface Window {
		dataLayer?: IArguments[];
		gtag?: (...args: unknown[]) => void;
	}
}

let tagRequested = false;

function isProductionHost(): boolean {
	return typeof window !== 'undefined' && window.location.hostname === 'www.seorilabs.com';
}

function readConsent(): ConsentDecision | null {
	try {
		const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
		return value === 'granted' || value === 'denied' ? value : null;
	} catch {
		return null;
	}
}

function queueGtag(): void {
	window.dataLayer ??= [];
	window.gtag ??= function () {
		window.dataLayer?.push(arguments);
	};
}

function removeAnalyticsCookies(): void {
	for (const name of ['_ga', '_ga_P9RMVQWTXL']) {
		document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
		if (window.location.hostname.endsWith('.seorilabs.com')) {
			document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.seorilabs.com; SameSite=Lax`;
		}
	}
}

function loadGoogleTag(): void {
	if (!isProductionHost() || tagRequested) return;

	tagRequested = true;
	queueGtag();
	window.gtag?.('consent', 'default', {
		ad_storage: 'denied',
		ad_user_data: 'denied',
		ad_personalization: 'denied',
		analytics_storage: 'denied'
	});
	window.gtag?.('js', new Date());
	window.gtag?.('consent', 'update', {
		ad_storage: 'denied',
		ad_user_data: 'denied',
		ad_personalization: 'denied',
		analytics_storage: 'granted'
	});
	window.gtag?.('config', MEASUREMENT_ID);

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
	document.head.append(script);
}

export function getAnalyticsConsent(): ConsentDecision | null {
	return typeof window === 'undefined' ? null : readConsent();
}

export function saveAnalyticsConsent(decision: ConsentDecision): void {
	try {
		window.localStorage.setItem(CONSENT_STORAGE_KEY, decision);
	} catch {
		// 동의 선택을 저장할 수 없어도 현재 페이지의 선택은 존중한다.
	}

	if (decision === 'granted') {
		loadGoogleTag();
		return;
	}

	window.gtag?.('consent', 'update', {
		ad_storage: 'denied',
		ad_user_data: 'denied',
		ad_personalization: 'denied',
		analytics_storage: 'denied'
	});
	removeAnalyticsCookies();
}

export function initializeAnalytics(): void {
	if (getAnalyticsConsent() === 'granted') loadGoogleTag();
}

function track(eventName: string, parameters: Record<string, string>): void {
	if (!isProductionHost() || getAnalyticsConsent() !== 'granted') return;
	window.gtag?.('event', eventName, parameters);
}

export function trackStoreLinkClick(
	productSlug: string,
	storeChannel: StoreChannel,
	placement: AnalyticsPlacement
): void {
	track('store_link_click', {
		product_slug: productSlug,
		store_channel: storeChannel,
		placement
	});
}

export function trackContactClick(placement: AnalyticsPlacement): void {
	track('contact_click', { placement });
}

export function requestAnalyticsSettings(): void {
	if (typeof window !== 'undefined') window.dispatchEvent(new Event(SETTINGS_EVENT));
}

export function onAnalyticsSettingsRequest(listener: () => void): () => void {
	window.addEventListener(SETTINGS_EVENT, listener);
	return () => window.removeEventListener(SETTINGS_EVENT, listener);
}
