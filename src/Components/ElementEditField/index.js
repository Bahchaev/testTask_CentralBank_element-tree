import React from "react"

export default function ElementEditField(
    {
        editFieldContainer,
        editField,
        element,
        nodeHeader,
        editElement,
        addButtonRef,
        deleteButtonRef
    }
) {
    return (
        <div ref={editFieldContainer} style={{display: 'none'}}>
            <input type="text" ref={editField} style={{display: 'inline-block'}}/>
            <button onClick={() => {
                editElement(element.id, editField.current.value);
                nodeHeader.current.style.display = 'inline-block';
                editFieldContainer.current.style.display = 'none';
                addButtonRef.current.style.display = 'inline-block';
                deleteButtonRef.current.style.display = 'inline-block';
            }}>OK
            </button>
            <button onClick={() => {
                nodeHeader.current.style.display = 'inline-block';
                editFieldContainer.current.style.display = 'none';
                addButtonRef.current.style.display = 'inline-block';
                deleteButtonRef.current.style.display = 'inline-block';
            }}>Cancel
            </button>
        </div>
    )
}