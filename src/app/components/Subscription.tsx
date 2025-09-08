"use client";
import React from "react";
import { Cog, Heart, RegClock, StarGray, SyncAlt, Users } from "../SVG";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features = [
  {
    icon: <Heart />,
    title: "Buy for partners",
    description: "Add one or many under a single purchase.",
  },
  {
    icon: <Users />,
    title: "Shared access",
    description: "If either person covers the other, both get Smylo.",
  },
  {
    icon: <RegClock />,
    title: "Per-partner expiry",
    description: "Clear status and dates for every link",
  },
  {
    icon: <Cog />,
    title: "Manage anytime",
    description: "add/remove partner coverage from Settings",
  },
  {
    icon: <SyncAlt />,
    title: "Auto-renew toggle",
    description: "on/off with cancel anytime",
  },
  {
    icon: <StarGray />,
    title: "All features included",
    description: "AI coach, missions, nudges, mood & insights.",
  },
];

const MagicSubscription = () => {
  return (
    <section className="py-16 text-[#151515]">
      <div className="container mx-auto px-4 md:px-12 relative max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-semibold leading-normal tracking-[1.44px] mb-4">
            Magic Subscription. Simple, fair, built for two
          </h2>
          <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal mb-8">
            Unlock Smylo With Monthly Or Yearly Plans. Buy For Yourself And
            Cover Your Partner(S). When You Subscribe For A Partner, You Both
            Get Full Smylo Access For That Relationship. You Can Also Cover
            Multiple Partners—Each Link Has Its Own Expiry You Control..
          </p>
        </div>

        <div className="flex justify-center md:flex-nowrap flex-wrap mb-16 gap-6">
          <div className="bg-[#FFF2B3] rounded-xl p-4 w-full md:w-[310px]">
            <p className="text-[#5E5E5E] text-base font-medium mb-4">Monthly</p>
            <div className="flex items-center gap-2">
              <p className="text-[#0D0D0D] text-[36px] font-medium">$30</p>
              <span className="text-[14px] text-[#222] font-normal">
                /Person
              </span>
            </div>
          </div>
          <div className="bg-[#FAF5E3] rounded-xl p-4 w-full md:w-[310px]">
            <p className="text-[#5E5E5E] text-base font-medium mb-4">Yearly</p>
            <div className="flex items-center gap-2">
              <p className="text-[#0D0D0D] text-[36px] font-medium">300$</p>
              <span className="text-[14px] text-[#222] font-normal">
                $25/Person monthly
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((data, i) => (
            <div
              key={i}
              className="py-5 px-4 border-b border-[#AEAEAE] flex items-center gap-4"
            >
              <div className="flex-none">{data.icon}</div>
              <div>
                <h5 className="text-base text-primary font-semibold mb-2 tracking-[0.48px] font-figtree leading-normal">
                  {data.title}
                </h5>
                <p className="text-base text-black font-normal mb-2 tracking-[0.48px] font-figtree leading-normal">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicSubscription;
