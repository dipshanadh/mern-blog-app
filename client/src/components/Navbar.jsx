import { useRef } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
	const menuRef = useRef()

	const handleClick = e => {
		e.target.closest(".hamburger").classList.toggle("open")
		menuRef.current.classList.toggle("hidden")
	}

	return (
		<nav className="px-10 bg-white shadow-md fixed top-0 w-full z-50">
			<div className="max-w-6xl mx-auto flex items-center">
				<Link to="/" className="text-2xl font-semibold mr-auto py-5">
					Dipshan's blog
				</Link>

				<ul className="hidden md:flex gap-14 items-center text-lg font-medium">
					<li>
						<NavLink
							to="/blogs"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Blogs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create-blog"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Create blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/auth/login"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/auth/register"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Register
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about-me"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							About me
						</NavLink>
					</li>
				</ul>

				{/* Hamburger Icon */}
				<button
					className="hamburger md:hidden focus:outline-none relative w-[24px] h-[21px]"
					onClick={e => handleClick(e)}
				>
					<span className="bg-black w-[24px] h-[2px] absolute top-0 left-0 transition-all duration-300 hamburger-top"></span>
					<span className="bg-black w-[24px] h-[2px] absolute top-0 left-0 translate-y-[7px] transition-all duration-300 hamburger-middle"></span>
					<span className="bg-black w-[24px] h-[2px] absolute top-0 left-0 translate-y-[14px] transition-all duration-300 hamburger-bottom"></span>
				</button>

				{/* Mobile Menu */}
				<ul
					className="absolute left-6 right-6 bg-white top-[100px] hidden md:hidden flex flex-col rounded-md shadow-md gap-8 p-8 items-center text-lg font-medium"
					ref={menuRef}
				>
					<li>
						<NavLink
							to="/blogs"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Blogs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/create-blog"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Create blog
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/auth/login"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/auth/register"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							Register
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about-me"
							className="px-2 py-1.5 border-black hover:border-b-2"
						>
							About me
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
