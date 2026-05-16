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
- Nginx static serving
- Docker image build for `linux/arm64`
- Kubernetes deployment through GitHub Actions
- cert-manager / Let's Encrypt TLS through Kubernetes Ingress

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

## Project Structure

```text
src/lib/                 Shared content and homepage component
src/routes/              Static SvelteKit routes
static/                  Static assets copied into the final build
nginx/                   Runtime Nginx config for the container image
k8s/                     Kubernetes Deployment, Service, and Ingress manifests
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

Deployment is handled by `.github/workflows/deploy.yaml`.

On pushes to `main`, the workflow:

1. Runs type checks and a production build.
2. Builds a `linux/arm64` Docker image.
3. Pushes the image to the configured container registry.
4. Applies the Kubernetes manifests in `k8s/`.
5. Updates the Kubernetes Deployment to the pushed image digest.
6. Waits for rollout completion.

The Kubernetes Ingress serves:

- `www.seorilabs.com`
- `seorilabs.com`

TLS is issued through the existing `letsencrypt` ClusterIssuer.

## Required GitHub Secrets

The repository does not store deployment credentials. Configure these secrets in GitHub before pushing to `main`:

```text
DOCKER_REGISTRY
DOCKER_USERNAME
DOCKER_PASSWORD
K8S_SERVER
K8S_TOKEN
K8S_CA_CERT
K8S_NAMESPACE
```

Notes:

- `DOCKER_REGISTRY` should be the registry host only, without `https://`.
- `K8S_CA_CERT` should be base64-encoded because the workflow decodes it before writing `ca.crt`.
- `K8S_TOKEN` should belong to a service account with the minimum permissions needed to deploy this app.
- `K8S_NAMESPACE` is expected to be `apps` for the current deployment setup.

## Public Repository Notes

This repository is safe to keep public as long as secrets stay in GitHub Secrets and are not committed to files.

The repository may expose non-secret deployment metadata such as Kubernetes resource names, public domains, and workflow structure. Actual registry credentials, Kubernetes tokens, and certificate authority data must remain in GitHub Secrets.
