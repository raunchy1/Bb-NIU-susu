"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "bg-background border-b border-line py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide"
          aria-label={`${site.name} — home`}
        >
          Niu Susu
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-[0.15em] transition-colors hover:text-accent",
                pathname === item.href ? "text-accent" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="outline" asChild className="text-xs py-3 px-6">
            <Link href="/contact">Book your stay</Link>
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
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.15em]"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" asChild className="mt-2 w-fit text-xs py-3 px-6">
            <Link href="/contact">Book your stay</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
