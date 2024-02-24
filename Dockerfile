# Dockerize a node app
FROM node:20.11.1-alpine as build

# Add labels
LABEL author='Dizi-izi-Team'
LABEL maintainer='<https://github.com/dizi-izi-plan>'

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Switch from 'root' to 'doc_user' for more safety
RUN adduser --disabled-password --gecos '' doc_user
USER doc_user

# Build app
COPY . ./
RUN npm run build

CMD next start
