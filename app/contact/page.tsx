import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with B&B Niu Susu in Lanusei, Ogliastra — enquire about availability, rates and directions.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            Tell us when, we&apos;ll take care of the rest.
          </h1>
        </Reveal>
      </section>

      <section className="container-editorial mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <Reveal>
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                Call or WhatsApp
              </p>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 font-serif text-xl hover:text-accent transition-colors"
              >
                <Phone size={17} /> {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm underline underline-offset-4 decoration-accent/50 hover:text-accent"
              >
                Message us on WhatsApp
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-2">
                Email
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
                Address
              </p>
              <p className="flex items-start gap-2 text-secondary leading-relaxed">
                <MapPin size={17} className="mt-1 shrink-0" /> {site.addressLine}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </section>
    </div>
  );
}
