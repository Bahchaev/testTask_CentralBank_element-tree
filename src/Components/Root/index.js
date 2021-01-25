import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";
import Node from "../Node";


function Root({state, addElement, deleteElement}) {

    console.log(state)
    let element = state.root;
    return (
        <ul className={classNames(`Container`)}>
            <li id={element.id} className={classNames(`Node`, `isRoot`, `ExpandOpen`)}>
                <div>
                    <span className={classNames(`Content`)}>{`${element.text}  `}</span>
                    <AddButton onClick={() => addElement('some text', element.id)}/>

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

Root.propTypes = {
    state: PropTypes.object.isRequired,
    addElement: PropTypes.func.isRequired,
    deleteElement: PropTypes.func.isRequired
};

export default Root