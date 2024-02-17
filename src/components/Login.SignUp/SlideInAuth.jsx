import { motion } from "framer-motion";
import ccreasedOne from "../../assets/ccreased_one.svg";
import Logo from "../Logo/LogoNav";

export const SlideInAuth = () => {
	return (
		<>
			<section className="w-full px-8 py-12 flex flex-col items-center">
				<Form />
			</section>
		</>
	);
};

const Form = () => {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			transition={{
				staggerChildren: 0.05,
			}}
			viewport={{ once: true }}
			className="flex items-center justify-center pb-4 pt-10 md:py-1"
		>
			{/* <img src={ccreasedOne} alt="Ccreased Logo" width="200" /> */}
			<div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
				<motion.h1
					variants={primaryVariants}
					className="mb-2 text-center text-4xl font-semibold"
				>
					Create an account
				</motion.h1>
				<motion.p variants={primaryVariants} className="mb-8 text-center">
					Access your greatness.
				</motion.p>

				<form onSubmit={(e) => e.preventDefault()} className="w-full">
					<motion.div variants={primaryVariants} className="mb-2 w-full">
						<label
							htmlFor="email-input"
							className="mb-1 inline-block text-sm font-medium"
						>
							First Name<span className="text-red-600">*</span>
						</label>
						<input
							id="email-input"
							type="email"
							placeholder="Enter your email"
							className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
							required
						/>
					</motion.div>
					<motion.div variants={primaryVariants} className="mb-2 w-full">
						<label
							htmlFor="email-input"
							className="mb-1 inline-block text-sm font-medium"
						>
							Email<span className="text-red-600">*</span>
						</label>
						<input
							id="email-input"
							type="email"
							placeholder="Enter your email"
							className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
							required
						/>
					</motion.div>

					<motion.div variants={primaryVariants} className="mb-2 w-full">
						<label
							htmlFor="password-input"
							className="mb-1 inline-block text-sm font-medium"
						>
							Password<span className="text-red-600">*</span>
						</label>
						<input
							id="password-input"
							type="password"
							placeholder="Enter your password"
							className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
							required
						/>
					</motion.div>

					<motion.div variants={primaryVariants} className="mb-4 w-full">
						<label
							htmlFor="rt-password-input"
							className="mb-1 inline-block text-sm font-medium"
						>
							Re-type Password<span className="text-red-600">*</span>
						</label>
						<input
							id="rt-password-input"
							type="password"
							placeholder="Re-type your password"
							className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
							required
						/>
					</motion.div>

					<motion.div
						variants={primaryVariants}
						className="mb-4 flex w-full items-start gap-1.5"
					>
						<input
							type="checkbox"
							id="terms-checkbox"
							className="h-4 w-4 accent-indigo-600"
							required
						/>
						<label htmlFor="terms-checkbox" className="text-xs">
							By signing up, I agree to the utilize this app to the fullest. ;)
						</label>
					</motion.div>

					<motion.button
						variants={primaryVariants}
						whileTap={{
							scale: 0.985,
						}}
						type="submit"
						className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
					>
						Sign up
					</motion.button>
					<motion.p variants={primaryVariants} className="text-xs">
						Already have an account? ily{" "}
						<a className="text-indigo-600 underline" href="#">
							Sign in now
						</a>
					</motion.p>
				</form>
			</div>
		</motion.div>
	);
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
