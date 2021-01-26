import React from "react"

export default function AddButton({onClick, addButtonRef}) {
    return (
        <button onClick={onClick} ref={addButtonRef}>add</button>
    )
}