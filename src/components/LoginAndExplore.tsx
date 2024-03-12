import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button";

const LoginAndExplore = () => {
	return (
		<div className="mt-6">
			<Button
				variant="outline"
				className="w-[175px] h-[50px] text-white  bg-gradient-to-b from-pink-light to-pink-bright"
			>
				Login and explore <MdKeyboardArrowRight />{" "}
			</Button>
		</div>
	);
};

export default LoginAndExplore;
