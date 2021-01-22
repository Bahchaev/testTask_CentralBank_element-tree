/*
actions type
 */

export const ELEMENT_ADD = 'ELEMENT_ADD';
export const ELEMENT_DELETE = 'ELEMENT_DELETE';


/*
action generators
 */

export function addElement(text, parentID) {
    return {
        type: ELEMENT_ADD,
        text: text,
        parentID: parentID,
    }
}

export function deleteElement(elementID) {
    return {
        type: ELEMENT_DELETE,
        elementID: elementID,
    }
}