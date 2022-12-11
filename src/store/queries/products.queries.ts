import { Product, Summary } from "../../interfaces";
import { AppState } from "../types";

export const getProducts = (state: AppState): Product[] => {
  return state.products.items;
};

export const getSummary = (state: AppState): Summary => {
  return state.products.summary;
};
