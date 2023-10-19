import { describe, it, expect } from 'vitest';
import EnvChecker from '../envChecker';

describe('EnvChecker', () => {
  it('returns the API URL when defined', () => {
    // Mock the environment variable
    (import.meta.env.VITE_APP_API_URL as any) = 'https://example.com/api';

    const result = EnvChecker.getApiUrl();

    expect(result).toBe('https://example.com/api');
  });

  it('throws an error when API_URL is not defined', () => {
    // Mock the environment variable
    delete (import.meta.env as any).VITE_APP_API_URL;

    try {
      EnvChecker.getApiUrl();
    } catch (error) {
      expect((error as Error).message).toBe('API_URL is not defined in the environment variables!');
    }
  });
});
