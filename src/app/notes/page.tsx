export const revalidate = 0;
import { getNotes } from "@/lib/supabaseApi";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 ">Notes</h1>
      <ul className="flex flex-col gap-4 list-none p-0 m-0">
        {notes.map((note) => (
          <li
            key={note.id}
            className="border-2 border-gray-300 rounded-md p-2 w-96 "
          >
            <p className="text-lg ">{note.content}</p>
            <p className="text-sm text-gray-500">
              {new Date(note.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
