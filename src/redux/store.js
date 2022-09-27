import { createStore } from "redux";
import reducer from "./filters/reducer.js";

const store = createStore(reducer);

export default store;
