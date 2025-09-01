// src/app/not-found.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import Breadcrumb from "./components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Smile",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Breadcrumb heading="Page Not found" pageName="Not Found" />
      <div className="text-center py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex justify-center min-w-[180px] bg-[#171717] border border-[#171717] text-white py-4 px-6 rounded-[50px] text-base font-medium overflow-hidden relative group transition-all duration-600 ease"
        >
          <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
            Return to Home
          </div>
          <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
            Return to Home
          </div>
        </Link>
      </div>
    </Suspense>
  );
}
