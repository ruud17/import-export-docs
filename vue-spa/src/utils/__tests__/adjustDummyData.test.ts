import { describe, it, expect } from 'vitest';
import { adjustDummyData } from '../adjustDummyData';

describe('adjustDummyData', () => {
  it('adjusts the dummy data correctly', () => {
    const inputData = [
      {
        title: 'Sample Book 1',
        author_id: 1,
        pages: 200,
        isbn: '1234567890'
      },
      {
        title: 'Sample Book 2',
        author_id: 2,
        pages: 250,
        isbn: '0987654321'
      }
    ];

    const result = adjustDummyData(inputData);

    // Check that redundant fields are removed
    expect((result[0] as any).author_id).toBeUndefined();
    expect((result[0] as any).pages).toBeUndefined();
    expect((result[0] as any).isbn).toBeUndefined();

    // Check that new fields are added
    expect(result[0].rating).toBeGreaterThanOrEqual(5);
    expect(result[0].rating).toBeLessThanOrEqual(10);
    expect(result[0].author).toBe('John Doe');
    expect(result[0].buyOn).toBeInstanceOf(Array);
    expect(result[0].about).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    );

    // Check that the data is reversed
    expect(result[0].title).toBe('Sample Book 2');
    expect(result[1].title).toBe('Sample Book 1');
  });
});
