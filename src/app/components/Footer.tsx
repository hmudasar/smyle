import React from "react";
import Link from "next/link";
import {
  AppleIcon,
  EmailIcon,
  Facebook,
  Instagram,
  LinkedIn,
  LocationIcon,
  PhoneIcon,
  PlayStoreIcon,
  SmyleIcon,
  Twitter,
} from "../SVG";

const Footer = () => {
  return (
    <footer className="rounded-tl-[48px] rounded-tr-[48px] pt-[56px] bg-theme">
      <div className="mx-auto px-4 md:px-12 relative pb-12 lg:block hidden">
        <div className="flex justify-center mb-6">
          <Link href="/" prefetch>
            <SmyleIcon className="transition-all duration-300 h-auto w-[197px] h-[139px]" />
          </Link>
        </div>
        <div className="text-center mb-6">
          <h2 className="font-figtree text-[40px] font-semibold text-primary">
            Your Everyday Relationship Coach
          </h2>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex gap-3 items-center">
            <PhoneIcon />
            <a href="tel:4065550120">(406) 555-0120</a>
          </div>
          <div className="flex gap-3 items-center">
            <EmailIcon />
            <a href="mailto:info@smyl.com">info@smyl.com</a>
          </div>
          <div className="flex gap-3 items-center">
            <LocationIcon />
            <a href="#">6391 Elgin St. Celina</a>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 md:px-12 relative pb-12 lg:hidden">
        <div className="grid grid-cols-2 gap-4 items-end">
          <div>
            <div className="mb-6">
              <Link href="/" prefetch>
                <SmyleIcon className="transition-all duration-300 h-auto w-[118px] h-[84px]" />
              </Link>
            </div>
            <div className="">
              <h2 className="text-[20px] font-semibold text-primary">
                Your Everyday Relationship Coach
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <PhoneIcon />
              <a href="tel:4065550120">(406) 555-0120</a>
            </div>
            <div className="flex gap-3 items-center">
              <EmailIcon />
              <a href="mailto:info@smyl.com">info@smyl.com</a>
            </div>
            <div className="flex gap-3 items-center">
              <LocationIcon />
              <a href="#">6391 Elgin St. Celina</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] border-b-[0.5px] border-[#5D5D5D] xl:hidden">
        <div className="w-full max-w-full text-center gap-5 py-3 px-5 space-y-6 py-6">
          <p className="text-[#333] text-[20px] font-medium leading-[150%]">
            Download The App
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="bg-[#282828] rounded-[70px] flex gap-2 items-center px-4 py-2"
            >
              <AppleIcon />
              <div className="-mt-2">
                <span className="text-white text-[9px] font-medium inline-block leading-[100%] font-figtree">
                  Download on the
                </span>
                <h6 className="text-base font-medium text-white -tracking-[0.47px] leading-[100%] font-figtree">
                  App Store
                </h6>
              </div>
            </a>
            <a
              href="#"
              className="bg-[#282828] rounded-[70px] flex gap-2 items-center px-4 py-2"
            >
              <PlayStoreIcon />
              <div className="-mt-2">
                <span className="text-white text-[9px] font-medium inline-block leading-[100%] font-figtree">
                  GET IT ON
                </span>
                <h6 className="text-base font-medium text-white -tracking-[0.47px] leading-[100%] font-figtree">
                  Google Play
                </h6>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[0.5px] border-b-[0.5px] border-[#5D5D5D]">
        <div className="relative grid grid-cols-4 xl:flex xl:justify-between">
          <div className="flex-none xl:w-[180px] py-6 xl:py-3 px-5 border-r-[0.5px] border-[#5D5D5D] flex items-center justify-center">
            <a href="#">
              <Facebook />
            </a>
          </div>
          <div className="flex-none xl:w-[180px] py-6 xl:py-3 px-5 border-r-[0.5px] border-[#5D5D5D] flex items-center justify-center">
            <a href="#">
              <Twitter />
            </a>
          </div>
          <div className="w-full max-w-full hidden xl:flex items-center justify-center gap-5 py-3 px-5">
            <p className="text-[#333] text-[20px] font-medium leading-[150%]">
              Download The App
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="bg-black rounded-[70px] flex gap-2 items-center px-4 py-2"
              >
                <AppleIcon />
                <div className="-mt-2">
                  <span className="text-white text-[9px] font-medium inline-block leading-[100%] font-figtree">
                    Download on the
                  </span>
                  <h6 className="text-base font-medium text-white -tracking-[0.47px] leading-[100%] font-figtree">
                    App Store
                  </h6>
                </div>
              </a>
              <a
                href="#"
                className="bg-black rounded-[70px] flex gap-2 items-center px-4 py-2"
              >
                <PlayStoreIcon />
                <div className="-mt-2">
                  <span className="text-white text-[9px] font-medium inline-block leading-[100%] font-figtree">
                    GET IT ON
                  </span>
                  <h6 className="text-base font-medium text-white -tracking-[0.47px] leading-[100%] font-figtree">
                    Google Play
                  </h6>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-none xl:w-[180px] py-6 xl:py-3 px-5 border-l-[0.5px] border-[#5D5D5D] flex items-center justify-center">
            <a href="#">
              <Instagram />
            </a>
          </div>
          <div className="flex-none xl:w-[180px] py-6 xl:py-3 px-5 border-l-[0.5px] border-[#5D5D5D] flex items-center justify-center">
            <a href="#">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="mx-auto px-4 md:px-12 relative flex-wrap lg:flex-nowrap flex justify-center gap-4 lg:gap-16">
          <p className="text-[14px] text-[#282828] lg:text-[#6A6A6A] font-medium leading-[140%] traking-[-0.28px]">
            &copy; 2025 smyl. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="text-[14px] text-[#282828] lg:text-[#6A6A6A] font-medium leading-[140%] traking-[-0.28px]"
              href="#"
            >
              Term & Condition
            </Link>
            <div className="h-[20px] w-[1px] bg-[#ACB5BB]"></div>
            <Link
              className="text-[14px] text-[#282828] lg:text-[#6A6A6A] font-medium leading-[140%] traking-[-0.28px]"
              href="#"
            >
              Privacy & Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
