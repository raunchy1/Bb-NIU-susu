# B&B Niu Susu

Luxury hospitality website for B&B Niu Susu, in Lanusei, Ogliastra, Sardinia.

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form + Zod.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Placeholder imagery

This environment has no outbound access to fetch real property photography, so every
image on the site (`public/images/**`) is a generated editorial line-art placeholder —
an abstract visual language (mountain ridgelines, arched loggias, an olive branch, a
thread motif inspired by Maria Lai) rendered in the site's own palette, not a stock photo.

To swap in real photography:

1. Replace the files under `public/images/<section>/<name>.jpg` with real photos,
   keeping the same filenames and roughly the same aspect ratio (see `data/*.ts` and
   the page components for where each file is used).
2. Delete `scripts/generate-placeholders.mjs` once every placeholder has been replaced,
   or leave it as a reference for regenerating a missing placeholder.

## Content data

Room, gallery, experience and nearby-place copy lives in `data/*.ts` — edit there rather
than in the page components.

## Contact form

`app/api/contact/route.ts` validates submissions with Zod and logs them server-side.
Wire in a real email/CRM provider (e.g. Resend) before relying on it in production.
