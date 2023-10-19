import type { Book } from '@/types/book';
/**
 * Adjust the dummy data retrieved from the API. The response data does not include all the necessary properties
 * this function will adjust it to have all the data on the UI
 *
 * @returns {<Book[]>} - A list of books with corresponding format
 */
export const adjustDummyData = (data: any): Book[] => {
  for (const book of data) {
    // add missing fields
    book.rating = Math.round((Math.random() * 5 + 5) * 10) / 10;
    book.author = 'John Doe';
    book.buyOn = ['Amazon', 'iBooks', 'Play Store'].filter(() => Math.random() > 0.3);
    book.about =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    // remove redundant fields
    delete book.author_id;
    delete book.pages;
    delete book.isbn;
  }

  return data.reverse();
};
