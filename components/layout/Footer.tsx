import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-zinc-900">
                <i className="pi pi-home text-sm text-white"></i>
              </div>
              <span className="text-lg font-black tracking-tighter text-zinc-900 uppercase">
                ELEGANCE<span className="text-blue-600">.</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              India's premier luxury real estate boutique. We curate only the most exceptional properties for the most discerning clients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-2">Company</h4>
             <a href="/" className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors">Home</a>
             <a href="/about" className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors">Our Story</a>
             <a href="/contact" className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors">Contact</a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-2">Legal</h4>
             <a href="/privacy" className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors">Privacy Policy</a>
             <a href="#" className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors">Terms of Service</a>
             <a href="#" className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors">Brokerage Policy</a>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-2">Connect</h4>
             <p className="text-zinc-500 font-semibold text-sm mb-2">+91 22 4500 9000</p>
             <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"><i className="pi pi-instagram"></i></a>
                <a href="#" className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"><i className="pi pi-facebook"></i></a>
                <a href="#" className="h-10 w-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"><i className="pi pi-linkedin"></i></a>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-50 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
             © 2026 ELEGANCE ESTATE PRIVATE LIMITED. ALL RIGHTS RESERVED.
           </p>
           <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em] italic">Built for Excellence</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
