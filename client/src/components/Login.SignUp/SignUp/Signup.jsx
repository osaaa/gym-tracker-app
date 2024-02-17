import { useState } from "react";
import { signupFields } from "../constants/FormFields.jsx";
import FormAction from "../FormAction.jsx";
import Input from "../Input.jsx";
import { motion } from "framer-motion";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
	const [signupState, setSignupState] = useState(fieldsState);

	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(signupState);
		createAccount();
	};

	//handle Signup API Integration here
	const createAccount = () => {};

	return (
		<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
			<motion.div variants={primaryVariants} className="mb-2 w-full">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={signupState[field.id]}
						labelText={field.labelText}
						labelFor={field.labelFor}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
					/>
				))}
				<FormAction handleSubmit={handleSubmit} text="Signup" />
			</motion.div>
		</form>
	);
}

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
