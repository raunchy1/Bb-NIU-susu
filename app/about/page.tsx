import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import lanuseiImage from "@/public/images/about/lanusei.jpg";
import courtyardImage from "@/public/images/about/courtyard.jpg";
import detailImage from "@/public/images/about/detail.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of B&B Niu Susu — a restored stone home in Lanusei, Ogliastra, built on Sardinian hospitality, calm and natural rhythm.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            About Niu Susu
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-4xl text-balance">
            A nest, built into the hillside of Ogliastra.
          </h1>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="text-secondary leading-relaxed text-lg">
            &ldquo;Niu Susu&rdquo; means, roughly, our nest. It is a small
            claim, and we mean it plainly. This was a family house before it
            was anything else — built from the same grey granite that holds
            up the mountains behind it, with walls thick enough to keep July
            out and January in.
          </p>
          <p className="mt-6 text-secondary leading-relaxed text-lg">
            We restored it slowly, room by room, resisting the urge to modernise
            away its character. What you find today is not a boutique concept.
            It is a home that happens to have four rooms for guests.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5]">
            <Image
              src={courtyardImage}
              alt="Interior courtyard of B&B Niu Susu"
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
              alt="The hills of Lanusei and the Gennargentu mountains"
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
              Lanusei sits between the sea and the sky.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">
              The capital of Ogliastra, Lanusei climbs the eastern slope of
              the Gennargentu at nearly 600 metres, close enough to the coast
              to feel it, high enough to escape it. Locals call this
              contrast &ldquo;u mari e su monti&rdquo; — the sea and the
              mountain — and it shapes everything about how life moves here.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">
              Ogliastra remains one of the least developed corners of
              Sardinia, and that is precisely its value. No promenades built
              for tourists, no queues for a view. Just granite villages,
              working shepherds, and a coastline that has kept its own pace.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial mt-32 mb-32">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="relative aspect-[3/4]">
              <Image
                src={detailImage}
                alt="Handwoven thread detail, in the tradition of Ogliastra craft"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
                Hospitality, the way Sardinia has always practised it.
              </h2>
              <p className="mt-6 text-secondary leading-relaxed text-lg">
                Before it was a word on a website, hospitality here meant
                something specific: a table always set for one more, a door
                that stayed open, coffee offered before questions were asked.
                We try to keep that instinct alive — attentive without
                hovering, warm without performance.
              </p>
              <p className="mt-6 text-secondary leading-relaxed text-lg">
                We will tell you where to eat, when the light is best on the
                mountain, and when to simply stay on the terrace and do
                nothing at all. That, too, is a kind of hospitality.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
