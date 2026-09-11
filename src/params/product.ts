import { landingSlugs } from '$lib/products/derive';

/** 랜딩 페이지를 가진 제품의 slug만 이 라우트에 도달한다. */
export function match(param: string): boolean {
	return landingSlugs.has(param);
}
