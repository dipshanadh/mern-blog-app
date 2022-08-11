// Importing all dependencies
const express = require("express")
const dotenv = require("dotenv")

// Loading environment variables with custom path
dotenv.config({ path: "./config/config.env" })

// Connecting to database
const connectDB = require("./config/connectDB")
connectDB()

// Middleware files
const logger = require("./middlewares/logger")
const errorHandler = require("./middlewares/errorHandler")

// Route files
const blogs = require("./routes/blogs")

// Initializing the app
const app = express()

// Middlewares
app.use(express.json())
app.use(logger)

// Routes
app.use("/api/blogs", blogs)

// Error handler
app.use(errorHandler)

const PORT = process.env.PORT

// Listening to the app
app.listen(PORT, () =>
	console.log(
		`Server running on PORT ${PORT} in ${process.env.NODE_ENV} mode`
	)
)
