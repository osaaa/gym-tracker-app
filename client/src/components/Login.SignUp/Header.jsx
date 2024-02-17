import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ccreasedOne from "../../assets/ccreased_one.svg";

const Header = ({ heading, paragraph, linkName, linkurl = "#" }) => {
	return (
		<>
			<motion.div
				initial="initial"
				whileInView="animate"
				transition={{
					staggerChildren: 0.05,
				}}
				viewport={{ once: true }}
				className="flex items-center justify-center pb-4 pt-10 md:py-1"
			>
				<div className="mb-10 mx-auto my-auto max-w-lg px-4 md:pr-0">
					<div className="flex justify-center">
						<img className="h-45 w-45" src={ccreasedOne} />
					</div>
					<motion.h1
						variants={primaryVariants}
						className="mb-2 text-center text-4xl font-semibold"
					>
						{heading}
					</motion.h1>
					<motion.p
						variants={primaryVariants}
						className=" text-center text-xl text-gray-600 mt-5"
					>
						{paragraph}{" "}
						<Link
							to={linkurl}
							className="font-medium text-purple-600 hover:text-purple-500"
						>
							{linkName}
						</Link>
					</motion.p>
				</div>
			</motion.div>
		</>
	);
};

export default Header;

Header.propTypes = {
	heading: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	linkName: PropTypes.string.isRequired,
	linkurl: PropTypes.string.isRequired,
};

const primaryVariants = {
	initial: {
		y: 25,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};
