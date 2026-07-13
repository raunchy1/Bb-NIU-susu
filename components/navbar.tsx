"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navPaths } from "@/lib/site";
import { localeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import logo from "@/public/images/logo/niu-susu-logo.webp";

export function Navbar({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLabels: Record<(typeof navPaths)[number], string> = {
    "/": nav.home,
    "/about": nav.about,
    "/rooms": nav.rooms,
    "/gallery": nav.gallery,
    "/experiences": nav.experiences,
    "/breakfast": nav.breakfast,
    "/location": nav.location,
    "/contact": nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background border-b border-line py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link
          href={localeHref(locale, "/")}
          className="flex items-center gap-2"
          aria-label="B&B Niu Susu — home"
        >
          <Image src={logo} alt="B&B Niu Susu" className="h-14 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navPaths.slice(1).map((path) => (
            <Link
              key={path}
              href={localeHref(locale, path)}
              className={cn(
                "text-xs uppercase tracking-[0.15em] transition-colors hover:text-accent",
                pathname === localeHref(locale, path) ? "text-accent" : "text-foreground"
              )}
            >
              {navLabels[path]}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher
            locale={locale}
            className="text-xs uppercase tracking-[0.15em] hover:text-accent transition-colors"
          />
          <Button variant="outline" asChild className="text-xs py-3 px-6">
            <Link href={localeHref(locale, "/contact")}>{nav.bookYourStay}</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden container-editorial mt-6 flex flex-col gap-5 pb-4">
          {navPaths.slice(1).map((path) => (
            <Link
              key={path}
              href={localeHref(locale, path)}
              className="text-sm uppercase tracking-[0.15em]"
            >
              {navLabels[path]}
            </Link>
          ))}
          <LanguageSwitcher
            locale={locale}
            className="text-sm uppercase tracking-[0.15em] text-accent"
          />
          <Button variant="outline" asChild className="mt-2 w-fit text-xs py-3 px-6">
            <Link href={localeHref(locale, "/contact")}>{nav.bookYourStay}</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
