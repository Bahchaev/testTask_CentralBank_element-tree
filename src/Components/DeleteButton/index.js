import React from "react"

export default function DeleteButton({onClick, elementID, deleteButtonRef}) {
    return (
        <button
            onClick={onClick}
            style={(elementID === 'root') ? {display: 'none'} : {display: 'inline-block'}}
            ref={deleteButtonRef}
        >del</button>
    )
}