"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

function withLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  segments[1] = target;
  return segments.join("/") || "/";
}

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();
  const other = locales.find((l) => l !== locale)!;

  return (
    <Link
      href={withLocale(pathname, other)}
      className={className}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${other};path=/;max-age=31536000`;
      }}
    >
      {other === "it" ? "Italiano" : "English"}
    </Link>
  );
}
