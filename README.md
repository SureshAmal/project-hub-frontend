# Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Set the Vercel project Root Directory to [frontend](.).

Required environment variables:

```env
NEXTAUTH_URL=https://your-frontend-domain.vercel.app
NEXTAUTH_SECRET=your-random-secret
JWT_SECRET=your-random-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

DATABASE_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require
DIRECT_URL=postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require

NEXT_PUBLIC_API_URL=https://your-python-backend-domain/api

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=optional
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=optional
```

Notes:

- `DATABASE_URL` is used by Prisma at runtime.
- `DIRECT_URL` should point to the same Neon/Postgres database. If you only have one Neon connection string, use it for both.
- `NEXT_PUBLIC_API_URL` must target the deployed Python backend, not localhost.
- Add the Vercel domain to your Google OAuth allowed redirect URLs.

Build settings:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty for Next.js

This frontend already runs `prisma generate` during install via `postinstall`.

For more details, see [frontend/.env.example](.env.example).
