"use client";

import { RefObject, useEffect, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface StickyPhoneProps {
  src: string;
  bannerRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
}

interface BoxCenter {
  cx: number;
  cy: number;
  w: number;
  h: number;
}

const StickyPhone = ({
  src,
  bannerRef,
  aboutRef,
}: StickyPhoneProps) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [measurements, setMeasurements] = useState<{
    banner: BoxCenter | null;
    about: BoxCenter | null;
    headerHeight: number;
  }>({
    banner: null,
    about: null,
    headerHeight: 0,
  });
  const shouldReduceMotion = useReducedMotion();

  // Natural mockup dimensions
  const MOCKUP_NATURAL_HEIGHT = 604;

  const boxCenter = (el: HTMLElement): BoxCenter => {
    const r = el.getBoundingClientRect();
    return {
      cx: r.left + window.scrollX + r.width / 2,
      cy: r.top + window.scrollY + r.height / 2,
      w: r.width,
      h: r.height,
    };
  };

  // Set up measurements with proper debouncing
  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout;

    const updateMeasurements = () => {
      if (!bannerRef.current || !aboutRef.current) return;

      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height || 0;

      setMeasurements({
        banner: boxCenter(bannerRef.current),
        about: boxCenter(aboutRef.current),
        headerHeight,
      });
    };

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateMeasurements, 16);
    };

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      debouncedUpdate();
    };

    checkScreenSize();
    updateMeasurements();

    // Create ResizeObserver for both elements
    const resizeObserver = new ResizeObserver(debouncedUpdate);
    if (bannerRef.current) resizeObserver.observe(bannerRef.current);
    if (aboutRef.current) resizeObserver.observe(aboutRef.current);

    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", debouncedUpdate);
    
    if (document.fonts) {
      document.fonts.addEventListener("loadingdone", debouncedUpdate);
    }

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", debouncedUpdate);
      if (document.fonts) {
        document.fonts.removeEventListener("loadingdone", debouncedUpdate);
      }
    };
  }, [bannerRef, aboutRef]);

  // Calculate scroll range and transforms
  const { scrollY } = useScroll();

  // Calculate scroll ranges based on measurements
  const scrollRanges = useMemo(() => {
    if (!measurements.banner || !measurements.about || typeof window === "undefined") {
      return { startY: 0, endY: 0, startScale: 1, endScale: 1 };
    }

    const { banner, about, headerHeight } = measurements;
    const viewportCenter = (window.innerHeight - headerHeight) / 2;
    
    const startScrollY = banner.cy - viewportCenter;
    const endScrollY = about.cy - viewportCenter;

    // Uniform scale based on height
    const startScale = banner.h / MOCKUP_NATURAL_HEIGHT;
    const endScale = about.h / MOCKUP_NATURAL_HEIGHT;

    return { startY: startScrollY, endY: endScrollY, startScale, endScale };
  }, [measurements]);

  // Create transforms using calculated ranges
  const progress = useTransform(
    scrollY,
    [scrollRanges.startY, scrollRanges.endY],
    [0, 1],
    { clamp: true }
  );

  const translateY = useTransform(scrollY, (latestScrollY) => {
    if (!measurements.banner || !measurements.about || typeof window === "undefined") return 0;
    
    const { banner, about, headerHeight } = measurements;
    const viewportCenter = (window.innerHeight - headerHeight) / 2;
    
    // When scroll is before start, show at banner position
    if (latestScrollY <= scrollRanges.startY) {
      return banner.cy - (latestScrollY + viewportCenter);
    }
    // When scroll is after end, pin at about position
    else if (latestScrollY >= scrollRanges.endY) {
      return about.cy - (latestScrollY + viewportCenter);
    }
    // During transition, interpolate
    else {
      const t = (latestScrollY - scrollRanges.startY) / (scrollRanges.endY - scrollRanges.startY);
      const currentCy = banner.cy + t * (about.cy - banner.cy);
      return currentCy - (latestScrollY + viewportCenter);
    }
  });

  const scale = useTransform(scrollY, (latestScrollY) => {
    if (!measurements.banner || !measurements.about) return 1;
    
    // When scroll is before start, use banner scale
    if (latestScrollY <= scrollRanges.startY) {
      return scrollRanges.startScale;
    }
    // When scroll is after end, pin at about scale
    else if (latestScrollY >= scrollRanges.endY) {
      return scrollRanges.endScale;
    }
    // During transition, interpolate
    else {
      const t = (latestScrollY - scrollRanges.startY) / (scrollRanges.endY - scrollRanges.startY);
      return scrollRanges.startScale + t * (scrollRanges.endScale - scrollRanges.startScale);
    }
  });

  // Creative polish effects
  const glowOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1],
    [0, 0.2, 0.4, 0.2]
  );

  const glowScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.8, 1.2, 1]
  );

  // Drop shadow
  const dropShadow = useTransform(
    progress,
    [0, 0.8, 1],
    [
      "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
      "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2))",
      "drop-shadow(0 20px 35px rgba(0, 0, 0, 0.25))",
    ]
  );

  // Determine visibility based on scroll position
  const currentScrollY = scrollY.get();
  const isInActiveRange = currentScrollY >= scrollRanges.startY - 200; // Show slightly before range
  
  // Don't render on small screens, if measurements aren't ready, or if way before start
  if (!isLargeScreen || !measurements.banner || !measurements.about || !isInActiveRange) {
    return null;
  }

  // Reduced motion fallback
  if (shouldReduceMotion) {
    return (
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[60] hidden lg:flex items-center justify-center"
        aria-hidden="true"
      >
        <motion.div
          style={{
            width: measurements.banner.w,
            height: measurements.banner.h,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt="Phone mockup"
            width={569}
            height={604}
            className="h-full w-full object-contain"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-[60] hidden lg:flex items-center justify-center"
      aria-hidden="true"
    >
      <motion.div
        className="relative"
        style={{
          y: translateY,
          scale,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {/* Soft radial glow */}
        <motion.div
          className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 229, 102, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
            opacity: glowOpacity,
            scale: glowScale,
          }}
        />
        
        {/* Animated phone */}
        <motion.div
          style={{
            filter: dropShadow,
          }}
        >
          <Image
            src={src}
            alt="Phone mockup"
            width={569}
            height={604}
            className="pointer-events-none select-none"
            style={{ 
              width: `${measurements.banner.w}px`,
              height: 'auto',
              maxHeight: `${measurements.banner.h}px`,
            }}
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StickyPhone;