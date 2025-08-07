import { ReactNode } from "react";

interface TextAreaProps {
  id: string;
  children: ReactNode;
}

export default function TextArea({ id, children }: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="body-sm text-grey-900">
        {children}
      </label>
      <textarea
        id={id}
        className="px-300 py-150 border-[1px] border-grey-500 hover:border-green-600 rounded-[8px] body-md text-grey-900"
      />
    </div>
  );
}
