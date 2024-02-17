import ccreasedOne from "../../assets/ccreased_one.svg";

const LogoMain = () => {
	// Temp logo from https://logoipsum.com/
	return (
		<svg
			width="50"
			height="39"
			viewBox="0 0 50 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute left-[50%] top-4 -translate-x-[50%]  md:left-4 md:-translate-x-0"
		>
			<img src={ccreasedOne} />
		</svg>
	);
};

export default LogoMain;
