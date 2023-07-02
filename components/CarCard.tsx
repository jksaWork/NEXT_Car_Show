"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
interface CartModel {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}
interface CarCardProps {
  car: CartModel;
}
function CarCard({
  car: { make, model, transmission, mpg, cityMPG, drive },
}: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {"  "}
          {model}
        </h2>
      </div>
      <div className="flex mt-6 text-[23px] gap-1 font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        32
        <span className="self-end text-[14px] font-medium">/day</span>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          alt="Car Model"
          src="/hero.png"
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
            title="View More"
            style="w-full py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
