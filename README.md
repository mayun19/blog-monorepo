# Blog App

This is blog app using an official starter Turborepo and blog-ui packages library using as Internal package (because still got problem trying to publish to npmjs).

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

`@repo/blog-ui`: a stub React component library ui shared by Blog App applications

## Features

- Blog List
- Detail Blog
- Post a Blog
- Edit Blog Post
- Delete a Blog Post

## 💻 Built With

- Next.js
- TypeScript
- Tailwind CSS
- Daisy UI
- Prisma
- Tanstack React-query
- Axios
- React Hook Form
- React Toastify
- Uuid": 
- Lucide React
- Vercel

## Screenshot App
![image](https://github.com/mayun19/blog-monorepo/assets/16263184/25e45e15-a927-419d-9c3a-6613fb424d78)
![image](https://github.com/mayun19/blog-monorepo/assets/16263184/1694bdf0-ba3a-4665-88de-f9ecef6ab439)
![image](https://github.com/mayun19/blog-monorepo/assets/16263184/74e6b43b-7cb1-42b5-8715-2d5768a53d74)

## Using this example

Run the following command:

```sh
git clone git@github.com:mayun19/blog-monorepo.git
```

### Build

To build all apps and packages, run the following command:

```
cd blog-monorepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd blog-monorepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd blog-monorepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```
