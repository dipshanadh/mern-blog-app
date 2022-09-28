import Markdown from "marked-react"

const BlogContent = ({ content }) => {
	return (
		<section className="text-lg text-justify space-y-[2ch] mt-[2ch] prose md:prose-lg lg:prose-xl max-w-none mx-auto">
			<Markdown value={content} />
		</section>
	)
}

export default BlogContent
