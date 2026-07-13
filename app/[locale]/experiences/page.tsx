import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/data/experiences";
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
    title: dict.seo.pages.experiences.title,
    description: dict.seo.pages.experiences.description,
  };
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const t = getDictionary(locale).experiences;

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
        <Reveal delay={0.1}>
          <p className="mt-6 text-secondary leading-relaxed max-w-xl text-lg">
            {t.description}
          </p>
        </Reveal>
      </section>

      <section className="mt-20 flex flex-col gap-28">
        {experiences.map((exp, i) => {
          const expT = t.items[exp.slug as keyof typeof t.items];
          return (
            <div key={exp.slug} className="container-editorial">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={exp.image}
                      alt={expT.title}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <div>
                  <Reveal>
                    <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                      {expT.tag}
                    </p>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
                      {expT.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-6 text-secondary leading-relaxed text-lg">
                      {expT.description}
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
