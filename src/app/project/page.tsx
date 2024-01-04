import Banner from "@/components/project/banner";
import Feature from "@/components/project/feature";
import Reviews from "@/components/project/reviews";
import Spec from "@/components/project/spec";
import Why from "@/components/project/why";
import React from "react";

export default function page() {
  return (
    <div className="mt-24">
      <Spec />
      <Banner />
      <Feature />
      <Why />
      <Reviews />
    </div>
  );
}
