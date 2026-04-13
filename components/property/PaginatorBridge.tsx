"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Paginator } from "primereact/paginator";

interface PaginatorBridgeProps {
  first: number;
  rows: number;
  totalRecords: number;
}

const PaginatorBridge = ({ first, rows, totalRecords }: PaginatorBridgeProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (event: { page: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    const newPage = (event.page + 1).toString();
    params.set("page", newPage);
    router.push(`/?${params.toString()}`, { scroll: false });
    
    // Boutique Smooth Scroll to Top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Paginator 
      first={first} 
      rows={rows} 
      totalRecords={totalRecords} 
      onPageChange={onPageChange}
      className="bg-white border border-zinc-100 rounded-[2rem] shadow-sm p-4 overflow-hidden" 
    />
  );
};

export default PaginatorBridge;
