import { createAction } from "redux-actions";
import { Product, UpdateData } from "../../interfaces";

export const fetchProducts = createAction(
  "PRODUCTS_ACTIONS__FETCH_PRODUCTS",
  (products: Product[]): { items: Product[] } => ({ items: products }),
);

export const deleteProduct = createAction(
  "PRODUCTS_ACTIONS__DELETE_PRODUCT",
  (productId: number): { productId: number } => ({ productId }),
);

export const updateProduct = createAction(
  "PRODUCTS_ACTIONS__UPDATE_PRODUCT",
  (
    id: number,
    productData: UpdateData,
  ): {
    id: number;
    productData: UpdateData;
  } => ({ id, productData }),
);
