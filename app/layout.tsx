import { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import PrimeProvider from "@/providers/PrimeReactProvider";
import GlobalLoader from "@/components/layout/GlobalLoader";
import { Suspense } from "react";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://elegance-estate.vercel.app"),
  title: {
    default: "EleganceEstate | Premium Luxury Real Estate India",
    template: "%s | EleganceEstate",
  },
  description: "Browse India's most curated collection of luxury villas, penthouses, and beachfront properties. Find your dream home in Bangalore, Mumbai, or Hyderabad.",
  applicationName: "EleganceEstate",
  keywords: ["Luxury Real Estate India", "Premium Villas Bangalore", "Beachfront Homes Mumbai", "Penthouse Hyderabad", "Elegance Estate"],
  authors: [{ name: "Elegance Estate Team" }],
  creator: "Elegance Estate Private Limited",
  publisher: "Elegance Estate",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "EleganceEstate | Luxury Real Estate",
    description: "Browse curated luxury villas, penthouses, and beachfront properties in India.",
    url: "https://elegance-estate.vercel.app",
    siteName: "EleganceEstate",
    images: [{ url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&h=630&fit=crop", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EleganceEstate | Luxury Real Estate India",
    description: "Premium property listings in India.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-outfit">
        <PrimeProvider>
          <Suspense fallback={null}>
            <GlobalLoader>
              {children}
            </GlobalLoader>
          </Suspense>
        </PrimeProvider>
      </body>
    </html>
  );
}
