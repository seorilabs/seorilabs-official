import { products } from '$lib/products/registry';
import type { Locale } from '$lib/content';
import type { LegalDocRef, Product, StoreChannel } from '$lib/products/types';

const byOrder = (a: Product, b: Product) => a.order - b.order;

export const liveProducts: Product[] = products
	.filter((product) => product.status === 'live')
	.sort(byOrder);

export const upcomingProducts: Product[] = products
	.filter((product) => product.status === 'upcoming')
	.sort(byOrder);

/**
 * 랜딩 페이지를 가진 제품. 목록 카드의 링크와 동적 라우트 entries()가
 * 반드시 같은 목록을 써야 한다. 어긋나면 prerender가 없는 페이지를 크롤하거나
 * entry generator mismatch로 빌드가 깨진다.
 */
export const landingProducts: Product[] = liveProducts.filter((product) => product.hasLanding);

export const landingSlugs: Set<string> = new Set(landingProducts.map((product) => product.slug));

/** 부제를 뺀 짧은 이름. 지정하지 않은 제품은 등록명을 그대로 쓴다. */
export function shortName(product: Product, locale: Locale): string {
	return product.shortName?.[locale] ?? product.name[locale];
}

export function productBySlug(slug: string): Product | undefined {
	return products.find((product) => product.slug === slug);
}

/** 제품별 법무 문서 전체. 전용 페이지가 없는 앵커 참조는 제외한다. */
export const productLegalDocs: Array<{ product: Product; doc: LegalDocRef }> = products.flatMap(
	(product) => product.legal.filter((doc) => !doc.legacyAnchor).map((doc) => ({ product, doc }))
);

/** 화면에 쓰는 수치는 타이핑하지 않고 원장에서 센다. 그래야 낡지 않는다. */
export const liveStats = {
	total: liveProducts.length,
	games: liveProducts.filter((product) => product.category === 'game').length,
	apps: liveProducts.filter((product) => product.category === 'app').length,
	channels: new Set<StoreChannel['kind']>(
		liveProducts.flatMap((product) => product.channels.map((channel) => channel.kind))
	).size
};
