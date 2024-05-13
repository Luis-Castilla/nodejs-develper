const { getBlogPosts } = require('../controllers/post-controller');
const postService = require('../services/post-service');
const autorService = require('../services/autor-service');
const commentService = require('../services/comment-service');

jest.mock('../services/post-service');
jest.mock('../services/autor-service');
jest.mock('../services/comment-service');

describe('getBlogPosts', () => {
  it('should return blog posts successfully', async () => {
    const posts = [
      { id: '1', userId: '1', title: 'Post 1' },
      { id: '2', userId: '2', title: 'Post 2' },
    ];
    const authors = new Map([
      ['1', { id: '1', name: 'Author 1' }],
      ['2', { id: '2', name: 'Author 2' }],
    ]);
    const comments = [
      { id: '1', text: 'Comment 1' },
      { id: '2', text: 'Comment 2' },
    ];

    postService.getPosts.mockResolvedValue(posts);
    autorService.getAllAutors.mockResolvedValue(authors);
    commentService.getCommentsByPostId.mockResolvedValue(comments);

    const req = { query: { start: 0, size: 10 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getBlogPosts(req, res);

    expect(res.json).toHaveBeenCalledWith(posts);
  });

  it('should return an error when the request fails', async () => {
    postService.getPosts.mockRejectedValue(new Error('Internal Server Error'));

    const req = { query: { start: 0, size: 10 } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(), // Add this line
    };

    await getBlogPosts(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Internal Server Error' });
  });
});