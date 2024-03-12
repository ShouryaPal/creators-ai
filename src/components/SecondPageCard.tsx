import likeIcon from "@/assets/likeIcon.svg";
import clap from "@/assets/clap.svg";
import heart from "@/assets/heartIcon.svg";
import think from "@/assets/th.svg";
import help from "@/assets/helpIcon.svg";
import bulb from "@/assets/bulbIcon.svg";
import pfp from "@/assets/panda.svg";
import earth from "@/assets/earth.svg";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const SecondPageCard = () => {
	return (
		<div className="max-w-[35vw] rounded-md bg-white mt-4">
			<div className="p-4 flex flex-col gap-3">
				<div className="flex  justify-between">
					<div className="flex gap-2">
						<Image src={pfp} alt="panda-pfp w-2 h-2" />
						<div className="flex flex-col gap-0">
							<p className="text-secondPage-cardPfName font-medium text-xs">
								Panda Media
							</p>
							<p className="text-secondPage-cardPfdetails  font-medium text-xs">
								326 abonnés
							</p>
							<div className="flex items-center gap-1 text-secondPage-cardPfdetails  font-medium text-xs">
								<p>20h</p>
								<p>.</p>
								<Image src={earth} alt="earth" />
							</div>
						</div>
					</div>
					<BsThreeDots className="text-secondPage-cardPfdetails top-left" />
				</div>
				<div className="inline text-sm text-secondPage-cardPfName tracking-tighter">
					[Historical Fact] The West first learned of the giant panda on 11
					March 1869, when the French missionary Armand David received a skin
					from a hunter. In 1936, Ruth Harkness became the first Westerner to
					bring back a live giant panda.
				</div>
				<div className="flex justify-between text-secondPage-cardPfdetails text-xs">
					<p className="invisible" />
					<p>...see more</p>
				</div>
				<div className="text-xs font-medium text-secondPage-cardTranslate">
					See translation
				</div>
				<div className="flex items-center gap-1">
					<Image src={likeIcon} alt="like-icon" />
					<Image src={clap} alt="clap-icon" />
					<Image src={heart} alt="heart-icon" />
					<Image src={bulb} alt="bulb-icon" />
					<Image src={think} alt="think-icon" />
					<Image src={help} alt="help-icon" />
					<div className="flex items-center gap-2 text-xs text-secondPage-cardPfdetails">
						<p>88</p>
						<p>.</p>
						<p>4 comments</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondPageCard;
