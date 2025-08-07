import { ReactNode } from "react";

interface RadioInputGroupProps {
  id: string;
  legend: string;
  error?: string;
  children: ReactNode;
}

export default function RadioInputGroup({
  id,
  legend,
  error,
  children,
}: RadioInputGroupProps) {
  const errorId = `${id}-error`;
  const legendId = `${id}-legend`;

  return (
    <fieldset className="flex flex-col gap-200">
      <span>
        <legend id={legendId} className="body-sm text-grey-900">
          {legend}
        </legend>
      </span>
      <div
        className="flex gap-200"
        role="radiogroup"
        aria-labelledby={legendId}
        aria-describedby={errorId}
      >
        {children}
      </div>
      {error !== undefined && (
        <span id={errorId} className="body-sm text-red">
          {error}
        </span>
      )}
    </fieldset>
  );
}
