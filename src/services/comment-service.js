const config = require('../config/config')
const axios = require('axios')
const { InternalServerError } = require('../utils/error-handler')

/**
 * Fetches comments for a specific post from the API.
 * @async
 * @function
 * @param {string} postId - The ID of the post to fetch comments for.
 * @throws {InternalServerError} If an error occurs while fetching the comments.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of comment objects.
 */
const getCommentsByPostId = async (postId) => {
  try {
    const baseUrl = config.postData.baseUrl;
    const postPath = config.postData.posts;
    const commentsPath = config.postData.comments;
    const response = await axios.get(baseUrl + postPath + "/" + postId + commentsPath, {});

    return response.data
  } catch (error) {
    throw new InternalServerError();
  }
}

module.exports = {
  getCommentsByPostId,
}