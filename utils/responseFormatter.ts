// utils/responseFormatter.js

/**
 * Formats the API response to a standard format.
 * @param {number} statusCode - The HTTP status code.
 * @param {string} statusMessage - A brief message about the response.
 * @param {object} data - The response data, customized per route.
 * @returns {object} - The formatted response object.
 */
export function formatResponse(statusCode: number, statusMessage: string, data: any = null) {
    return {
      statusCode: statusCode,
      statusMessage,
      Data: data,
    };
  }
  