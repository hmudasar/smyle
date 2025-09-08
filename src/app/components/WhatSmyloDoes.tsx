import Image from "next/image";
import React from "react";

const WhatSmyloDoes = () => {
  return (
    <div className="bg-smylo py-16 sm:py-24 md:py-32 lg:py-40 xl:py-52 2xl:py-64">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="text-center mb-36">
          <h2 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-semibold leading-normal tracking-[1.44px] mb-4">
            What Smylo Does
          </h2>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full md:w-6/12 lg:w-3/12 text-center px-6 md:border-r lg:border-b-none border-b border-black flex flex-col justify-between lg:py-0 py-6">
            <div>
              <Image
                src="/images/new/understand.png"
                width={162}
                height={160}
                alt="understand"
                className="mx-auto"
              />
            </div>
            <div>
              <h3 className="font-figtree text-primary text-[24px] leading-normal tracking-[0.72px] mb-3 font-bold">
                Understands your relationship
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                Learns expectations, needs, streaks, moods—private to your pair.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 text-center px-6 lg:border-r lg:border-b-none border-b border-black flex flex-col justify-between  lg:py-0 py-6">
            <div>
              <h3 className="font-figtree text-primary text-[24px] leading-normal tracking-[0.72px] mb-3 font-bold">
                Spots gaps
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                Finds misses/mismatches, creates a tiny mission, nudges the
                right person.
              </p>
            </div>

            <div>
              <Image
                src="/images/new/spots.png"
                width={160}
                height={160}
                alt="spots"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 py-6 lg:ps-6">
            <div className="flex gap-4 md:gap-10 items-center">
              <div>
                <Image
                  src="/images/new/smylo.png"
                  width={160}
                  height={160}
                  alt="smylo"
                />
              </div>
              <div>
                <h3 className="font-figtree text-primary text-[24px] leading-normal tracking-[0.72px] mb-3 font-bold">
                  Ask Smylo
                </h3>
                <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                  Ask about tasks, streaks, mood, or “how to make them
                  smile”—get one clear step.
                </p>
              </div>
            </div>
            <div className="border-b my-5 border-black h-1 max-w-[379px] ms-16"></div>
            <div className="flex gap-4 md:gap-10 items-center">
              <div>
                <Image
                  src="/images/new/overview.png"
                  width={160}
                  height={160}
                  alt="overview"
                />
              </div>
              <div>
                <h3 className="font-figtree text-primary text-[24px] leading-normal tracking-[0.72px] mb-3 font-bold">
                  Live overview
                </h3>
                <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                  Today's mood, to-dos, streaks, mission, nudges—at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSmyloDoes;
