// src/app/smile-bizz/page.tsx
import { Metadata } from "next";
import { Suspense } from "react";
import SmyloBanner from "../components/SmyloBanner";
import SmyloRelationship from "../components/SmyloRelationship";
import SmyloSteps from "../components/SmyloSteps";
import WhoItFor from "../components/WhoItFor";
import WhatSmyloDoes from "../components/WhatSmyloDoes";
import Nudges from "../components/Nudges";
import Mission from "../components/Mission";
import MagicSubscription from "../components/Subscription";
import SmyloFAQs from "../components/SmyloFAQs";

export const metadata: Metadata = {
  title: "Smylo - Smile",
  description: "",
};

const SmyloPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SmyloBanner />
      <SmyloRelationship />
      <SmyloSteps />
      <WhoItFor />
      <WhatSmyloDoes />
      <Nudges />
      <Mission />
      <SmyloFAQs />
      <MagicSubscription />
    </Suspense>
  );
};

export default SmyloPage;
