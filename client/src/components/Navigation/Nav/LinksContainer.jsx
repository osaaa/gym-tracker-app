import { motion } from "framer-motion";
import NavLink from "./NavLink.jsx";
// import ccreasedOne from "../../../assets/ccreased_one.svg";

const LinksContainer = () => {
	return (
		<motion.div className="space-y-4 p-12 pl-4 md:pl-20">
			{LINKS.map((l, idx) => {
				return (
					<NavLink key={l.title} href={l.href} idx={idx}>
						{l.title}
					</NavLink>
				);
			})}
		</motion.div>
	);
};

export default LinksContainer;

const LINKS = [
	{
		title: "home",
		href: "/",
	},
	{
		title: "login",
		href: "/login",
	},
	{
		title: "sign up",
		href: "/sign-up",
	},
	{
		title: "suggestions",
		href: "#",
	},
];
