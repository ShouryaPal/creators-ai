"use client";
import { signout } from "@/app/(auth)/login/action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

type TransformedData = {
	title: string[];
	body: string[];
	hashtags: string[][];
};

interface ResultCardsProps {
	data: TransformedData | null;
}

const ResultCards: React.FC<ResultCardsProps> = ({ data }) => {
	const router = useRouter();
	const { title, body, hashtags } = data || {
		title: [],
		body: [],
		hashtags: [],
	};

	function handleSubmit(){
		signout();
		router.push('/');
	}

	return (
		<div className="p-8 flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<div className="invisible" />
				<Button
					variant="outline"
					className="bg-inherit gap-1 w-[100px] h-[40px] font-bold text-red-600"
					onClick={()=> handleSubmit()}
				>
					Log Out
				</Button>
			</div>
			<h2 className="font-medium text-secondPage-heatext text-sm pt-10">
				Results
			</h2>
			<div className="grid grid-cols-2 gap-2">
				{title.map((t, index) => (
					<div className="w-fit h-auto border rounded-md" key={`${index + 1}`}>
						<div className="p-3 flex flex-col gap-3">
							<div className="w-10 h-10 bg-sidebar-back rounded-full flex flex-col items-center justify-center">
								🖼️
							</div>
							<h1 className="text-3xl font-semibold text-secondPage-heatext">
								{t}
							</h1>
							<p className="block text-base text-footer-textColor">
								{body[index]}
							</p>
							<div className="flex gap-2">
								{hashtags[index].map((hashtags, i) => (
									<Badge
										variant="secondary"
										className="bg-sidebar-badge text-sidebar-badgetxt text-sm font-medium"
										key={`${i + 1}`}
									>
										{hashtags}
									</Badge>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResultCards;
