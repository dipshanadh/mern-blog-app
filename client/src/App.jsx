// React router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"

// Blog pages
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blogs/Blog"
import CreateBlog from "./pages/Blogs/CreateBlog"

// Auth pages
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import ForgotPassword from "./pages/Auth/ForgotPassword"

import AboutMe from "./pages/AboutMe"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="about-me" element={<AboutMe />}></Route>
					<Route path="blogs">
						<Route index element={<Blogs />} />
						<Route path=":slug" element={<Blog />} />
					</Route>
					<Route path="auth">
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route
							path="forgot-password"
							element={<ForgotPassword />}
						/>
					</Route>
					<Route path="create-blog" element={<CreateBlog />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
