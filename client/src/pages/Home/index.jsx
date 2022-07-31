import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import CTA from "./CTA"
import HeroSection from "./HeroSection"
import RecentBlogs from "./RecentBlogs"

const Home = () => {
	document.title = "Home | Dipshan's blog"

	return (
		<>
			<Navbar />
			<main className="mt-[71px]">
				<HeroSection />
				<RecentBlogs />
				<CTA />
				<Footer />
			</main>
		</>
	)
}

export default Home
