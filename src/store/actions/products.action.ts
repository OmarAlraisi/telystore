import { createAction } from "redux-actions";
import Product from "../../interfaces/product.interface";

export const fetchProducts = createAction(
  "PRODUCTS_ACTION__FETCH_PRODUCTS",
  (products: Product[]): { items: Product[] } => ({ items: products }),
);
