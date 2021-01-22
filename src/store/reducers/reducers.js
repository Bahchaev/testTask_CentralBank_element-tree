import {ADD_ELEMENT, addElement, DELETE_ELEMENT} from "../actions/actions";

const initialState = {
    elements: {}
};

export function elements(state = {}, action) {
    switch (action.type) {
        case ADD_ELEMENT: {
            return {
                ...state,
                [action.payload.id]: {
                    text: action.payload.text,
                    parent: action.payload.parentID,
                    children: []
                }
            }
        }

        case DELETE_ELEMENT: {
            let newState = {...state};
            delete newState[action.payload.elementID];
            return newState
        }

        default:
            return state
    }
}