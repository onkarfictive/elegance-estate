"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { InputNumber } from "primereact/inputnumber";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/property/PropertyCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function HomeClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250000000]);
  const [minBeds, setMinBeds] = useState<number | null>(null);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const op = useRef<OverlayPanel>(null);

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
    { label: "Loft", value: "Loft" },
  ];

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCity("all");
    setSelectedCategory("all");
    setPriceRange([0, 250000000]);
    setMinBeds(null);
    setFirst(0);
  };

  // Filtering logic
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch = 
        !searchTerm || 
        p.title.toLowerCase().includes(lowerSearch) ||
        p.city.toLowerCase().includes(lowerSearch) ||
        p.location.toLowerCase().includes(lowerSearch);
      
      const matchesCity = selectedCity === "all" || selectedCity === null || p.city === selectedCity;
      const matchesCategory = selectedCategory === "all" || selectedCategory === null || p.category === selectedCategory;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesBeds = minBeds === null ? true : (minBeds === 5 ? p.rooms >= 5 : p.rooms === minBeds);

      return matchesSearch && matchesCity && matchesCategory && matchesPrice && matchesBeds;
    });
  }, [searchTerm, selectedCity, selectedCategory, priceRange, minBeds]);

  // Pagination logic
  const currentProperties = useMemo(() => {
    return filteredProperties.slice(first, first + rows);
  }, [filteredProperties, first, rows]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatPriceLabel = (val: number) => {
    const cr = val / 10000000;
    return cr >= 1 ? `${cr.toFixed(1)} Cr` : `${(val / 100000).toFixed(0)} Lacs`;
  };

  const isFilterActive = searchTerm || (selectedCity && selectedCity !== "all") || (selectedCategory && selectedCategory !== "all") || minBeds !== null || priceRange[0] !== 0 || priceRange[1] !== 250000000;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-outfit">
      <Header />
      
      <main className="flex-grow">
        {/* Luxury Hero Banner */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-zinc-900">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Real Estate India"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-none uppercase animate-in fade-in slide-in-from-top-8 duration-1000">
              Find Your <span className="text-blue-400">Masterpiece.</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Boutique luxury property listings curated for the extraordinary life. 
              Discover the most prestigious addresses in India.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 to-transparent"></div>
        </section>

        <section className="pb-20 px-6 -mt-16 relative z-20">
          <div className="container mx-auto">
            <div className={`bg-white rounded-2xl border border-zinc-200 shadow-2xl transition-all duration-300 ${isFilterActive ? 'pb-8 pt-8 px-8' : 'p-8'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
                
                {/* Search */}
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Location Search</label>
                   <IconField iconPosition="left">
                      <InputIcon className="pi pi-search"> </InputIcon>
                      <InputText
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search By Name or City..."
                        className="w-full h-12 border-zinc-200 text-sm rounded-lg hover:border-blue-500 focus:border-blue-500 transition-colors shadow-sm"
                      />
                   </IconField>
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Select City</label>
                  <Dropdown
                    value={selectedCity}
                    options={cities}
                    onChange={(e) => setSelectedCity(e.value)}
                    placeholder="All Cities"
                    className="w-full h-12 bg-zinc-50 border-zinc-200 text-sm rounded-lg shadow-sm"
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Category</label>
                  <Dropdown
                    value={selectedCategory}
                    options={categories}
                    onChange={(e) => setSelectedCategory(e.value)}
                    placeholder="All Types"
                    className="w-full h-12 bg-zinc-50 border-zinc-200 text-sm rounded-lg shadow-sm"
                  />
                </div>

                {/* Beds Button Group */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Rooms (BHK)</label>
                  <div className="flex h-12 gap-1 bg-zinc-50 p-1.5 rounded-lg border border-zinc-200 shadow-sm">
                    {[3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setMinBeds(minBeds === num ? null : num)}
                        className={`flex-1 rounded-md text-[10px] font-black tracking-widest transition-all ${
                          minBeds === num 
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                            : "text-zinc-500 hover:bg-zinc-100"
                        }`}
                      >
                        {num}{num === 5 ? "+" : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Overlay Trigger */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Price Range</label>
                  <button
                    onClick={(e) => op.current?.toggle(e)}
                    className="w-full h-12 bg-zinc-50 border border-zinc-200 rounded-lg px-4 flex items-center justify-between text-zinc-700 text-sm hover:border-blue-400 transition-all shadow-sm"
                  >
                    <span className="font-bold text-xs">{formatPriceLabel(priceRange[0])} - {formatPriceLabel(priceRange[1])}</span>
                    <i className="pi pi-chevron-down text-[10px] text-zinc-400" />
                  </button>

                  <OverlayPanel ref={op} className="p-0 shadow-2xl rounded-2xl overflow-hidden border border-zinc-100" style={{ width: '360px' }}>
                     <div className="p-7 bg-white">
                        <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-7 text-center">Price Selector</h4>
                        
                        <div className="flex gap-4 mb-8">
                           <div className="flex-1 flex flex-col gap-2">
                              <label className="text-[10px] font-black text-zinc-500 uppercase ml-1">Min (Lac)</label>
                              <InputNumber 
                                value={priceRange[0] / 100000} 
                                onValueChange={(e) => setPriceRange([e.value! * 100000, priceRange[1]])} 
                                className="w-full"
                                inputClassName="h-11 w-full rounded-lg border-zinc-200 bg-zinc-50 focus:border-blue-500 transition-all font-bold px-3 text-sm shadow-inner"
                                placeholder="0"
                              />
                           </div>
                           <div className="flex-1 flex flex-col gap-2">
                              <label className="text-[10px] font-black text-zinc-500 uppercase ml-1">Max (Lac)</label>
                              <InputNumber 
                                value={priceRange[1] / 100000} 
                                onValueChange={(e) => setPriceRange([priceRange[0], e.value! * 100000])}
                                className="w-full"
                                inputClassName="h-11 w-full rounded-lg border-zinc-200 bg-zinc-50 focus:border-blue-500 transition-all font-bold px-3 text-sm shadow-inner"
                                placeholder="2,500"
                              />
                           </div>
                        </div>

                        <div className="px-2 mb-10">
                           <Slider 
                              value={priceRange} 
                              onChange={(e: SliderChangeEvent) => setPriceRange(e.value as [number, number])} 
                              range min={0} max={250000000} step={2500000}
                              className="w-full h-1.5"
                           />
                           <div className="flex justify-between mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                               <span>0 Lacs</span>
                               <span>25.0 Crore</span>
                           </div>
                        </div>

                        <div className="flex gap-3 pt-2 border-t border-zinc-50 mt-2">
                           <Button 
                              label="Reset" 
                              className="p-button-outlined p-button-secondary rounded-lg text-xs font-black flex-1 h-11 border-zinc-200 text-zinc-600 hover:bg-zinc-50" 
                              onClick={() => setPriceRange([0, 250000000])}
                           />
                           <Button 
                              label="Done" 
                              className="p-button-primary rounded-lg text-xs font-black flex-1 h-11 bg-blue-600 border-none shadow-lg shadow-blue-500/20" 
                              onClick={() => op.current?.hide()}
                           />
                        </div>
                     </div>
                  </OverlayPanel>
                </div>
              </div>

              {/* Fixed Bottom-Left Clear Button */}
              <div className="mt-8 flex justify-start items-center">
                  <button 
                    onClick={clearFilters}
                    disabled={!isFilterActive}
                    className="group flex items-center gap-3 bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-all shadow-xl shadow-zinc-900/10 active:scale-95 disabled:bg-zinc-100 disabled:text-zinc-300 disabled:shadow-none disabled:cursor-not-allowed disabled:grayscale"
                  >
                    <i className="pi pi-undo text-[10px] group-hover:rotate-[-45deg] transition-transform duration-500"></i>
                    <span className="text-[10px] font-black uppercase tracking-widest">Clear Active Filters</span>
                  </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="flex items-end justify-between mb-10 px-1">
            <div>
              <h2 className="text-3xl font-black text-zinc-900 tracking-tighter uppercase leading-none font-semibold">
                Property Results
              </h2>
              <p className="text-zinc-400 text-[10px] font-black mt-2 uppercase tracking-widest leading-none font-semibold">Showing results based on your preferences</p>
            </div>
            <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">
                Found {filteredProperties.length} Matches
            </p>
          </div>

          {currentProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProperties.map((property, index) => (
                <div key={property.id} className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-both">
                  <PropertyCard property={property} priority={index < 3} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white border border-zinc-200 rounded-lg">
              <i className="pi pi-exclamation-circle text-6xl text-zinc-100 mb-6 block"></i>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">No results found</h3>
              <p className="text-zinc-400">Please adjust your filters</p>
            </div>
          )}

          {filteredProperties.length > rows && (
            <div className="mt-20 flex justify-center">
              <Paginator
                first={first}
                rows={rows}
                totalRecords={filteredProperties.length}
                onPageChange={onPageChange}
                className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl px-8 py-4 border-none w-full"
              />
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
