"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { data } from "../data";

interface FAQ {
  heading: string;
  description: string;
}

const FAQs = () => {
  const faqsData = data.faqs;
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
    <section
      id="faqs"
      className="py-14"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto px-4 md:px-12">
        <div className="bg-theme rounded-[48px] py-6 px-4 lg:p-12 relative">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
            <div className="">
              {faqsData.faqList.map((faq: FAQ, index: number) => (
                <article
                  key={index}
                  className={`[&:not(:last-child)]:mb-7 [&:not(:last-child)]:border-b-[2px] border-[#474747] overflow-hidden`}
                  aria-label={`FAQ: ${faq.heading}`}
                >
                  <button
                    className="flex justify-between items-center w-full px-3 py-4 lg:py-5 text-left"
                    onClick={() => handleToggle(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <h3 className="text-button text-base lg:text-[20px] font-medium ">
                      {faq.heading}
                    </h3>
                    <div className="h-4 w-4 relative">
                      <span className="block w-4 h-1 bg-[#1F1F1F] absolute"></span>
                      <span
                        className={`block w-4 h-1 bg-[#1F1F1F] absolute transition-transform duration-300  ${
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
            <div className="relative">
              <h1 className="font-figtree text-primary text-[32px] lg:text-[38px] xl:text-[44px] font-semibold leading-normal tracking-[0.94px] lg:tracking-[1.44px] mb-2 lg:mb-4 xl:mb-5">
                Got Questions?
                <br />
                We have Answers
              </h1>
              <p className="text-[#151515] lg:text-[#747474] text-[14px] lg:text-base leading-normal font-[400] mb-8">
                Smilo Knows What Your Partner Wants… Before They Do Smilo learns
                your partner’s loves, hates, and secret cravings. Just connect
                your profiles, answer a few questions, and let Smilo work its
                magic.
              </p>
              <Image
                src="/images/new/er-1.png"
                alt="question"
                height={497}
                width={497}
                className="lg:-mb-20 xl:-mb-12 lg:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
