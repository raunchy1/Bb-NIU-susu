import {
  BedDouble,
  Wind,
  Wifi,
  Coffee,
  Croissant,
  Trees,
  type LucideIcon,
} from "lucide-react";
import type { AmenityKey } from "@/data/rooms";

const map: Record<AmenityKey, LucideIcon> = {
  privateBathroom: BedDouble,
  airConditioning: Wind,
  wifi: Wifi,
  breakfast: Croissant,
  coffeeMachine: Coffee,
  terrace: Trees,
};

export function AmenityIcon({ amenityKey }: { amenityKey: AmenityKey }) {
  const Icon = map[amenityKey];
  return <Icon size={15} strokeWidth={1.5} />;
}
