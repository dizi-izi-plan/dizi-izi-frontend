# Dockerize a node app
FROM node:20.11-alpine as build

# Add labels
LABEL author='Dizi-izi-Team'
LABEL maintainer='<https://github.com/dizi-izi-plan>'

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Build app
COPY . ./
RUN npm run build

EXPOSE 3000
