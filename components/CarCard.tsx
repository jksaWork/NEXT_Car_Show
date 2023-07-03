"use client";
import React, { useState } from "react";

import Image from "next/image";
import { CustomButton, CardDetails } from "./";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
export interface CarModel {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
  cityMPG: number;
}
interface CarCardProps {
  car: CarModel;
}
function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  let { make, model, transmission, mpg, city_mpg, drive, year, cityMPG } = car;
  console.log(year, city_mpg);

  return (
    <div className="car-card group cursor-pointer">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {"  "}
          {model}
        </h2>
      </div>
      <div className="flex mt-6 text-[23px] gap-1 font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {calculateCarRent(city_mpg, year)}
        <span className="self-end text-[14px] font-medium">/day</span>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          alt="Car Model"
          src={generateCarImageUrl(car)}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex relative w-full mt-2">
        <div className="group-hover:invisible flex w-full justify-between text-gray-50 gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="steering-wheel"
              height={20}
              src="/steering-wheel.svg"
              width={20}
            />
            <p className="car-card__icon-text">
              {transmission == "a" ? "automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="tire-wheel" height={20} src="/tire.svg" width={20} />
            <p className="car-card__icon-text ">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="steering-wheel" height={20} src="/gas.svg" width={20} />
            <p className="car-card__icon-text">{cityMPG} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            btnType="button"
            title="View More"
            style="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handelClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails
        car={car}
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}

export default CarCard;
