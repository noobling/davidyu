export const revalidate = 0;
import { getNotes } from "@/lib/supabaseApi";
import FloatingButton from "@/app/_components/floating-button";
export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-2xl font-bold mb-4 ">Notes</h1>
      <ul className="flex flex-col gap-4 list-none p-0 m-0 overflow-auto max-h-[600px] px-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className="border-2 border-gray-300 rounded-md p-2 w-full max-w-2xl"
          >
            <p className="text-lg whitespace-pre-wrap">{note.content}</p>
            <p className="text-sm text-gray-500">
              {new Date(note.created_at).toLocaleString(undefined, {
                timeZone: "Australia/Sydney",
              })}
            </p>
          </li>
        ))}
      </ul>
      <FloatingButton />
    </div>
  );
}
