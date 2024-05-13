const axios = require('axios');
const config = require('../config/config');
const { InternalServerError } = require('../utils/error-handler');
const { getCommentsByPostId } = require('../services/comment-service');

jest.mock('axios');

describe('getCommentsByPostId', () => {
  it('should return comments when the request is successful', async () => {
    const mockData = [
      { id: 1, body: 'Comment 1' },
      { id: 2, body: 'Comment 2' },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const result = await getCommentsByPostId('1');

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(config.postData.baseUrl + config.postData.posts + '/1' + config.postData.comments, {});
  });

  it('should throw InternalServerError when the request fails', async () => {
    axios.get.mockRejectedValue(new Error());

    await expect(getCommentsByPostId('1')).rejects.toThrow(InternalServerError);
  });
});