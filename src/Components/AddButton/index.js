import React from "react"
import styles from "./styles.module.css"

export default function AddButton({onClick, addButtonRef}) {
    return (
        <button onClick={onClick} ref={addButtonRef} className={styles.addButton}/>
    )
}