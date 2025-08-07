import { ReactNode } from "react";

interface RadioInputGroupProps {
  legend: string;
  children: ReactNode;
}

export default function RadioInputGroup({
  legend,
  children,
}: RadioInputGroupProps) {
  return (
    <fieldset>
      <legend className="body-sm text-grey-900">{legend}</legend>
      <div className="flex gap-200">{children}</div>
    </fieldset>
  );
}
