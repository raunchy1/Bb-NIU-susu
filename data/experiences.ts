export type Experience = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string;
};

export const experiences: Experience[] = [
  {
    slug: "sea",
    title: "The Ionian coast",
    tag: "Sea",
    description:
      "Twenty-five minutes from Lanusei, the coast of Ogliastra opens into coves of granite and impossibly clear water — Cea, Orrì, Santa Maria Navarrese. Quieter than the north of the island, and more honest for it.",
    image: "/images/experiences/sea.jpg",
  },
  {
    slug: "mountains",
    title: "The Gennargentu massif",
    tag: "Mountains",
    description:
      "Sardinia's highest peaks rise directly behind the house. Oak forests, shepherd trails and villages that have barely changed in a century.",
    image: "/images/experiences/mountains.jpg",
  },
  {
    slug: "hiking",
    title: "Trails through Ogliastra",
    tag: "Hiking",
    description:
      "From gentle valley walks to the demanding ascent of Punta Corrasi, we help you choose a route that matches your morning, not a guidebook's.",
    image: "/images/experiences/hiking.jpg",
  },
  {
    slug: "domus-de-janas",
    title: "Domus de Janas",
    tag: "Archaeology",
    description:
      "\"Houses of the fairies\" — pre-nuragic tombs cut directly into rock, scattered through the hills around Lanusei. Sardinia's history begins long before Rome.",
    image: "/images/experiences/domus-de-janas.jpg",
  },
  {
    slug: "maria-lai",
    title: "Museo Maria Lai, Ulassai",
    tag: "Culture",
    description:
      "A short drive away, the village of Ulassai holds the work of Maria Lai — thread, bread and stone woven into some of Italy's most quietly radical art.",
    image: "/images/experiences/maria-lai.jpg",
  },
  {
    slug: "restaurants",
    title: "Tables worth the drive",
    tag: "Food",
    description:
      "We keep a short, honest list of local restaurants — the ones that still cook culurgiones by hand and pour wine without a label.",
    image: "/images/experiences/restaurants.jpg",
  },
];
