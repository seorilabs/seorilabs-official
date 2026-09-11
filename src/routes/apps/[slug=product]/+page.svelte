<script lang="ts">
	import { page } from '$app/state';
	import ProductLandingPage from '$lib/products/ProductLandingPage.svelte';
	import { productBySlug } from '$lib/products/derive';

	// 매처가 등록된 slug만 통과시키므로 조회는 항상 성공한다.
	const product = $derived(productBySlug(page.params.slug ?? '')!);
</script>

<ProductLandingPage {product} locale="ko" />
