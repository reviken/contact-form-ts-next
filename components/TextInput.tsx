"use client";

import { ReactNode } from "react";

type TextInputPropsChangeCallback = (value: string) => void;

interface TextInputProps {
  id: string;
  error?: string;
  onChange?: TextInputPropsChangeCallback;
  className?: string;
  children: ReactNode;
}

export default function TextInput({
  id,
  error,
  onChange,
  className,
  children,
}: TextInputProps) {
  function handleChange(value: string) {
    if (onChange) {
      onChange(value);
    }
  }

  const borderStyle =
    error !== undefined
      ? "border-red"
      : "border-grey-500 hover:border-green-600";

  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col gap-100 ${className}`}>
      <label className="body-sm text-grey-900" htmlFor={id}>
        {children}
      </label>
      <input
        className={`border-[1px] ${borderStyle} rounded-[8px] px-300 py-150 body-md-regular text-grey-900`}
        id={id}
        name={id}
        type="text"
        onChange={(e) => handleChange(e.currentTarget.value)}
        aria-invalid={error !== undefined}
        aria-describedby={error ? errorId : undefined}
      />
      {error !== undefined && (
        <span id={errorId} className="body-sm text-red">
          {error}
        </span>
      )}
    </div>
  );
}
