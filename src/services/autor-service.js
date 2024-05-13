const axios = require('axios')
const config = require('../config/config')
const { InternalServerError } = require('../utils/error-handler')

/**
 * Fetches all authors from the API and returns a Map where the keys are the author IDs and the values are the author objects.
 * @async
 * @function
 * @throws {InternalServerError} If an error occurs while fetching the authors.
 * @returns {Promise<Map<string, object>>} A promise that resolves to a Map of authors.
 */
const getAllAutors = async () => {
  try {
    const baseUrl = config.postData.baseUrl;
    const autorsPath = config.postData.autors;
    const response = await axios.get(baseUrl + autorsPath, {});

    // Create a new Map to store the authors by ID
    const autorMap = new Map();

    // Iterate over the authors and add them to the map
    for (const autor of response.data) {
      autorMap.set(autor.id, autor);
    }

    // Return the map of authors
    return autorMap;
  } catch (error) {
    throw new InternalServerError();
  }
}

module.exports = {
  getAllAutors,
}
