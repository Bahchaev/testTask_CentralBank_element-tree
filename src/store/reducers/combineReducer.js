import {combineReducers} from "redux";
import elements from "./reducers";

const rootReducer = combineReducers({
    elements,
});
export default rootReducer