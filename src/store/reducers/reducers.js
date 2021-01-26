import {ADD_ELEMENT, DELETE_ELEMENT, EDIT_ELEMENT} from "../actions/actions";

const initialState = {
    switcher: 'tree',
    tree: {
        root: {
            id: "root",
            text: "Root",
            parentID: null,
            children: []
        }
    }
};

function elements(state = initialState.tree, action) {

    switch (action.type) {
        case ADD_ELEMENT: {
            console.log(`added ${action.payload.id} --->`);
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
            };
        }

        case DELETE_ELEMENT: {
            let newState = {...state};

            const deleteElement = (elementID) => {
                let element = newState[elementID];
                let parent = newState[element.parent];
                if (element.children.length !== 0) {
                    newState[elementID].children.forEach((child) => {
                        deleteElement(child)
                    });
                }
                console.log(`deleted ${elementID} --->`);
                parent.children = parent.children.filter(child => child !== element.id);
                delete newState[elementID];
            };

            deleteElement(action.payload.id);
            return newState
        }

        case EDIT_ELEMENT: {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    text: action.payload.text,
                }
            }
        }

        default:
            return state
    }
}

export default elements