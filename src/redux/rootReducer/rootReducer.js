import { combineReducers } from "redux";
import todoReducer from "../todo/TodoReducer";

// export default combineReducers;
const rootReducer = combineReducers({
    todo: todoReducer,
});

// export default rootReducer;
export default rootReducer;