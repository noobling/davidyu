import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let supabase: SupabaseClient;

if (!supabaseKey || !supabaseUrl) {
  throw new Error("SUPABASE_KEY or SUPABASE_URL is not set");
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export const createNote = async (content: string) => {
  const { data, error } = await supabase.from("notes").insert({ content });
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export const getNotes = async () => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};
export const submitNote = async (formData: FormData) => {
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
