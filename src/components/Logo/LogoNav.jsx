import { motion } from "framer-motion";
import ccreasedOne from "../../assets/ccreased_one.svg";

const Logo = () => {
	// Temp logo from https://logoipsum.com/
	return (
		<motion.a
			initial={{ opacity: 0, y: -12 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
			}}
			exist={{ opacity: 0, y: -12 }}
			href="#"
			className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl  transition-colors hover:bg-violet-50"
		>
			<img src={ccreasedOne} />
		</motion.a>
	);
};

export default Logo;
