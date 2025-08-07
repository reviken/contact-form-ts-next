import { ReactNode } from "react";

export type TextAreaChangeCallback = (value: string) => void;

interface TextAreaProps {
  id: string;
  error?: string;
  onChange?: TextAreaChangeCallback;
  children: ReactNode;
}

export default function TextArea({
  id,
  error,
  onChange,
  children,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-200">
      <label htmlFor={id} className="body-sm text-grey-900">
        {children}
      </label>
      <textarea
        id={id}
        name={id}
        className="px-300 py-150 border-[1px] border-grey-500 hover:border-green-600 rounded-[8px] body-md text-grey-900"
        onChange={(e) => {
          if (onChange) {
            onChange(e.currentTarget.value);
          }
        }}
      />
      {error !== undefined && <span className="body-sm text-red">{error}</span>}
    </div>
  );
}
