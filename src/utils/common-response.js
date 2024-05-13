/**
 * Set the response with an error message and status code.
 * @param {Object} res - Express response object.
 * @param {number} status - HTTP status code to be set in the response.
 * @param {string} message - Error message to be sent in the response.
 * @returns {Object} res - Express response object.
 */
function setResponseWithError(res, status, message) {
    return res.status(status).send({ message })
}

/**
 * Set the response with a successful data payload and status code.
 * @param {Object} res - Express response object.
 * @param {number} status - HTTP status code to be set in the response.
 * @param {Object} data - Data payload to be sent in the response.
 * @returns {Object} res - Express response object.
 */
function setResponseWithOk(res, status, data) {
    return res.status(status).json(data)
}

module.exports = {
    setResponseWithError,
    setResponseWithOk,
}
