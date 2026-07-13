import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site, whatsappHref } from "@/lib/site";
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
    title: dict.seo.pages.contact.title,
    description: dict.seo.pages.contact.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const dict = getDictionary(locale);
  const t = dict.contact;

  const roomNames = Object.fromEntries(
    Object.entries(dict.rooms.items).map(([slug, room]) => [slug, room.name])
  );

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

      <section className="container-editorial mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <Reveal>
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                {t.callOrWhatsapp}
              </p>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 font-serif text-xl hover:text-accent transition-colors"
              >
                <Phone size={17} /> {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref(dict.whatsapp.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm underline underline-offset-4 decoration-accent/50 hover:text-accent"
              >
                {t.messageWhatsapp}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                {t.email}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 font-serif text-xl hover:text-accent transition-colors"
              >
                <Mail size={17} /> {site.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                {t.address}
              </p>
              <p className="flex items-start gap-2 text-secondary leading-relaxed">
                <MapPin size={17} className="mt-1 shrink-0" /> {site.addressLine}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Suspense fallback={null}>
            <ContactForm t={t.form} roomNames={roomNames} />
          </Suspense>
        </Reveal>
      </section>
    </div>
  );
}
