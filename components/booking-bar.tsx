"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

export function BookingBar() {
  return (
    <>
      {/* Desktop sticky bar */}
      <div className="hidden md:flex fixed bottom-0 inset-x-0 z-40 border-t border-line bg-background">
        <div className="container-editorial flex items-center justify-between py-4">
          <p className="font-serif text-lg">
            Ready to slow down in {site.locality}?
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] hover:text-accent transition-colors"
            >
              <Phone size={15} /> Call
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] hover:text-accent transition-colors"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-accent transition-colors"
            >
              <CalendarCheck size={15} /> Reserve
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-line bg-background">
        <a
          href={site.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-wide border-r border-line"
        >
          <Phone size={17} />
          Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-wide border-r border-line"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-wide bg-foreground text-background"
        >
          <CalendarCheck size={17} />
          Reserve
        </Link>
      </div>
    </>
  );
}
