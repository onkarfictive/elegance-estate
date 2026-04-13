"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, [pathname]);
  useEffect(() => {
    const handlePopState = () => {
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  return (
    <>
      {isNavigating && <Loading />}
      <div className={isNavigating ? "opacity-30 blur-sm pointer-events-none transition-all duration-300" : "opacity-100 blur-0 transition-all duration-500"}>
        {children}
      </div>
    </>
  );
}
