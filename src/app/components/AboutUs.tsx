"use client";
import Image from "next/image";
import React, { forwardRef } from "react";
import { motion, MotionValue } from "framer-motion";

interface AboutUsProps {
  phoneRef?: React.RefObject<HTMLDivElement | null>;
  scrollProgress?: MotionValue<number>;
}

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(({ phoneRef, scrollProgress }) => {
  return (
    <React.Fragment>
      <section id="about-us" className="py-16 lg:py-20 xl:py-28 2xl:py-36">
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="mx-auto relative h-[750px] flex justify-center items-center">
            <div className="h-[280px] w-[280px] xsm:h-[406px] xsm:w-[406px] lg:w-[726px] lg:h-[726px] lg:w-[726px] lg:h-[726px] p-5 lg:p-10 bg-theme/10 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="p-5 lg:p-10 h-full w-full bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center">
                <div className="p-5 lg:p-10 h-full w-full bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center">
                  <div className="p-5 lg:p-10 h-full w-full bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div ref={phoneRef} className="relative mx-auto px-10 xl:px-0 max-w-[430px]">
              <motion.div 
                className="absolute -left-1 lg:-left-32 xl:-left-56 top-36 lg:top-24 bg-white rounded-[11px] p-2 lg:p-3 flex items-center gap-3 rotate-[-32.487deg] lg:rotate-[21.184deg]"
                animate={scrollProgress ? { y: -3 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/new/task-1.png"
                  alt="icon-1"
                  width={32}
                  height={32}
                />
                <div>
                  <h6 className="text-primary text-[14px] lg:text-[20px] font-[400] leading-normal">
                    Need
                  </h6>
                  <span className="text-secondary text-[14px] lg:text-base">
                    Bring flowers in office
                  </span>
                </div>
              </motion.div>
              <motion.div 
                className="absolute left-1 lg:-left-32 xl:-left-64 bottom-16 lg:bottom-24 bg-white rounded-[11px] p-2 lg:p-3 flex items-center gap-3 rotate-[11.184deg]"
                animate={scrollProgress ? { y: -2 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/new/task-1.png"
                  alt="icon-1"
                  width={32}
                  height={32}
                />
                <div>
                  <h6 className="text-primary text-[14px] lg:text-[20px] font-[400] leading-normal">
                    Need
                  </h6>
                  <span className="text-secondary text-[14px] lg:text-base">
                    Bring flowers in office
                  </span>
                </div>
              </motion.div>
              <Image
                src="/images/new/about-mobile.png"
                alt="about-mobile"
                width={363}
                height={739}
                className="max-w-full lg:opacity-0 transition-opacity duration-300"
              />
              <motion.div 
                className="absolute right-2 lg:-right-24 xl:-right-60 -top-6 lg:top-40 bg-white rounded-[11px] p-2 lg:p-3 flex items-center gap-3 rotate-[16.166deg] lg:-rotate-[32.487deg]"
                animate={scrollProgress ? { y: -4 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/new/task-1.png"
                  alt="icon-1"
                  width={32}
                  height={32}
                />
                <div>
                  <h6 className="text-primary text-[14px] lg:text-[20px] font-[400] leading-normal">
                    Need
                  </h6>
                  <span className="text-secondary text-[14px] lg:text-base">
                    Bring flowers in office
                  </span>
                </div>
              </motion.div>
              <motion.div 
                className="absolute right-1 lg:-right-32 xl:-right-64 bottom-48 lg:bottom-32 bg-white rounded-[11px] p-2 lg:p-3 flex items-center gap-3 rotate-[30.96deg] lg:-rotate-[5.362deg]"
                animate={scrollProgress ? { y: -3 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/images/new/task-1.png"
                  alt="icon-1"
                  width={32}
                  height={32}
                />
                <div>
                  <h6 className="text-primary text-[14px] lg:text-[20px] font-[400] leading-normal">
                    Need
                  </h6>
                  <span className="text-secondary text-[14px] lg:text-base">
                    Bring flowers in office
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
