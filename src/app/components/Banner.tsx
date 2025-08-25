"use client";

import Image from "next/image";
import Button from "./Button";
import { AppleIcon, PlayStoreIcon, QRCodeIcon } from "../SVG";

const Banner = () => {
  return (
    <header className="banner bg-gradient py-36 relative">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="flex justify-between items-center">
          <div className="w-[430px] flex-none">
            <h1 className="font-spring text-primary text-[30px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-medium leading-normal tracking-[1.68px] mb-3 xl:mb-5">
              Smart Support for Real Relationships
            </h1>
            <p className="text-primary text-[16px] leading-normal tracking-[0.48px] font-normal">
              SMYL helps you build deeper emotional connections with your loved
              ones through daily missions, shared tasks, and personalized
              insights from Smylo — your relationship AI companion.
            </p>
          </div>
          <div className="-ms-16 max-w-full -me-6">
            <Image
              src={"/images/new/banner-mobile.png"}
              alt="Banner"
              width={569}
              height={604}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-none w-[430px]">
            <div className="w-[304px]">
              <div className="bg-white rounded-3xl pt-[40px] pb-5 px-4 text-center inline-block mb-4">
                <div className="px-5">
                  <QRCodeIcon />
                </div>
                <button className="bg-[#333] text-center rounded-xl text-white text-base py-3 px-4 mt-5 w-full">
                  Download/Print
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="bg-white rounded-[70px] flex gap-2 items-center px-4 py-1"
                >
                  <AppleIcon />
                  <div>
                    <span className="text-primary text-[9px] font-medium inline-block leading-[6px]">
                      GET IT ON
                    </span>
                    <h6 className="text-base font-medium text-primary -tracking-[0.47px]">
                      App Store
                    </h6>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-white rounded-[70px] flex gap-2 items-center px-4 py-1"
                >
                  <PlayStoreIcon />
                  <div>
                    <span className="text-primary text-[9px] font-medium inline-block leading-[6px] uppercaser">
                      Download on the
                    </span>
                    <h6 className="text-base font-medium text-primary -tracking-[0.47px]">
                      Google Play
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
