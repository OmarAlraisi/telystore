import { createAction } from "redux-actions";
import { Product } from "../../interfaces";

export const fetchProducts = createAction(
  "PRODUCTS_ACTIONS__FETCH_PRODUCTS",
  (products: Product[]): { items: Product[] } => ({ items: products }),
);

export const deleteProduct = createAction(
  "PRODUCTS_ACTIONS__DELETE_PRODUCT",
  (productId: number): { productId: number } => ({ productId }),
);
