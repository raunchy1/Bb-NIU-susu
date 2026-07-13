import Link from "next/link";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { rooms } from "@/data/rooms";
import { experiences } from "@/data/experiences";
import { isLocale, localeHref, type Locale } from "@/lib/i18n/config";
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
    title: dict.seo.pages.home.title,
    description: dict.seo.pages.home.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <>
      <HomeHero locale={locale} t={t.hero} whatsappMessage={dict.whatsapp.message} />

      {/* Intro storytelling */}
      <section className="container-editorial py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <PhotoPlaceholder className="aspect-[4/5]" />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                {t.welcome.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
                {t.welcome.titleBefore}
                <span className="text-accent">{t.welcome.titleAccent}</span>
                {t.welcome.titleAfter}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-secondary leading-relaxed">{t.welcome.body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Button variant="ghost" asChild className="mt-8 px-0">
                <Link href={localeHref(locale, "/about")}>{t.welcome.cta}</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-foreground text-background py-28 md:py-36">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={t.rooms.eyebrow}
            title={t.rooms.title}
            description={t.rooms.description}
            className="[&_p.text-secondary]:text-background/60"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.08}>
                <Link href={localeHref(locale, "/rooms")} className="group block">
                  <PhotoPlaceholder className="aspect-[4/5]" />
                  <p className="mt-4 font-serif text-xl">
                    {dict.rooms.items[room.slug as keyof typeof dict.rooms.items].name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-background/50 mt-1">
                    {room.guests} {t.rooms.guestsSuffix}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12">
            <Button
              variant="outline"
              asChild
              className="border-background/40 text-background hover:border-accent hover:text-accent"
            >
              <Link href={localeHref(locale, "/rooms")}>{t.rooms.cta}</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Breakfast teaser */}
      <section className="container-editorial py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              {t.breakfast.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
              {t.breakfast.title}
            </h2>
            <p className="mt-6 text-secondary leading-relaxed">{t.breakfast.body}</p>
            <Button variant="ghost" asChild className="mt-8 px-0">
              <Link href={localeHref(locale, "/breakfast")}>{t.breakfast.cta}</Link>
            </Button>
          </div>
          <Reveal className="order-1 md:order-2">
            <PhotoPlaceholder className="aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      {/* Experiences preview */}
      <section className="bg-[#F1ECE3] py-28 md:py-36">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={t.experiences.eyebrow}
            title={t.experiences.title}
            description={t.experiences.description}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp, i) => {
              const expT = dict.experiences.items[exp.slug as keyof typeof dict.experiences.items];
              return (
                <Reveal key={exp.slug} delay={i * 0.08}>
                  <Link href={localeHref(locale, "/experiences")} className="group block">
                    <PhotoPlaceholder className="aspect-[3/4]" />
                    <p className="mt-4 text-xs uppercase tracking-[0.15em] text-accent">
                      {expT.tag}
                    </p>
                    <p className="mt-1 font-serif text-xl">{expT.title}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2} className="mt-12">
            <Button variant="outline" asChild>
              <Link href={localeHref(locale, "/experiences")}>{t.experiences.cta}</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Closing quote */}
      <section className="container-editorial py-28 md:py-40 text-center">
        <Reveal>
          <p className="font-serif text-3xl md:text-5xl leading-[1.25] max-w-3xl mx-auto text-balance">
            {t.closing.quote}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button variant="primary" asChild className="mt-10">
            <Link href={localeHref(locale, "/contact")}>{t.closing.cta}</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
