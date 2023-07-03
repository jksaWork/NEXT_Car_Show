"use client";
import React, { Fragment } from "react";
import { CarModel } from "./CarCard";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
interface CardDetails {
  car: CarModel;
  isOpen: boolean;
  setIsOpen: () => void;
}

function CardDetails({ car, isOpen, setIsOpen }: CardDetails) {
  //   let { make, model, transmission, mpg, cityMPG, drive } = car;
  return (
    <>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex flex-col">
                    <div className="car-details__main-image">
                      <Image
                        alt="Car Model"
                        src="/hero.png"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3 ">
                      <div className="h-[50px] flex-1 relative">
                        <Image
                          alt="Car Model"
                          src="/hero.png"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="h-[50px] flex-1 relative">
                        <Image
                          alt="Car Model"
                          src="/hero.png"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="h-[50px] flex-1 relative">
                        <Image
                          alt="Car Model"
                          src="/hero.png"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl capitlize font-medium leading-6 text-gray-900"
                      >
                        {car.make} {car.model}
                      </Dialog.Title>
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CardDetails;
