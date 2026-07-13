import Link from "next/link";
import Image from "next/image";
import { navPaths, site } from "@/lib/site";
import { localeHref, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import logo from "@/public/images/logo/niu-susu-logo.webp";

export function Footer({
  locale,
  nav,
  footer,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
}) {
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

  return (
    <footer className="border-t border-line mt-32">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src={logo} alt="B&B Niu Susu" className="h-10 w-auto" />
          <p className="mt-4 text-secondary max-w-xs leading-relaxed">
            {footer.tagline
              .replace("{locality}", site.locality)
              .replace("{region}", site.region)}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-4">
            {footer.explore}
          </p>
          <ul className="space-y-3">
            {navPaths.slice(1).map((path) => (
              <li key={path}>
                <Link
                  href={localeHref(locale, path)}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {navLabels[path]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-4">
            {footer.contact}
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-accent transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-accent transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li className="text-secondary">{site.addressLine}</li>
          </ul>
        </div>
      </div>

      <div className="container-editorial py-6 border-t border-line flex flex-col sm:flex-row gap-2 justify-between text-xs text-secondary">
        <p>
          © {new Date().getFullYear()} {site.name}. {footer.rights}
        </p>
        <p>{site.country}</p>
      </div>
    </footer>
  );
}
