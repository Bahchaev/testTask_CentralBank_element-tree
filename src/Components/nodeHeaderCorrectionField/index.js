import React from "react"

export default function NodeHeaderCorrectionField({correctionFieldContainer, correctionField, element, nodeHeader}) {
    return (
        <div ref={correctionFieldContainer} style={{display: 'none'}}>
            <input type="text" ref={correctionField} style={{display: 'inline-block'}}/>
            <button onClick={() => {
                //TODO: тут должна быть функция внесения изменений в store (изменить название узла)
                nodeHeader.current.style.display = 'inline-block';
                correctionFieldContainer.current.style.display = 'none';
            }}>OK</button>
            <button onClick={() => {
                nodeHeader.current.style.display = 'inline-block';
                correctionFieldContainer.current.style.display = 'none';
            }}>Cancel</button>
        </div>
    )
}