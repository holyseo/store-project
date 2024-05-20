import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const fetchCategoryProducts = async (category) => {
  const response = await axios.get(`${BASE_URL}/products/${category}`);
  return response.data;
};
