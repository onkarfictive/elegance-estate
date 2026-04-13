import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "primereact/card";
import { Property } from "@/data/properties";

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

  const header = (
    <div className="h-72 overflow-hidden group">
      <Link href={`/property/${property.id}`} className="relative block h-full w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-all duration-1000 group-hover:scale-105"
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-60"></div>
      </Link>
      
      {/* Floating Badges */}
      <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-white/10 backdrop-blur-xl border border-white/20 p-1 rounded-full shadow-2xl">
        <span className="flex items-center justify-center bg-white text-zinc-900 text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
          {property.category}
        </span>
        <span className="text-white text-[8px] font-black px-2 py-1.5 uppercase tracking-widest opacity-90">
          {property.city}
        </span>
      </div>

      {/* Heart Action */}
      <div className="absolute top-5 right-5">
        <button 
          onClick={(e) => { e.preventDefault(); setIsLiked(!isLiked); }}
          className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-500 backdrop-blur-xl border ${
            isLiked 
              ? 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/30' 
              : 'bg-white/10 border-white/20 text-white hover:bg-white/30'
          }`}
        >
          <i className={`pi ${isLiked ? 'pi-heart-fill scale-110' : 'pi-heart'} text-lg transition-transform`}></i>
        </button>
      </div>

      {/* Price Tag Overlay (Pretty View) */}
      <div className="absolute bottom-5 left-5">
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shadow-2xl">
           <p className="text-white font-bold text-base tracking-tight leading-none">
             {formatPrice(property.price)}
           </p>
        </div>
      </div>
    </div>
  );

  return (
    <Card
      header={header}
      className="custom-card h-full border border-zinc-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-700 rounded-[2rem] overflow-hidden bg-white group/card"
    >
      <div className="flex flex-col p-5">
        <div className="flex-grow">
          <Link href={`/property/${property.id}`}>
            <h3 className="text-base font-bold text-zinc-900 transition-colors truncate tracking-tight mb-1">
              {property.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 text-zinc-400 mb-4">
            <i className="pi pi-map-marker text-[10px]"></i>
            <p className="text-[10px] font-semibold tracking-wide uppercase">
              {property.location}
            </p>
          </div>
        </div>
        
        {/* Modern Minimal Stats - 4 Columns */}
        <div className="grid grid-cols-4 gap-2 mb-4 pt-4 border-t border-zinc-100/60">
          <div className="flex flex-col gap-0.5">
             <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Beds</span>
             <span className="text-[11px] font-bold text-zinc-800">{property.rooms}</span>
          </div>
          <div className="flex flex-col gap-0.5">
             <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Baths</span>
             <span className="text-[11px] font-bold text-zinc-800">{property.bathrooms}</span>
          </div>
          <div className="flex flex-col gap-0.5">
             <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Parking</span>
             <span className="text-[11px] font-bold text-zinc-800">2</span>
          </div>
          <div className="flex flex-col gap-0.5">
             <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Area</span>
             <span className="text-[11px] font-bold text-zinc-800">{property.area} <span className="text-[8px] font-medium text-zinc-400 uppercase">ft²</span></span>
          </div>
        </div>
 
        {/* Refined Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100/60">
           <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-zinc-100 overflow-hidden relative border-2 border-white shadow-sm ring-1 ring-zinc-50">
                 <Image 
                   src={property.contact.agentImage} 
                   alt={property.contact.agentName} 
                   fill 
                   sizes="32px"
                   className="object-cover" 
                   onError={(e: any) => e.target.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} 
                 />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-800 tracking-tight">{property.contact.agentName}</span>
                <span className="text-[8px] font-medium text-zinc-400 uppercase tracking-wider">Consultant</span>
              </div>
           </div>
           
           <Link href={`/property/${property.id}`}>
              <button className="group/btn relative overflow-hidden bg-zinc-900 text-white px-5 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/20 active:scale-95">
                <span className="relative z-10">Details</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </button>
           </Link>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
