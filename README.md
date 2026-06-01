# Seori Labs Official Website

Official static website for **Seori Labs**.

Seori Labs is a software studio focused on product development, automation, AI systems, and practical experiments that create new value.

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
npm run lint
npm run check
npm run build
```

`npm run build` writes the static site to `build/`.

## Brand Assets

The Seori Labs BI/CI package is kept in the repository:

- Brand guide: `docs/brand-guidelines.md`
- Logo assets: `static/brand/`
- Website favicon: `static/favicon.svg`

## Project Structure

```text
src/lib/                 Shared content and homepage component
src/routes/              Static SvelteKit routes
static/                  Static assets copied into the final build
nginx/                   Legacy Nginx config for container hosting
k8s/                     Legacy Kubernetes manifests
.github/workflows/       CI and deployment workflows
```

## Legal and Support Pages

The site serves public policy pages that can be used for app store submissions:

```text
https://www.seorilabs.com/privacy/
https://www.seorilabs.com/terms/
https://www.seorilabs.com/support/
https://www.seorilabs.com/en/privacy/
https://www.seorilabs.com/en/terms/
https://www.seorilabs.com/en/support/
```

Use app-specific policy URLs when an app has different permissions, SDKs, data collection, accounts, payments, ads, analytics, or retention behavior. A recommended structure is:

```text
https://www.seorilabs.com/apps/{app-name}/privacy/
https://www.seorilabs.com/apps/{app-name}/support/
```

Before submitting an app, confirm these details:

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
