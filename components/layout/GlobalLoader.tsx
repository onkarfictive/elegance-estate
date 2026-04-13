"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  // Trigger loader ONLY when the actual page URL path changes (e.g., Home to Details)
  // This ignores search filters and pagination changes.
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle browser back/forward buttons specifically for page changes
  useEffect(() => {
    const handlePopState = () => {
      // We check if it's a path change or just a hash/query change is hard in popstate,
      // but since we want it for 'Back' on page transitions, we'll keep it simple
      // and let the pathname useEffect handle the heavy lifting.
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
