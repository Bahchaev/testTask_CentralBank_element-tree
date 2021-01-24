import {ADD_ELEMENT} from "../actions/actions";

const initialState = {
    root: {
        id: "root",
        text: "Root",
        parentID: null,
        children: []
    }
};

function elements(state = initialState, action) {

    switch (action.type) {
        case ADD_ELEMENT: {
            console.log(state)
            return {
                ...state,
                [action.payload.parentID]: {
                    ...state[action.payload.parentID],
                    children: [...state[action.payload.parentID].children, [action.payload.id].toString()]
                },
                [action.payload.id]: {
                    id: action.payload.id,
                    text: action.payload.text,
                    parent: action.payload.parentID,
                    children: []
                }
            }
        }
        default:
            return state
    }
}

export default elements