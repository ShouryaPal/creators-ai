import HeaderSection from "@/components/HeaderSection";
import NavBar from "@/components/NavBar";
import HomeCards from "@/components/HomeCards";
import MiddleSection from "@/components/MiddleSection";
import KnowMoreAboutSection from "@/components/KnowMoreAboutSection";
import { createClient } from "@/lib/supabase/server";


export default async function Home() {
	const supabase = createClient();

	
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return (
		<>
			<div className="h-auto w-auto pb-10">
				<NavBar user={user}/>
				<div className="flex flex-col items-center gap-4 mt-[80px]">
					<HeaderSection />
					
					<MiddleSection />
					<HomeCards />
					<KnowMoreAboutSection />
					<div className="w-[93vw] bg-footer-backGround rounded-md mt-6">
						<div className="my-6 mx-4 flex items-center justify-between text-footer-textColor text-base">
							<p>© 1811 Labs. All rights reserved.</p>
							<div className="flex gap-6">
								<h1>Privacy Policy</h1>
								<h1>Terms and Conditions</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
