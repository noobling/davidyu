import { createNote } from "@/lib/supabaseApi";
import { redirect } from "next/navigation";

export default function CreateNote() {
  const handleSubmit = async (formData: FormData) => {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <form action={handleSubmit} className="flex flex-col gap-4">
        <textarea
          name="content"
          placeholder="Content"
          className="border-2 border-gray-300 rounded-md p-2 w-96"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}
