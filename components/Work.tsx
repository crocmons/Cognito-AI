"use client"
import React from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ProjectSlider from "@/components/ProjectSlider";
// import StarsCanvas from "@/components/StarCanvas";

const Work = () => {
  return (
      <FadeIn>
        <div className=" flex max-w-5xl flex-col items-center text-center justify-center mx-auto mt-16" id="work">
          <h2 className=" bold-40 lg:bold-64 py-2 text-gray-800">Our Works</h2>
          <p className="text-lg py-6 text-gray-500 text-center justify-center mx-auto tracking-wide font-medium px-2 items-center">
            See how we’re driving digital performance for the industry leaders in the market… <br />
            <span className="font-semibold py-2 my-2 text-center">We have had the opportunity to work on some great projects with some great people. </span> <br />
            Our work is as diverse as our clients, but there is one commonality: All of it encourages action and inspires behavior.
            Our work is as diverse as our clients, but there is one commonality: All of it encourages action and inspires behavior.
          </p>
        </div>
        {/* <StarsCanvas /> */}
          <ProjectSlider />
      </FadeIn>
  );
};

export default Work;
