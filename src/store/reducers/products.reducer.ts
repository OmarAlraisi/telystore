import { handleActions } from "redux-actions";
import { ProductsState } from "../types";
import { fetchProducts } from "../actions";

const initState: ProductsState = {
  items: [],
};

export const productsReducer = handleActions<ProductsState, any>(
  {
    [fetchProducts.toString()](
      state,
      { payload }: ReturnType<typeof fetchProducts>,
    ) {
      const { items } = payload;
      return {
        ...state,
        items,
      };
    },
  },
  initState,
);
