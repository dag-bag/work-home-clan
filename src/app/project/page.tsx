import React from "react";
import Banner from "@/components/project/banner";
import Feature from "@/components/project/feature";
import Reviews from "@/components/project/reviews";
import Spec from "@/components/project/spec";
import Why from "@/components/project/why";
import Nearby from "@/components/project/nearby";
export default function page() {
  return (
    <div className="mt-24">
      <Nearby />
      <Spec />
      <Banner />
      <Feature />
      <Why />
      <Reviews />
    </div>
  );
}
