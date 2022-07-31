// Compoennts
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const CreateBlog = () => {
	return (
		<>
			<Navbar />
			<main className="mt-[71px] p-10 bg-gray-100">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-semibold text-center mb-[1.5ch]">
						Create a blog
					</h1>

					<form className="bg-white shadow-md rounded-xl p-8">
						<div className="space-y-8 mb-8">
							<div className="space-y-3">
								<h3 className="text-xl font-medium">Title:</h3>
								<input
									type="text"
									placeholder="Blog title"
									className="bg-white border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 border-gray-300 rounded-lg px-4 py-3 w-full outline-none"
								/>
							</div>
							<div className="space-y-3">
								<h3 className="text-xl font-medium">
									Description:
								</h3>
								<input
									type="text"
									placeholder="Blog description"
									className="bg-white border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 border-gray-300 rounded-lg px-4 py-3 w-full outline-none"
								/>
							</div>
							<div className="space-y-3">
								<h3 className="text-xl font-medium">
									Content:
								</h3>
								<textarea
									placeholder="Blog content..."
									className="bg-white border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 border-gray-300 rounded-lg px-4 py-3 w-full outline-none"
									cols="20"
									rows="10"
								></textarea>
							</div>
							<div className="space-y-3">
								<h3 className="text-xl font-medium">
									Thumbnail image:
								</h3>
								<input
									type="file"
									className="bg-white border focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 border-gray-300 rounded-lg px-4 py-3 w-full outline-none"
								/>
							</div>
							<div className="space-y-3">
								<h3 className="text-xl font-medium">
									Category:
								</h3>
								<div class="relative">
									<select className="py-3 pl-4 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 outline-none appearance-none rounded-lg border border-gray-300 w-full">
										<option>Web development</option>
										<option>App development</option>
										<option>Cyber secutiry</option>
										<option>Machine Learning</option>
									</select>
									<span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											class="w-4 h-4"
											viewBox="0 0 24 24"
										>
											<path d="M6 9l6 6 6-6"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>

						<button className="text-white bg-[#303030] py-2 px-8 flex items-center gap-2 rounded-full text-lg mt-8 md:mt-0 focus:ring focus:ring-gray-400 mx-auto">
							Create blog
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default CreateBlog
