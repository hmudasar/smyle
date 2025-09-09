import React from "react";
import { Suspense } from "react";
import Image from "next/image";

const userImage = [
  "/images/reviews/user-1.svg",
  "/images/reviews/user-2.svg",
  "/images/reviews/user-3.svg",
  "/images/reviews/user-4.svg",
];

const SmyloBanner = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="banner bg-gradient pt-48 pb-36 md:pb-40 lg:pb-48 xl:pt-52 xl:pb-52 relative">
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="flex lg:text-left text-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-16 lg:gap-20 xl:gap-28 2xl:gap-36 items-center">
            <div className="w-full lg:w-1-2xl:max-w-[655px]">
              <h1 className="font-figtree text-[#151515] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] 2xl:text-[62px] font-bold leading-normal tracking-[0.68px] mb-4">
                Your Relationship Coach, On Demand.
              </h1>
              <p className="text-[#151515] text-base font-regular tracking-[0.48px] leading-normal mb-8">
                SMYL helps you build deeper emotional connections with your
                loved ones through daily missions, shared tasks, and
                personalized insights from Smylo — your relationship AI
                companion.
              </p>
              <div className="flex items-center lg:justify-start justify-center gap-4">
                <div className="flex">
                  {userImage.map((image, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 border-[2px] border-white rounded-full overflow-hidden &:not(:first-child) -ml-3"
                    >
                      <Image
                        src={image}
                        alt={`User ${index + 1}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[#3E3E3E] text-[14px]">
                  Loved by couples & families
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1-2xl:max-w-[512px]">
              <Image
                src="/images/new/smylo-banner-img.png"
                alt="Smylo Banner"
                width={512}
                height={469}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default SmyloBanner;
