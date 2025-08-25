"use client";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <section id="about-us" className="py-16 lg:py-20 xl:py-28 2xl:py-36">
        <div className="mx-auto px-4 md:px-12 relative">
          <div className="mx-auto relative">
            <div className="w-[726px] h-[726px] bg-theme/10 rounded-full mx-auto flex items-center justify-center">
              <div className="w-[636px] h-[636px] bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center">
                <div className="w-[540px] h-[540px] bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center">
                  <div className="w-[434px] h-[434px] bg-theme bg-opacity-[16%] rounded-full m-auto flex items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
