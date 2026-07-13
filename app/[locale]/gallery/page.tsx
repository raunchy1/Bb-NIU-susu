import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryImages } from "@/data/gallery";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const dict = getDictionary(locale);
  return {
    title: dict.seo.pages.gallery.title,
    description: dict.seo.pages.gallery.description,
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const t = getDictionary(locale).gallery;

  const images = galleryImages.map((img) => ({
    width: img.width,
    height: img.height,
  }));

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            {t.title}
          </h1>
        </Reveal>
      </section>

      <section className="container-editorial mt-16">
        <GalleryGrid images={images} />
      </section>
    </div>
  );
}
