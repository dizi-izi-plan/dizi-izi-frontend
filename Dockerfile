FROM node:slim AS build
WORKDIR /app

LABEL author='Dizi-izi-Team'
LABEL maintainer='<https://github.com/dizi-izi-plan>'

ARG API_URL

COPY package*.json ./
RUN npm ci

COPY ./ ./
RUN NEXT_PUBLIC_API_URL=$API_URL npm run build

FROM node:slim AS run
WORKDIR /app

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 3000
CMD ["npm", "start"]
