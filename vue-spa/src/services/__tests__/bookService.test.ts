import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mockedBooks } from '@/components/books/__tests__/mock';
import axios from 'axios';
import BookService from '@/services/bookService';
import EnvChecker from '@/utils/envChecker';

describe('BookService', () => {
  let originalAxiosGet: any;
  let originalGetApiUrl: any;

  beforeEach(() => {
    // Mock axios
    originalAxiosGet = axios.get;
    axios.get = (async () => ({ data: mockedBooks })) as any;

    // Mocking EnvChecker.getApiUrl function
    originalGetApiUrl = EnvChecker.getApiUrl;
    EnvChecker.getApiUrl = () => 'https://api.example.com';
  });

  afterEach(() => {
    axios.get = originalAxiosGet; // Restore original axios.get
    EnvChecker.getApiUrl = originalGetApiUrl; // Restore original EnvChecker.getApiUrl
  });

  it('fetches books successfully', async () => {
    const result = await BookService.getBooks();
    expect(result).toEqual(mockedBooks);
  });

  it('throws an error when fetching fails', async () => {
    axios.get = async () => {
      throw new Error('API Failed');
    };
    try {
      await BookService.getBooks();
      throw new Error('Test failed, it should have thrown an error but did not.');
    } catch (error) {
      expect((error as Error).message).toBe(
        'Failed to fetch books! Check the API endpoint you use!'
      );
    }
  });
});
