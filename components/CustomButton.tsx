"use client";
import React, { HtmlHTMLAttributes, MouseEventHandler } from "react";

interface CustomButton {
  title: string;
  disabled?: boolean;
  style?: string;
  btnType: "submit" | "button";
  handelClick?: MouseEventHandler<HTMLButtonElement>;
}

function CustomButton({
  title,
  style,
  disabled,
  btnType,
  handelClick,
}: CustomButton) {
  return (
    <button
      disabled={disabled}
      className={`custom-btn ${style}`}
      onClick={handelClick}
      type={btnType}
    >
      <span className="flex-1 capitalize"> {title}</span>
    </button>
  );
}

export default CustomButton;
