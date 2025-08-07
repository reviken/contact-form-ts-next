import { ReactNode } from "react";

interface RadioInputGroupProps {
  legend: string;
  error?: string;
  children: ReactNode;
}

export default function RadioInputGroup({
  legend,
  error,
  children,
}: RadioInputGroupProps) {
  return (
    <fieldset className="flex flex-col gap-200">
      <span>
        <legend className="body-sm text-grey-900">{legend}</legend>
      </span>
      <div className="flex gap-200">{children}</div>
      {error !== undefined && <span className="body-sm text-red">{error}</span>}
    </fieldset>
  );
}
