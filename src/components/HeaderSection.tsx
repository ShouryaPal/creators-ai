import React from "react";
import FirstHeading from "@/components/FirstHeading";
import MiddleHeading from "@/components/MiddleHeading";
import LoginAndExplore from "@/components/LoginAndExplore";
import arrowDown from "@/assets/arrow-down.svg";
import Image from "next/image";
import HeroHeaderBadge from "@/components/HeroHeaderBadge";
import heart from "@/assets/heart-sticker.svg";
import star from "@/assets/starSticker.svg";
import plusOne from "@/assets/plusOneSticker.svg";
import thumb from "@/assets/thumb.svg";

const HeaderSection = () => {
	return (
		<>
			<HeroHeaderBadge />
			<Image src={heart} alt="heart" className="w-[75px] h-[75px] absolute top-[35%] left-[25%]" />
			<Image src={star} alt="heart" className="w-[75px] h-[75px] absolute top-[25%] left-[73%]" />
			<Image src={plusOne} alt="heart" className="w-[90px] h-[90px] absolute top-[45%] left-[80%]" />
			<Image src={thumb} alt="heart" className="w-[90px] h-[90px] absolute top-[47%] left-[17%]" />
			
			<div className="text-5xl tracking-wide text-gray-800 mt-4 flex flex-col items-center gap-2">
				<FirstHeading />
				<MiddleHeading />
				<LoginAndExplore />
				<div className="mt-8 flex items-center justify-between font-semibold text-lg text-pink-arrowTopic">
					<Image
						src={arrowDown}
						alt="down-arrow"
						className="w-[20px] h-[20px]"
					/>
					scroll down to explore
					<Image
						src={arrowDown}
						alt="down-arrow"
						className="w-[20px] h-[20px]"
					/>
				</div>
			</div>
		</>
	);
};

export default HeaderSection;
