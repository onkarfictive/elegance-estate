import { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// PrimeReact imports
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PrimeProvider from "@/providers/PrimeReactProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "EleganceEstate | Premium Property Listings",
  description: "Find your dream home with EleganceEstate.",
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
          {children}
        </PrimeProvider>
      </body>
    </html>
  );
}
