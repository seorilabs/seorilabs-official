<script lang="ts">
	import { site, type PrivacyLocaleKey } from '$lib/content';
	import { ogLocaleFor } from '$lib/seo/ogLocale';
	import { absoluteUrl, defaultOgImage, type OgImage } from '$lib/seo/urls';

	type Alternate = { hreflang: string; path: string };

	let {
		title,
		description,
		/** 루트 상대 canonical 경로. trailingSlash 계약에 따라 '/'로 끝나야 한다. */
		path,
		locale,
		alternates = [],
		xDefaultPath = undefined,
		image = defaultOgImage,
		type = 'website',
		jsonLd = []
	}: {
		title: string;
		description: string;
		path: string;
		locale: PrivacyLocaleKey;
		alternates?: Alternate[];
		xDefaultPath?: string;
		image?: OgImage;
		type?: 'website' | 'article';
		jsonLd?: unknown[];
	} = $props();

	const canonical = $derived(absoluteUrl(path));
	const imageUrl = $derived(absoluteUrl(image.path));

	// prerender 크롤러는 <script> 본문을 건너뛰지 않는 단순 토크나이저라
	// JSON 안의 '<'를 태그로 오인할 수 있다. 이스케이프는 선택이 아니다.
	const serialize = (node: unknown) => JSON.stringify(node).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#f6f8f8" />
	<link rel="canonical" href={canonical} />
	{#each alternates as alternate (alternate.hreflang)}
		<link rel="alternate" hreflang={alternate.hreflang} href={absoluteUrl(alternate.path)} />
	{/each}
	{#if xDefaultPath}
		<link rel="alternate" hreflang="x-default" href={absoluteUrl(xDefaultPath)} />
	{/if}
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={ogLocaleFor(locale)} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content={String(image.width)} />
	<meta property="og:image:height" content={String(image.height)} />
	<meta property="og:image:alt" content={image.alt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	{#each jsonLd as node, index (index)}
		{@html `<script type="application/ld+json">${serialize(node)}<\/script>`}
	{/each}
</svelte:head>
