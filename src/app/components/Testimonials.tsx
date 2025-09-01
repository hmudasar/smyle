"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";

const testimonialData = [
  {
    userImage: "/images/reviews/user-1.svg",
    authorName: "John David",
    heading: "What healthy relationships say about SMYL",
    role: "Employee",
    desc: "Smilo Knows What Your Partner Wants… Before They Do. Smilo learns your partner’s loves, hates, and secret cravings. Just connect your profiles, answer a few questions, and let Smilo work its magic.",
  },
  {
    userImage: "/images/reviews/user-2.svg",
    authorName: "Sarah Lee",
    heading: "Couples are bonding better with SMYL",
    role: "Designer",
    desc: "We found new ways to connect every week. Smilo gave us challenges that made our relationship fun again!",
  },
  {
    userImage: "/images/reviews/user-3.svg",
    authorName: "Michael Scott",
    heading: "Simple changes, big results",
    role: "Manager",
    desc: "Our weekly streak made us prioritize time together. It’s amazing how something small turned into a big shift.",
  },
  {
    userImage: "/images/reviews/user-4.svg",
    authorName: "Emily Johnson",
    heading: "Relationships made stronger",
    role: "Developer",
    desc: "Smilo reminded us to focus on each other. It’s like having a coach for your relationship—subtle but powerful.",
  },
  {
    userImage: "/images/reviews/user-5.svg",
    authorName: "David Kim",
    heading: "The best relationship tool we’ve tried",
    role: "Entrepreneur",
    desc: "We thought we didn’t need help, but Smilo surprised us. It gave us ideas we wouldn’t have come up with ourselves.",
  },
  {
    userImage: "/images/reviews/user-3.svg",
    authorName: "Michael Scott",
    heading: "Simple changes, big results",
    role: "Manager",
    desc: "Our weekly streak made us prioritize time together. It’s amazing how something small turned into a big shift.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16">
      <div className="mx-auto px-4 md:px-12">
        <div className="flex lg:flex-nowrap flex-wrap justify-between lg:gap-4 xl:gap-8 2xl:gap-10 items-center">
          {/* Left: floating images */}
          <div className="flex gap-24 w-full lg:w-1/2 xl:w-5/12">
            <div className="relative h-[500px] flex items-center justify-center w-full lg:w-8/12">
              {testimonialData.map((item, i) => (
                <div
                  key={i}
                  className={`testimonial-slide absolute rounded-full overflow-hidden transition-all cursor-pointer
                ${
                  activeIndex === i
                    ? "scale-[0.9] lg:scale-[1] xl:scale-[1.2]"
                    : "lg:scale-[0.8] xl:scale-[0.9]"
                }
              `}
                  onClick={() => swiperRef.current?.slideTo(i)}
                >
                  <Image
                    src={item.userImage}
                    alt={item.authorName}
                    width={80}
                    height={80}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Middle: vertical progress line with dots */}
            <div className="relative hidden lg:flex justify-center">
              <div className="w-[4px] bg-[#F2EFE4] h-full"></div>
              <div className="absolute top-12 bottom-12 flex flex-col items-center justify-between">
                {testimonialData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => swiperRef.current?.slideTo(i)}
                    className={`w-[35.905px] bg-[#FFFCF0] h-[35.905px] p-[7px] rounded-full border-[0.748px] transition-all 
                  ${
                    activeIndex === i ? "border-[#0D0D0D]" : "border-[#C4C2B8]"
                  }`}
                  >
                    <div
                      className={`h-full w-full rounded-full transition-all ${
                        activeIndex === i ? "bg-[#0D0D0D]" : ""
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: testimonial text */}
          <div className="w-full lg:w-1/2 xl:w-1/2">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {testimonialData.map((data, i) => (
                <SwiperSlide key={i}>
                  <div className="lg:text-left text-center">
                    <h2 className="font-figtree text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal text-[#0D0D0D] tracking-[1.44px] mb-7">
                      What healthy relationships say about SMYL
                    </h2>
                    <p className="text-base font-[400] text-[#0D0D0D] mb-4 leading-normal tracking-[0.48px]">
                      {data.desc}
                    </p>
                    <p className="font-bold text-[#0D0D0D] text-base">
                      {data.authorName}
                    </p>
                    <p className="font-[400] text-[#0D0D0D] text-base">
                      {data.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
