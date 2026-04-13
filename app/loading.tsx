import React from "react";
import { Home } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Animated House Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 scale-[2] blur-3xl bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="h-20 w-20 flex items-center justify-center bg-zinc-900 rounded-[2rem] shadow-2xl relative z-10 animate-bounce transition-all duration-1000">
             <Home className="w-10 h-10 text-white" />
          </div>
          
          {/* Circular Progress Ring */}
          <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-zinc-200 animate-[spin_8s_linear_infinite]"></div>
        </div>

        {/* Text Loader */}
        <div className="text-center">
          <h2 className="text-xl font-black text-zinc-900 tracking-tighter uppercase mb-2">
            Curating <span className="text-blue-600">Luxury</span>
          </h2>
          <div className="flex items-center gap-1 justify-center">
             <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
             <div className="w-1 h-1 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
             <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Branding Tip */}
        <p className="absolute bottom-[-100px] text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] whitespace-nowrap">
           Elegance Estate | Premier Residency
        </p>
      </div>
    </div>
  );
}
