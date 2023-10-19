import BookService from '@/services/bookService';
import type { Book } from '@/types/book';
import { defineStore } from 'pinia';

interface State {
  books: Book[];
  error: unknown;
}

export const useBookStore = defineStore('books', {
  state: (): State => {
    return {
      books: [],
      error: null
    };
  },
  actions: {
    async getBooks() {
      try {
        const booksData = await BookService.getBooks();
        this.books = booksData;
      } catch (error: any) {
        this.error = error.message;
      }
    }
  }
});
