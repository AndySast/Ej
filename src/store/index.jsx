import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer  from "./reducer";

const store = createStore(reducer, composeWithDevTools());

export default store;