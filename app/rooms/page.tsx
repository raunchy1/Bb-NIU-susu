import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Users, Maximize } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { AmenityIcon } from "@/components/amenity-icon";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Rooms",
  description:
    "Four rooms at B&B Niu Susu in Lanusei, Ogliastra — private bathroom, air conditioning, WiFi, breakfast and coffee machine in every room.",
};

export default function RoomsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Rooms
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            Four rooms, each finished by hand.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-secondary leading-relaxed max-w-xl text-lg">
            No two rooms at Niu Susu are quite the same, but all share the
            same instinct: thick stone walls, honest materials, and nothing
            that doesn&apos;t earn its place.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-20 grid md:grid-cols-2 gap-x-8 gap-y-20">
        {rooms.map((room, i) => (
          <Reveal key={room.slug} delay={(i % 2) * 0.1}>
            <article className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={`${room.name} at B&B Niu Susu, Lanusei`}
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">
                    {room.name}
                  </h2>
                  <div className="mt-2 flex items-center gap-4 text-xs uppercase tracking-[0.1em] text-secondary">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} /> {room.guests} guests
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize size={14} /> {room.size}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-secondary leading-relaxed">
                {room.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {room.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-1.5 text-xs uppercase tracking-[0.08em] text-foreground/70"
                  >
                    <AmenityIcon amenity={a} />
                    {a}
                  </li>
                ))}
              </ul>

              <Button variant="outline" asChild className="mt-6 text-xs py-3 px-6">
                <Link href={`/contact?room=${room.slug}`}>Reserve now</Link>
              </Button>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
