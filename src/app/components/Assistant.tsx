"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Assistant = () => {
  return (
    <section className="py-10 2xl:py-16">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-36 xl:gap-64 items-center">
          <div className="">
            <h1 className="font-figtree text-primary text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-semibold leading-normal tracking-[0.94px] lg:tracking-[1.44px] mb-3 xl:mb-5">
              Your Secret Relationship Weapon
            </h1>
            <p className="text-[#747474] text-[16px] leading-normal font-[400] mb-8">
              Smilo Knows What Your Partner Wants… Before They Do Smilo learns
              your partner’s loves, hates, and secret cravings. Just connect
              your profiles, answer a few questions, and let Smilo work its
              magic.
            </p>
            <Link
              href="#"
              className="bg-button text-white px-5 py-4 text-base rounded-[50px] font-medium tracking-[0.48px]"
            >
              Get the App
            </Link>
          </div>
          <div className="h-[497px] flex justify-center overflow-hidden">
            <Image
              src="/images/new/assistent.png"
              alt="secret relationship"
              height={673}
              width={552}
              className="lg:max-w-full w-[650px] object-center h-full"
              style={{ maxWidth: "max-content" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
