// Importing all dependencies
const express = require("express")

// Controller functions
const {
	getBlogs,
	getBlog,
	createBlog,
	updateBlog,
	deleteBlog,
} = require("../controllers/blogs")

const router = express.Router()

router.route("/").get(getBlogs).post(createBlog)

router.route("/:slug").get(getBlog).put(updateBlog).delete(deleteBlog)

module.exports = router
