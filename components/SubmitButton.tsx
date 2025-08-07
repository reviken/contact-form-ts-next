import { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
}

export default function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full p-200 rounded-[8px] bg-green-600 text-white body-md-bold cursor-pointer"
    >
      {children}
    </button>
  );
}
