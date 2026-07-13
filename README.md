# B&B Niu Susu

Hospitality website for B&B Niu Susu, in Lanusei, Ogliastra, Sardinia.

Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form + Zod.
Bilingual: Italian (default) and English, via `/it` and `/en` routes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/it` or `/en`
depending on browser language / a previously chosen `NEXT_LOCALE` cookie.

## Internationalisation

- `middleware.ts` detects the visitor's locale (cookie, then `Accept-Language`, then
  Italian by default) and redirects unprefixed paths to `/it/...` or `/en/...`.
- All pages live under `app/[locale]/`.
- Copy lives in `lib/i18n/dictionaries/{it,en}.ts`, sharing one `Dictionary` type
  (`it.ts` is typed against `en.ts`, so a missing key is a build-time TypeScript error).
- The language switcher (`components/language-switcher.tsx`) swaps the locale segment
  of the current path and sets the `NEXT_LOCALE` cookie.

## Real photography vs. placeholder art

Some images are real property photos (rooms, entrance, terrace, kitchen — supplied by
the owner); a few (`about/detail.jpg`, `breakfast/detail.jpg`, `og/og-image.jpg`,
gallery filler images) are still generated editorial line-art placeholders from
`scripts/generate-placeholders.mjs`, since no real photo was available yet for those
slots. Replace any remaining placeholder by dropping a same-named file into
`public/images/<section>/` — the generator script only touches files still listed in
its own `jobs` array, so it's safe to leave in place.

## Content data

Room, gallery, experience and nearby-place structural data (slugs, images, categories)
lives in `data/*.ts`. All display copy (names, descriptions) lives in the i18n
dictionaries, keyed by the same slugs — edit both together when adding/removing an item.

## Contact form

`app/api/contact/route.ts` validates submissions with Zod and logs them server-side.
Wire in a real email/CRM provider (e.g. Resend) before relying on it in production.
