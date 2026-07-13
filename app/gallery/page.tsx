import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual tour of B&B Niu Susu in Lanusei, Ogliastra — architecture, rooms, breakfast and the surrounding Sardinian landscape.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <section className="container-editorial">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
            Gallery
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl text-balance">
            A quiet look around.
          </h1>
        </Reveal>
      </section>

      <section className="container-editorial mt-16">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  );
}
