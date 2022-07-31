import BlogCard from "../../components/BlogCard"

const RecentBlogs = () => {
	return (
		<section className="p-10 bg-gray-100 shadow-xl">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-3xl font-semibold">View recent blogs</h1>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</section>
	)
}

export default RecentBlogs
