import Product from "../../interfaces/product.interface";
import AppState from "../types/appState.type";

export const getProducts = (state: AppState): Product[] => {
  return state.products.items;
};
