import Image from "next/image";
import React from "react";

const Nudges = () => {
  return (
    <div className="py-8 sm:py-20 md:py-28 lg:py-40 xl:py-52 2xl:py-64">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="text-center mb-36">
          <h2 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-bold leading-normal tracking-[1.44px] mb-4">
            Nudges
          </h2>
          <h3 className="font-figtree text-primary text-[24px] lg:text-[28px] xl-text-[32px] font-bold leading-normal tracking-[0.96px] mb-2">
            Your gentle coach in the middle
          </h3>
          <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal mb-8">
            Both partners can chat with Smylo. It listens, spots what matters,
            and nudges the right person at the right time.
          </p>
        </div>
        <div className="relative">
          <div className="w-[249px] h-[249px] mx-auto relative">
            <div className="hidden lg:block border-dashed border border-black w-[162px] absolute rotate-[45deg] top-[100%] left-[200px]"></div>
            <Image
              src="/images/new/smylo.png"
              width={249}
              height={249}
              alt="smylo"
            />
            <div className="hidden lg:block border-dashed border border-black w-[162px] absolute -rotate-[45deg] top-[100%] right-[200px]"></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-32 mt-14">
          <div className="md:w-[433px] ms-auto">
            <h3 className="font-figtree text-primary text-[24px] lg:text-[28px] xl-text-[32px] font-bold leading-normal tracking-[0.96px] mb-2 text-right me-32">
              You
            </h3>
            <div className="bg-white rounded-[24px] p-4 border border-[#DFDFDF] h-[469px] overflow-hidden ">
              <div className="overflow-y-auto scrollbar-hide h-full flex flex-col gap-4">
                <div>
                  <div className="bg-[#F6F0DE] py-3 px-2  rounded-[16px] rounded-bl-[0px]">
                    <p className="text-[14px] text-[#222] font-normal">
                      Hi there! I’m Smylo, your friendly relationship companion
                      here to support you. How are you feeling today about your
                      relationship with Kristin?
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="ms-auto bg-[#FFE566] py-3 px-2 rounded-[16px] rounded-br-[0px] inline-block">
                    <p className="text-[14px] text-[#222] font-normal">
                      What pending stuff do i have today?
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#F6F0DE] py-3 px-2  rounded-[16px] rounded-bl-[0px]">
                    <p className="text-[14px] text-[#222] font-normal mb-4">
                      here is status for today
                    </p>
                    <ul className="list-disc pl-5 text-[14px] text-[#222] font-normal mb-4">
                      <li>Due Needs: 5</li>
                      <li>Completed: 2</li>
                      <li>Missed: 1</li>
                      <li>Pending: 2</li>
                    </ul>
                    <p className="text-[14px] text-[#222] font-normal mb-4">
                      Mood Snapshot:
                    </p>
                    <ul className="list-disc pl-5 text-[14px] text-[#222] font-normal mb-4">
                      <li>Your mood: 😄</li>
                      <li>Kristin Mood: 😐</li>
                    </ul>
                    <p className="text-[14px] text-[#222] font-normal mb-4">
                      Streak in Progress:
                    </p>
                    <ul className="list-disc pl-5 text-[14px] text-[#222] font-normal mb-4">
                      <li>Days Completed: 1/4 days (25%)</li>
                      <li>Days Remaining: 3 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[433px]">
            <h3 className="font-figtree text-primary text-[24px] lg:text-[28px] xl-text-[32px] font-bold leading-normal tracking-[0.96px] mb-2 ms-20">
              Your Partner
            </h3>
            <div className="bg-white rounded-[24px] p-4 border border-[#DFDFDF] h-[469px] overflow-hidden ">
              <div className="overflow-y-auto scrollbar-hide h-full flex flex-col gap-4">
                <div>
                  <div className="bg-[#F6F0DE] py-3 px-2  rounded-[16px] rounded-bl-[0px]">
                    <p className="text-[14px] text-[#222] font-normal">
                      Hi there! I’m Smylo, your friendly relationship companion
                      here to support you. How are you feeling today about your
                      relationship with Kristin?
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="ms-auto bg-[#FFE566] py-3 px-2 rounded-[16px] rounded-br-[0px] inline-block">
                    <p className="text-[14px] text-[#222] font-normal">
                      What pending stuff do i have today?
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#F6F0DE] py-3 px-2  rounded-[16px] rounded-bl-[0px]">
                    <p className="text-[14px] text-[#222] font-normal mb-4">
                      here is status for today
                    </p>
                    <ul className="list-disc pl-5 text-[14px] text-[#222] font-normal mb-4">
                      <li>Due Needs: 5</li>
                      <li>Completed: 2</li>
                      <li>Missed: 1</li>
                      <li>Pending: 2</li>
                    </ul>
                    <p className="text-[14px] text-[#222] font-normal mb-4">
                      Mood Snapshot:
                    </p>
                    <ul className="list-disc pl-5 text-[14px] text-[#222] font-normal mb-4">
                      <li>Your mood: 😄</li>
                      <li>Kristin Mood: 😐</li>
                    </ul>
                    <p className="text-[14px] text-[#222] font-normal mb-4">
                      Streak in Progress:
                    </p>
                    <ul className="list-disc pl-5 text-[14px] text-[#222] font-normal mb-4">
                      <li>Days Completed: 1/4 days (25%)</li>
                      <li>Days Remaining: 3 days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nudges;
