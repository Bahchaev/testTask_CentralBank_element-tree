import React, {useEffect} from "react"

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

    const cancelClick = () => {
        nodeHeader.current.style.display = 'inline-block';
        editFieldContainer.current.style.display = 'none';
        addButtonRef.current.style.display = 'inline-block';
        deleteButtonRef.current.style.display = 'inline-block';
    };

    const okClick = () => {
        //console.log(element);
        //console.log(`${element.text} changed to ${editField.current.value}`);

        editElement(element.id, editField.current.value);

        nodeHeader.current.style.display = 'inline-block';
        editFieldContainer.current.style.display = 'none';
        addButtonRef.current.style.display = 'inline-block';
        deleteButtonRef.current.style.display = 'inline-block';
    };

    // отслеживаем клик снаружи поля редактирования
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.path.includes(editFieldContainer.current) && editFieldContainer.current.style.display !== 'none') {
                okClick()
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    return (
        <div ref={editFieldContainer} style={{display: 'none'}} className={'editFieldContainer'}>
            <input type="text" ref={editField} style={{display: 'inline-block'}}/>
            <button onClick={okClick}>OK</button>
            <button onClick={cancelClick}>Cancel</button>
        </div>
    )
}