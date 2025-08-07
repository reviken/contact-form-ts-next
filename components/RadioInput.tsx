"use client";

import { ReactNode, useRef } from "react";

type RadioInputChangeCallback = () => void;

interface RadioInputProps {
  id: string;
  name: string;
  value: string;
  className?: string;
  onChange?: RadioInputChangeCallback;
  children: ReactNode;
}

export default function RadioInput({
  id,
  name,
  value,
  className,
  onChange,
  children,
}: RadioInputProps) {
  const input = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (input.current) {
      input.current.checked = true;
    }
  }

  function handleChange() {
    if (onChange) {
      onChange();
    }
  }

  return (
    <div
      className={`flex gap-150 px-300 py-150 border-[1px] border-grey-500 hover:border-green-600 rounded-[8px] cursor-pointer [&>*]:cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <input
        ref={input}
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
