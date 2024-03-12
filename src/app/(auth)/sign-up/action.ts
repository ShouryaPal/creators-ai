"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { loginSchema } from "../schema";
import { z } from "zod";
export async function signup(values: z.infer<typeof loginSchema>) {
  const supabase = createClient();

  const validatedValues = loginSchema.parse(values);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: validatedValues.email,
    password: validatedValues.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message };
  }

  return { success: "Mail Sent Successfully" };
}
