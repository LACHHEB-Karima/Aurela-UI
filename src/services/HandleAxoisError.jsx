import axios from 'axios';
/**
 * Centralized error handler for Axios errors.
 * @param {any} error
 * @param {string} context 
 */
function handleAxiosError(error, context) {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message || error.response?.data?.error || error.message;
    console.error(`${context}: ${message}`);
    throw new Error(`${context}: ${message}`);
  } else {
    console.error(`${context}: ${error.message}`);
    throw new Error(`${context}: ${error.message}`);
  }
  
}