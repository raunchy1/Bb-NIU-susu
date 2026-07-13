export type NearbyPlace = {
  id: string;
  name: string;
  categoryKey: "airport" | "beach" | "culture" | "hiking" | "townCentre";
  distance: string;
  driveTime: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  { id: "arbatax-airport", name: "Aeroporto di Tortolì / Arbatax", categoryKey: "airport", distance: "27 km", driveTime: "30 min" },
  { id: "cagliari-airport", name: "Aeroporto di Cagliari Elmas", categoryKey: "airport", distance: "112 km", driveTime: "1h 45" },
  { id: "orri-beach", name: "Spiaggia di Orrì", categoryKey: "beach", distance: "23 km", driveTime: "25 min" },
  { id: "cala-gonone", name: "Cala Gonone", categoryKey: "beach", distance: "48 km", driveTime: "1h 05" },
  { id: "maria-lai-museum", name: "Museo Maria Lai, Ulassai", categoryKey: "culture", distance: "18 km", driveTime: "22 min" },
  { id: "lanusei-centre", name: "Centro di Lanusei", categoryKey: "townCentre", distance: "1.2 km", driveTime: "4 min" },
  { id: "punta-corrasi", name: "Sentiero di Punta Corrasi", categoryKey: "hiking", distance: "15 km", driveTime: "20 min" },
];
