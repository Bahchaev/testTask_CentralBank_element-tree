import React, {useEffect} from "react"

export default function AddField(
    {
        inputFieldContainer,
        inputField,
        addElement,
        element
    }
) {
    const cancelClick = () => {
        inputField.current.value = "";
        inputFieldContainer.current.style.display = 'none';
    };

    const okClick = () => {
        if (inputField.current.value !== "") {
            addElement(inputField.current.value, element.id);
        }
        inputField.current.value = "";
        inputFieldContainer.current.style.display = 'none';
    };

    // отслеживаем клик снаружи поля редактирования
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.path.includes(inputFieldContainer.current) && inputFieldContainer.current.style.display !== 'none') {
                okClick()
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    return (
        <div ref={inputFieldContainer} style={{display: 'none'}}>
            <input type="text" ref={inputField}/>
            <button onClick={okClick}>OK</button>
            <button onClick={cancelClick}>Cancel</button>
        </div>
    )
}