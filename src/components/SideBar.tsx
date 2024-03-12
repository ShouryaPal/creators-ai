import logo from "@/assets/logo.svg";
import Image from "next/image";
import linkedIn from "@/assets/4icon.svg";

const SideBar = () => {
	return (
		<div className="flex flex-col p-4 px-auto gap-4">
			<div className="p-2">
				<Image src={logo} alt="logo" className="w-[200px] h-[40px]" />
				<p className="text-secondPage-descText text-xs font-bold pt-6">
					ALL CREATOR TOOL
				</p>
			</div>
			<div className="rounded-md min-w-max">
				<div className="flex items-center gap-1 text-sm text-secondPage-descText p-2 tracking-tighter">
					<p className="text-lg">💡</p>
					<p>Video Idea Generator</p>
				</div>
			</div>
			<div className="rounded-md min-w-max">
				<div className="flex items-center gap-1 text-sm text-secondPage-descText p-2 tracking-tighter">
					<p className="text-lg">🖼️</p>
					<p>Free Audiogram Generator</p>
				</div>
			</div>
			<div className="rounded-md min-w-max ">
				<div className="flex items-center gap-1 text-sm text-secondPage-descText p-2 tracking-tighter">
					<p className="text-lg">🗒️</p>
					<p>YT video to SEO Blog Generator</p>
				</div>
			</div>

			<div className="rounded-md w-fit bg-sidebar-On">
				<div className="flex items-center gap-1 text-sm text-secondPage-text-secondPage-heatext	 p-2 tracking-tighter truncate">
					<p className="w-4 h-4 ml-1">
						<Image src={linkedIn} alt="linkedIn-icon" />
					</p>
					<p>YT video to LinkedIn Post Generator</p>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
