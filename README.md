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

## Photos

There are currently no property photos in the site — every photo slot renders
`<PhotoPlaceholder />` (`components/photo-placeholder.tsx`), a plain bordered box
that preserves the intended aspect ratio. This is intentional: the owner will add
real photography after approving the design.

To bring photos back for a slot:

1. Drop the image into `public/images/<section>/<name>.jpg`.
2. Replace the corresponding `<PhotoPlaceholder className="aspect-[...]" />` with a
   `next/image` `<Image fill .../>` inside a `relative` wrapper with the same aspect
   class (see git history before the "remove all photos" commit for the exact pattern
   used previously in `app/[locale]/**/page.tsx`, `components/home-hero.tsx` and
   `components/gallery-grid.tsx`).

`data/rooms.ts`, `data/experiences.ts` and `data/gallery.ts` already carry the intended
file paths (e.g. `/images/rooms/camera-mia.jpg`) even though nothing is mounted there
yet, so filenames are pre-agreed once real photos are ready.

## Content data

Room, gallery, experience and nearby-place structural data (slugs, images, categories)
lives in `data/*.ts`. All display copy (names, descriptions) lives in the i18n
dictionaries, keyed by the same slugs — edit both together when adding/removing an item.

## Contact form

`app/api/contact/route.ts` validates submissions with Zod and logs them server-side.
Wire in a real email/CRM provider (e.g. Resend) before relying on it in production.
