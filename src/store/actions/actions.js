import { v4 as uuidv4 } from 'uuid'

/*
actions type
 */

export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';
export const EDIT_ELEMENT = 'EDIT_ELEMENT';

/*
action generators
 */

export function addElement(text, parentID) {
    let id = uuidv4().toString();
    return {
        type: ADD_ELEMENT,
        payload: {
            id: id,
            text: text,
            parentID: parentID,
        }
    }
}

export function deleteElement(elementID) {
    return {
        type: DELETE_ELEMENT,
        payload: {
            id: elementID,
        }
    }
}

export function editElement(elementID, text) {
    return {
        type: EDIT_ELEMENT,
        payload: {
            id: elementID,
            text: text,
        }
    }
}