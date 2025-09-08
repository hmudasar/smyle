import React from "react";

const stepsData: StepCardProps[] = [
  {
    heading: "Onboard",
    description:
      "Answer a few quick questions so Smylo understands your goals, routines, and what matters—private, just for your pair.",
    alignment: "right", // Custom property to determine alignment
  },
  {
    heading: "Pair Up",
    description:
      "Invite your partner (email/QR) and choose the relationship type. Roles map both ways and you share one space",
    alignment: "left",
  },
  {
    heading: "Set Expectations",
    description:
      "Agree on simple actions (needs) and habits (streaks). Pick timings, reminders, and optional small rewards.",
    alignment: "right",
  },
  {
    heading: "Do & Grow Daily",
    description:
      "Get tiny missions and gentle nudges. Complete needs, keep streaks alive, watch the mood improve—and ask Smylo for tips anytim",
    alignment: "left",
  },
];

interface StepCardProps {
  heading: string;
  description: string;
  alignment: "left" | "right";
}

const StepCard: React.FC<StepCardProps> = ({
  heading,
  description,
  alignment,
}) => {
  const justifyClass = alignment === "right" ? "justify-end" : "justify-start";

  const svgPathRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="390"
      height="170"
      viewBox="0 0 411 182"
      fill="none"
      className="absolute bottom-0 -left-[30px] md:-left-[13px] lg:-left-[4px]  w-[280px]  md:w-[320px] md:h-[130px] lg:w-[390px] lg:h-[170px]"
    >
      <path
        d="M0.5 180C0.5 180.828 1.17157 181.5 2 181.5C2.82843 181.5 3.5 180.828 3.5 180H2H0.5ZM400.061 0.93934C399.475 0.353553 398.525 0.353553 397.939 0.93934L388.393 10.4853C387.808 11.0711 387.808 12.0208 388.393 12.6066C388.979 13.1924 389.929 13.1924 390.515 12.6066L399 4.12132L407.485 12.6066C408.071 13.1924 409.021 13.1924 409.607 12.6066C410.192 12.0208 410.192 11.0711 409.607 10.4853L400.061 0.93934ZM315 98V99.5V98ZM84 98V96.5V98ZM84 98V99.5L315 99.5V98V96.5L84 96.5V98ZM399 14H400.5V2H399H397.5V14H399ZM315 98V99.5C362.22 99.5 400.5 61.2203 400.5 14H399H397.5C397.5 59.5635 360.564 96.5 315 96.5V98ZM2 180H3.5C3.5 135.541 39.5411 99.5 84 99.5V98V96.5C37.8842 96.5 0.5 133.884 0.5 180H2Z"
        fill="#939393"
      />
    </svg>
  );

  const svgPathLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="390"
      height="170"
      viewBox="0 0 411 182"
      fill="none"
      className="absolute bottom-0 -right-[30px] md:-right-[13px] lg:-right-[4px] w-[280px] md:w-[320px] md:h-[130px] lg:w-[390px] lg:h-[170px]"
    >
      <path
        d="M410.5 180C410.5 180.828 409.828 181.5 409 181.5C408.172 181.5 407.5 180.828 407.5 180H409H410.5ZM10.9393 0.93934C11.5251 0.353553 12.4749 0.353553 13.0606 0.93934L22.6066 10.4853C23.1924 11.0711 23.1924 12.0208 22.6066 12.6066C22.0208 13.1924 21.071 13.1924 20.4853 12.6066L12 4.12132L3.51471 12.6066C2.92892 13.1924 1.97919 13.1924 1.3934 12.6066C0.807587 12.0208 0.807587 11.0711 1.3934 10.4853L10.9393 0.93934ZM96 98V99.5V98ZM327 98V96.5V98ZM327 98V99.5L96 99.5V98V96.5L327 96.5V98ZM12 14H10.5V2H12H13.5V14H12ZM96 98V99.5C48.7796 99.5 10.5 61.2203 10.5 14H12H13.5C13.5 59.5635 50.4365 96.5 96 96.5V98ZM409 180H407.5C407.5 135.541 371.459 99.5 327 99.5V98V96.5C373.116 96.5 410.5 133.884 410.5 180H409Z"
        fill="#939393"
      />
    </svg>
  );

  return (
    <div className={`flex ${justifyClass}`}>
      <div className={`flex ${justifyClass} md:w-1/2 relative pb-40 lg:pb-44`}>
        <div className="w-[280px] lg:w-[320px] xl:w-[370px] 2xl:w-[413px] border border-[#CFC8AE] bg-[#FAF5E3] rounded-[24px] p-4 text-center">
          <h3 className="font-figtree text-[22px] lg:text-[24px] tracking-[0.72px] font-semibold text-[#151515]">
            {heading}
          </h3>
          <p className="text-[#151515] text-[12px] lg:text-base leading-normal font-normal tracking-[0.48px]">
            {description}
          </p>
        </div>
        {alignment === "right" ? svgPathRight : svgPathLeft}
      </div>
    </div>
  );
};

const SmyloSteps = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-[1110px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-figtree text-primary text-[32px] lg:text-[40px] xl:text-[48px] font-bold leading-normal tracking-[1.44px] mb-4">
            How Smylo Brings You Closer
          </h1>
          <p className="text-[#151515] leading-normal tracking-[0.48px]">
            Smylo brings you closer in four steps: Onboard, Pair Up, Set
            Expectations, and Do & Grow Daily. With smart reminders and gentle
            nudges, Smylo turns small actions into lasting connection
          </p>
        </div>

        <div className="relative md:h-[1325px]">
          {/* Central Vertical Line */}
          <div
            className="md:block hidden absolute left-1/2"
            style={{ transform: "translateX(-50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="1325"
              viewBox="0 0 16 1325"
              fill="none"
            >
              <path
                d="M0 8C1.93129e-07 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -1.93129e-07 8 0C3.58172 1.93129e-07 -1.93129e-07 3.58172 0 8ZM5.72182e-05 1317C5.74113e-05 1321.42 3.58178 1325 8.00006 1325C12.4183 1325 16.0001 1321.42 16.0001 1317C16.0001 1312.58 12.4183 1309 8.00006 1309C3.58178 1309 5.70251e-05 1312.58 5.72182e-05 1317ZM8 8L6.5 8L6.50006 1317L8.00006 1317L9.50006 1317L9.5 8L8 8Z"
                fill="#939393"
              />
            </svg>
          </div>

          {/* Dynamically render steps */}
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              heading={step.heading}
              description={step.description}
              alignment={step.alignment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmyloSteps;
