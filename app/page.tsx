import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import { experiences } from "@/data/experiences";
import courtyardImage from "@/public/images/about/courtyard.jpg";
import breakfastImage from "@/public/images/breakfast/table.jpg";

export const metadata: Metadata = {
  title: "Luxury B&B in Lanusei, Ogliastra — Sardinia",
  description:
    "B&B Niu Susu is a quiet, handcrafted stay in Lanusei, Ogliastra. Sardinian stone architecture, homemade breakfast and the wild landscape of the Gennargentu.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Intro storytelling */}
      <section className="container-editorial py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5]">
              <Image
                src={courtyardImage}
                alt="The stone courtyard at B&B Niu Susu, Lanusei"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
                Welcome
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
                A house built the way Ogliastra has always built —
                <span className="text-accent"> for shade, for silence,</span>{" "}
                for gathering.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-secondary leading-relaxed">
                Niu Susu sits at the edge of Lanusei, where the granite of the
                Gennargentu meets the first light off the Ionian Sea. We
                didn&apos;t set out to build a hotel. We restored a family
                home, kept its thick stone walls and its unhurried rhythm, and
                opened four rooms to travellers who want the same thing we
                do: fewer things, done properly.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Button variant="ghost" asChild className="mt-8 px-0">
                <Link href="/about">Our story →</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="bg-foreground text-background py-28 md:py-36">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Rooms"
            title="Four rooms. Nothing extraneous."
            description="Each room at Niu Susu was finished by hand — thick linen, quiet light, a private bathroom, and a terrace where it matters."
            className="[&_p.text-secondary]:text-background/60"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.08}>
                <Link href="/rooms" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`${room.name} at B&B Niu Susu`}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 font-serif text-xl">{room.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-background/50 mt-1">
                    {room.guests} guests · {room.size}
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
              <Link href="/rooms">View all rooms</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Breakfast teaser */}
      <section className="container-editorial py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              Breakfast
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
              Homemade, unhurried, and worth waking up for.
            </h2>
            <p className="mt-6 text-secondary leading-relaxed">
              Local ricotta, fruit from the valley, cakes baked the same
              morning. Breakfast at Niu Susu is served slowly, at a table,
              with coffee that keeps coming.
            </p>
            <Button variant="ghost" asChild className="mt-8 px-0">
              <Link href="/breakfast">See the breakfast →</Link>
            </Button>
          </div>
          <Reveal className="order-1 md:order-2">
            <div className="relative aspect-[4/3]">
              <Image
                src={breakfastImage}
                alt="Homemade breakfast table at B&B Niu Susu"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experiences preview */}
      <section className="bg-[#F1ECE3] py-28 md:py-36">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Experiences"
            title="Ogliastra doesn't perform for visitors."
            description="Sea, mountains, ancient stone and quiet villages — a landscape that rewards curiosity rather than itineraries."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp, i) => (
              <Reveal key={exp.slug} delay={i * 0.08}>
                <Link href="/experiences" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-accent">
                    {exp.tag}
                  </p>
                  <p className="mt-1 font-serif text-xl">{exp.title}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12">
            <Button variant="outline" asChild>
              <Link href="/experiences">Discover Ogliastra</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Closing quote */}
      <section className="container-editorial py-28 md:py-40 text-center">
        <Reveal>
          <p className="font-serif text-3xl md:text-5xl leading-[1.25] max-w-3xl mx-auto text-balance">
            &ldquo;We don&apos;t want you to book a room. We want you to
            remember a place.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button variant="primary" asChild className="mt-10">
            <Link href="/contact">Reserve now</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
