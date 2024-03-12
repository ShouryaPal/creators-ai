"use client";
import React from "react";
import SideBar from "./SideBar";
import ResultCards from "./ResultCards";
import { useQuery } from "@tanstack/react-query";
import { useCompletion } from "ai/react";
import { decompressFromEncodedURIComponent } from "lz-string";
import { useSearchParams } from "next/navigation";


const FinalPage = () => {
	const params = useSearchParams();
	const tone = params.get("tone");
	const link = decompressFromEncodedURIComponent(params.get("link") as string);

	const { completion, complete } = useCompletion({
		api: "/api",
	});

	async function checkAndPublish() {
		const completion = await complete("", { body: { link, tone } });
		if (!completion) throw new Error("Failed");
		return JSON.parse(completion);
	}

	const query = useQuery({
		queryKey: ["gpt-call"],
		queryFn: checkAndPublish,
		staleTime: 1000 * 60 * 6,
		gcTime: 1000 * 60 * 6,
	});

	const transformedData = query.data
		? {
				title: Array.isArray(query.data.title)
					? query.data.title
					: typeof query.data.title === "string"
					  ? query.data.title.split(",")
					  : [],
				body: Array.isArray(query.data.body)
					? query.data.body
					: typeof query.data.body === "string"
					  ? query.data.body.split(",")
					  : [],
				hashtags:
					Array.isArray(query.data.hashtags) &&
					query.data.hashtags.length > 0 &&
					Array.isArray(query.data.hashtags[0])
						? query.data.hashtags
						: typeof query.data.hashtags === "string"
						  ? query.data.hashtags.map((hashtagsStr: string) =>
									hashtagsStr.split(","),
							  )
						  : [],
		  }
		: null;

	return (
		<div className="grid grid-cols-10">
			<div className="col-span-2  border-r  ">
				<SideBar />
			</div>
			<div className="col-span-8 h-screen">
				<ResultCards data={transformedData} />
			</div>
		</div>
	);
};

export default FinalPage;
