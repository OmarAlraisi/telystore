import { handleActions } from "redux-actions";
import { ProductsState } from "../types";
import { fetchProducts, deleteProduct, updateProduct } from "../actions";
import { generateSummary, updateProductById } from "../../utils/products.utils";

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
    [deleteProduct.toString()](
      state,
      { payload }: ReturnType<typeof deleteProduct>,
    ) {
      const { productId } = payload;
      const items = state.items.filter((product) => product.id !== productId);
      const summary = generateSummary(items);
      return {
        ...state,
        items,
        summary,
      };
    },
    [updateProduct.toString()](
      state,
      { payload }: ReturnType<typeof updateProduct>,
    ) {
      const { id, productData } = payload;
      updateProductById(state.items, id, productData);
      const summary = generateSummary(state.items);
      return {
        ...state,
        items: state.items,
        summary,
      };
    },
  },
  initState,
);
