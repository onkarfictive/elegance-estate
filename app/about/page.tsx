import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About Us | Elegance Estate - Luxury Real Estate Boutique",
  description: "Redefining the luxury real estate experience in India with a boutique, personalized approach to the most prestigious properties.",
  keywords: ["Luxury Real Estate India", "Elegance Estate", "About Us", "Premium Real Estate Agency"],
};
const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Header />
      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-24">
            <h1 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 leading-none">
              REDEFINING <br />
              <span className="text-blue-600">LUXURY</span> REAL ESTATE.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed max-w-2xl">
              We provide a curated gateway to the most prestigious properties, 
              built on a foundation of trust, excellence, and architectural mastery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="bg-white p-12 rounded-3xl border border-zinc-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0">
                  <i className="pi pi-eye text-9xl"></i>
               </div>
               <h2 className="text-2xl font-bold text-zinc-900 mb-6 uppercase tracking-tight">Our Vision</h2>
               <p className="text-lg text-zinc-500 font-normal leading-relaxed relative z-10">
                 To become the most trusted and influential prestige property network 
                 in India, where every transaction is a masterpiece of precision and luxury.
               </p>
            </div>
            <div className="bg-white p-12 rounded-3xl border border-zinc-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0">
                  <i className="pi pi-globe text-9xl"></i>
               </div>
               <h2 className="text-2xl font-bold text-zinc-900 mb-6 uppercase tracking-tight">Our Mission</h2>
               <p className="text-lg text-zinc-500 font-normal leading-relaxed relative z-10">
                 To deliver an unparalleled boutique experience that transcends standard real estate 
                 by combining localized expertise with an international standard of service.
               </p>
            </div>
          </div>
          <div className="mb-32">
            <div className="flex items-end justify-between mb-16 px-1">
               <div>
                  <h2 className="text-3xl font-black text-zinc-900 tracking-tighter uppercase leading-none">Our Core Values</h2>
                  <p className="text-zinc-400 text-[10px] font-bold mt-2 uppercase tracking-widest leading-none">The pillars of our existence</p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="space-y-4">
                  <div className="h-14 w-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">
                     <i className="pi pi-shield text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Total Integrity</h3>
                  <p className="text-zinc-500 leading-relaxed">Absolute transparency in every valuation and contract, ensuring your investment is always secure.</p>
               </div>
               <div className="space-y-4">
                  <div className="h-14 w-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                     <i className="pi pi-star text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Excellence in Curation</h3>
                  <p className="text-zinc-500 leading-relaxed">We only list properties that meet our stringent criteria for architectural brilliance and investment potential.</p>
               </div>
               <div className="space-y-4">
                  <div className="h-14 w-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center">
                     <i className="pi pi-users text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Local Expertise</h3>
                  <p className="text-zinc-500 leading-relaxed">Deep-rooted knowledge of India's high-value corridors, from Mumbai's coast to Bangalore's tech hubs.</p>
               </div>
            </div>
          </div>
          <div className="bg-zinc-900 p-12 md:p-20 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left shadow-2xl">
             <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2">500+</p>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Premium Properties Sold</p>
             </div>
             <div className="h-px w-20 md:h-20 md:w-px bg-zinc-800"></div>
             <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2">12+</p>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Years of Experience</p>
             </div>
             <div className="h-px w-20 md:h-20 md:w-px bg-zinc-800"></div>
             <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2">₹2000Cr+</p>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Asset Management</p>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default AboutPage;
