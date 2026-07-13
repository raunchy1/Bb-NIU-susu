import type { Metadata } from "next";
import { Navigation } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { nearbyPlaces } from "@/data/nearby";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location",
  description:
    "How to reach B&B Niu Susu in Lanusei, Ogliastra — driving directions, nearby beaches, airports and attractions.",
};

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${site.latitude},${site.longitude}`;
const mapEmbedSrc = `https://www.google.com/maps?q=${site.latitude},${site.longitude}&z=13&output=embed`;

export default function LocationPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Location
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            Easy to reach. Easy to forget the time.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-secondary leading-relaxed max-w-xl text-lg">
            {site.addressLine}. We&apos;re happy to help you plan the drive
            from the airport or the ferry port.
          </p>
        </Reveal>
      </section>

      <section className="container-editorial mt-16">
        <Reveal>
          <div className="relative aspect-[16/9] md:aspect-[21/9] border border-line">
            <iframe
              src={mapEmbedSrc}
              title={`Map showing the location of ${site.name} in Lanusei`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <Button variant="outline" asChild className="mt-6 text-xs py-3 px-6">
            <a href={directionsHref} target="_blank" rel="noopener noreferrer">
              <Navigation size={15} className="mr-1" /> Get driving directions
            </a>
          </Button>
        </Reveal>
      </section>

      <section className="container-editorial mt-28">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl">Nearby</h2>
        </Reveal>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {nearbyPlaces.map((place, i) => (
            <Reveal key={place.name} delay={i * 0.04}>
              <div className="flex items-center justify-between gap-4 py-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.1em] text-accent">
                    {place.category}
                  </p>
                  <p className="mt-1 font-serif text-xl">{place.name}</p>
                </div>
                <div className="text-right text-sm text-secondary shrink-0">
                  <p>{place.distance}</p>
                  <p>{place.driveTime}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
