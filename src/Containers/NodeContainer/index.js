import {connect} from "react-redux"
import Node from '../../Components/Node/index'
import {addElement, deleteElement, editElement} from "../../store/actions/actions";

const mapStateToProps = (state) => {
    return {
        state: state,
        elementID: 'root'
    }
};

const mapDispatchToProps = dispatch => ({
    addElement: (text, parentID) => dispatch(addElement(text, parentID)),
    deleteElement: (elementID) => dispatch(deleteElement(elementID)),
    editElement: (elementID, text) => dispatch(editElement(elementID, text))
});

const NodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Node);

export default NodeContainer