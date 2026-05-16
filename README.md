# Seori Labs Official

Static official website for Seori Labs, built with SvelteKit and deployed to Kubernetes.

## Local Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run check
npm run build
```

## Deployment

The `Build and Deploy` GitHub Actions workflow builds a `linux/arm64` Docker image, pushes it to the configured registry, applies the Kubernetes manifests in `k8s/`, then rolls out the image digest to the `seorilabs-official` Deployment.

Required GitHub secrets:

- `DOCKER_REGISTRY`
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`
- `K8S_SERVER`
- `K8S_TOKEN`
- `K8S_CA_CERT`
- `K8S_NAMESPACE`

The Kubernetes Ingress uses the existing `letsencrypt` ClusterIssuer for `seorilabs.com` and `www.seorilabs.com`.
