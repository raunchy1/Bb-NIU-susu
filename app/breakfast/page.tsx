import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import tableImage from "@/public/images/breakfast/table.jpg";
import detailImage from "@/public/images/breakfast/detail.jpg";

export const metadata: Metadata = {
  title: "Breakfast",
  description:
    "Homemade breakfast at B&B Niu Susu — fresh local ingredients, coffee and homemade cakes, served slowly every morning in Lanusei.",
};

export default function BreakfastPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Breakfast
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            The one meal we refuse to rush.
          </h1>
        </Reveal>
      </section>

      <section className="mt-16 relative aspect-[16/9] md:aspect-[21/9]">
        <Reveal>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={tableImage}
              alt="Homemade breakfast table with local ingredients at Niu Susu"
              fill
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-balance">
              Local, seasonal, and made that morning.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">
              Breakfast begins early in our kitchen, well before the first
              guest sits down. Bread from the village oven, ricotta and
              honey from farms we know by name, fruit picked from the valley
              when it&apos;s in season — nothing arrives from very far away.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-secondary leading-relaxed text-lg">
              There is always a homemade cake, usually more than one, and
              coffee that keeps arriving until you decide you&apos;ve had
              enough. Take your time. No one is waiting on your table.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative aspect-[3/4]">
            <Image
              src={detailImage}
              alt="Detail of homemade cakes and fresh ingredients"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-editorial mt-28">
        <div className="grid sm:grid-cols-3 gap-10 border-t border-line pt-12">
          {[
            {
              title: "Fresh, local ingredients",
              body: "Sourced from farms and producers around Ogliastra, changing with the season.",
            },
            {
              title: "Coffee, without limit",
              body: "Espresso, moka or filter — however you take it, it keeps coming.",
            },
            {
              title: "Homemade cakes",
              body: "Baked in-house each morning, in the old Sardinian tradition of sweet breakfasts.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-3 text-secondary leading-relaxed">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
