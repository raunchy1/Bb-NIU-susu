export type NearbyPlace = {
  name: string;
  category: string;
  distance: string;
  driveTime: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  { name: "Tortolì / Arbatax Airport", category: "Airport", distance: "27 km", driveTime: "30 min" },
  { name: "Cagliari Elmas Airport", category: "Airport", distance: "112 km", driveTime: "1h 45" },
  { name: "Spiaggia di Orrì", category: "Beach", distance: "23 km", driveTime: "25 min" },
  { name: "Cala Gonone", category: "Beach", distance: "48 km", driveTime: "1h 05" },
  { name: "Museo Maria Lai, Ulassai", category: "Culture", distance: "18 km", driveTime: "22 min" },
  { name: "Lanusei town centre", category: "Restaurants & shops", distance: "1.2 km", driveTime: "4 min" },
  { name: "Punta Corrasi trailhead", category: "Hiking", distance: "15 km", driveTime: "20 min" },
];
