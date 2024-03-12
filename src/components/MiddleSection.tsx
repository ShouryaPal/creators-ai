import multipleArrow from "@/assets/multiplearrow.svg";
import Image from "next/image";

const MiddleSection = () => {
	return (
		<div className="flex flex-col items-center justify-between mt-8 gap-6">
			<p className="text-pink-arrowTopic text-md  font-medium">
				All of Our Tools
			</p>
			<p className="text-2xl font-semibold">
				Click on any tool below and explore
			</p>
			<Image src={multipleArrow} alt="multiple-arrow" className="mt-4" />
		</div>
	);
};

export default MiddleSection;
