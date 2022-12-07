// import { identity } from "lodash";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

// let reactDevTools = identity;

const devTools =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION__();

const store = configureStore({
  reducer: rootReducer,
  enhancers: [applyMiddleware(thunk), devTools],
});
export default store;
