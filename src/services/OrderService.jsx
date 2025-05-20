import axios from 'axios';
import handleAxiosError from './HandleAxoisError';

const API_BASE_URL = 'http://localhost:8082/aurela/api/orders';

/**
 * Creates a new order.
 * @param {Object} orderRequest
 * @returns {Promise<Object>} 
 */
export async function createOrder(orderRequest) {
  try {
    if (!orderRequest || typeof orderRequest !== 'object') {
      throw new Error('Invalid order data.');
    }

    const response = await axios.post(`${API_BASE_URL}`, orderRequest, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Order creation failed');
  }
}

/**
 * Fetches all orders 
 * @param {number} page
 * @param {number} size 
 * @returns {Promise<Object>} 
 */
export async function getAllOrders(page = 0, size = 10) {
  try {
    const response = await axios.get(`${API_BASE_URL}`, {
      params: { page, size },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Fetching all orders failed');
  }
}

/**
 * Updates the status of an order.
 * @param {number} orderId 
 * @param {string} status 
 * @returns {Promise<Object>} 
 */
export async function updateOrderStatus(orderId, status) {
  try {
    if (!orderId || typeof orderId !== 'number') {
      throw new Error('Invalid order ID.');
    }

    if (!status || typeof status !== 'string') {
      throw new Error('Invalid order status.');
    }

    const response = await axios.put(`${API_BASE_URL}/${orderId}/status`, status, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Order status update failed');
  }
}

/**
 * Gets orders of the currently authenticated user.
 * @returns {Promise<Array>}
 */
export async function getMyOrders() {
  try {
    const response = await axios.get(`${API_BASE_URL}/my-orders`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Fetching user orders failed');
  }
}

/**
 * Gets all order items
 * @param {number} page 
 * @param {number} size 
 * @returns {Promise<Object>}
 */
export async function getAllOrderItems(page = 0, size = 20) {
  try {
    const response = await axios.get(`${API_BASE_URL}/all`, {
      params: { page, size },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Fetching all order items failed');
  }
}

/**
 * Gets order items of the authenticated user
 * @param {number} page 
 * @param {number} size 
 * @returns {Promise<Object>} 
 */
export async function getMyOrderItems(page = 0, size = 10) {
  try {
    const response = await axios.get(`${API_BASE_URL}/my-order-items`, {
      params: { page, size },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Fetching user order items failed');
  }
}


