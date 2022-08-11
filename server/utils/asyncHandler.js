// @desc    Handles async functions
const asyncHandler = fn => (req, res, next) => fn(req, res, next).catch(next)

module.exports = asyncHandler
