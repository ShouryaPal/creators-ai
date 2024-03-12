import Subscribe from "./Subscribe";

const KnowMoreAboutSection = () => {
	return (
		<div className="max-h-60 w-[93vw]  bg-homeContainer-backGround  border rounded-md mt-12">
			<div className="m-6 flex items-center justify-between gap-10">
				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-0 text-3xl font-semibold text-homeContainer-headingText">
						<p>Want to know more about</p>
						<p>the tools?</p>
					</div>
					<p className="text-homeContainer-description text-xl">
						Join the club and explore all the free tools...
					</p>
				</div>
				<Subscribe />
			</div>
		</div>
	);
};

export default KnowMoreAboutSection;
