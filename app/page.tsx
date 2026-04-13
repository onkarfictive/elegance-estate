import { Metadata } from "next";
import HomeClient from "@/components/property/HomeClient";

export const metadata: Metadata = {
  title: "EleganceEstate | Luxury Property Listings",
  description: "Browse our exclusive collection of luxury villas, penthouses, and beachfront properties. Find your dream home with EleganceEstate.",
  keywords: ["luxury real estate", "property listing", "villas for sale", "penthouses", "beachfront homes"],
  openGraph: {
    title: "EleganceEstate | Luxury Property Listings",
    description: "Browse our exclusive collection of luxury villas, penthouses, and beachfront properties.",
    images: ["/villa.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
