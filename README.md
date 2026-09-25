# Seori Labs Official Website

Official static website for **Seori Labs**.

Seori Labs builds and operates its own mobile games and everyday apps, published on Google Play, the Apple App Store, and AppsInToss.

## Website

- Production domain: <https://www.seorilabs.com>
- Apex redirect: <https://seorilabs.com>
- Default language: Korean
- English route: `/en/`
- Contact: `cs@seorilabs.com`

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit) with static adapter
- TypeScript
- GitHub Pages static hosting
- GitHub Actions deployment

## Local Development

```sh
npm install
npm run dev
```

The development server starts at:

```text
http://127.0.0.1:5173/
```

## Quality Checks

```sh
npm run lint     # prettier
npm run check    # svelte-check + registry validation
npm run build    # static build, then the build validators below
```

`npm run build` writes the static site to `build/` and then runs:

- `scripts/check-urls.mjs` — every externally referenced URL still resolves
- `scripts/check-registry.mjs` — registry paths, assets, and dates are sound
- `scripts/check-build.mjs` — `<html lang>`, canonical, hreflang, `og:image`,
  and sitemap entries point at pages that actually exist

The last one matters because SvelteKit's prerender crawler only follows
root-relative links. A typo in an absolute canonical, hreflang, or `og:image`
URL will not fail the build on its own.

## Brand Assets

The Seori Labs BI/CI package is kept in the repository:

- Brand guide: `docs/brand-guidelines.md`
- Logo assets: `static/brand/`
- Website favicon: `static/favicon.svg` with PNG and ICO fallbacks

## Project Structure

```text
src/lib/products/        Product registry, apps index, landing pages
src/lib/legal/           Legal document index and shared metadata
src/lib/seo/             Shared Seo component and JSON-LD builders
src/lib/ui/              Site header, footer, product card, store links
src/lib/i18n/            Path to locale resolution
src/routes/              Static SvelteKit routes (thin wrappers)
src/hooks.server.ts      Replaces %lang% in app.html per locale
scripts/                 Build-time validators run by npm run check and postbuild
static/                  Static assets copied into the final build
.github/workflows/       CI and deployment workflows
```

## Product Registry

`src/lib/products/registry.ts` is the single source of truth for products. The
homepage product section, `/apps/`, product landing pages, `/legal/`, and
`sitemap.xml` are all derived from it.

Adding a new app:

1. Add one entry to `registry.ts`. Use the live store listing name and short
   description; do not rewrite them, or the site will disagree with what store
   review approved.
2. Add `static/products/{slug}/icon-256.webp`.
3. Write the product privacy policy content file and its `ko`/`en` routes, then
   reference them from the entry's `legal` array.
4. For a full landing page, set `hasLanding: true`, add
   `src/lib/products/copy/{slug}.ts`, and register it in `landings.ts`.

The apps index card, homepage card, `/legal/` row, and sitemap entries follow
automatically. `npm run check` fails if a referenced path or asset is missing.

An entry with `status: 'upcoming'` appears only in the "In progress" cards on
`/apps/`, without store buttons or a landing page, even if `channels` already
lists the pending store identifiers. Once the store listing is confirmed public,
switch `status` to `live`, set `releasedOn`, and keep only the channels that are
actually reachable.

## Legal and Support Pages

The site serves public policy pages used for app store submissions. `/legal/`
lists every one of them.

```text
https://www.seorilabs.com/privacy/          also ja, zh, zh-tw, de, fr, es
https://www.seorilabs.com/terms/
https://www.seorilabs.com/support/
https://www.seorilabs.com/legal/
```

Products with their own data handling, payments, accounts, or ads carry their own
documents:

```text
https://www.seorilabs.com/apps/{slug}/                    product landing
https://www.seorilabs.com/apps/{slug}/privacy/            product privacy policy
https://www.seorilabs.com/apps/{slug}/account-deletion/   Google Play deletion URL
https://www.seorilabs.com/apps/{slug}/terms/              only when it differs
```

English mirrors live under `/en/`.

### URLs that must not move

Store consoles reference these addresses. Moving one breaks an app's store
listing, so `scripts/check-urls.mjs` fails the build if any of them disappears
from `build/`. The list in that script is deliberately a literal — deriving it
from the registry would let a registry typo pass unnoticed.

If a path really has to change, update the store console first, then the script.

### Before submitting an app

- App name and platform
- App Store / Google Play developer name
- Contact email for users and privacy requests
- Data collected directly from users
- Device permissions requested
- Third-party SDKs and APIs
- Analytics, crash reporting, ads, or attribution tools
- Account, login, payment, subscription, or refund behavior
- Data retention and deletion process
- Whether children or minors are an intended audience
- Countries or regions where the app is distributed

## Search Engine Registration

Google Search Console ownership is verified by `static/google2e62fa60f6f170e1.html`.

Naver Search Advisor ownership is verified by
`static/naver87563770d4049cce9eabfc6cbf3c987a.html`.

Bing Webmaster ownership is verified by `static/BingSiteAuth.xml`.

Drop verification files in `static/` exactly as issued — they are copied to the site
root verbatim.

`scripts/check-verification-files.mjs` enforces this on every build: the built file
must match the source byte for byte, must carry no executable content, and a Naver
file's name hash must appear in its body. `.prettierignore` keeps the formatter away
from them, and that check is the backstop for when it does not.

After verification, submit `https://www.seorilabs.com/sitemap.xml` in each console.

### Search terms

A product's `name` in the registry is its **store listing name** and stays exact —
store review approved that string. The landing page's `metaTitle` and
`metaDescription` in `src/lib/products/copy/{slug}.ts` are separate on purpose: that
is where the phrases people actually type belong.

Keeping them identical loses generic queries. `내 도마뱀 키우기` is the product name;
`도마뱀 키우기 게임` is what someone searching for the genre types. The `<h1>` keeps the
store name for brand matches, and the `<title>` carries the generic phrase.

Write them as sentences a person would read. Do not stack keywords.

## Deployment

Deployment is handled by `.github/workflows/deploy.yaml` and GitHub Pages.

On pushes to `main`, the workflow:

1. Runs type checks and a production build.
2. Uploads the generated `build/` directory as a GitHub Pages artifact.
3. Deploys the artifact to the `github-pages` environment.

The GitHub Pages site serves:

- `www.seorilabs.com`
- `seorilabs.com`

`static/.nojekyll` is included so GitHub Pages serves SvelteKit's `_app/` assets as regular static files.

## GitHub Pages Setup

GitHub Pages deployment does not require Docker registry or Kubernetes secrets.

Configure the repository once:

- Repository Settings -> Pages -> Build and deployment -> Source: `GitHub Actions`
- Repository Settings -> Pages -> Custom domain: `www.seorilabs.com`
- Enable `Enforce HTTPS` after DNS and certificate provisioning are ready.
- Optionally verify the `seorilabs.com` domain in the GitHub organization/account settings to reduce takeover risk.

DNS records:

- `www.seorilabs.com`: `CNAME` to `seorilabs.github.io`
- `seorilabs.com`: `A` records to GitHub Pages

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

If the DNS provider supports `ALIAS` or `ANAME`, the apex `seorilabs.com` can point to `seorilabs.github.io` instead of using `A` records.

Optional IPv6 `AAAA` records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

## Public Repository Notes

This repository is safe to keep public as long as secrets stay out of committed files.

The repository may expose non-secret deployment metadata such as public domains and workflow structure. Legacy registry credentials, Kubernetes tokens, and certificate authority data must remain outside the repository if Kubernetes hosting is used again.
