"use client";
import React, { HtmlHTMLAttributes, MouseEventHandler } from "react";
import Image from "next/image";
interface CustomButtonProps {
  title: string;
  disabled?: boolean;
  style?: string;
  btnType?: "submit" | "button";
  rightIcon?: string;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
}

function CustomButton({
  title,
  style,
  disabled,
  btnType,
  handelClick,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`custom-btn ${style} `}
      onClick={handelClick}
      type={btnType ?? "button"}
    >
      <span className="flex-1 capitalize"> {title}</span>
      {rightIcon && (
        <div className=" w-6 h-6">
          <Image alt={rightIcon} width={20} height={20} src={rightIcon} />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
