"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { User } from "@supabase/supabase-js";
import { signout } from "@/app/(auth)/login/action";

type Props = {
	user: User | null;
};
const NavBar = ({ user }: Props) => {
	const router = useRouter();
	function handleClick() {
		signout();
		router.push("/");
	}
	return (
		<div className="mt-10 mx-8 flex justify-between items-center">
			<Image src={logo} alt="logo" className="w-[200px] h-[40px]" />
			{user ? (
				<Button
					variant="outline"
					className="bg-inherit gap-1 w-[100px] h-[40px] font-bold text-red-600"
					onClick={() => handleClick()}
				>
					Log Out
				</Button>
			) : (
				<Button
					variant="outline"
					className="bg-inherit gap-1 w-[100px] h-[40px] font-bold"
					onClick={() => router.push("/login")}
				>
					<FiUser className="w-[20px] h-[20px]" />
					Log in
				</Button>
			)}
		</div>
	);
};

export default NavBar;
