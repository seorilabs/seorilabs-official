<script lang="ts">
	import { content } from '$lib/content';
	import Seo from '$lib/seo/Seo.svelte';
	import { organizationSchema } from '$lib/seo/jsonld';
	import SiteFooter from '$lib/ui/SiteFooter.svelte';
	import SiteHeader from '$lib/ui/SiteHeader.svelte';

	const path = '/en/studio/';
	const title = 'First Light | Seori Labs';
	const description = 'First Light is the Seori Labs studio logo and game opening.';
	const frames = [
		{ name: 'Landscape', width: 1600, height: 900, image: '/brand/first-light-landscape.webp' },
		{ name: 'Portrait', width: 900, height: 1600, image: '/brand/first-light-portrait.webp' }
	];
</script>

<Seo {title} {description} {path} locale="en" jsonLd={[organizationSchema()]} />
<SiteHeader locale="en" otherLocalePath="/#studio" currentPath={path} />

<main>
	<div class="introduction">
		<h1>First Light</h1>
		<p>
			Two angular pieces come together to form the Seori Labs mark. The opening moves through blue
			crystal before the game begins.
		</p>
	</div>

	<div class="frames">
		{#each frames as frame (frame.image)}
			<figure>
				<img
					src={frame.image}
					width={frame.width}
					height={frame.height}
					alt="Seori Labs over blue crystal"
				/>
				<figcaption>
					<span>{frame.name} · {frame.width} × {frame.height}</span>
					<a href={frame.image} download
						>Download<span class="visually-hidden"> {frame.name.toLowerCase()} splash</span></a
					>
				</figcaption>
			</figure>
		{/each}
	</div>

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
		grid-template-columns: minmax(0, 16fr) minmax(0, 5.0625fr);
		gap: 12px;
	}

	figure img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: var(--r-sm);
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

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
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
