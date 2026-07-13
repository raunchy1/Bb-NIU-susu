import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import lanuseiImage from "@/public/images/about/lanusei.jpg";
import courtyardImage from "@/public/images/about/courtyard.jpg";
import detailImage from "@/public/images/about/detail.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const dict = getDictionary(locale);
  return {
    title: dict.seo.pages.about.title,
    description: dict.seo.pages.about.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const t = getDictionary(locale).about;

  return (
    <div className="pt-32 md:pt-40">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-4xl text-balance">
            {t.title}
          </h1>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="text-secondary leading-relaxed text-lg">{t.intro1}</p>
          <p className="mt-6 text-secondary leading-relaxed text-lg">{t.intro2}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5]">
            <Image
              src={courtyardImage}
              alt={t.courtyardAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-32 grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 md:order-1">
          <div className="relative aspect-[4/5]">
            <Image
              src={lanuseiImage}
              alt={t.lanuseiAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="order-1 md:order-2">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
              {t.lanuseiHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">{t.lanusei1}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">{t.lanusei2}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial mt-32 mb-32">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="relative aspect-[3/4]">
              <Image
                src={detailImage}
                alt={t.detailAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
                {t.hospitalityHeading}
              </h2>
              <p className="mt-6 text-secondary leading-relaxed text-lg">{t.hospitality1}</p>
              <p className="mt-6 text-secondary leading-relaxed text-lg">{t.hospitality2}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
