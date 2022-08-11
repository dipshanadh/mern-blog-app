// @desc    Util function to send response
const sendResponse = (res, status, data, count) =>
	res.status(status).json({
		success: true,
		count: count || undefined,
		data,
	})

module.exports = sendResponse
