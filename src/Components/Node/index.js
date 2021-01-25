import React, {useRef} from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";
import AddField from "../AddField";
import DeleteButton from "../DeleteButton";


function Node({state, elementID, addElement, deleteElement}) {

    console.log(state);

    let element = state[elementID];
    const inputFieldContainer = useRef(null);
    const inputField = useRef(null);

    return (
        <ul>
            <li>
                <div>
                    <span>{`${element.text}`}</span>
                    <AddButton onClick={() => {
                        inputFieldContainer.current.style.display = 'block';
                        inputField.current.focus();
                    }}/>
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
                    }
                )
            }
        </ul>
    )
}

Node.propTypes = {
    state: PropTypes.object.isRequired,
    addElement: PropTypes.func.isRequired,
    deleteElement: PropTypes.func.isRequired
};

export default Node