import { handleActions } from "redux-actions";
import { ProductsState } from "../types";
import { fetchProducts } from "../actions";
import { generateSummary } from "../../utils/products.utils";

const initState: ProductsState = {
  items: [],
  summary: {
    products: 0,
    inStock: 0,
    available: 0,
    total: 0,
    average: 0,
  },
};

export const productsReducer = handleActions<ProductsState, any>(
  {
    [fetchProducts.toString()](
      state,
      { payload }: ReturnType<typeof fetchProducts>,
    ) {
      const { items } = payload;
      const summary = generateSummary(items);
      return {
        ...state,
        items,
        summary,
      };
    },
  },
  initState,
);
