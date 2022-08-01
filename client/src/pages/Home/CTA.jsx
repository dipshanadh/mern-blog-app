import { Link } from "react-router-dom"

const CTA = () => (
	<section className="p-10 bg-white">
		<div className="max-w-6xl mx-auto">
			<div className="md:flex items-center justify-between">
				<h1 className="text-2xl text-gray-900 mr-auto">
					Never miss a post, register for your account today !
				</h1>
				<Link
					to="/auth/register"
					className="text-white bg-[#303030] py-2 px-8 flex items-center gap-2 rounded-full text-lg mt-8 md:mt-0 focus:ring focus:ring-gray-400 w-fit"
				>
					Register now{" "}
					<svg
						aria-hidden="true"
						data-prefix="fal"
						data-icon="arrow-right"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						className="w-6 h-4"
					>
						<path
							fill="currentColor"
							d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
						></path>
					</svg>
				</Link>
			</div>
		</div>
	</section>
)

export default CTA
