import FinalPage from "@/components/FinalPage";
import { Suspense } from "react";

const page = () => {
	return (
		<Suspense>
			<FinalPage />
		</Suspense>
	);
};

export default page;
