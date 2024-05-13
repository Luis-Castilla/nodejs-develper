/**
 * Configuration object for the post data API.
 * @typedef {Object} PostData
 * @property {string} baseUrl - The base URL of the post data API. Defaults to 'https://jsonplaceholder.typicode.com'.
 * @property {string} posts - The endpoint for fetching posts.
 * @property {string} comments - The endpoint for fetching comments.
 * @property {string} autors - The endpoint for fetching authors.
 */

/**
 * @type {PostData}
 */
const postData = {
    baseUrl: process.env.POST_DATA_URL || 'https://jsonplaceholder.typicode.com',
    posts: '/posts',
    comments: '/comments',
    autors: '/users',
}

module.exports = {
    postData,
}
