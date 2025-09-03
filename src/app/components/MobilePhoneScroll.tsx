"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AppleIcon, PlayStoreIcon } from "../SVG";

gsap.registerPlugin(ScrollTrigger);

const MobilePhoneScroll = () => {
  const mobileRef = useRef<HTMLDivElement>(null);
  const downloadBarRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mobileElement = mobileRef.current;
    const downloadBar = downloadBarRef.current;
    const wrapper = wrapperRef.current;

    if (!mobileElement || !downloadBar || !wrapper) return;

    // Only enable animation on desktop (>768px)
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    const setupAnimation = () => {
      if (!mediaQuery.matches) return;

      const bannerSection = document.querySelector(".banner") as HTMLElement;
      const aboutSection = document.querySelector("#about-us") as HTMLElement;
      
      if (!bannerSection || !aboutSection) return;

      // Calculate static positions (won't change during scroll)
      const bannerTop = bannerSection.offsetTop;
      const bannerHeight = bannerSection.offsetHeight;
      const bannerCenter = bannerTop + bannerHeight / 2;
      
      const aboutTop = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;
      const aboutCenter = aboutTop + aboutHeight / 2;

      // Set initial position - center of Banner section
      gsap.set(mobileElement, {
        position: "fixed",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        zIndex: 1000,
        scale: 1
      });

      // Animation from Banner to AboutUs - properly centered
      ScrollTrigger.create({
        trigger: bannerSection,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Calculate viewport-relative positions
          const scrollTop = window.pageYOffset;
          const viewportCenter = window.innerHeight / 2;
          
          // Calculate where banner and about centers are relative to viewport
          const bannerViewportY = bannerCenter - scrollTop - viewportCenter;
          const aboutViewportY = aboutCenter - scrollTop - viewportCenter;
          
          // Animate between the two positions
          const currentY = gsap.utils.interpolate(bannerViewportY, aboutViewportY, progress);
          
          // Scale from Banner size to AboutUs size
          const scaleRatio = 739 / 604; // AboutUs height / Banner height
          const scale = gsap.utils.interpolate(1, scaleRatio, progress);
          
          gsap.set(mobileElement, {
            y: currentY,
            scale: scale
          });

          // Fade download bar
          gsap.set(downloadBar, {
            opacity: Math.max(0, 1 - progress * 1.5)
          });
        }
      });

      // Pin mobile when AboutUs section is active
      ScrollTrigger.create({
        trigger: aboutSection,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          // Lock mobile at AboutUs center position
          const scrollTop = window.pageYOffset;
          const viewportCenter = window.innerHeight / 2;
          const aboutViewportY = aboutCenter - scrollTop - viewportCenter;
          
          gsap.set(mobileElement, {
            y: aboutViewportY,
            scale: 739 / 604
          });
        },
        onUpdate: () => {
          // Keep mobile locked at AboutUs center during section scroll
          const scrollTop = window.pageYOffset;
          const viewportCenter = window.innerHeight / 2;
          const aboutViewportY = aboutCenter - scrollTop - viewportCenter;
          
          gsap.set(mobileElement, {
            y: aboutViewportY,
            scale: 739 / 604
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    };

    // Setup animation after DOM is ready
    const timer = setTimeout(setupAnimation, 100);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="hidden md:block pointer-events-none">
      <div ref={mobileRef} className="pointer-events-none">
        <div className="relative">
          <Image
            src="/images/new/banner-mobile.png"
            alt="Mobile App Mockup"
            width={569}
            height={604}
            className="w-full h-full object-cover object-center"
            priority
          />
          <div
            ref={downloadBarRef}
            className="w-full sm:w-[410px] bottom-36 flex justify-between absolute left-1/2 -translate-x-1/2 s2m:gap-8 sm:gap-12 bg-white border border-[#8B8B8B] p-4 rounded-[100px] pointer-events-auto"
          >
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
      </div>
    </div>
  );
};

export default MobilePhoneScroll;