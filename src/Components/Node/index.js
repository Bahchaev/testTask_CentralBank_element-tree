import React from "react"
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddButton from "../AddButton";

function Node({state, elementID, addElement}) {

    let element = state[elementID];

    return (
        <ul className={classNames(`Container`)}>
            <li id={element.id} className={classNames(`Node`, `ExpandOpen`)}>
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

Node.propTypes = {
    state: PropTypes.object.isRequired,
    elementID: PropTypes.string.isRequired,
    addElement: PropTypes.func.isRequired
};

export default Node