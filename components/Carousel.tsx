"use client"
import React from "react";
import FadeIn from "./FadeIn";
import ScrollCount from "@/components/ScrollCount"

const Carousel = () => {

  return (
    <>
      <FadeIn>
        <h1 className="bold-40 lg:bold-52 flex mt-10 mb-4 py-4 justify-center items-center mx-auto text-black">Testimonial</h1>
        
        <ScrollCount />
        
      </FadeIn>
    </>
  );
};

export default Carousel;
