"use client";
import React from "react";
import { data } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Features {
  image: string;
  desc: string;
  title: string;
}

const Features = () => {
  const features = data.featuresData;
  if (!features) {
    return notFound();
  }
  // console.log(features, "service");
  return (
    <section
      id="case-study"
      className="py-10 2xl:py-16"
      aria-label="Case Studies"
    >
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center">
          <div>
            <video autoPlay loop muted playsInline className="w-full h-auto">
              <source src="/images/new/smylo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-figtree text-primary text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-semibold leading-normal tracking-[0.94px] lg:tracking-[1.44px] mb-3 xl:mb-5">
              Meet Smylo
            </h1>
            <p className="text-[#747474] text-[16px] leading-normal font-[400] mb-8">
              your personal AI relationship coach — part cheerleader, part
              peacekeeper, and part playful sidekick. It listens, learns, and
              gives tailored tips, daily missions, and fun challenges to help
              you and your loved ones understand each other better.
            </p>
            <Link
              href="#"
              className="bg-button text-white px-5 py-4 text-base rounded-[50px] font-medium tracking-[0.48px]"
            >
              Explore Smylo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
