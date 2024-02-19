import ccreasedOne from "../../assets/ccreased_one.svg";

export const Home = () => {
	return (
		<section className="pb-12">
			<div className="flex justify-center w-full px-8 py-12 md:py-20">
				{/* <div
					className="w-full h-64 flex flex-col items-center justify-center"
					style={{
						backgroundImage: `url(${ccreasedOne})`,
						backgroundSize: "contain", // Adjust as needed
						backgroundPosition: "center center", // Adjust as needed
						backgroundRepeat: "no-repeat",
						backgroundAttachment: "fixed",
					}}
				>
					<p className="text-center max-w-xl my-6 text-white">
						Redefining how you track your progress at the gym.
					</p>
				</div> */}
				<div className="flex justify-center w-full">
					<img
						src={ccreasedOne}
						className="block max-w-full h-auto"
						alt="Descriptive Alt Text"
					/>
				</div>
			</div>
		</section>
	);
};
