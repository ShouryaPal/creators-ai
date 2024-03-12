import { Badge } from "@/components/ui/badge";
import { PiStarFourFill } from "react-icons/pi";
const HeroHeaderBadge = () => {
	return (
		<Badge
			variant="secondary"
			className="w-auto h-auto  flex gap-2 text-gray-800 font-semibold text-md tracking-wide"
		>
			<PiStarFourFill className=" text-gray-700" />
			All the top creator tools in one place
			<PiStarFourFill className=" text-gray-700" />
		</Badge>
	);
};

export default HeroHeaderBadge;
