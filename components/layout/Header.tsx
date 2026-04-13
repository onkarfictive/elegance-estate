"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white shadow-sm font-outfit">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 shadow-md">
            <Home className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tight text-zinc-900 uppercase">
             ELEGANCE<span className="text-blue-600">.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative group ${
                  isActive ? "text-blue-600" : "text-zinc-500 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-500 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-3 bg-zinc-50 border border-zinc-100 px-4 py-2 rounded-full">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
             Market Active
           </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
