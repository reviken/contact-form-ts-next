"use client";

import Image from "next/image";
import { ReactNode, useRef } from "react";
import checkBoxCheckIcon from "@/assets/images/icon-checkbox-check.svg";

interface CheckBoxInputProps {
  id: string;
  isInvalid: boolean;
  validationMessage: string;
  children: ReactNode;
}

export default function CheckBoxInputProps({
  id,
  isInvalid,
  validationMessage,
  children,
}: CheckBoxInputProps) {
  const input = useRef<HTMLInputElement | null>(null);

  function handleUncheck() {
    if (input.current) {
      input.current.checked = false;
    }
  }

  return (
    <div className="flex flex-col gap-200">
      <div className="flex items-center gap-200">
        <div className="relative h-[18px]">
          <input
            ref={input}
            id={id}
            name={id}
            type="checkbox"
            className="appearance-none w-[18px] h-[18px] border-[1px] checked:border-0 border-grey-500 bg-white peer"
          />
          <Image
            src={checkBoxCheckIcon}
            alt={children ? children.toString() : ""}
            width={18}
            height={18}
            className="absolute top-0 hidden peer-checked:block"
            onClick={handleUncheck}
          />
        </div>
        <label htmlFor={id} className="body-sm text-grey-900">
          {children}
        </label>
      </div>
      {isInvalid && (
        <span className="body-sm text-red">{validationMessage}</span>
      )}
    </div>
  );
}
