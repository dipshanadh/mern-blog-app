const errorHandler = (err, req, res, next) => {
	const error = { message: err.message, statusCode: err.statusCode }

	res.status(error.statusCode || 500).json({
		success: false,
		message: error.message,
	})
}

module.exports = errorHandler
