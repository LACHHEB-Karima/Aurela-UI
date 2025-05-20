import axios from "axios";

const BASE_URL = "http://localhost:8082";


export async function getCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error.response?.data || error;
  }
}

export async function getSubCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/subcategories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error.response?.data || error;
  }
}
