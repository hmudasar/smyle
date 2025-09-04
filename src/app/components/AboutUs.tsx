"use client";
import Image from "next/image";
import React, { forwardRef, useRef, useState, useEffect } from "react";
import { motion, MotionValue, useScroll, useTransform, useMotionValue, animate } from "framer-motion";

interface AboutUsProps {
  phoneRef?: React.RefObject<HTMLDivElement | null>;
  scrollProgress?: MotionValue<number>;
}

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(({ phoneRef, scrollProgress }) => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  
  // Extended scroll tracking for the AboutUs section
  // This creates a longer scroll range to allow for sticky behavior + animation
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutUsRef,
    offset: ["start start", "end end"]
  });

  // Circle animations - trigger during the first part of the scroll through section
  const circle1Scale = useTransform(aboutScrollProgress, [0.1, 0.25], [0, 1]);
  const circle2Scale = useTransform(aboutScrollProgress, [0.15, 0.3], [0, 1]);
  const circle3Scale = useTransform(aboutScrollProgress, [0.2, 0.35], [0, 1]);
  const circle4Scale = useTransform(aboutScrollProgress, [0.25, 0.4], [0, 1]);

  // Breathing animation control
  const breathingScale = useMotionValue(1);
  const [circlesFullyGrown, setCirclesFullyGrown] = useState(false);

  // Track when circles are fully grown (not just visible)
  useEffect(() => {
    const unsubscribe = aboutScrollProgress.onChange((latest) => {
      setCirclesFullyGrown(latest > 0.4); // Only after circles are fully grown
    });
    return unsubscribe;
  }, [aboutScrollProgress]);

  // Start/stop breathing animation
  useEffect(() => {
    if (circlesFullyGrown) {
      // Start breathing animation
      const controls = animate(breathingScale, [1, 1.05, 1], {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      });
      
      return () => controls.stop();
    } else {
      // Reset to 1 when not breathing
      breathingScale.set(1);
    }
  }, [circlesFullyGrown, breathingScale]);

  // Combine scroll scale with breathing scale for smooth animation
  const circle1CombinedScale = useTransform(
    [circle1Scale, breathingScale],
    (values: number[]) => values[0] * values[1]
  );
  const circle2CombinedScale = useTransform(
    [circle2Scale, breathingScale],
    (values: number[]) => values[0] * values[1]
  );
  const circle3CombinedScale = useTransform(
    [circle3Scale, breathingScale],
    (values: number[]) => values[0] * values[1]
  );
  const circle4CombinedScale = useTransform(
    [circle4Scale, breathingScale],
    (values: number[]) => values[0] * values[1]
  );

  return (
    <React.Fragment>
      <section id="about-us" ref={aboutUsRef} className="relative" style={{ height: '300vh' }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative">
            <motion.div 
              className="h-[280px] w-[280px] xsm:h-[406px] xsm:w-[406px] lg:w-[726px] lg:h-[726px] p-5 lg:p-10 bg-theme/10 rounded-full flex items-center justify-center"
              style={{ scale: circle1CombinedScale }}
            >
              <motion.div 
                className="p-5 lg:p-10 h-full w-full bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center"
                style={{ scale: circle2CombinedScale }}
              >
                <motion.div 
                  className="p-5 lg:p-10 h-full w-full bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center"
                  style={{ scale: circle3CombinedScale }}
                >
                  <motion.div 
                    className="p-5 lg:p-10 h-full w-full bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center"
                    style={{ scale: circle4CombinedScale }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Phone content positioned absolutely within the circle container */}
            <div ref={phoneRef} className="absolute inset-0 flex items-center justify-center px-10 xl:px-0 max-w-[430px] mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
