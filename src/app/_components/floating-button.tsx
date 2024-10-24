"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function FloatingButton() {
  const router = useRouter();
  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
      onClick={() => {
        router.push("/notes/create");
      }}
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
}
