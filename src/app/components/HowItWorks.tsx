"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const smyling = [
  { image: "/images/new/smylies/bn-full-angry.png", title: "Full Angry" },
  { image: "/images/new/smylies/bn-normal.png", title: "Normal" },
  { image: "/images/new/smylies/bn-happy.png", title: "Happy" },
  { image: "/images/new/smylies/bn-full-happy.png", title: "Full Happy" },
  { image: "/images/new/smylies/bn-bit-angry.png", title: "Angry" },
];

const HowItWorks = () => {
  return (
    <section className="relative lg:py-10 2xl:py-24">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          <div className="lg:text-left text-center">
            <h1 className="font-figtree font-bold text-primary text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] leading-normal tracking-[0.94px] lg:tracking-[1.44px] mb-3 xl:mb-5">
              Love Isn&apos;t About Big Moments, It&apos;s About the Small Ones
              You Miss
            </h1>
            <p className="text-[#747474] text-[16px] leading-normal font-[400] mb-8">
              You swore you&apos;d remember their coffee order. But life gets
              busy, and &apos;I&apos;ll do it later&apos; becomes &apos;Why
              don&apos;t you ever listen?&apos;! SMILE turns those missed
              moments into shared joy.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={3}
              speed={600}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: true,
              }}
              loop={true}
              className="w-full smyle-slider"
            >
              {smyling.map((item, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className="flex flex-col items-center justify-center transition-all duration-300">
                      <div
                        className={`relative mx-auto transition-all duration-300 ${
                          isActive ? "scale-[1.2]" : "scale-[0.8]"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          height={276}
                          width={276}
                          className="object-contain max-w-full"
                        />
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
