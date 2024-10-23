import { createClient, SupabaseClient } from "@supabase/supabase-js";

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
  const { data, error } = await supabase.from("notes").select("*");
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};
