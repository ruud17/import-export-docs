import BookService from '@/services/bookService';
import type { Book } from '@/types/book';
import { defineStore } from 'pinia';

interface State {
  books: Book[];
  error: string;
  loading: boolean;
}

export const useBookStore = defineStore('books', {
  state: (): State => {
    return {
      books: [],
      error: '',
      loading: false
    };
  },
  actions: {
    async getBooks() {
      try {
        this.loading = true;
        const booksData = await BookService.getBooks();
        this.loading = false;
        this.books = booksData;
      } catch (error: any) {
        this.loading = false;
        this.error = error.message;
      }
    }
  }
});
