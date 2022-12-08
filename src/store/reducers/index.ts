import { combineReducers } from "redux";
import { productsReducer } from "./products.reducer";
import { userReducer } from "./user.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;
