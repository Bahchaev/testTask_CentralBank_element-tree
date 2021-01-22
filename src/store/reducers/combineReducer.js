import {combineReducers} from "redux";
import {elements} from "./reducers";

const elementsApp = combineReducers({
    elements: elements,
});
export default elementsApp