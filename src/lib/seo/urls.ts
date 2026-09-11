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
	width: 1200,
	height: 630,
	alt: site.name
};

/** 1200x630 규격의 페이지별 공유 이미지. */
export const ogImage = (path: string, alt: string): OgImage => ({
	path,
	width: 1200,
	height: 630,
	alt
});
