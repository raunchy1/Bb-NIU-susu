import {
  BedDouble,
  Wind,
  Wifi,
  Coffee,
  Croissant,
  Trees,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "Private bathroom": BedDouble,
  "Air conditioning": Wind,
  WiFi: Wifi,
  Breakfast: Croissant,
  "Coffee machine": Coffee,
  Terrace: Trees,
};

export function AmenityIcon({ amenity }: { amenity: string }) {
  const Icon = map[amenity] ?? Wifi;
  return <Icon size={15} strokeWidth={1.5} />;
}
