import React from "react"

export default function AddField(
    {
        inputFieldContainer,
        inputField,
        addElement,
        element
    }
) {
    return (
        <div ref={inputFieldContainer} style={{display: 'none'}}>
            <input type="text" ref={inputField}/>
            <button onClick={() => {
                addElement(inputField.current.value, element.id);
                inputField.current.value = "";
                inputFieldContainer.current.style.display = 'none';
            }}>OK
            </button>
            <button onClick={() => {
                inputField.current.value = "";
                inputFieldContainer.current.style.display = 'none';
            }}>Cancel
            </button>
        </div>
    )
}