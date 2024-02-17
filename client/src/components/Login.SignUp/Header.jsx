import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ heading, paragraph, linkName, linkurl = "#" }) => {
	return (
		<div className="mb-10">
			<div className="flex justify-center">
				<img
					alt=""
					className="h-14 w-14"
					src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
				/>
			</div>
			<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
				{heading}
			</h2>
			<p className=" text-center text-sm text-gray-600 mt-5">
				{paragraph}{" "}
				<Link
					to={linkurl}
					className="font-medium text-purple-600 hover:text-purple-500"
				>
					{linkName}
				</Link>
			</p>
		</div>
	);
};

export default Header;

Header.propTypes = {
	heading: PropTypes.string.isRequired,
	paragraph: PropTypes.string.isRequired,
	linkName: PropTypes.string.isRequired,
	linkurl: PropTypes.string.isRequired,
};
