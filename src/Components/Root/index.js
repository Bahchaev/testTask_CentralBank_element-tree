import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";
import Node from "../Node";

function Root({state, addElement}) {

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
                element.children.map(child => <Node state={state} elementID={child} addElement={addElement}>{child}</Node>)
            }
        </ul>
    )
}

Root.propTypes = {
    element: PropTypes.object.isRequired,
    addElement: PropTypes.func.isRequired
};

export default Root