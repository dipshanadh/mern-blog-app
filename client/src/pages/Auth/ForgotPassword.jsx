import img from "../../assets/bubble-bg.png"

const ForgotPassword = () => {
	document.title = "Login | Dipshan's blog"

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
				<h1 className="text-3xl font-semibold text-center">
					Reset password
				</h1>
				<p className="text-center mt-2">
					Forgot your password ? Enter your email to get a reset link.
				</p>

				<form>
					<div className="relative my-8">
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

					<button className="text-white bg-[#303030] py-2 px-8 rounded-full text-lg focus:ring focus:ring-gray-400 block w-fit mx-auto">
						Reset
					</button>
				</form>
			</div>
		</main>
	)
}

export default ForgotPassword
