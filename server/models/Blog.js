const mongoose = require("mongoose")
const slugify = require("slugify")

const BlogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please add a title"],
		unique: true,
		trim: true,
		maxlength: [50, "Title can not be more than 50 characters"],
	},
	slug: String,
	description: {
		type: String,
		required: [true, "Please add a description"],
		maxlength: [500, "Description can not be more than 500 characters"],
	},
	content: {
		type: String,
		required: [true, "Please add some content"],
	},
	category: {
		// Array of strings
		type: [String],
		required: true,
		enum: [
			"Web Development",
			"App Development",
			"UI/UX",
			"Data Science",
			"Cyber Secutiry",
			"AI/Machine Learning",
			"Others",
		],
	},
	photo: {
		type: String,
		default: "no-photo.jpg",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		// required: true,
	},
	userSlug: {
		type: String,
		// required: true,
	},
})

// Create slug from the title before saving
BlogSchema.pre("save", function (next) {
	this.slug = slugify(this.title, {
		lower: true,
		strict: true,
	})

	next()
})

module.exports = mongoose.model("Blog", BlogSchema)
