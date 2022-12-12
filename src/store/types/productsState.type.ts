import { Filters, Product, Summary } from "../../interfaces";

export interface ProductsState {
  items: Product[];
  filters: Filters;
  filteredItems: Product[];
  summary: Summary;
}
