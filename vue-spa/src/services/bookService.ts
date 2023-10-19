import axios from 'axios';
import type { Book } from '@/types/book';
import EnvChecker from '@/utils/envChecker';
import { adjustDummyData } from '@/utils/adjustDummyData';

class BookService {
  /**
   * Fetches the list of books from the API.
   *
   * @returns {Promise<Book[]>} - A promise that resolves to the list of books.
   * @throws Will throw an error if the API URL is not defined or the request fails.
   */
  static async getBooks(): Promise<Book[]> {
    const apiUrl = EnvChecker.getApiUrl(); // Get the API URL

    try {
      const response = await axios.get<Book[]>(`${apiUrl}`);
      const adjustedData = adjustDummyData(response.data);

      return adjustedData;
    } catch (error) {
      throw Error('Failed to fetch books! Check the API endpoint you use!');
    }
  }
}

export default BookService;
