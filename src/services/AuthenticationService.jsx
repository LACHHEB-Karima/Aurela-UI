import axios from 'axios';
import handleAxiosError from './HandleAxoisError';

const API_BASE_URL = 'http://localhost:8082/aurela/api/auth';

/**
 * Registers a new user.
 * @param {Object} registrationData
 * @returns {Promise<void>}
 */
export async function register(registrationData) {
  try {
    if (!registrationData || typeof registrationData !== 'object') {
      throw new Error('Invalid registration data.');
    }

    await axios.post(`${API_BASE_URL}/register`, registrationData, {
      withCredentials: true,
    });
  } catch (error) {
    handleAxiosError(error, 'Registration failed');
  }
}

/**
 * Authenticates a user and stores the JWT as an HttpOnly cookie.
 * @param {Object} loginData
 * @returns {Promise<void>}
 */
export async function authenticate(loginData) {
  try {
    if (!loginData?.email || !loginData?.password) {
      throw new Error('Email and password are required.');
    }

    await axios.post(`${API_BASE_URL}/authenticate`, loginData, {
      withCredentials: true,
    });
  } catch (error) {
    handleAxiosError(error, 'Authentication failed');
  }
}

/**
 * Activates the user account using a token.
 * @param {string} token 
 * @returns {Promise<void>}
 */
export async function activateAccount(token) {
  try {
    if (!token || typeof token !== 'string') {
      throw new Error('Activation token is required.');
    }

    await axios.get(`${API_BASE_URL}/activate-account`, {
      params: { token },
    });
  } catch (error) {
    handleAxiosError(error, 'Account activation failed');
  }
}

/**
 * Logs out the user and removes the JWT cookie.
 * @returns {Promise<void>}
 */
export async function logout() {
  try {
    await axios.post(`${API_BASE_URL}/logout`, {}, {
      withCredentials: true,
    });
  } catch (error) {
    handleAxiosError(error, 'Logout failed');
  }
}


export async function getCurrentUser() {
  try {
    const response = await axios.get(`${API_BASE_URL}/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return null;
  }
}
