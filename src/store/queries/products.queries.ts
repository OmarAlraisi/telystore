import { Product } from "../../interfaces";
import { AppState } from "../types";

export const getProducts = (state: AppState): Product[] => {
  return state.products.items;
};
