/**
 * Class representing a custom error with an HTTP status code.
 * @class
 * @extends Error
 */
class CustomError extends Error {
    /**
     * Creates an instance of CustomError.
     * @constructor
     * @param {number} code - The HTTP status code of the error.
     * @param {string} message - The error message.
     */
    constructor(code, message) {
        super(message)
        this.name = 'CustomError'
        this.status = code
    }
}

/**
 * Class representing a not found error with a default HTTP status code of 404.
 * @class
 * @extends CustomError
 */
class NotFoundError extends CustomError {
    /**
     * Creates an instance of NotFoundError.
     * @constructor
     * @param {string} message - The error message.
     */
    constructor(message = 'The URL was not matched or there were no blog results for the specified pagination parameters') {
        super(404, message);
        this.name = 'NotFoundError';
    }
}

class InternalServerError extends CustomError {
    /**
     * Creates an instance of InternalServerError.
     * @constructor
     * @param {string} message - The error message.
     */
    constructor(message = 'Internal Server Error') {
        super(500, message);
        this.name = 'InternalServerError';
    }
}

module.exports = { InternalServerError, NotFoundError }
