import axios from 'axios';
import handleAxiosError from './HandleAxoisError';

const API_BASE_URL = 'http://localhost:8082/aurela/api/products/images';

/**
 * Uploads an image for a product.
 * @param {string} title 
 * @param {number} productId
 * @param {File} file
 * @returns {Promise<Object>}
 */
export async function uploadImage(title, productId, file) {
  try {
    if (!title || typeof title !== 'string') {
      throw new Error('Image title is required.');
    }

    if (!productId || typeof productId !== 'number') {
      throw new Error('Valid product ID is required.');
    }

    if (!file || !(file instanceof File)) {
      throw new Error('A valid image file must be provided.');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('productId', productId);
    formData.append('file', file);

    const response = await axios.post(`${API_BASE_URL}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true, 
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Image upload failed');
  }
}


