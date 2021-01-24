import { v4 as uuidv4 } from 'uuid'

/*
actions type
 */

export const ADD_ELEMENT = 'ADD_ELEMENT';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';

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