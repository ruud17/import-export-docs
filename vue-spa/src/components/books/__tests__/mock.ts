import type { Book } from '@/types/book';

export const mockedBooks: Book[] = [
  {
    title: 'Book 1',
    author: 'Author 1',
    cover_image:
      'https://cdn.kobo.com/book-images/0e77a0f9-14f7-4a97-9784-053bc1691e87/1200/1200/False/in-search-of-lost-time-volumes-1-to-7-8.jpg',
    releaseDate: 1913,
    rating: 9.8,
    buyOn: ['Amazon', 'iBooks', 'Play Store'],
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    cover_image:
      'https://cdn.kobo.com/book-images/0e77a0f9-14f7-4a97-9784-053bc1691e87/1200/1200/False/in-search-of-lost-time-volumes-1-to-7-8.jpg',
    releaseDate: 2015,
    rating: 9.2,
    buyOn: ['Amazon'],
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    cover_image:
      'https://cdn.kobo.com/book-images/0e77a0f9-14f7-4a97-9784-053bc1691e87/1200/1200/False/in-search-of-lost-time-volumes-1-to-7-8.jpg',
    releaseDate: 1999,
    rating: 4.8,
    buyOn: ['Play Store'],
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];
