export type Room = {
  slug: string;
  name: string;
  guests: number;
  size: string;
  description: string;
  image: string;
  amenities: string[];
  hasTerrace: boolean;
};

export const rooms: Room[] = [
  {
    slug: "nuraghe",
    name: "Nuraghe Room",
    guests: 2,
    size: "22 m²",
    description:
      "Named after the ancient stone towers scattered across Ogliastra, this room keeps things quiet: thick walls, soft linen, a window framed on the ridgeline.",
    image: "/images/rooms/room-nuraghe.jpg",
    amenities: ["Private bathroom", "Air conditioning", "WiFi", "Breakfast", "Coffee machine"],
    hasTerrace: false,
  },
  {
    slug: "ortu",
    name: "Ortu Room",
    guests: 2,
    size: "24 m²",
    description:
      "Ortu means garden. This room looks over the courtyard below, where morning light moves slowly across the stone and the air smells of rosemary.",
    image: "/images/rooms/room-ortu.jpg",
    amenities: ["Private bathroom", "Air conditioning", "WiFi", "Breakfast", "Coffee machine", "Terrace"],
    hasTerrace: true,
  },
  {
    slug: "lanterna",
    name: "Lanterna Room",
    guests: 3,
    size: "26 m²",
    description:
      "A warmer room for slower evenings, with space enough for a small family or friends who don't mind sharing the same silence.",
    image: "/images/rooms/room-lanterna.jpg",
    amenities: ["Private bathroom", "Air conditioning", "WiFi", "Breakfast", "Coffee machine"],
    hasTerrace: false,
  },
  {
    slug: "suite-gennargentu",
    name: "Gennargentu Suite",
    guests: 4,
    size: "34 m²",
    description:
      "Our largest room, with a private terrace facing the mountains — the one to book when you want to disappear for a few days.",
    image: "/images/rooms/room-suite.jpg",
    amenities: ["Private bathroom", "Air conditioning", "WiFi", "Breakfast", "Coffee machine", "Terrace"],
    hasTerrace: true,
  },
];
