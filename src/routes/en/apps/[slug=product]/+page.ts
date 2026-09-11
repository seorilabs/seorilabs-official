import { landingProducts } from '$lib/products/derive';

// 매처와 반드시 같은 목록을 써야 한다. 어긋나면 handleEntryGeneratorMismatch로 빌드가 깨진다.
export const entries = () => landingProducts.map((product) => ({ slug: product.slug }));
