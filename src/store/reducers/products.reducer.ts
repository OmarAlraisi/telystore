import { handleActions } from "redux-actions";
import { ProductsState } from "../types";
import {
  fetchProducts,
  deleteProduct,
  updateProduct,
  editNameFilter,
  editMinPriceFilter,
  editMaxPriceFilter,
  editAvailabilityFilter,
} from "../actions";
import {
  generateSummary,
  getFilteredProducts,
  updateProductById,
} from "../../utils/products.utils";

const initState: ProductsState = {
  items: [],
  filters: {
    byName: "",
    byPrice: {
      min: Number.MIN_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER,
    },
    byAvailability: false,
  },
  filteredItems: [],
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
        filteredItems: items,
        summary,
      };
    },
    [deleteProduct.toString()](
      state,
      { payload }: ReturnType<typeof deleteProduct>,
    ) {
      const { productId } = payload;
      const items = state.items.filter((product) => product.id !== productId);
      const filteredItems = getFilteredProducts(items, state.filters);
      const summary = generateSummary(filteredItems);
      return {
        ...state,
        items,
        filteredItems,
        summary,
      };
    },
    [updateProduct.toString()](
      state,
      { payload }: ReturnType<typeof updateProduct>,
    ) {
      const { id, productData } = payload;
      updateProductById(state.items, id, productData);
      const filteredItems = getFilteredProducts(state.items, state.filters);
      const summary = generateSummary(filteredItems);
      return {
        ...state,
        items: state.items,
        filteredItems,
        summary,
      };
    },
    [editNameFilter.toString()](
      state,
      { payload }: ReturnType<typeof editNameFilter>,
    ) {
      const { name } = payload;
      const newState = {
        ...state,
        filters: {
          ...state.filters,
          byName: name,
        },
      };
      const filteredItems = getFilteredProducts(state.items, newState.filters);
      const summary = generateSummary(filteredItems);
      return {
        ...newState,
        filteredItems,
        summary,
      };
    },
    [editMinPriceFilter.toString()](
      state,
      { payload }: ReturnType<typeof editMinPriceFilter>,
    ) {
      const { min } = payload;
      const newState = {
        ...state,
        filters: {
          ...state.filters,
          byPrice: {
            ...state.filters.byPrice,
            min,
          },
        },
      };
      const filteredItems = getFilteredProducts(state.items, newState.filters);
      const summary = generateSummary(filteredItems);
      return {
        ...newState,
        filteredItems,
        summary,
      };
    },
    [editMaxPriceFilter.toString()](
      state,
      { payload }: ReturnType<typeof editMaxPriceFilter>,
    ) {
      const { max } = payload;
      const newState = {
        ...state,
        filters: {
          ...state.filters,
          byPrice: {
            ...state.filters.byPrice,
            max,
          },
        },
      };
      const filteredItems = getFilteredProducts(state.items, newState.filters);
      const summary = generateSummary(filteredItems);
      return {
        ...newState,
        filteredItems,
        summary,
      };
    },
    [editAvailabilityFilter.toString()](
      state,
      { payload }: ReturnType<typeof editAvailabilityFilter>,
    ) {
      const { available } = payload;
      const newState = {
        ...state,
        filters: {
          ...state.filters,
          byAvailability: available,
        },
      };
      const filteredItems = getFilteredProducts(state.items, newState.filters);
      const summary = generateSummary(filteredItems);
      return {
        ...newState,
        filteredItems,
        summary,
      };
    },
  },
  initState,
);
