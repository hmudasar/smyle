import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="py-8 sm:py-20 md:py-28 lg:py-40 xl:py-52 2xl:py-64 relative">
      <div className="mx-auto px-4 md:px-12 ">
        <div className="flex justify-between lg:flex-nowrap flex-wrap gap-12">
          <div className="xl:w-[422px] flex flex-col gap-4">
            <div className="p-4 rounded-2xl bg-[#FFE566]">
              <h3 className="text-[20px] font-figtree font-semibold tracking-[0.6px] mb-3 leading-normal">
                Questions
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                When both of you finish, you each claim stars
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF2B3]">
              <h3 className="text-[20px] font-figtree font-semibold tracking-[0.6px] mb-3 leading-normal">
                Quiz
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                When both of you finish, you each claim stars
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFFAE4]">
              <h3 className="text-[20px] font-figtree font-semibold tracking-[0.6px] mb-3 leading-normal">
                Game
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                When both of you finish, you each claim stars
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white">
              <h3 className="text-[20px] font-figtree font-semibold tracking-[0.6px] mb-3 leading-normal">
                Star
              </h3>
              <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
                Complete missions together to earn ⭐. When both of you finish,
                you each claim stars. Redeem them to unlock new Smylo emoji
                faces and make your home screen feel more “you.”
              </p>
            </div>
          </div>
          <div className="xl:block hidden banner-img max-w-full xl:-me-12 xl:bottom-0 xl:absolute xl:left-[50%] xl:top-0 xl:w-6/12 2xl:w-8/12 relative h-[620px] xl:h-auto">
            <Image
              src={"/images/new/mission.png"}
              alt="Banner"
              width={569}
              height={604}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div className="xl:w-[422px]">
            <h2 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-bold leading-normal tracking-[1.44px] mb-4">
              Mission
            </h2>
            <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal mb-8">
              Complete missions together to earn ⭐. When both of you finish,
              you each claim stars. Redeem them to unlock new Smylo emoji faces
              and make your home screen feel more “you.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
