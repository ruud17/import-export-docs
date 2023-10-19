class EnvChecker {
  /**
   * Gets the value of API_URL from the environment variables.
   * Throws an error if API_URL is not defined.
   *
   * @returns {string} - The value of API_URL.
   */
  static getApiUrl(): string {
    const apiUrl = process.env.VUE_APP_API_URL;
    if (!apiUrl) {
      throw new Error('API_URL is not defined in the environment variables.');
    }
    return apiUrl;
  }
}

export default EnvChecker;
