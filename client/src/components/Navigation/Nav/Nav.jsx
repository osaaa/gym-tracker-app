import HamburgerButton from "./HamburgerButton.jsx";
import LinksOverlay from "./LinksOverlay.jsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<HamburgerButton active={active} setActive={setActive} />
			<AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
		</>
	);
};

export default Nav;
