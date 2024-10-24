import { createNote } from "@/lib/supabaseApi";
import { redirect } from "next/navigation";

import FormButton from "./form-button";
export default function CreateNote() {
  const submitNote = async (formData: FormData) => {
    "use server";
    const content = formData.get("content");
    try {
      console.log("Creating note", content);
      await createNote(content as string);
    } catch (error) {
      console.error("Error creating note", error);
    } finally {
      redirect("/notes");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form action={submitNote} className="flex flex-col gap-4">
        <textarea
          name="content"
          placeholder="Content"
          className="border-2 border-gray-300 rounded-md p-2 w-96"
          rows={8}
          required
        />
        <FormButton>Create Note</FormButton>
      </form>
    </div>
  );
}
