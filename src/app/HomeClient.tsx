"use client";

import { useRef } from "react";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Blogs from "./components/Blogs";
import HowItWorks from "./components/HowItWorks";
import Assistant from "./components/Assistant";
import StickyPhone from "./components/StickyPhone";

export default function HomeClient() {
  const bannerPhoneRef = useRef<HTMLDivElement>(null);
  const aboutPhoneRef = useRef<HTMLDivElement>(null);

  return (
    <div id="home">
      <Banner phoneRef={bannerPhoneRef} />
      <StickyPhone
        src="/images/new/banner-mobile.png"
        bannerRef={bannerPhoneRef}
        aboutRef={aboutPhoneRef}
      />
      <AboutUs phoneRef={aboutPhoneRef} />
      <HowItWorks />
      <Features />
      <Assistant />
      <FAQs />
      <Testimonials />
      <Blogs />
    </div>
  );
}
