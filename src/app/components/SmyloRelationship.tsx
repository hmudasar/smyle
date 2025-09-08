import Image from "next/image";
import React from "react";

const SmyloRelationship = () => {
  return (
    <section className="py-16 lg:py-20 xl:py-28 2xl:py-36">
      <div className="mx-auto px-4 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-36">
          <div className="relative pb-36 lg:pb-0">
            <div className="h-[250px] w-[250px] md:w-[470px] md:h-[470px] lg:h-[350px] lg:w-[350px] xl:h-[570px] xl:w-[570px] 2xl:h-[650px] 2xl:w-[650px] rounded-[16px] overflow-hidden">
              <Image
                src="/images/new/smylo-relationship.jpg"
                alt="smylo-relationship"
                width={650}
                height={650}
                className="w-full h-full object-cover"
              />
            </div>
            <Image
              src="/images/new/about-mobile.png"
              alt="smylo-relationship"
              width={350}
              height={790}
              className="absolute left-[45%] -bottom-0 md:left-[50%] md:-bottom-20 lg:left-[50%] lg:-bottom-20 xl:left-[55%] xl:-bottom-32 w-[180px] md:w-[220px] md:w-[320px] 2xl:w-[350px]"
            />
          </div>
          <div className="flex flex-col justify-center pt-6 lg:pt-0 text-center lg:text-left">
            <h2 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-semibold leading-normal tracking-[1.44px] mb-4">
              Your Gentle AI Relationship Co-pilot
            </h2>
            <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal mb-8">
              Smylo is your gentle AI coach inside SMYL. It understands both
              partners’ expectations, needs, streaks, moods, missions, and
              chats—then turns that context into tiny daily missions and timely
              nudges.
            </p>
            <p className="text-[#151515] text-base lg:text-lg font-regular tracking-[0.48px] leading-normal">
              Ask about upcoming tasks or how to make your partner smile; Smylo
              gives clear, doable steps so small wins add up to real connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmyloRelationship;
