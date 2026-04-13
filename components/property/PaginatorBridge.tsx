"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Paginator } from "primereact/paginator";
import { useEffect, useState } from "react";

interface PaginatorBridgeProps {
  first: number;
  rows: number;
  totalRecords: number;
}

const PaginatorBridge = ({ first, rows, totalRecords }: PaginatorBridgeProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [pageSize, setPageSize] = useState(4); // default desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPageSize(2); // mobile
      } else {
        setPageSize(4); // desktop
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onPageChange = (event: { page: number }) => {
    const params = new URLSearchParams(searchParams.toString());
    const newPage = (event.page + 1).toString();
    params.set("page", newPage);
    router.push(`/?${params.toString()}`, { scroll: false });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Paginator 
      first={first} 
      rows={rows} 
      totalRecords={totalRecords} 
      onPageChange={onPageChange}
      pageLinkSize={pageSize} // 👈 dynamic
      className="bg-white border border-zinc-100 rounded-[2rem] shadow-sm p-3 sm:p-4"
    />
  );
};

export default PaginatorBridge;