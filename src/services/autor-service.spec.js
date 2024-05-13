const axios = require('axios');
const config = require('../config/config');
const { InternalServerError } = require('../utils/error-handler');
const { getAllAutors } = require('../services/autor-service');

jest.mock('axios');

describe('getAllAutors', () => {
  it('should return a map of authors when the request is successful', async () => {
    const mockData = [
      { id: '1', name: 'Author 1' },
      { id: '2', name: 'Author 2' },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const result = await getAllAutors();

    const expectedMap = new Map();
    expectedMap.set('1', { id: '1', name: 'Author 1' });
    expectedMap.set('2', { id: '2', name: 'Author 2' });

    expect(result).toEqual(expectedMap);
    expect(axios.get).toHaveBeenCalledWith(config.postData.baseUrl + config.postData.autors, {});
  });

  it('should throw InternalServerError when the request fails', async () => {
    axios.get.mockRejectedValue(new Error());

    await expect(getAllAutors()).rejects.toThrow(InternalServerError);
  });
});