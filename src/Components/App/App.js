import './App.css';
import React from "react";
import { store } from "./../../store/store"
import {addElement} from "../../store/actions/actions";


function App() {

    console.log(store.getState());
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    store.dispatch (addElement("1", 1));
    store.dispatch (addElement("2", 2));
    store.dispatch (addElement("3", 3));
    store.dispatch (addElement("4", 4));
    store.dispatch (addElement("5", 5));

    unsubscribe();

    return (
        <div className="App">
            show console
        </div>
    );
}

export default App;
