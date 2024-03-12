import bgSvg from "@/assets/svg_mask-group.svg";
import SecondPageCard from "@/components/SecondPageCard";
import SecondPageHalfSection from "@/components/SecondPageHalfSection";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import Image from "next/image";

export default async function Home() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if(!user) {
		return redirect('/sign-up');
	}
	return (
		<div className="grid grid-cols-8">
			<div className="col-span-5 flex flex-col items-center ">
				<SecondPageHalfSection />
			</div>
			<div className="col-span-3 h-screen flex flex-col gap-4 items-center bg-secondPage-bground font-Roboto">
				<Image src={bgSvg} alt="bg" className="h-fit w-auto relative" />
				<div className="absolute">
					<SecondPageCard />
					<SecondPageCard />
					<SecondPageCard />
				</div>
			</div>
		</div>
	);
}
