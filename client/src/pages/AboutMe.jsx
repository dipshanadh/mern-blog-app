// Compoennts
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AboutMe = () => {
	document.title = "About me | Dipshan's blog"

	return (
		<>
			<Navbar />
			<main className="mt-[71px] p-10 bg-gray-100">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-semibold text-center mb-[1.5ch]">
						About me
					</h1>
					<section className="text-lg text-justify space-y-[2ch]">
						<p>
							First of all, thank you for trying out this blog
							site and coming here. This blog is made using
							React.js in the frontend and Node, Express, and
							MongoDB in the backend (MERN stack). I have used
							tailwindCSS. I am not a big fan of UI libraries like
							Bootstrap or Material UI. I prefer to use
							TailwindCSS, because I have much more control over
							the styling. TailwindCSS makes it easy and quick to
							style your website.
						</p>
						<p>
							My name is Dipshan Adhikari. I am a MERN stack
							developer. I am fourteen years old. I am a a
							passionate programmer | tech-enthusiast | learner |
							student. I am studying computer Engineering in class
							9 from technical stream. I study in Shree Pokhariya
							Secondary School, Biratnagar-3, Morang.
						</p>

						<p>
							I love coding. My aim is to be a software engineer
							in future. At present, I am involved in web
							development. I am also interested in Flutter, AI,
							Machine Learning and Computer vision. I had started
							learning web development from Class 8. Currently, I
							am in Class 9. I can build beautiful dynamic and
							responsive websites and RESTful APIs using MERN
							stack.
						</p>

						<p>
							So far, I have learned HTML, CSS, tailwind CSS,
							JavaScript, React, Node.js, Express.js and MongoDB.
							I am currently learning Redux and SCSS. I love
							JavaScript and it is my first programming language.
							I do like Python because of its versatility and
							popularity, but I haven't got chance to try it out
							because of lack of time. I am planning to learn
							Next.js with Strapi CMS soon.
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default AboutMe
