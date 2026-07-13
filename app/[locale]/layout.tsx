import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { BookingBar } from "@/components/booking-bar";
import { site } from "@/lib/site";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "it";
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.seo.siteTitleDefault,
      template: dict.seo.siteTitleTemplate,
    },
    description: dict.seo.siteDescription,
    keywords: [
      "B&B Niu Susu",
      "Lanusei",
      "Ogliastra",
      "Sardinia bed and breakfast",
      "Sardegna B&B",
    ],
    authors: [{ name: site.name }],
    openGraph: {
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      images: [{ url: "/images/og/og-image.jpg", width: 1200, height: 630 }],
      locale: dict.meta.localeTag,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      images: ["/images/og/og-image.jpg"],
    },
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        it: `${site.url}/it`,
        en: `${site.url}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);

  const hotelJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    description: dict.seo.hotelDescription,
    url: `${site.url}/${locale}`,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.latitude,
      longitude: site.longitude,
    },
    image: [`${site.url}/images/about/courtyard.jpg`],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private bathroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Homemade breakfast", value: true },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.seo.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 md:pb-[68px]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Navbar locale={locale} nav={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} nav={dict.nav} footer={dict.footer} />
        <WhatsappButton message={dict.whatsapp.message} />
        <BookingBar locale={locale} common={dict.common} whatsappMessage={dict.whatsapp.message} />
      </body>
    </html>
  );
}
