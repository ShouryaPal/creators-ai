"use client";
import Image from "next/image";
import linkedIn from "@/assets/4icon.svg";
import { useRouter } from "next/navigation";
const HomeCards = () => {
	const route = useRouter();
	return (
		<div className="grid grid-cols-2 gap-4 mt-4">
			<div className="border  rounded-md">
				<div className="m-4 flex flex-col gap-2">
					<div className="w-fit border text-2xl rounded-md bg-bgcard-cardIcon">
						<p className="p-4">💡</p>
					</div>
					<h1 className="text-gray-cardTextHead font-semibold text-xl">
						Video Idea Generator
					</h1>
					<p className="text-gray-cardDescription font-medium text-lg">
						Generate 10 unique ideas for your next viral video. Forget the
						creative block
					</p>
				</div>
			</div>
			<div className="border  rounded-md">
				<div className="m-4 flex flex-col gap-2">
					<div className="w-fit border text-2xl rounded-md bg-bgcard-cardIcon">
						<p className="p-4">🖼️</p>
					</div>
					<h1 className="text-gray-cardTextHead font-semibold text-xl">
						Free Audiogram Generator
					</h1>
					<p className="text-gray-cardDescription font-medium text-lg">
						Generate 10 unique ideas for your next viral video. Forget the
						creative block
					</p>
				</div>
			</div>
			<div className="border  rounded-md">
				<div className="m-4 flex flex-col gap-2">
					<div className="w-fit border text-2xl rounded-md bg-bgcard-cardIcon">
						<p className="p-4">🗒️</p>
					</div>
					<h1 className="text-gray-cardTextHead font-semibold text-xl">
						YouTube video to SEO Blog Generator
					</h1>
					<p className="text-gray-cardDescription font-medium text-lg">
						Generate 10 unique ideas for your next viral video. Forget the
						creative block
					</p>
				</div>
			</div>
			<div className="border cursor-pointer rounded-md" onClick={()=> route.push('/YTtoLinkedInform')}>
				<div className="m-4 flex flex-col gap-2">
					<div className="w-fit border text-2xl rounded-md bg-bgcard-cardIcon">
						<p className="p-4">
							<Image src={linkedIn} alt="linkedIn-icon" />
						</p>
					</div>
					<h1 className="text-gray-cardTextHead font-semibold text-xl">
						YouTube video to LinkedIn Post Generator
					</h1>
					<p className="text-gray-cardDescription font-medium text-lg">
						Generate 10 unique ideas for your next viral video. Forget the
						creative block
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeCards;
