import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
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
    title: dict.seo.pages.breakfast.title,
    description: dict.seo.pages.breakfast.description,
  };
}

export default async function BreakfastPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const t = getDictionary(locale).breakfast;

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

      <section className="mt-16 container-editorial">
        <Reveal>
          <PhotoPlaceholder className="aspect-[16/9] md:aspect-[21/9] w-full" />
        </Reveal>
      </section>

      <section className="container-editorial mt-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
              {t.subtitle}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">{t.p1}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">{t.p2}</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <PhotoPlaceholder className="aspect-[3/4]" />
        </Reveal>
      </section>

      <section className="container-editorial mt-28">
        <div className="grid sm:grid-cols-3 gap-10 border-t border-line pt-12">
          {t.features.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-3 text-secondary leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
