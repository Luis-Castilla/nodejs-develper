const postService = require('../services/post-service')
const autorService = require('../services/autor-service')
const commentService = require('../services/comment-service')
const {
    setResponseWithError,
    setResponseWithOk,
} = require('../utils/common-response')


/**
 * Fetches blog posts and their associated authors and comments from the API.
 * @async
 * @function
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {object} req.query - The query parameters.
 * @param {number} [req.query.start=0] - The start index for the posts to fetch.
 * @param {number} [req.query.size] - The number of posts to fetch.
 * @throws {NotFoundError} If post are not found.
 * @throws {InternalServerError} If an error occurs while fetching the posts, authors, or comments.
 * @returns {object} Sends a response with the fetched posts.
 */
const getBlogPosts = async (req, res) => {
    const { start, size } = req.query

    const options = {
        start: start || 0,
        size: size || undefined
    }

    try {
        const posts = await postService.getPosts(options);
        const autors = await autorService.getAllAutors();

        for (let post of posts) {
            post.user = autors.get(post.userId)
            post.comments = await commentService.getCommentsByPostId(post.id)
        }

        setResponseWithOk(res, 200, posts)
    } catch (error) {
        const statusCode = error.status || 500;
        const errorMessage = error.message || 'Internal Server Error';
        setResponseWithError(res, statusCode, errorMessage);
    }
}

module.exports = {
    getBlogPosts,
}
