FROM node:lts-alpine AS build
WORKDIR /app

LABEL author='Dizi-izi-Team'
LABEL maintainer='<https://github.com/dizi-izi-plan>'

ARG API_URL

COPY package*.json ./
RUN npm ci

COPY ./ ./
RUN NEXT_PUBLIC_API_URL=$API_URL npm run build

FROM node:lts-alpine AS run
WORKDIR /app

RUN apk update && apk add curl && rm -rf /var/cache/apk/*

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 3000
CMD ["npm", "start"]
