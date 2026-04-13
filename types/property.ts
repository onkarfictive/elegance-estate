export interface PropertyFeature {
  icon: string;
  label: string;
}

export interface NearbyPlace {
  place: string;
  distance: string;
  icon: string;
}

export interface ContactDetails {
  agentName: string;
  agentPhone: string;
  agentEmail: string;
  agentImage: string;
}

export type City = "Bangalore" | "Mumbai" | "Noida" | "Hyderabad" | "all";

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  city: "Bangalore" | "Mumbai" | "Noida" | "Hyderabad";
  price: number;
  rooms: number;
  bathrooms: number;
  area: number;
  image: string;
  category: string;
  amenities: string[];
  features: PropertyFeature[];
  nearby: NearbyPlace[];
  contact: ContactDetails;
}

export interface ServerFiltersProps {
  initialQ?: string;
  initialCity?: string;
  initialCategory?: string;
  initialBeds?: string;
  initialMinPrice?: number;
  initialMaxPrice?: number;
}
