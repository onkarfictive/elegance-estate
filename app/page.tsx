import { Metadata } from "next";
import PropertyListing from "../components/property/PropertyListing";

export const metadata: Metadata = {
  title: "Premium Real Estate India | Luxury Villas & Penthouses | EleganceEstate",
  description: "Explore EleganceEstate's curated collection of luxury properties in India. From beachfront villas in Mumbai to elite penthouses in Bangalore, find your next masterpiece today.",
  keywords: ["luxury real estate india", "premium villas bangalore", "luxury penthouses mumbai", "buy luxury property india", "elegance estate"],
  openGraph: {
    title: "EleganceEstate | Curated Luxury Real Estate in India",
    description: "Discover India's most exclusive luxury property listings. Villas, Penthouses, and Mansions curated for the elite.",
    images: [{ url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EleganceEstate | Luxury Real Estate India",
    description: "Your gateway to premium residency in India's top cities.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"],
  },
  alternates: {
    canonical: "/",
  }
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EleganceEstate",
    "url": "https://elegance-estate.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://elegance-estate.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyListing 
        q={params.q as string}
        city={params.city as string}
        category={params.category as string}
        minPrice={params.minPrice as string}
        maxPrice={params.maxPrice as string}
        beds={params.beds as string}
        page={params.page as string}
      />
    </>
  );
}
