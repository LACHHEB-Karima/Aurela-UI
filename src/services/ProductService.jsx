import axios from "axios";

const BASE_URL = "http://localhost:8082/aurela/api/products";

export async function createProduct(productData) {
  try {
    const response = await axios.post(`${BASE_URL}`, productData, {
      withCredentials: true,
    });
    return response.data; 
  } catch (error) {
    console.error("Failed to create product:", error);
    throw error.response?.data || error;
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with id ${id}:`, error);
    throw error.response?.data || error;
  }
}

export async function updateProduct(id, productData) {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, productData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to update product with id ${id}:`, error);
    throw error.response?.data || error;
  }
}

export async function deleteProduct(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`, { withCredentials: true });
  } catch (error) {
    console.error(`Failed to delete product with id ${id}:`, error);
    throw error.response?.data || error;
  }
}

export async function searchProducts(keyword, page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { keyword, page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to search products:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsByCategoryName(name, page = 0, size = 4) {
  try {
    const response = await axios.get(`${BASE_URL}/category-name`, {
      params: { name, page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to find products by category name:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsByCategory(categoryId, page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/category/${categoryId}`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get products by category:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsBySubCategory(subCategoryId, page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/subcategory/${subCategoryId}`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get products by subcategory:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsByPriceRange(minPrice, maxPrice, page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/price-range`, {
      params: { minPrice, maxPrice, page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get products by price range:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsSortedByPriceAsc(page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/price-asc`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get products sorted by price ascending:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsSortedByPriceDesc(page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/price-desc`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get products sorted by price descending:", error);
    throw error.response?.data || error;
  }
}

export async function getProductsSortedByCreatedAtDesc(page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}/created-desc`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get products sorted by newest:", error);
    throw error.response?.data || error;
  }
}

export async function getAllMinimalProducts(page = 0, size = 10) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to get all minimal products:", error);
    throw error.response?.data || error;
  }
}
