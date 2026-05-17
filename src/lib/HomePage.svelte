<script lang="ts">
	import {
		ArrowUpRight,
		Bot,
		Boxes,
		Compass,
		Globe2,
		Mail,
		Sparkles,
		Workflow
	} from '@lucide/svelte';
	import { content, site, type Locale } from '$lib/content';
	import { legalNav } from '$lib/legalContent';

	export let locale: Locale;

	const c = content[locale];
	const canonical = `${site.url}${locale === 'ko' ? '/' : '/en/'}`;
	const alternate = `${site.url}${locale === 'ko' ? '/en/' : '/'}`;
	const mailHref = `mailto:${site.email}`;
</script>

<svelte:head>
	<title>{c.metaTitle}</title>
	<meta name="description" content={c.metaDescription} />
	<meta name="theme-color" content="#f6f8f8" />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="ko-KR" href={`${site.url}/`} />
	<link rel="alternate" hreflang="en" href={`${site.url}/en/`} />
	<link rel="alternate" hreflang="x-default" href={`${site.url}/`} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={c.metaTitle} />
	<meta property="og:description" content={c.metaDescription} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={`${site.url}${site.image}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={c.metaTitle} />
	<meta name="twitter:description" content={c.metaDescription} />
	<meta name="twitter:image" content={`${site.url}${site.image}`} />
</svelte:head>

<div class="page" lang={c.lang}>
	<header class="site-header" aria-label="Primary navigation">
		<a class="brand" href={locale === 'ko' ? '/' : '/en/'} aria-label={site.name}>
			<span class="brand-mark" aria-hidden="true">
				<img src="/brand/seori-labs-mark.svg" alt="" width="34" height="34" />
			</span>
			<span>{site.name}</span>
		</a>
		<nav class="nav-links" aria-label="Sections">
			<a href="#vision">{c.nav.vision}</a>
			<a href="#capabilities">{c.nav.capabilities}</a>
			<a href="#approach">{c.nav.approach}</a>
			<a href="#labs">{c.nav.labs}</a>
			<a href="#contact">{c.nav.contact}</a>
		</nav>
		<a
			class="language-link"
			href={c.nav.languageHref}
			hreflang={locale === 'ko' ? 'en' : 'ko'}
			aria-label={c.nav.languageLabel}
		>
			<Globe2 size={17} aria-hidden="true" />
			<span>{c.nav.languageText}</span>
		</a>
	</header>

	<main>
		<section class="hero" aria-labelledby="hero-title">
			<img class="hero-image" src={site.image} alt="" aria-hidden="true" fetchpriority="high" />
			<div class="hero-overlay"></div>
			<div class="hero-inner">
				<div class="hero-copy">
					<p class="eyebrow">
						<Sparkles size={18} aria-hidden="true" />
						<span>{c.hero.eyebrow}</span>
					</p>
					<h1 id="hero-title">{c.hero.title}</h1>
					<p class="hero-lead">{c.hero.lead}</p>
					<div class="hero-actions">
						<a class="button primary" href={mailHref}>
							<Mail size={18} aria-hidden="true" />
							<span>{c.hero.primaryCta}</span>
						</a>
						<a class="button secondary" href="#approach">
							<Compass size={18} aria-hidden="true" />
							<span>{c.hero.secondaryCta}</span>
						</a>
					</div>
					<ul class="keyword-list" aria-label="Core focus areas">
						{#each c.hero.keywords as keyword}
							<li>{keyword}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="section vision-section" id="vision" aria-labelledby="vision-title">
			<div class="section-inner split">
				<div>
					<p class="section-kicker">{c.vision.kicker}</p>
					<h2 id="vision-title">{c.vision.title}</h2>
				</div>
				<div class="vision-copy">
					<p>{c.vision.body}</p>
					<div class="proof-grid" aria-label="Seori Labs focus">
						{#each c.vision.proofs as proof}
							<div class="proof-item">
								<strong>{proof.value}</strong>
								<span>{proof.label}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<section
			class="section capabilities-section"
			id="capabilities"
			aria-labelledby="capabilities-title"
		>
			<div class="section-inner">
				<div class="section-heading">
					<p class="section-kicker">{c.capabilities.kicker}</p>
					<h2 id="capabilities-title">{c.capabilities.title}</h2>
					<p>{c.capabilities.body}</p>
				</div>
				<div class="capability-grid">
					{#each c.capabilities.items as item}
						<article class="capability-card">
							<div class="card-icon" data-icon={item.icon}>
								{#if item.icon === 'product'}
									<Boxes size={24} aria-hidden="true" />
								{:else if item.icon === 'automation'}
									<Workflow size={24} aria-hidden="true" />
								{:else}
									<Bot size={24} aria-hidden="true" />
								{/if}
							</div>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="section approach-section" id="approach" aria-labelledby="approach-title">
			<div class="section-inner">
				<div class="section-heading narrow">
					<p class="section-kicker">{c.approach.kicker}</p>
					<h2 id="approach-title">{c.approach.title}</h2>
				</div>
				<div class="step-list">
					{#each c.approach.steps as step, index}
						<article class="step-item">
							<span class="step-number">{String(index + 1).padStart(2, '0')}</span>
							<div>
								<h3>{step.title}</h3>
								<p>{step.body}</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="section labs-section" id="labs" aria-labelledby="labs-title">
			<div class="section-inner split labs-split">
				<div>
					<p class="section-kicker">{c.labs.kicker}</p>
					<h2 id="labs-title">{c.labs.title}</h2>
					<p class="labs-body">{c.labs.body}</p>
				</div>
				<div class="labs-grid">
					{#each c.labs.items as item}
						<article class="lab-card">
							<p>{item.kicker}</p>
							<h3>{item.title}</h3>
							<span>{item.body}</span>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="contact-section" id="contact" aria-labelledby="contact-title">
			<div class="section-inner contact-inner">
				<div>
					<p class="section-kicker">{c.contact.kicker}</p>
					<h2 id="contact-title">{c.contact.title}</h2>
					<p>{c.contact.body}</p>
				</div>
				<a class="button contact-button" href={mailHref}>
					<Mail size={19} aria-hidden="true" />
					<span>{c.contact.cta}</span>
					<ArrowUpRight size={18} aria-hidden="true" />
				</a>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<div>
			<strong>{site.name}</strong>
			<span>{c.footer.tagline}</span>
		</div>
		<nav aria-label="Legal pages">
			{#each legalNav[locale] as item}
				<a href={item.href}>{item.label}</a>
			{/each}
			<a href={mailHref}>{site.email}</a>
		</nav>
	</footer>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		color: #182126;
		background: #f6f8f8;
		font-family:
			Inter,
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
		overflow-x: hidden;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(button),
	:global(input),
	:global(textarea) {
		font: inherit;
	}

	.page {
		width: 100%;
		max-width: 100%;
		min-height: 100vh;
		overflow-x: hidden;
		background: linear-gradient(180deg, rgba(246, 248, 248, 0) 0, #f6f8f8 720px), #f6f8f8;
	}

	.site-header {
		position: absolute;
		top: 0;
		left: 50%;
		right: auto;
		transform: translateX(-50%);
		z-index: 10;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 24px;
		width: min(1180px, calc(100% - 40px));
		margin: 0 auto;
		padding: 22px 0;
		color: #132027;
	}

	.brand,
	.language-link,
	.nav-links {
		display: inline-flex;
		align-items: center;
	}

	.brand {
		gap: 10px;
		font-weight: 800;
		font-size: 1rem;
	}

	.brand-mark {
		display: inline-grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border-radius: 8px;
		box-shadow: 0 10px 22px rgba(12, 24, 31, 0.12);
	}

	.brand-mark img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.nav-links {
		justify-content: center;
		gap: 22px;
		font-size: 0.92rem;
		font-weight: 700;
		color: rgba(19, 32, 39, 0.72);
	}

	.nav-links a,
	.language-link {
		min-height: 38px;
	}

	.nav-links a {
		display: inline-flex;
		align-items: center;
	}

	.nav-links a:hover,
	.language-link:hover {
		color: #0f6f8a;
	}

	.language-link {
		justify-content: center;
		gap: 7px;
		min-width: 76px;
		padding: 0 12px;
		border: 1px solid rgba(19, 32, 39, 0.14);
		background: rgba(255, 255, 255, 0.72);
		border-radius: 8px;
		font-size: 0.9rem;
		font-weight: 800;
		backdrop-filter: blur(12px);
	}

	.hero {
		position: relative;
		min-height: 82svh;
		max-height: 760px;
		overflow: hidden;
		isolation: isolate;
		background: #e7ecee;
	}

	.hero-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
		z-index: -2;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(
				90deg,
				rgba(247, 249, 249, 0.97) 0%,
				rgba(247, 249, 249, 0.9) 33%,
				rgba(247, 249, 249, 0.42) 61%,
				rgba(247, 249, 249, 0.12) 100%
			),
			linear-gradient(
				180deg,
				rgba(247, 249, 249, 0.88) 0%,
				rgba(247, 249, 249, 0.28) 42%,
				rgba(247, 249, 249, 0.74) 100%
			);
	}

	.hero-inner {
		display: grid;
		align-items: center;
		width: min(1180px, calc(100% - 40px));
		min-height: 82svh;
		max-height: 760px;
		margin: 0 auto;
		padding: 112px 0 64px;
	}

	.hero-copy {
		width: min(640px, 100%);
		max-width: 100%;
	}

	.eyebrow,
	.section-kicker {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin: 0 0 18px;
		color: #0f6f8a;
		font-size: 0.84rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1 {
		margin-bottom: 24px;
		color: #10191e;
		font-size: 5.1rem;
		line-height: 0.96;
		letter-spacing: 0;
	}

	.hero-lead {
		width: min(600px, 100%);
		margin-bottom: 30px;
		color: rgba(17, 28, 34, 0.76);
		font-size: 1.18rem;
		line-height: 1.75;
		word-break: keep-all;
	}

	.hero-actions,
	.keyword-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 12px;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		min-height: 48px;
		padding: 0 18px;
		border-radius: 8px;
		font-size: 0.96rem;
		font-weight: 800;
		line-height: 1.1;
		transition:
			transform 160ms ease,
			border-color 160ms ease,
			background-color 160ms ease;
	}

	.button:hover {
		transform: translateY(-1px);
	}

	.button.primary,
	.contact-button {
		border: 1px solid #112128;
		background: #112128;
		color: #ffffff;
		box-shadow: 0 16px 36px rgba(12, 24, 31, 0.2);
	}

	.button.secondary {
		border: 1px solid rgba(17, 33, 40, 0.16);
		background: rgba(255, 255, 255, 0.78);
		color: #112128;
	}

	.keyword-list {
		margin: 26px 0 0;
		padding: 0;
		list-style: none;
	}

	.keyword-list li {
		min-height: 32px;
		padding: 7px 11px;
		border: 1px solid rgba(15, 111, 138, 0.18);
		background: rgba(255, 255, 255, 0.62);
		color: #17576a;
		border-radius: 8px;
		font-size: 0.86rem;
		font-weight: 800;
	}

	.section {
		padding: 104px 0;
	}

	.section-inner {
		width: min(1120px, calc(100% - 40px));
		margin: 0 auto;
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
		gap: 72px;
		align-items: start;
	}

	.section h2 {
		margin-bottom: 0;
		color: #132027;
		font-size: 3rem;
		line-height: 1.08;
		letter-spacing: 0;
		word-break: keep-all;
	}

	.section-heading {
		width: min(760px, 100%);
		margin-bottom: 42px;
	}

	.section-heading.narrow {
		width: min(680px, 100%);
	}

	.section-heading p:not(.section-kicker),
	.vision-copy p,
	.labs-body,
	.contact-inner p {
		color: rgba(19, 32, 39, 0.68);
		font-size: 1.05rem;
		line-height: 1.8;
		word-break: keep-all;
	}

	.section-heading h2 {
		margin-bottom: 18px;
	}

	.vision-section {
		background: #f6f8f8;
	}

	.vision-copy {
		padding-top: 7px;
	}

	.proof-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 10px;
		margin-top: 34px;
	}

	.proof-item,
	.capability-card,
	.lab-card {
		border: 1px solid rgba(18, 33, 40, 0.1);
		background: rgba(255, 255, 255, 0.74);
		border-radius: 8px;
	}

	.proof-item {
		min-height: 118px;
		padding: 18px;
	}

	.proof-item strong {
		display: block;
		margin-bottom: 13px;
		color: #113542;
		font-size: 1.22rem;
	}

	.proof-item span {
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.92rem;
		line-height: 1.55;
	}

	.capabilities-section {
		background: linear-gradient(180deg, #eef4f3 0%, #f6f8f8 100%), #eef4f3;
	}

	.capability-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
	}

	.capability-card {
		position: relative;
		min-height: 310px;
		padding: 28px;
		overflow: hidden;
	}

	.capability-card::before {
		content: '';
		position: absolute;
		inset: 0 0 auto;
		height: 4px;
		background: linear-gradient(90deg, #0f6f8a, #29a889, #f4a629);
	}

	.card-icon {
		display: inline-grid;
		place-items: center;
		width: 48px;
		height: 48px;
		margin-bottom: 28px;
		border-radius: 8px;
		background: #e3f2f4;
		color: #0f6f8a;
	}

	.card-icon[data-icon='automation'] {
		background: #e6f3ee;
		color: #168060;
	}

	.card-icon[data-icon='ai'] {
		background: #fff2d8;
		color: #a96b00;
	}

	.capability-card h3,
	.step-item h3,
	.lab-card h3 {
		margin-bottom: 12px;
		color: #142229;
		font-size: 1.22rem;
		letter-spacing: 0;
	}

	.capability-card p,
	.step-item p,
	.lab-card span {
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.98rem;
		line-height: 1.72;
		word-break: keep-all;
	}

	.approach-section {
		background: #111c22;
		color: #f9fbfb;
	}

	.approach-section h2,
	.approach-section h3 {
		color: #f9fbfb;
	}

	.approach-section .section-kicker {
		color: #74d6d5;
	}

	.step-list {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.18);
	}

	.step-item {
		min-height: 262px;
		padding: 30px 24px 0 0;
		border-right: 1px solid rgba(255, 255, 255, 0.14);
	}

	.step-item:last-child {
		border-right: 0;
	}

	.step-number {
		display: inline-flex;
		margin-bottom: 52px;
		color: #74d6d5;
		font-size: 0.88rem;
		font-weight: 900;
	}

	.step-item p {
		color: rgba(249, 251, 251, 0.66);
	}

	.labs-section {
		background: #f6f8f8;
	}

	.labs-body {
		margin-top: 24px;
	}

	.labs-grid {
		display: grid;
		gap: 12px;
	}

	.lab-card {
		padding: 22px;
	}

	.lab-card p {
		margin-bottom: 14px;
		color: #0f6f8a;
		font-size: 0.78rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	.lab-card h3 {
		margin-bottom: 10px;
	}

	.lab-card span {
		display: block;
	}

	.contact-section {
		padding: 82px 0;
		background: linear-gradient(135deg, #dff0ef 0%, #f9f4e8 100%);
	}

	.contact-inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		align-items: center;
		gap: 40px;
	}

	.contact-inner h2 {
		max-width: 760px;
		margin-bottom: 18px;
		color: #132027;
		font-size: 2.45rem;
		line-height: 1.16;
		word-break: keep-all;
	}

	.contact-inner p {
		max-width: 720px;
		margin-bottom: 0;
	}

	.contact-button {
		min-width: 250px;
		min-height: 56px;
	}

	.site-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		width: min(1120px, calc(100% - 40px));
		margin: 0 auto;
		padding: 28px 0;
		color: rgba(19, 32, 39, 0.66);
		font-size: 0.9rem;
	}

	.site-footer div {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.site-footer strong {
		color: #132027;
	}

	.site-footer nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 12px 16px;
	}

	.site-footer a {
		font-weight: 800;
		color: #0f6f8a;
	}

	@media (max-width: 980px) {
		.site-header {
			grid-template-columns: auto auto;
		}

		.nav-links {
			display: none;
		}

		h1 {
			font-size: 4rem;
		}

		.split,
		.contact-inner {
			grid-template-columns: 1fr;
			gap: 34px;
		}

		.capability-grid,
		.step-list {
			grid-template-columns: 1fr 1fr;
		}

		.step-item:nth-child(2) {
			border-right: 0;
		}

		.step-item {
			border-bottom: 1px solid rgba(255, 255, 255, 0.14);
		}

		.step-item:nth-child(n + 3) {
			border-bottom: 0;
		}

		.contact-button {
			justify-self: start;
		}
	}

	@media (max-width: 720px) {
		.site-header,
		.hero-inner,
		.section-inner,
		.site-footer {
			width: calc(100vw - 56px);
			max-width: 1120px;
		}

		.site-header {
			display: flex;
			justify-content: space-between;
			gap: 12px;
			padding-top: 16px;
		}

		.language-link {
			flex: 0 0 auto;
			min-width: 70px;
			padding: 0 10px;
		}

		.brand {
			font-size: 0.96rem;
		}

		.hero,
		.hero-inner {
			min-height: 78svh;
		}

		.hero-inner {
			padding: 96px 0 54px;
		}

		.hero-copy {
			width: 100%;
			max-width: calc(100vw - 56px);
		}

		.hero-image {
			object-position: 62% center;
		}

		.hero-overlay {
			background:
				linear-gradient(
					90deg,
					rgba(247, 249, 249, 0.98) 0%,
					rgba(247, 249, 249, 0.88) 52%,
					rgba(247, 249, 249, 0.3) 100%
				),
				linear-gradient(
					180deg,
					rgba(247, 249, 249, 0.95) 0%,
					rgba(247, 249, 249, 0.44) 52%,
					rgba(247, 249, 249, 0.84) 100%
				);
		}

		h1 {
			font-size: 2.7rem;
		}

		.hero-lead {
			font-size: 1.03rem;
			line-height: 1.7;
			overflow-wrap: anywhere;
			word-break: break-all;
		}

		.hero-actions {
			align-items: stretch;
		}

		.button {
			width: 100%;
			min-height: 50px;
		}

		.keyword-list {
			display: grid;
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.keyword-list li {
			width: 100%;
			font-size: 0.8rem;
			text-align: center;
		}

		.section {
			padding: 72px 0;
		}

		.section h2 {
			font-size: 1.72rem;
			line-height: 1.16;
			overflow-wrap: anywhere;
			word-break: break-all;
		}

		.section-heading p:not(.section-kicker),
		.vision-copy p,
		.labs-body,
		.contact-inner p,
		.capability-card p,
		.step-item p,
		.lab-card span {
			overflow-wrap: anywhere;
		}

		.proof-grid,
		.capability-grid,
		.step-list {
			grid-template-columns: 1fr;
		}

		.capability-card {
			min-height: 0;
		}

		.step-list {
			border-top: 0;
		}

		.step-item,
		.step-item:nth-child(2),
		.step-item:nth-child(n + 3) {
			min-height: 0;
			padding: 22px 0;
			border-right: 0;
			border-bottom: 1px solid rgba(255, 255, 255, 0.14);
		}

		.step-item:last-child {
			border-bottom: 0;
		}

		.step-number {
			margin-bottom: 18px;
		}

		.contact-inner h2 {
			font-size: 2rem;
		}

		.contact-button {
			width: 100%;
			min-width: 0;
		}

		.site-footer {
			display: grid;
			gap: 12px;
		}

		.site-footer nav {
			justify-content: flex-start;
		}
	}

	@media (max-width: 600px) {
		.site-header,
		.hero-inner,
		.section-inner,
		.site-footer {
			width: min(calc(100vw - 56px), 306px);
		}

		.hero-copy {
			max-width: min(calc(100vw - 56px), 306px);
		}
	}
</style>
