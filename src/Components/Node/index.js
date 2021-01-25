import React, {useRef} from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";
import AddField from "../AddField";
import DeleteButton from "../DeleteButton";
import NodeHeaderCorrectionField from "../nodeHeaderCorrectionField";


function Node({state, elementID, addElement, deleteElement}) {

    console.log(state);

    const element = state[elementID];
    const inputFieldContainer = useRef(null);
    const inputField = useRef(null);
    const correctionFieldContainer = useRef(null)
    const correctionField = useRef(null);
    const nodeHeader = useRef(null);

    const addButtonClick = () => {
        inputFieldContainer.current.style.display = 'block';
        inputField.current.focus();
    };

    const nodeHeaderHandleClick = () => {
        correctionFieldContainer.current.style.display = 'block';
        correctionField.current.value = element.text;
        correctionField.current.focus();
        nodeHeader.current.style.display = 'none'
    };

    return (
        <ul>
            <li>
                <div>
                    <span ref={nodeHeader} onClick={nodeHeaderHandleClick}>{`${element.text}`}</span>

                    <NodeHeaderCorrectionField
                        correctionFieldContainer={correctionFieldContainer}
                        correctionField={correctionField}
                        element={element}
                        nodeHeader={nodeHeader}
                        style={{display: 'none'}}
                    />

                    <AddButton onClick={addButtonClick}/>
                    <DeleteButton
                        onClick={() => deleteElement(element.id)}
                        style={(elementID === 'root') ? {display: 'none'} : {display: 'inline-block'}}
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
    deleteElement: PropTypes.func.isRequired
};

export default Node