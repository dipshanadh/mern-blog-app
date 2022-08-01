const Footer = () => (
	<footer className="bg-[#303030]">
		<div className="px-10 py-5 text-white">
			<div className="max-w-6xl mx-auto flex items-center">
				<a className="flex font-medium items-center md:justify-start justify-center text-white">
					<img
						src="https://avatars.githubusercontent.com/u/76583762"
						alt="dipshan adhikari"
						className="w-10 h-10 rounded-full hidden sm:block"
					/>
					<span className="mx-3 text-xl">Dipshan's blog</span>
				</a>
				<p className="text-sm text-gray-100 hidden sm:block">
					© 2022 Dipshan Adhikari —{" "}
					<a
						href="https://twitter.com/dipshanadh"
						target="_blank"
						className="text-gray-300"
					>
						@dipshanadh
					</a>
				</p>
				<span className="ml-auto flex gap-3">
					<a
						className="text-gray-100 hover:text-gray-300 cursor-pointer"
						href="https://facebook.com/dipshanadh"
						target="_blank"
					>
						<svg
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
						</svg>
					</a>
					<a
						className="text-gray-100 hover:text-gray-300 cursor-pointer"
						href="https://twitter.com/dipshanadh"
						target="_blank"
					>
						<svg
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
						</svg>
					</a>
					<a
						className="text-gray-100 hover:text-gray-300 cursor-pointer"
						href="https://instagram.com/dipshanadh"
						target="_blank"
					>
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<rect
								width="20"
								height="20"
								x="2"
								y="2"
								rx="5"
								ry="5"
							></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</a>
					<a
						className="text-gray-100 hover:text-gray-300 cursor-pointer"
						href="https://linkedin.com/dipshanadh"
						target="_blank"
					>
						<svg
							fill="currentColor"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="0"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a>
				</span>
			</div>
		</div>
	</footer>
)

export default Footer
