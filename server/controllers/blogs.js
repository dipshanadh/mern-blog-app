// Blog model
const Blog = require("../models/Blog")

// Importing utils
const asyncHandler = require("../utils/asyncHandler")
const sendResponse = require("../utils/sendResponse")
const ErrorRespone = require("../utils/errorResponse")

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res, next) => {
	const blogs = await Blog.find()

	sendResponse(res, 200, blogs, blogs.length)
})

// @desc    Get a blog
// @route   GET /api/blogs/:slug
// @access  Public
const getBlog = asyncHandler(async (req, res, next) => {
	const blog = await Blog.findOne({ slug: req.params.slug })

	if (!blog) return next(new ErrorRespone("Could not find that blog", 404))

	sendResponse(res, 200, blog)
})

// @desc    Create a blog
// @route   POST /api/blogs/
// @access  Public
const createBlog = asyncHandler(async (req, res, next) => {
	const { title, description, category, content } = req.body

	const blog = await Blog.create({ title, description, content, category })

	sendResponse(res, 201, blog)
})

// @desc    Create a blog
// @route   POST /api/blogs/
// @access  Public
const updateBlog = asyncHandler(async (req, res, next) => {
	const { title, description, category, content } = req.body

	const blog = await Blog.findOneAndUpdate(
		{ slug: req.params.slug },
		{
			title,
			description,
			content,
			category,
		}
	)

	if (!blog) return next(new ErrorRespone("Could not find that blog", 404))

	sendResponse(res, 200, blog)
})

// @desc    Create a blog
// @route   POST /api/blogs/
// @access  Public
const deleteBlog = asyncHandler(async (req, res, next) => {
	const blog = await Blog.findOne({ slug: req.params.slug })

	if (!blog) return next(new ErrorRespone("Could not find that blog", 404))

	await blog.remove()

	const blogs = await Blog.find()

	sendResponse(res, 201, blogs, blogs.length)
})

module.exports = { getBlogs, getBlog, createBlog, deleteBlog, updateBlog }
