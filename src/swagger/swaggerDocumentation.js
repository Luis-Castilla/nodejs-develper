/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         body:
 *           type: string
 *         autor:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *             username:
 *               type: string
 *             email:
 *               type: string
 *             address:
 *               type: object
 *               properties:
 *                 street:
 *                   type: string
 *                 suite:
 *                   type: string
 *                 city:
 *                   type: string
 *                 zipcode:
 *                   type: string
 *                 geo:
 *                   type: object
 *                   properties:
 *                     lat:
 *                       type: string
 *                     lng:
 *                       type: string
 *             phone:
 *               type: string
 *             website:
 *               type: string
 *             company:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 catchPhrase:
 *                   type: string
 *                 bs:
 *                   type: string
 *         comments:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               postId:
 *                 type: integer
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               body:
 *                 type: string
 *     PostsResponse:
 *       type: object
 *       properties:
 *         posts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Post'
 *
 * /api/v1/posts:
 *   get:
 *     summary: Returns a list of posts
 *     parameters:
 *       - in: query
 *         name: start
 *         schema:
 *           type: integer
 *         description: The number to start from in the list of posts
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         description: The number of posts to return
 *     responses:
 *       200:
 *         description: A list of posts.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PostsResponse'
 */