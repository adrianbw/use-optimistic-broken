This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Its purpose is to show that importing `experimental_useOptimistic` into a server component throws the wrong error.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) and you'll see that the page loads fine. This is because that page is marked with `'use client';`
- Open [http://localhost:3000/server](http://localhost:3000/server) to see the wrong error get thrown (`Error: (0 , react__WEBPACK_IMPORTED_MODULE_1__.experimental_useOptimistic) is not a function or its return value is not iterable`)
