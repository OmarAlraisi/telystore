import { handleActions } from "redux-actions";
import ProductsState from "../types/productsState.type";
import { fetchProducts } from "../actions/products.action";

const initState: ProductsState = {
  items: [],
};

export default handleActions<ProductsState, any>(
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
