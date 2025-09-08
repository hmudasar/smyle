"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { data } from "../data";
interface FAQ {
  heading: string;
  description: string;
}
const SmyloFAQs = () => {
  const faqsData = data.smyloFAQs;
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    if (activeIndex !== null && contentRef.current[activeIndex]) {
      contentRef.current[
        activeIndex
      ].style.maxHeight = `${contentRef.current[activeIndex].scrollHeight}px`;
    }

    contentRef.current.forEach((el, idx) => {
      if (idx !== activeIndex && el) {
        el.style.maxHeight = "0";
      }
    });
  }, [activeIndex]);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="py-8 sm:py-20 md:py-28 lg:py-40 xl:py-52 2xl:py-64">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-bold leading-normal tracking-[1.44px] mb-4">
                Got Questions? We’ve Got Answers
              </h2>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal mb-8">
                Find quick answers to common questions about Remote Rocket and
                how we can help you build your dream remote team
              </p>
            </div>
            <div className="bg-[#FFF2B3] rounded-[24px] p-6">
              <h3 className="font-figtree text-primary text-[24px] lg:text-[28px] xl-text-[32px] font-bold leading-normal tracking-[0.96px] mb-2">
                Still have questions?
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal mb-8">
                ind quick answers to common questions about Remote Rocket and
                how we can help you build your dream remote team
              </p>
              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#171717] border border-[#171717] text-white py-4 px-8 rounded-[50px] text-base font-medium overflow-hidden relative group transition-all duration-600 ease"
              >
                <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
                  Contact Us
                </div>
                <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            {faqsData.map((faq: FAQ, index: number) => (
              <article
                key={index}
                className={`[&:not(:last-child)]:mb-7 [&:not(:last-child)]:border-b-[2px] border-[#AEAEAE] overflow-hidden`}
                aria-label={`FAQ: ${faq.heading}`}
              >
                <button
                  className="flex justify-between items-center w-full px-3 py-4 lg:py-5 text-left"
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-[#4D4D4D] text-base font-semibold ">
                    {faq.heading}
                  </h3>
                  <div className="h-4 w-4 relative">
                    <span className="block w-4 h-[2px] bg-[#1F1F1F] absolute"></span>
                    <span
                      className={`block w-4 h-[2px] bg-[#1F1F1F] absolute transition-transform duration-300  ${
                        activeIndex === index
                          ? "rotate-[180deg]"
                          : "rotate-[90deg]"
                      }`}
                    ></span>
                  </div>
                </button>
                <div
                  ref={(el) => {
                    contentRef.current[index] = el;
                  }}
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{ maxHeight: "0" }}
                >
                  <div className="px-3 pb-5">
                    <p className="text-[#1F1F1F] text-sm lg:text-base leading-normal font-[400]">
                      {faq.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmyloFAQs;
