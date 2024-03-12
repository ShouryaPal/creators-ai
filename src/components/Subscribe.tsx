"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import Email from "@/lib/db.server";
import { useToast } from "./ui/use-toast";

const Subscribe = () => {
	const [email, setEmail] = useState("");
	const { toast } = useToast();

	async function handleSubmit(value: string) {
		await Email(value);
		setEmail("");
		return toast({
			description: "Your email has subscribed.",
		});
	}
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="w-[230px] h-[50px] text-white  bg-gradient-to-b from-pink-light to-pink-bright"
				>
					Subscribe
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[400px] h-auto">
				<div className="p-2 flex flex-col gap-2 items-center">
					<Image src={logo} alt="logo" className="w-[120px] h-[20px]" />
					<p className="font-bold text-lg pt-4 text-secondPage-heatext">
						Join the Club!
					</p>
					<div className="pt-4">
						<p className="text-base tracking-tighter text-pop-desc">
							Like these tools? you might want to checkout more
						</p>
						<p className="text-base tracking-tighter text-pop-desc">
							awesome products from us made just for you
						</p>
					</div>
					<div className="border rounded-md mt-4">
						<div className="flex justify-between p-1">
							<Input
								className="border-none"
								type="text"
								placeholder="Enter Email ID"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Button
								variant="outline"
								className="w-[100px] h-[40px] text-white  bg-gradient-to-b from-pink-light to-pink-bright"
								onClick={() => handleSubmit(email)}
							>
								Subscribe
							</Button>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default Subscribe;
