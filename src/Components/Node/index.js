import React, {useRef} from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";
import AddField from "../AddField";
import DeleteButton from "../DeleteButton";
import ElementEditField from "../ElementEditField";


function Node({
                  state,
                  elementID,
                  addElement,
                  deleteElement,
                  editElement
              }) {

    console.log(state);

    const element = state[elementID];
    const inputFieldContainer = useRef(null);
    const inputField = useRef(null);
    const editFieldContainer = useRef(null);
    const editField = useRef(null);
    const nodeHeader = useRef(null);
    const addButtonRef = useRef(null);
    const deleteButtonRef = useRef(null);

    const addButtonClick = () => {
        inputFieldContainer.current.style.display = 'block';
        inputField.current.focus();
    };

    const headerHandleClick = () => {
        editFieldContainer.current.style.display = 'block';
        editField.current.value = element.text;
        editField.current.focus();
        nodeHeader.current.style.display = 'none';
        addButtonRef.current.style.display = 'none';
        deleteButtonRef.current.style.display = 'none'
    };


    return (
        <ul>
            <li>
                <div>
                    <span
                        ref={nodeHeader}
                        onClick={headerHandleClick}
                    >{`${element.text}`}</span>
                    <ElementEditField
                        editFieldContainer={editFieldContainer}
                        editField={editField}
                        element={element}
                        nodeHeader={nodeHeader}
                        editElement={editElement}
                        addButtonRef={addButtonRef}
                        deleteButtonRef={deleteButtonRef}
                    />
                    <AddButton
                        onClick={addButtonClick}
                        addButtonRef={addButtonRef}
                    />
                    <DeleteButton
                        onClick={() => deleteElement(element.id)}
                        elementID={elementID}
                        deleteButtonRef={deleteButtonRef}
                    />
                </div>
                <AddField
                    inputFieldContainer={inputFieldContainer}
                    inputField={inputField}
                    addElement={addElement}
                    element={element}
                />
            </li>
            {
                element.children.slice(0).reverse().map(child => {
                    if (child) return (
                        <Node
                            state={state}
                            elementID={child}
                            addElement={addElement}
                            deleteElement={deleteElement}
                            editElement={editElement}
                        >{child}</Node>
                    )
                })
            }
        </ul>
    )
}

Node.propTypes = {
    state: PropTypes.object.isRequired,
    elementID: PropTypes.string.isRequired,
    addElement: PropTypes.func.isRequired,
    deleteElement: PropTypes.func.isRequired,
    editElement: PropTypes.func.isRequired
};

export default Node