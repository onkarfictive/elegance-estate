import React from "react";
import { properties } from "../../data/properties";
import PropertyCard from "./PropertyCard";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ServerFilters from "./ServerFilters";
import { AlertCircle } from "lucide-react";
import PaginatorBridge from "./PaginatorBridge";

interface PropertyListingProps {
  q?: string;
  city?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  beds?: string;
  page?: string;
}

export default function PropertyListing({
  q = "",
  city = "all",
  category = "all",
  minPrice,
  maxPrice,
  beds,
  page = "1",
}: PropertyListingProps) {
  
  const parsedMinPrice = minPrice ? parseInt(minPrice) : 0;
  const parsedMaxPrice = maxPrice ? parseInt(maxPrice) : 250000000;
  const parsedBeds = beds ? parseInt(beds) : null;
  const currentPage = parseInt(page);
  const rowsPerPage = 6;

  // Server-Side Filtering
  const filteredProperties = properties.filter((p) => {
    const lowerSearch = q.toLowerCase();
    const matchesSearch = 
      !q || 
      p.title.toLowerCase().includes(lowerSearch) ||
      p.city.toLowerCase().includes(lowerSearch) ||
      p.location.toLowerCase().includes(lowerSearch);
    
    const matchesCity = city === "all" || p.city === city;
    const matchesCategory = category === "all" || p.category === category;
    const matchesPrice = p.price >= parsedMinPrice && p.price <= parsedMaxPrice;
    const matchesBeds = parsedBeds === null ? true : (parsedBeds === 5 ? p.rooms >= 5 : p.rooms === parsedBeds);

    return matchesSearch && matchesCity && matchesCategory && matchesPrice && matchesBeds;
  });

  const totalRecords = filteredProperties.length;
  const first = (currentPage - 1) * rowsPerPage;
  const currentProperties = filteredProperties.slice(first, first + rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-outfit">
      <Header />
      
      <main className="flex-grow">
        {/* Clean, Direct Listing Header - No Hero Banner */}
        <section className="pt-12 px-6 relative z-30">
          <div className="container mx-auto">
            <ServerFilters 
              initialQ={q} 
              initialCity={city} 
              initialCategory={category} 
              initialBeds={beds}
              initialMinPrice={parsedMinPrice}
              initialMaxPrice={parsedMaxPrice}
            />
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="flex items-end justify-between mb-12 px-1">
            <div>
              <h1 className="text-3xl font-black text-zinc-900 tracking-tighter uppercase leading-none font-semibold">
                Luxury Properties <span className="text-blue-600">in India</span>
              </h1>
              <p className="text-zinc-400 text-[10px] font-black mt-3 uppercase tracking-widest leading-none">
                {totalRecords} boutique matches discovered
              </p>
            </div>
          </div>

          {currentProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} priority={index < 3} />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-white border border-zinc-100 rounded-[2.5rem] shadow-sm">
              <AlertCircle className="w-16 h-16 text-zinc-100 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">No results found</h3>
              <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-2">Try adjusting your filters</p>
            </div>
          )}

          {/* PrimeReact Paginator (Client Bridge) */}
          {totalRecords > rowsPerPage && (
            <div className="mt-16">
              <PaginatorBridge 
                first={first} 
                rows={rowsPerPage} 
                totalRecords={totalRecords} 
              />
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
