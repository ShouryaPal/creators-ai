import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { FC } from "react";
import LoginForm from "./_component/LoginForm";


const page = async () => {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		return redirect("/");
	}

	return <LoginForm />;
};

export default page;
