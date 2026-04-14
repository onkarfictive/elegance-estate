import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tighter text-zinc-900 uppercase">
                ELEGANCE<span className="text-blue-600">.</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed font-bold max-w-sm">
              India's premier luxury real estate boutique. We curate only the most exceptional properties for the most discerning clients.
            </p>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-2">Company</h4>
             <Link href="/" className="text-zinc-600 hover:text-blue-600 font-bold text-sm transition-colors">Home</Link>
             <Link href="/about" className="text-zinc-600 hover:text-blue-600 font-bold text-sm transition-colors">Our Story</Link>
             <Link href="/contact" className="text-zinc-600 hover:text-blue-600 font-bold text-sm transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-2">Legal</h4>
             <Link href="/privacy" className="text-zinc-600 hover:text-blue-600 font-bold text-sm transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="pt-12 border-t border-zinc-50 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">
             © 2026 ELEGANCE ESTATE PRIVATE LIMITED. ALL RIGHTS RESERVED.
           </p>
           <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] italic">Built for Excellence</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
