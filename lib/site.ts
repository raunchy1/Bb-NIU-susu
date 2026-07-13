export const site = {
  name: "B&B Niu Susu",
  legalName: "B&B Niu Susu",
  url: "https://www.niususu.it",
  locality: "Lanusei",
  region: "Ogliastra",
  country: "Sardinia, Italy",
  addressLine: "Via Siconi 9, Lanusei, Ogliastra, Sardegna",
  postalCode: "08045",
  phoneDisplay: "+39 328 749 2819",
  phoneHref: "tel:+393287492819",
  whatsappNumber: "393287492819",
  email: "info@niususu.it",
  latitude: 39.8781,
  longitude: 9.5442,
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navPaths = [
  "/",
  "/about",
  "/rooms",
  "/gallery",
  "/experiences",
  "/breakfast",
  "/location",
  "/contact",
] as const;
