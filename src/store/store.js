import { createStore } from "redux";
import elementsApp from "./reducers/combineReducer";
export const store = createStore(elementsApp);