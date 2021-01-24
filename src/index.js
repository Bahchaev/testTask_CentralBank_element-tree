import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore } from "redux";
import rootReducer from "./store/reducers/combineReducer";
import App from './Components/App/App';
import elements from "./store/reducers/reducers";

const store = createStore(elements);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


