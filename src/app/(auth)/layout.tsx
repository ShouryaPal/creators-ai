import { FC, ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center mt-10">
			{children}
		</div>
	);
};

export default Layout;
