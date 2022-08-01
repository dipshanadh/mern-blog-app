// Compoennts
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import { useEffect, useRef, useState } from "react"
import Markdown from "marked-react"

import rawMarkdown from "../../markdown"

const Blog = () => {
	document.title = "About me | Dipshan's blog"

	const [readingTime, setReadingTime] = useState(0)
	const blogRef = useRef()

	useEffect(() => {
		setReadingTime(
			Math.ceil(blogRef.current.textContent.split(" ").length / 250)
		)
	}, [])

	return (
		<>
			<Navbar />
			<main className="mt-[71px] p-10 bg-gray-100">
				<div className="max-w-3xl mx-auto">
					<header>
						<h1 className="text-3xl md:text-4xl text-center sm:text-left">
							Welcome to Dipshan's amazing blog
						</h1>

						<div className="text-lg flex items-center sm:gap-[1ch] mt-4 flex-col sm:flex-row">
							<p className="flex items-center flex-col sm:flex-row">
								<img
									src="https://avatars.githubusercontent.com/u/76583762?v=4"
									alt="dipshan adhikari"
									className="w-8 h-8 rounded-full mr-2"
								/>
								<span>Dipshan Adhikari</span>
							</p>
							<p>
								<span className="text-lg font-extrabold mr-[1ch] hidden sm:inline">
									·
								</span>
								Posted on April 24, 2022
							</p>
							<p className="flex items-center">
								<span className="text-lg font-extrabold hidden sm:inline">
									·
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 inline ml-[1ch] mr-[0.7ch]"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={1}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
								{readingTime} min read
							</p>
						</div>
					</header>

					<section
						className="text-lg text-justify space-y-[2ch] mt-[2ch] prose md:prose-lg lg:prose-xl max-w-none mx-auto"
						ref={blogRef}
					>
						<Markdown>{rawMarkdown}</Markdown>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Blog
