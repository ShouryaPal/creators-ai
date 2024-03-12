"use server";
import { createClient } from "@/lib/supabase/server";

export default async function Email(value: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("Subscribe")
      .insert([{ email: value }]);

    if (error) {
      throw new Error(error.message); // Re-throw the error for better handling
    }

    return { success: "Email Sent Successfully" };
  } catch (error) {
    return { error: (error as Error).message }; // Extract error message from error object
  }
}
