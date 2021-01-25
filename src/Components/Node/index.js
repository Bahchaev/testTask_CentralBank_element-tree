import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";
import DeleteButton from "../DeleteButton";


function Node({state, elementID, addElement, deleteElement}) {


    let element = state[elementID];
    return (
        <ul className={classNames(`Container`)}>
            <li className={classNames(`Node`, `ExpandOpen`)}>
                <div>
                    <span className={classNames(`Content`)}>{`${element.text}  `}</span>
                    <AddButton onClick={() => addElement('some text', element.id)}/>
                    <DeleteButton onClick={() => deleteElement(element.id)}/>
                </div>
            </li>
            {
                element.children.map(child => {
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
    elementID: PropTypes.string.isRequired,
    addElement: PropTypes.func.isRequired,
    deleteElement: PropTypes.func.isRequired
};

export default Node