"use client";
import { useFormStatus } from "react-dom";

export default function FormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();
  let className = "bg-blue-500 text-white p-2 rounded-md";
  if (pending) {
    className += " bg-gray-500";
  }

  return (
    <button className={className} disabled={pending}>
      {children}
    </button>
  );
}
