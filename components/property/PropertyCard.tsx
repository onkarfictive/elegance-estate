"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart } from "lucide-react";
import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, priority = false }) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    const cr = price / 10000000;
    if (cr >= 1) return `₹${cr.toFixed(2)} Cr`;
    return `₹${(price / 100000).toFixed(2)} Lacs`;
  };

  return (
    <div className="h-full border border-zinc-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500 rounded-[2rem] overflow-hidden bg-white group/card flex flex-col">
      {/* Header / Image Section */}
      <div className="h-72 overflow-hidden relative group">
        <Link href={`/property/${property.id}`} className="relative block h-full w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
        </Link>
        
        {/* City & Category on Top Left */}
        <div className="absolute top-5 left-5 flex items-center gap-1 bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-1 rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <span className="bg-white text-zinc-900 text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest whitespace-nowrap">
            {property.category}
          </span>
          <span className="text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest opacity-90 whitespace-nowrap">
            {property.city}
          </span>
        </div>

        {/* Premium Floating Price on Bottom Left */}
        <div className="absolute bottom-5 left-5">
          <div className="bg-zinc-900/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:translate-y-[-4px]">
             <p className="text-white font-black text-sm tracking-tight leading-none">
               {formatPrice(property.price)}
             </p>
          </div>
        </div>

        {/* Heart Action */}
        <div className="absolute top-5 right-5">
          <button 
            onClick={(e) => { e.preventDefault(); setIsLiked(!isLiked); }}
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all duration-500 backdrop-blur-md border ${
              isLiked 
                ? 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/30' 
                : 'bg-white/10 border-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart className={`w-5 h-5 transition-transform duration-500 ${isLiked ? 'fill-current scale-110' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex-grow">
          <Link href={`/property/${property.id}`}>
            <h3 className="text-xl font-bold text-zinc-900 truncate tracking-tight mb-2 group-hover/card:text-blue-600 transition-colors duration-300">
              {property.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 text-zinc-400 mb-2 px-0.5">
            <MapPin className="w-3.5 h-3.5 text-blue-500/70" />
            <p className="text-[11px] font-semibold tracking-wide uppercase text-zinc-400">
              {property.location}
            </p>
          </div>
        </div>
        
        {/* Specs Grid */}
        <div className="grid grid-cols-4 gap-2 bg-zinc-50/80 p-4 rounded-2xl border border-zinc-100/50">
          <div className="flex flex-col gap-1.5">
             <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">BHK</span>
             <span className="text-base font-bold text-zinc-900 leading-none">{property.rooms}</span>
          </div>
          <div className="flex flex-col gap-1.5 border-l border-zinc-200/50 pl-4">
             <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Baths</span>
             <span className="text-base font-bold text-zinc-900 leading-none">{property.bathrooms}</span>
          </div>
          <div className="flex flex-col gap-1.5 border-l border-zinc-200/50 pl-4">
             <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Status</span>
             <span className="text-[10px] font-bold text-blue-600 uppercase leading-none">Ready</span>
          </div>
          <div className="flex flex-col gap-1.5 border-l border-zinc-200/50 pl-4">
             <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Area</span>
             <span className="text-base font-bold text-zinc-900 leading-none truncate">{property.area} <span className="text-[9px] font-medium text-zinc-400 uppercase">sqft</span></span>
          </div>
        </div>
 
        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-100/60 mt-auto">
           <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-zinc-100 overflow-hidden relative border border-white shadow-sm">
                 <Image 
                   src={property.contact.agentImage} 
                   alt={property.contact.agentName} 
                   fill 
                   sizes="40px"
                   className="object-cover" 
                   onError={(e: any) => e.target.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
                 />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-zinc-900 tracking-tight leading-none">{property.contact.agentName}</span>
                <span className="text-[9px] font-medium text-zinc-400 uppercase tracking-wider mt-1.5">Property Advisor</span>
              </div>
           </div>
           
           <Link href={`/property/${property.id}`}>
              <button className="group/btn relative overflow-hidden bg-zinc-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-95">
                <span className="relative z-10 font-bold">Details</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
