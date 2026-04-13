"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import {  INITIAL_MAX_PRICE } from "@/constants/filterOptions";
import { ServerFiltersProps } from "@/types/property";

const ServerFilters = ({
  initialQ = "",
  initialCity = "all",
  initialCategory = "all",
  initialBeds = "all",
  initialMinPrice = 0,
  initialMaxPrice = INITIAL_MAX_PRICE,
}: ServerFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [localQ, setLocalQ] = useState(initialQ);

  // URL State Sync Helper
  const updateQuery = React.useCallback((updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    params.set("page", "1");
    router.push(`/?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  // Instant Debounced Search Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localQ !== initialQ) {
        updateQuery({ q: localQ });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [localQ, initialQ, updateQuery]);

  // Sync local state if URL changes externally (e.g., Back button)
  useEffect(() => {
    setLocalQ(initialQ);
  }, [initialQ]);

  const cities = [
    { label: "All Cities", value: "all" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Noida", value: "Noida" },
    { label: "Hyderabad", value: "Hyderabad" },
  ];

  const categories = [
    { label: "All Categories", value: "all" },
    { label: "Villa", value: "Villa" },
    { label: "Apartment", value: "Apartment" },
    { label: "Penthouse", value: "Penthouse" },
    { label: "Mansion", value: "Mansion" },
  ];

  const beds = [
    { label: "Any BHK", value: "all" },
    { label: "3 BHK", value: "3" },
    { label: "4 BHK", value: "4" },
    { label: "5+ BHK", value: "5" },
  ];

  return (
    <div className="bg-white rounded-3xl border border-zinc-100 shadow-md p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
        
        {/* Instant Search */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Location Search</label>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search text-zinc-400" />
            <InputText
              value={localQ}
              onChange={(e) => setLocalQ(e.target.value)}
              placeholder="Search Property..."
              className="w-full h-12 rounded-xl bg-zinc-50 border-zinc-100 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </IconField>
        </div>

        {/* City Select */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Destination</label>
          <Dropdown
            value={initialCity}
            options={cities}
            onChange={(e) => updateQuery({ city: e.value })}
            className="w-full h-12 rounded-xl bg-zinc-50 border-zinc-100 flex items-center font-bold text-sm"
          />
        </div>

        {/* Category Select */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Residency Type</label>
          <Dropdown
            value={initialCategory}
            options={categories}
            onChange={(e) => updateQuery({ category: e.value })}
            className="w-full h-12 rounded-xl bg-zinc-50 border-zinc-100 flex items-center font-bold text-sm"
          />
        </div>

        {/* Beds Select */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Bedrooms (BHK)</label>
          <Dropdown
            value={initialBeds || "all"}
            options={beds}
            onChange={(e) => updateQuery({ beds: e.value })}
            className="w-full h-12 rounded-xl bg-zinc-50 border-zinc-100 flex items-center font-bold text-sm"
          />
        </div>

        {/* Price Bracket Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Budget Range</label>
          <Dropdown
            value={
              initialMaxPrice === 20000000 ? "under-2" :
              initialMinPrice === 20000000 && initialMaxPrice === 50000000 ? "2-5" :
              initialMinPrice === 50000000 && initialMaxPrice === 100000000 ? "5-10" :
              initialMinPrice === 100000000 ? "above-10" : "all"
            }
            options={[
              { label: "Any Price", value: "all" },
              { label: "Under 2 Cr", value: "under-2" },
              { label: "2 Cr - 5 Cr", value: "2-5" },
              { label: "5 Cr - 10 Cr", value: "5-10" },
              { label: "10 Cr+", value: "above-10" },
            ]}
            onChange={(e) => {
              if (e.value === "under-2") updateQuery({ minPrice: "0", maxPrice: "20000000" });
              else if (e.value === "2-5") updateQuery({ minPrice: "20000000", maxPrice: "50000000" });
              else if (e.value === "5-10") updateQuery({ minPrice: "50000000", maxPrice: "100000000" });
              else if (e.value === "above-10") updateQuery({ minPrice: "100000000", maxPrice: "250000000" });
              else updateQuery({ minPrice: null, maxPrice: null });
            }}
            className="w-full h-12 rounded-xl bg-zinc-50 border-zinc-100 flex items-center font-bold text-sm"
          />
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-100 flex items-center justify-between">
         <button 
           onClick={() => router.push("/")}
           className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-blue-600 transition-all group"
         >
           <i className="pi pi-undo group-hover:rotate-[-45deg] transition-transform duration-500" />
           Clear Filters 
         </button>
      </div>
    </div>
  );
};

export default ServerFilters;
