import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const fetchSingleProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

export const fetchCategoryProducts = async (category) => {
  const response = await axios.get(`${BASE_URL}/products/category/${category}`);
  return response.data;
};

export const authenticateUser = async (email, password) => {
  const response = await axios.get(`${BASE_URL}/users`);
  const authenticate = response.data.find(
    (user) => user.email === email && user.password === password
  );
  return authenticate;
};
