import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
function Navbar() {
  return (
    <div className="w-full absolute z-10 ">
      <div
        className="
      max-w-[1440px]
      flex justify-between items-between
      sm:px-16 px-6 py-4 bg-transparent
      "
      >
        <Link href="/" className="flex items-center justify-center">
          <Image
            className="object-contain"
            alt="asd"
            src="/logo.svg"
            width={120}
            height={30}
          />
        </Link>
        <CustomButton
          title="Sing In"
          btnType="button"
          style="text-primary-blue rounded-full bg-white min-w-[130px]"
          handelClick={() => "Console.logHeel"}
        />
      </div>
    </div>
  );
}

export default Navbar;
