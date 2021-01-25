import React from "react"

export default function AddField({inputFieldContainer, inputField, addElement, element}) {
    return (
        <ul ref={inputFieldContainer} style={{display: 'none'}}>
            <input type="text" ref={inputField}/>
            <button onClick={() => {
                addElement(inputField.current.value, element.id);
                inputField.current.value = "";
                inputFieldContainer.current.style.display = 'none';
            }}>ok</button>
            <button onClick={() => {
                inputField.current.value = "";
                inputFieldContainer.current.style.display = 'none';
            }}>Cancel</button>
        </ul>
    )
}