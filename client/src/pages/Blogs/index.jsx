// Compoennts
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import BlogCard from "../../components/BlogCard"

const Blogs = () => {
	document.title = "Blogs | Dipshan's blog"

	return (
		<>
			<Navbar />
			<main className="mt-[71px] p-10 bg-gray-100">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-semibold text-center mb-[1.5ch]">
						Blogs
					</h1>

					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Blogs
