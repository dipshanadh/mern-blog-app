import img from "../../assets/coding.jpg"

const HeroSection = () => (
	<section className="block md:grid grid-cols-2">
		<div className="bg-[#303030] text-white py-16 px-10 xl:px-24 space-y-12">
			<h2 className="text-4xl font-medium">Welcome !</h2>
			<p className="text-lg leading-8">
				Hey, I am Dipshan. I am a fullstack web developer. This is my
				weekly blog website where I wil write about HTML, CSS,
				JavaScript, React.js, Express.js, MongoDB and more. Register
				today to never miss a post!
			</p>
			<a
				href="#"
				className="uppercase text-xl flex items-center gap-2 border-b-2 w-fit pb-1"
			>
				register
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
			</a>
		</div>
		<div className="hidden md:block">
			<img
				src={img}
				alt="coding background"
				className="object-cover object-center h-full"
			/>
		</div>
	</section>
)

export default HeroSection
