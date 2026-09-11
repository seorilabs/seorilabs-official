import type { StoreChannel } from '$lib/products/types';

export const playUrl = (packageName: string) =>
	`https://play.google.com/store/apps/details?id=${packageName}`;

export const appStoreUrl = (appId: string) => `https://apps.apple.com/kr/app/id${appId}`;

/** 채널의 공개 웹 URL. 앱인토스는 URL이 없어 null을 돌려준다. */
export function channelUrl(channel: StoreChannel): string | null {
	switch (channel.kind) {
		case 'google-play':
			return playUrl(channel.packageName);
		case 'app-store':
			return appStoreUrl(channel.appId);
		case 'apps-in-toss':
			return null;
	}
}

export const CHANNEL_LABEL: Record<StoreChannel['kind'], string> = {
	'google-play': 'Google Play',
	'app-store': 'App Store',
	'apps-in-toss': '앱인토스'
};
