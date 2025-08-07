"use client";

import Image from "next/image";
import { ChangeEvent, ReactNode, useRef } from "react";
import checkBoxCheckIcon from "@/assets/images/icon-checkbox-check.svg";

type CheckBoxInputChangeCallback = (checked: boolean) => void;

interface CheckBoxInputProps {
  id: string;
  onChange?: CheckBoxInputChangeCallback;
  children: ReactNode;
}

export default function CheckBoxInputProps({
  id,
  onChange,
  children,
}: CheckBoxInputProps) {
  const input = useRef<HTMLInputElement | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event.currentTarget.checked);
    }
  }

  function handleUncheck() {
    if (input.current) {
      input.current.checked = false;

      if (onChange) {
        onChange(false);
      }
    }
  }

  return (
    <div className="flex items-center gap-200">
      <div className="relative h-[18px]">
        <input
          ref={input}
          id={id}
          type="checkbox"
          className="appearance-none w-[18px] h-[18px] border-[1px] checked:border-0 border-grey-500 bg-white peer"
          onChange={handleChange}
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
  );
}
