const axios = require('axios')
const { InternalServerError, NotFoundError } = require('../utils/error-handler');
const config = require('../config/config');


/**
 * Fetches posts from the API: https://jsonplaceholder.typicode.com/posts
 *
 * @param {Object} options - The options for fetching the posts.
 * @param {number} options.start - The start index for slicing the posts array.
 * @param {number} options.size - The number of posts to fetch.
 * @returns {Promise<Array>} A promise that resolves to an array of posts.
 * @throws {CustomError} Throws a custom error with status and statusText if the API request fails.
 * If the error does not have a response status, a custom error with status BadRequest and message "Bad request" is thrown.
 */
const getPosts = async (options) => {
  try {
    const baseUrl = config.postData.baseUrl;
    const postPath = config.postData.posts;

    if (options.start < 0 || options.start > 99) {
      throw new NotFoundError();
    }
    const response = await axios.get(baseUrl + postPath, {});
    // Filter the data with the options
    let arraEnd = parseInt(options.start) + parseInt(options.size);
    const post = response.data.slice(options.start, arraEnd);

    if (post.length === 0) {
      throw new NotFoundError();
    }
    return post
  } catch (error) {
    if (error instanceof NotFoundError) {
      throw error;
    }
    throw new InternalServerError();
  }
}

module.exports = {
  getPosts,
}