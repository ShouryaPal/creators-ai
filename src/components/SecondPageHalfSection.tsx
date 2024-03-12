"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { formValidator } from "@/schema/YtToLinkformValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import { compressToEncodedURIComponent } from 'lz-string';

const SecondPageHalfSection = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formValidator>>({
		resolver: zodResolver(formValidator),
	});
	function onSubmit(value : z.infer<typeof formValidator>){
		const compressedLink = compressToEncodedURIComponent(value.link);
		router.push(`/finalFetching/?link=${compressedLink}&tone=${value.tone as string}`);
	}
	return (
		<div className="w-full max-w-lg pt-12 flex flex-col">
			<Image src={logo} alt="logo" className="w-[200px] h-[40px]" />
			<div className="pt-8  flex flex-col gap-2">
				<p className="text-4xl font-semibold text-secondPage-heatext">
					YouTube video to
				</p>
				<p className="text-4xl font-semibold text-secondPage-heatext">
					LinkedIn Post Generator
				</p>
				<p className="text-xl font-normal text-secondPage-descText pt-4">
					Generate 2 unique SEO blog for your next viral video.
				</p>
			</div>
			<div className="pt-10">
				<Form {...form}>
					<form className="flex flex-col gap-10 " onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="link"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-secondPage-heatext  font-medium text-xl">
										Enter the youtube video link
									</FormLabel>
									<FormControl>
										<Input
											className=" placeholder:text-secondPage-inputText rounded-sm text-xl"
											placeholder="https://youtu.be/"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="tone"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-secondPage-heatext  font-medium text-xl">
										Blog Tone/Mood
									</FormLabel>
									<FormControl>
										<Input
											className="placeholder:text-secondPage-inputText rounded-sm text-xl"
											placeholder="Funny, Educational, Inspirational.."
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button className=" h-[50px] text-lg bg-gradient-to-b from-generateButton-first to-generateButton-last gap-2 font-semibold">
							Generate <MdKeyboardArrowRight size="20px" />
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default SecondPageHalfSection;
