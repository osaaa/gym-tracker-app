import Header from "../Header";
import Login from "./Login";

const LoginPage = () => {
	return (
		<>
			<Header
				heading="Login to your account"
				paragraph="Don't have an account yet? "
				linkName="Signup"
				linkUrl="/sign-up"
			/>
			<Login />
		</>
	);
};

export default LoginPage;
