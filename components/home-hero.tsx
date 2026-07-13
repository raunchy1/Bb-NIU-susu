"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import heroImage from "@/public/images/hero/hero-facade.jpg";

export function HomeHero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="The stone arches of B&B Niu Susu at first light"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/25" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.35em] mb-6"
        >
          Lanusei · Ogliastra · Sardinia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.08] text-balance max-w-4xl"
        >
          More than a stay.
          <br />A place to slow down.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button variant="accent" asChild>
            <Link href="/contact">Book your stay</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-background/50 text-background hover:border-background hover:text-background hover:bg-background/10"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 inset-x-0 flex justify-center text-background"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-[1px] bg-background/60"
        />
      </motion.div>
    </section>
  );
}
