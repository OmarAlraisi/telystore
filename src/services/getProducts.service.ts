import axios from "axios";
import { API_BASE_URL, GET_PRODUCTS_API_ENDPOINT } from "../config";
import Product from "../interfaces/product.interface";

const getProductsService = async (fetchProducts: Function) => {
  axios
    .get(`${API_BASE_URL}${GET_PRODUCTS_API_ENDPOINT}`)
    .then((response) => {
      fetchProducts(response.data as Product[]);
    })
    .catch((error) => {
      throw new Error(`Could not fetch products!\n${error}`);
    });
};

export default getProductsService;
