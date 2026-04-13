import React from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

export const metadata: Metadata = {
  title: "Contact Us | Elegance Estate - Luxury Real Estate Boutique",
  description: "Get in touch with our expert real estate consultants for personalized guidance on high-value properties in India.",
  keywords: ["Contact Real Estate Agency India", "Elegance Estate Contact", "Luxury Property Consultancy"],
};

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Header />

      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 items-center">
            {/* Contact Headline */}
            <div className="max-w-xl">
               <h1 className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tighter mb-8 leading-none">
                 CONNECT <br />
                 WITH <span className="text-blue-600 underline decoration-blue-200">US.</span>
               </h1>
               <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed mb-12">
                 Your journey toward a prestigious new home begins with a single conversation. 
                 Reach out for more details or to schedule a private viewing.
               </p>
               
               <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                     <div className="h-14 w-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                        <i className="pi pi-map-marker text-blue-600 text-xl"></i>
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1">Our Corporate HQ</p>
                        <p className="text-lg font-bold text-zinc-800">101 Prestige Towers, Worli Sea Face, Mumbai, IN</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="h-14 w-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                        <i className="pi pi-phone text-blue-600 text-xl"></i>
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1">Direct Line</p>
                        <p className="text-lg font-bold text-zinc-800">+91 22 4500 9000 • +91 99999-56000</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                     <div className="h-14 w-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                        <i className="pi pi-envelope text-blue-600 text-xl"></i>
                     </div>
                     <div>
                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1">Official Inquiry</p>
                        <p className="text-lg font-bold text-zinc-800">concierge@eleganceestate.in</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] border border-zinc-100 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:rotate-0">
                  <i className="pi pi-send text-9xl"></i>
               </div>
               <h2 className="text-2xl font-bold text-zinc-900 mb-2 uppercase tracking-tight">Direct Inquiry</h2>
               <p className="text-zinc-500 text-sm mb-10 leading-relaxed font-medium">Please fill the form below and an expert consultant will contact you within 2 business hours.</p>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col gap-2.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">Full Name <span className="text-red-500">*</span></label>
                        <IconField iconPosition="left">
                           <InputIcon className="pi pi-user text-zinc-400"></InputIcon>
                           <InputText required placeholder="Enter Your Name" className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white text-sm font-medium" />
                        </IconField>
                     </div>
                     <div className="flex flex-col gap-2.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">Email <span className="text-red-500">*</span></label>
                        <IconField iconPosition="left">
                           <InputIcon className="pi pi-envelope text-zinc-400"></InputIcon>
                           <InputText required type="email" placeholder="official@company.com" className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white text-sm font-medium" />
                        </IconField>
                     </div>
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">Subject <span className="text-red-500">*</span></label>
                     <InputText required placeholder="Property Consultation / General Inquiry" className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white text-sm font-medium" />
                  </div>

                  <div className="flex flex-col gap-2.5">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1">Message <span className="text-red-500">*</span></label>
                     <textarea required rows={4} placeholder="Tell us about your requirements or specific property interest..." className="w-full rounded-xl p-4 border border-zinc-200 bg-zinc-50/50 hover:bg-white text-sm font-medium transition-all" />
                  </div>

                  <button type="submit" className="w-full h-14 bg-zinc-900 hover:bg-blue-600 text-white rounded-2xl font-bold text-sm uppercase tracking-[0.2em] transition-all shadow-xl shadow-zinc-900/10 hover:shadow-blue-500/20 active:scale-[0.98] mt-4 flex items-center justify-center gap-2">
                     <i className="pi pi-send text-xs"></i>
                     Send Message
                  </button>
               </form>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
