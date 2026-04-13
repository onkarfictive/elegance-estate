"use client";

import React from "react";
import Link from "next/link";
import { Button } from "primereact/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white shadow-sm font-outfit">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 shadow-md">
            <i className="pi pi-home text-white text-xl"></i>
          </div>
          <span className="text-xl font-black tracking-tight text-zinc-900 uppercase">
             ELEGANCE<span className="text-blue-600">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-blue-600 transition-colors">
            Our Story
          </Link>
          <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-blue-600 transition-colors">
            Privacy
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-2 md:flex">
             <i className="pi pi-phone text-blue-600"></i>
             <span className="text-sm font-bold text-zinc-700">+91 800-555-6789</span>
          </div>
          <div className="flex items-center gap-4">
            <i className="pi pi-user text-zinc-500 hover:text-blue-600 cursor-pointer"></i>
            <Button
              label="Add Listing"
              className="p-button-primary rounded h-10 px-6 font-bold text-xs"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
