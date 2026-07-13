import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Discover Ogliastra from B&B Niu Susu — the Ionian sea, the Gennargentu mountains, hiking trails, Domus de Janas, the Maria Lai museum and local restaurants.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Experiences
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            Discover Ogliastra, at your own pace.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-secondary leading-relaxed max-w-xl text-lg">
            We are happy to plan your days, or to simply point you in a
            direction and let Ogliastra do the rest. Here is what surrounds
            Niu Susu.
          </p>
        </Reveal>
      </section>

      <section className="mt-20 flex flex-col gap-28">
        {experiences.map((exp, i) => (
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
                    alt={exp.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                    {exp.tag}
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
                    {exp.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-secondary leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
