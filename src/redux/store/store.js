import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";

// Create a store;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Export default store;
export default store;
