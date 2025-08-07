"use client";

import Image from "next/image";
import { ReactNode, useRef } from "react";
import checkBoxCheckIcon from "@/assets/images/icon-checkbox-check.svg";

export type CheckBoxChangeCallback = (value: boolean) => void;

interface CheckBoxInputProps {
  id: string;
  error?: string;
  onChange?: CheckBoxChangeCallback;
  children: ReactNode;
}

export default function CheckBoxInput({
  id,
  error,
  onChange,
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
            onChange={(e) => {
              if (onChange) {
                onChange(e.currentTarget.checked);
              }
            }}
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
      {error !== undefined && <span className="body-sm text-red">{error}</span>}
    </div>
  );
}
