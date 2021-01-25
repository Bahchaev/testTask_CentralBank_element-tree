import React from "react"

export default function DeleteButton({onClick, style}) {
    return (
        <button onClick={onClick} style={style}>del</button>
    )
}