import { Link } from "react-router-dom"

const BlogCard = () => (
	<div className="bg-white rounded-xl shadow-lg hover:rotate-30">
		<img
			src="https://firebasestorage.googleapis.com/v0/b/fireblogs-50850.appspot.com/o/documents%2FcoverPhoto%2FImagePreview.png?alt=media&token=a4b66a4f-ca70-4a44-a449-c38e408e9596"
			alt="blog thumbnail"
			className="rounded-t-xl"
		/>
		<div className="px-6 py-5">
			<h3 className="text-xl capitalize">
				<Link to="/blogs/id">previewing image before file upload</Link>
			</h3>
			<p className="my-4">Posted on April 24 2022</p>
			<Link
				to="/blogs/id"
				className="mt-auto flex items-center gap-2 pb-1 px-1 border-b-[1px] border-black w-fit"
			>
				View the post
				<svg
					aria-hidden="true"
					data-prefix="fal"
					data-icon="arrow-right"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					className="w-5 h-3"
				>
					<path
						fill="currentColor"
						d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
					></path>
				</svg>
			</Link>
		</div>
	</div>
)

export default BlogCard
