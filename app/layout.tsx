import { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";

// PrimeReact imports
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PrimeProvider from "@/providers/PrimeReactProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "EleganceEstate | Luxury Real Estate India",
    template: "%s | EleganceEstate",
  },
  description: "Browse curated luxury villas, penthouses, and apartments in Bangalore, Mumbai, and Hyderabad with EleganceEstate.",
  metadataBase: new URL("https://elegance-estate.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EleganceEstate | Luxury Real Estate",
    description: "Your destination for premium properties in India.",
    url: "https://elegance-estate.vercel.app",
    siteName: "EleganceEstate",
    images: [{ url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&h=630&fit=crop", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EleganceEstate | Luxury Real Estate",
    description: "Premium property listings in India.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&h=630&fit=crop"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", outfit.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col font-outfit">
        <PrimeProvider>
          {children}
        </PrimeProvider>
      </body>
    </html>
  );
}
