const axios = require('axios');
const { NotFoundError, InternalServerError } = require('../utils/error-handler');
const config = require('../config/config');
const { getPosts } = require('../services/post-service');

jest.mock('axios');

describe('getPosts', () => {
  it('should return posts when the request is successful', async () => {
    const mockData = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const result = await getPosts({ start: 0, size: 2 });

    expect(result).toEqual(mockData.slice(0, 2));
    expect(axios.get).toHaveBeenCalledWith(config.postData.baseUrl + config.postData.posts, {});
  });

  it('should throw NotFoundError when start is out of range', async () => {
    await expect(getPosts({ start: -1, size: 2 })).rejects.toThrow(NotFoundError);
    await expect(getPosts({ start: 100, size: 2 })).rejects.toThrow(NotFoundError);
  });

  it('should throw NotFoundError when no posts are found', async () => {
    axios.get.mockResolvedValue({ data: [] });

    await expect(getPosts({ start: 0, size: 2 })).rejects.toThrow(NotFoundError);
  });

  it('should throw InternalServerError when the request fails', async () => {
    axios.get.mockRejectedValue(new Error());

    await expect(getPosts({ start: 0, size: 2 })).rejects.toThrow(InternalServerError);
  });
});