# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json tsconfig.json vite.config.ts svelte.config.js ./
RUN npm ci

COPY ./src ./src
COPY ./static ./static

RUN npm run build

# ---- Runtime Stage ----
FROM nginx:1.27-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
