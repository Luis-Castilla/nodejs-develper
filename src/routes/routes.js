const express = require('express')
const router = express.Router()
const postController = require('../controllers/post-controller')

/**
 * Module Routes.
 * @module Routes
 */

/**
 * Route serving blog posts.
 * @name get/posts
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Array} Returns an array of blog posts.
 */
router.get('/posts', (req, res) => {
  postController.getBlogPosts(req, res)
})

module.exports = router
