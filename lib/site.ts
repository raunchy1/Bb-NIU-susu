export const site = {
  name: "B&B Niu Susu",
  tagline: "More than a stay. A place to slow down.",
  legalName: "B&B Niu Susu",
  url: "https://www.niususu.it",
  locality: "Lanusei",
  region: "Ogliastra",
  country: "Sardinia, Italy",
  addressLine: "Via Roma, Lanusei, Ogliastra, Sardegna",
  postalCode: "08045",
  phoneDisplay: "+39 328 749 2819",
  phoneHref: "tel:+393287492819",
  whatsappNumber: "393287492819",
  email: "info@niususu.it",
  latitude: 39.8781,
  longitude: 9.5442,
  instagram: "https://www.instagram.com",
} as const;

export const whatsappMessage =
  "Hello,\nI would like information about staying at B&B Niu Susu.";

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/experiences", label: "Experiences" },
  { href: "/breakfast", label: "Breakfast" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
] as const;
