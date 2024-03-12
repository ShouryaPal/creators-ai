"use server";

import { createClient } from "@/lib/supabase/server";
import * as z from "zod";
import { loginSchema } from "../schema";

export async function login(values: z.infer<typeof loginSchema>) {
  const supabase = createClient();

  const validatedValues = loginSchema.parse(values);

  const { error } = await supabase.auth.signInWithPassword({
    email: validatedValues.email,
    password: validatedValues.password,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: "Login successful!" };
}

export async function signout() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  return null;
}
