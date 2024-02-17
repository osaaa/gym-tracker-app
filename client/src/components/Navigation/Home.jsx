import { FiArrowUpRight } from "react-icons/fi";
import ccreasedOne from "../../assets/ccreased_one.svg";

export const Home = () => {
	return (
		<div className="h-screen bg-neutral-100">
			<div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
				<img src={ccreasedOne} />
				<span className="mt-2 absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-2xl text-violet-500">
					<span>Lets get to Work.</span>
					<span>Open me</span> <FiArrowUpRight />
				</span>
			</div>
		</div>
	);
};
