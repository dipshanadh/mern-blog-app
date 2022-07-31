import { Link } from "react-router-dom"
import img from "../../assets/bubble-bg.png"

const Register = () => {
	document.title = "Register | Dipshan's blog"

	return (
		<main className="grid md:grid-cols-2 min-h-screen">
			<div className="hidden md:block">
				<img
					src={img}
					alt="bubble background"
					className="min-h-full object-cover object-center"
				/>
			</div>

			<div className="p-16 my-auto">
				<p className="text-center">
					Already have an account?{" "}
					<Link
						to="../login"
						className="underline underline-offset-4"
					>
						Login
					</Link>
				</p>

				<h1 className="text-3xl font-semibold text-center my-10">
					Register an account
				</h1>

				<form>
					<div className="space-y-5 mb-8 ">
						<div className="relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 absolute top-1/2 -translate-y-1/2 left-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<input
								type="text"
								placeholder="Name"
								className="p-3 pl-12 bg-[#f2f7f6] rounded-lg w-full border border-gray-300 outline-none flex-grow focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
							/>
						</div>
						<div className="relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 absolute top-1/2 -translate-y-1/2 left-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<input
								type="email"
								placeholder="Email"
								className="p-3 pl-12 bg-[#f2f7f6] rounded-lg w-full border border-gray-300 outline-none flex-grow focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
							/>
						</div>
						<div className="relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 absolute top-1/2 -translate-y-1/2 left-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
							<input
								type="password"
								placeholder="Password"
								className="p-3 pl-12 bg-[#f2f7f6] rounded-lg w-full border border-gray-300 outline-none flex-grow focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
							/>
						</div>
					</div>

					<button className="text-white bg-[#303030] py-2 px-8 flex items-center gap-2 rounded-full text-lg mt-8 md:mt-0 focus:ring focus:ring-gray-400 mx-auto">
						Sign up
					</button>
				</form>
			</div>
		</main>
	)
}

export default Register
