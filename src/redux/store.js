import cartReducer from "./cart/cartReducer";
import { applyMiddleware, createStore } from 'redux';
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore(cartReducer,composeWithDevTools(applyMiddleware(logger)));

export default store;