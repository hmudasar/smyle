"use client";

import React from "react";
import { ChevronRight } from "../SVG";
import Link from "next/link";

interface BreadcrumbProps {
  loading?: boolean;
  heading: string;
  pageName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  loading = false,
  heading,
  pageName,
}) => {
  if (loading) {
    return (
      <nav
        aria-label="Breadcrumb Loading"
        className="py-6 min-h-[334px] flex items-center relative animate-pulse "
      >
        <div className="bg-gray-200 absolute top-0 left-0 w-full h-full rounded-lg" />
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="h-[45px] bg-gray-300 rounded-[7px] w-[200px] mb-4" />
          <div className="h-[42px] bg-gray-300 rounded w-3/4 mb-4" />
          <div className="flex items-center gap-4">
            <div className="h-6 bg-gray-300 rounded w-16" />
            <div className="h-6 bg-gray-300 rounded w-24" />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <div className="banner bg-gradient pt-48 pb-52 xl:pt-52 xl:pb-52 relative">
      <div className="mx-auto px-4 md:px-12 relative">
        <ul className="flex justify-center items-center gap-2">
          <li className="text-base text-[#151515] font-normal tracking-[0.48px]">
            <Link href="/">Home</Link>
          </li>
          <li>
            <ChevronRight />
          </li>
          <li className="text-base text-[#151515] font-normal tracking-[0.48px]">
            <Link href={`/${pageName.toLowerCase()}`}>{pageName}</Link>
          </li>
        </ul>

        <h1 className="font-figtree text-center  text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[62px] text-[#151515] tracking-[0.62px] font-bold">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
