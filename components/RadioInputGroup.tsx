import { ReactNode } from "react";

interface RadioInputGroupProps {
  legend: string;
  isInvalid: boolean;
  validationMessage: string;
  children: ReactNode;
}

export default function RadioInputGroup({
  legend,
  isInvalid,
  validationMessage,
  children,
}: RadioInputGroupProps) {
  return (
    <fieldset className="flex flex-col gap-200">
      <span>
        <legend className="body-sm text-grey-900">{legend}</legend>
      </span>
      <div className="flex gap-200">{children}</div>
      {isInvalid && (
        <span className="body-sm text-red">{validationMessage}</span>
      )}
    </fieldset>
  );
}
