import PropTypes from "prop-types";
import { motion } from "framer-motion";

const NavLink = ({ children, href, idx }) => {
	return (
		<motion.a
			initial={{ opacity: 0, y: -8 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					delay: 0.75 + idx * 0.125,
					duration: 0.5,
					ease: "easeInOut",
				},
			}}
			exit={{ opacity: 0, y: -8 }}
			href={href}
			className="block text-4xl font-semibold text-violet-400 transition-colors hover:text-violet-50 md:text-5xl"
		>
			{children}.
		</motion.a>
	);
};

export default NavLink;

NavLink.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired,
	idx: PropTypes.number.isRequired,
};
