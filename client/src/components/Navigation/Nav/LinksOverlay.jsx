import Logo from "../../Logo/LogoNav";
import LinksContainer from "./LinksContainer";
import { Footer } from "./Footer";

const LinksOverlay = () => {
	return (
		<nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
			<Logo />
			<LinksContainer />
			<Footer />
		</nav>
	);
};

export default LinksOverlay;
