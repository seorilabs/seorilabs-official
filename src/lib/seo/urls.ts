import { site } from '$lib/content';

/** 루트 상대 경로를 canonical/og:url용 절대 URL로 바꾼다. */
export function absoluteUrl(path: string): string {
	return `${site.url}${path}`;
}

export type OgImage = {
	path: string;
	width: number;
	height: number;
	alt: string;
};

/** 페이지가 따로 지정하지 않았을 때 쓰는 기본 공유 이미지. */
export const defaultOgImage: OgImage = {
	path: site.image,
	width: 1774,
	height: 887,
	alt: site.name
};
