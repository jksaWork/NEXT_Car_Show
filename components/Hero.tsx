"use client";
import React from "react";
import { CustomButton } from "@/components";
import Image from "next/image";
function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="hero__subtitle">
          {" "}
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        {/* <div className="hero__subtitle">Hello World</div> */}
        <CustomButton
          handelClick={() => console.log("Hello World")}
          style="bg-primary-blue text-white rounded-full mt-10"
          title={"Exploer Cars"}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="hero__image_1 object-contain"
          />
        </div>
        <div className="hero__image-overlay" />

        {/* <div className="hero__image-overlay"></div> */}
      </div>
    </div>
  );
}

export default Hero;
