<script lang="ts">
	import { content } from '$lib/content';
	import Seo from '$lib/seo/Seo.svelte';
	import { organizationSchema } from '$lib/seo/jsonld';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';

	const path = '/en/studio/';
	const title = 'Studio | Seori Labs';
	const description = 'The Seori Labs studio logo and game opening for landscape and portrait screens.';
	const splashLogo = '/brand/seori-labs-logo-stacked-reverse.svg';
	const frames = [
		{ name: 'Landscape', width: 844, height: 390 },
		{ name: 'Portrait', width: 390, height: 844 }
	];
</script>

<Seo {title} {description} {path} locale="en" jsonLd={[organizationSchema()]} />
<SiteHeader locale="en" otherLocalePath="/#studio" currentPath={path} />

<main>
	<div class="introduction">
		<h1>Seori Labs Studio</h1>
		<p>Our games open with the Seori Labs symbol and wordmark, centered on Night Navy.</p>
	</div>

	<div class="frames">
		{#each frames as frame (frame.name)}
			<figure>
				<div class="splash" style:aspect-ratio={`${frame.width} / ${frame.height}`}>
					<img src={splashLogo} width="384" height="168" alt="Seori Labs" />
				</div>
				<figcaption>{frame.name} · {frame.width} × {frame.height}</figcaption>
			</figure>
		{/each}
	</div>
	<p class="splash-download">
		<a href={splashLogo} download>Download transparent splash logo (SVG)</a>
	</p>

	<section aria-labelledby="logo">
		<h2 id="logo">Studio logo</h2>
		<div class="logos">
			<div class="primary">
				<img
					src="/brand/seori-labs-logo.svg"
					width="392"
					height="100"
					alt="Seori Labs logo on a light background"
				/>
			</div>
			<div class="reverse">
				<img
					src="/brand/seori-labs-logo-reverse.svg"
					width="392"
					height="100"
					alt="Seori Labs logo on a dark background"
				/>
			</div>
		</div>
		<p class="downloads">
			<a href="/brand/seori-labs-logo.svg" download>Download English logo</a>
			<a href="/brand/seori-labs-logo-reverse.svg" download>Download reverse logo</a>
		</p>
	</section>
</main>

<SiteFooter locale="en" tagline={content.en.footer.tagline} />

<style>
	main {
		width: min(var(--container), calc(100% - 40px));
		margin: 0 auto;
		padding: clamp(28px, 6vw, 64px) 0 40px;
	}

	.introduction {
		max-width: 42rem;
		margin-bottom: 28px;
	}
	h1,
	h2,
	p,
	figure {
		margin: 0;
	}
	h1 {
		color: var(--c-text-strong);
		font-size: clamp(3rem, 8vw, 5rem);
		line-height: 1;
		letter-spacing: -0.055em;
	}
	.introduction p {
		margin-top: 12px;
		line-height: 1.65;
	}

	.frames {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.2135fr);
		gap: 12px;
	}

	.splash {
		display: grid;
		place-items: center;
		background: #020b16;
		border-radius: var(--r-sm);
	}
	.splash img {
		display: block;
		width: min(56%, 320px);
		height: auto;
	}
	.splash-download {
		margin-top: 14px;
	}
	figcaption,
	.downloads {
		display: flex;
		flex-wrap: wrap;
		gap: 5px 14px;
		align-items: baseline;
	}
	figcaption {
		justify-content: space-between;
		margin-top: 8px;
		font-size: 0.875rem;
		color: var(--c-muted);
	}
	main a {
		color: var(--c-accent-strong);
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	main a:focus-visible {
		outline: 2px solid var(--c-accent);
		outline-offset: 3px;
	}

	section {
		margin-top: 36px;
	}
	.logos {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
		margin: 12px 0;
	}
	.logos div {
		display: grid;
		place-items: center;
		min-height: 100px;
		padding: 16px;
		border-radius: var(--r-sm);
	}
	.logos img {
		width: min(100%, 245px);
		height: auto;
	}
	.primary {
		background: #fff;
		border: 1px solid var(--c-frost);
	}
	.reverse {
		background: #020b16;
	}

	@media (max-width: 600px) {
		.frames {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		figure:nth-child(2) {
			width: min(68%, 280px);
		}
		.logos div {
			min-height: 68px;
			padding: 10px;
		}
	}
</style>
