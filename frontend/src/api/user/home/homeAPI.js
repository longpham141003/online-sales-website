// services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Thêm các hàm khác nếu cần cho các endpoint API khác
