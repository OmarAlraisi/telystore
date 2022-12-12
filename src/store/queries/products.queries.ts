import { Filters, Product, Summary } from "../../interfaces";
import { AppState } from "../types";

export const getProducts = (state: AppState): Product[] => {
  return state.products.filteredItems;
};

export const getSummary = (state: AppState): Summary => {
  return state.products.summary;
};

export const getFilters = (state: AppState): Filters => {
  return state.products.filters;
};
