"use client";

import { RefObject, useEffect, useState } from "react";

export interface ElementBox {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

const useElementBox = (
  ref: RefObject<HTMLElement | null>
): ElementBox | null => {
  const [box, setBox] = useState<ElementBox | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    let timeoutId: NodeJS.Timeout;

    const updateBox = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      const newBox: ElementBox = {
        x: rect.left + scrollX,
        y: rect.top + scrollY,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + scrollX + rect.width / 2,
        centerY: rect.top + scrollY + rect.height / 2,
      };

      setBox(newBox);
    };

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateBox, 16);
    };

    // Initial measurement
    updateBox();

    // Create ResizeObserver for element size changes
    const resizeObserver = new ResizeObserver(debouncedUpdate);
    resizeObserver.observe(ref.current);

    // Listen for window resize and scroll
    window.addEventListener("resize", debouncedUpdate);
    window.addEventListener("scroll", debouncedUpdate);

    // Listen for font load events that might affect layout
    if (document.fonts) {
      document.fonts.addEventListener("loadingdone", debouncedUpdate);
    }

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", debouncedUpdate);
      window.removeEventListener("scroll", debouncedUpdate);
      if (document.fonts) {
        document.fonts.removeEventListener("loadingdone", debouncedUpdate);
      }
    };
  }, [ref]);

  return box;
};

export default useElementBox;