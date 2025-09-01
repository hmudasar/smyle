"use client";

import Image from "next/image";
import { AppleIcon, PlayStoreIcon, QRCodeIcon } from "../SVG";

const Banner = () => {
  return (
    <div className="banner bg-gradient pb-6 lg:pb-26 pt-36 relative">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="text-center lg:text-left w-full lg:w-1/2 xl:w-[440px] flex-none">
            <h1 className="text-primary text-[40px] font-semibold lg:text-[48px] xl:text-[56px] 2xl:text-[62px] leading-normal tracking-[0.62px] mb-3">
              Smart Support for Real Relationships
            </h1>
            <p className="text-primary text-[14px] lg:text-[16px] font-[400] leading-normal tracking-[0.48px] font-normal">
              SMYL helps you build deeper emotional connections with your loved
              ones through daily missions, shared tasks, and personalized
              insights from Smylo — your relationship AI companion.
            </p>
          </div>
          <div className="lg:-ms-24 max-w-full xl:-me-12 relative h-[620px]">
            <Image
              src={"/images/new/banner-mobile.png"}
              alt="Banner"
              width={569}
              height={604}
              className="h-full w-full object-cover object-center"
            />
            <div className="w-full sm:w-[410px] bottom-36 flex justify-between absolute left-1/2 -translate-x-1/2 xl:hidden s2m:gap-8 sm:gap-12 bg-white border border-[#8B8B8B] p-4 rounded-[100px]">
              <div className="flex gap-4 items-center">
                <h4 className="text-base leading-normal text-black">Get App</h4>
                <a
                  href="#"
                  className="bg-white/80 h-[46px] w-[46px] border-[0.5px] backdrop-blur-[14px] border-[#8B8B8B] rounded-[70px] flex justify-center items-center"
                >
                  <AppleIcon />
                </a>
                <a
                  href="#"
                  className="bg-white/80 h-[46px] w-[46px] border-[0.5px] backdrop-blur-[14px] border-[#8B8B8B] rounded-[70px] flex justify-center items-center"
                >
                  <PlayStoreIcon />
                </a>
              </div>
              <a
                href="#"
                className="bg-[#333] rounded-[12px] px-4 py-3 text-white leading-[24px] text-[14px] sm:text-base font-[400]"
              >
                Download QR
              </a>
            </div>
          </div>
          <div className="flex-none w-[430px] relative xl:block hidden">
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
                  <div className="-mt-2">
                    <span className="text-primary text-[9px] font-medium inline-block leading-[100%] font-figtree">
                      Download on the
                    </span>
                    <h6 className="text-base font-medium text-primary -tracking-[0.47px] leading-[100%] font-figtree">
                      App Store
                    </h6>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-white rounded-[70px] flex gap-2 items-center px-4 py-1"
                >
                  <PlayStoreIcon />
                  <div className="-mt-2">
                    <span className="text-primary text-[9px] font-medium inline-block leading-[100%] font-figtree">
                      GET IT ON
                    </span>
                    <h6 className="text-base font-medium text-primary -tracking-[0.47px] leading-[100%] font-figtree">
                      Google Play
                    </h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
