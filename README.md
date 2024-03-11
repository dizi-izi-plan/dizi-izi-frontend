This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Or, run the development server in [Docker](https://www.docker.com/get-started/):

- Build image (This is a long-term process and can take up to 3 minutes. You need to rebuild only when dependencies or configuration files were changed, in other words, when it's necessary to run the **npm build** command.):
```bash
docker-compose build
```
- Run the server:
```bash
docker-compose up -d
```
- Stop the server and delete container:
```bash
docker-compose down
```

Docker might be useful when you don't want to install Node.js and dependencies on your machine. Containers can be deleted easier after work. It's configured in such a way that you can work with public and src folders, and changes will appear on a page (`need to uncomment the "volumes" section in the docker-compose.yml file`).


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
