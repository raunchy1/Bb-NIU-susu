import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { BookingBar } from "@/components/booking-bar";
import { site } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Luxury B&B in Lanusei, Ogliastra, Sardinia`,
    template: `%s — ${site.name}`,
  },
  description:
    "A quiet, handcrafted stay in Lanusei, Ogliastra. B&B Niu Susu pairs Sardinian stone architecture with slow mornings, homemade breakfast and the wild landscape of the Gennargentu.",
  keywords: [
    "B&B Niu Susu",
    "Lanusei",
    "Ogliastra",
    "Sardinia bed and breakfast",
    "luxury B&B Sardinia",
    "Ogliastra accommodation",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — More than a stay. A place to slow down.`,
    description:
      "A quiet, handcrafted stay in Lanusei, Ogliastra. Sardinian stone architecture, slow mornings and homemade breakfast.",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/og/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — More than a stay. A place to slow down.`,
    description:
      "A quiet, handcrafted stay in Lanusei, Ogliastra, Sardinia.",
    images: ["/images/og/og-image.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.name,
  description:
    "A quiet, handcrafted B&B in Lanusei, Ogliastra, Sardinia, offering homemade breakfast and calm, editorial hospitality.",
  url: site.url,
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
  image: [`${site.url}/images/hero/hero-facade.jpg`],
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is B&B Niu Susu located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B&B Niu Susu is in Lanusei, in the Ogliastra region of eastern Sardinia, between the Gennargentu mountains and the Ionian coast.",
      },
    },
    {
      "@type": "Question",
      name: "Is breakfast included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every morning we serve a homemade breakfast with fresh local ingredients, coffee and homemade cakes.",
      },
    },
    {
      "@type": "Question",
      name: "How far is the sea from Niu Susu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ogliastra coast and its beaches are roughly a 25-30 minute drive from Lanusei.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book directly by WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can reach us directly on WhatsApp or through our contact form for availability and rates.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappButton />
        <BookingBar />
      </body>
    </html>
  );
}
