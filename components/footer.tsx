import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl">Niu Susu</p>
          <p className="mt-4 text-secondary max-w-xs leading-relaxed">
            A quiet address in {site.locality}, in the heart of {site.region},
            Sardinia — where the day slows to the rhythm of the mountains.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-4">
            Explore
          </p>
          <ul className="space-y-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-secondary mb-4">
            Contact
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
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.country}</p>
      </div>
    </footer>
  );
}
