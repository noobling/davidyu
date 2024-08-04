import { useState } from "react";
import { useMutation } from "react-query";

export function useMutate(url: string) {
  const [loading, setLoading] = useState(false);

  const mutate = async (data: any) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert("Failed to save data");
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading };
}
