import React from "react"
import styles from "./styles.module.css";

export default function DeleteButton({onClick, elementID, deleteButtonRef}) {
    return (
        <button
            onClick={onClick}
            style={(elementID === 'root') ? {display: 'none'} : {display: 'inline-block'}}
            ref={deleteButtonRef}
            className={styles.delButton}
        />
    )
}