export type AmenityKey =
  | "privateBathroom"
  | "airConditioning"
  | "wifi"
  | "breakfast"
  | "coffeeMachine"
  | "terrace";

export type Room = {
  slug: string;
  guests: number;
  image: string;
  amenityKeys: AmenityKey[];
  hasTerrace: boolean;
};

export const rooms: Room[] = [
  {
    slug: "camera-mia",
    guests: 3,
    image: "/images/rooms/camera-mia.jpg",
    amenityKeys: ["privateBathroom", "airConditioning", "wifi", "breakfast", "coffeeMachine"],
    hasTerrace: false,
  },
  {
    slug: "camera-michele",
    guests: 4,
    image: "/images/rooms/camera-michele.jpg",
    amenityKeys: ["privateBathroom", "airConditioning", "wifi", "breakfast", "coffeeMachine"],
    hasTerrace: false,
  },
  {
    slug: "camera-melissa",
    guests: 2,
    image: "/images/rooms/camera-melissa.jpg",
    amenityKeys: ["privateBathroom", "airConditioning", "wifi", "breakfast", "coffeeMachine"],
    hasTerrace: false,
  },
];
