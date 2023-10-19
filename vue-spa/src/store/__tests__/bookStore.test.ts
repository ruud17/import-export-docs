import { setActivePinia, createPinia } from 'pinia';
import { useBookStore } from '../../store/bookStore';
import { describe, it, expect, beforeEach } from 'vitest';
import BookService from '@/services/bookService';
import { mockedBooks } from '@/components/books/__tests__/mock';

describe('bookStore', () => {
  let store: ReturnType<typeof useBookStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useBookStore();
  });

  it('default state', () => {
    expect(store.error).toBe('');
    expect(Array.isArray(store.books) && store.books.length === 0).toBe(true);
    expect(store.loading).toBe(false);
  });

  it('getBooks action handles an error when fetching books', async () => {
    // Mocking the BookService.getBooks to reject with an error
    BookService.getBooks = async () => {
      throw new Error('Failed to fetch books');
    };

    // Call the action
    await store.getBooks();

    expect(store.books).toEqual([]);
    expect(store.loading).toBe(false);
    expect(store.error).toBe('Failed to fetch books');
  });

  it('getBooks action handles successfull API call', async () => {
    // Mocking the BookService.getBooks to resolve promise - mocked books
    BookService.getBooks = async () => {
      return mockedBooks;
    };

    // Call the action
    await store.getBooks();

    expect(store.books.length).toEqual(mockedBooks.length);
    expect(store.loading).toBe(false);
    expect(store.error).toBe('');
  });
});
