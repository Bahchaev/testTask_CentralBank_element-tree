import {connect} from "react-redux"
import Node from '../../Components/Node/index'
import {addElement, deleteElement} from "../../store/actions/actions";

const mapStateToProps = (state) => {
    return {
        state: state,
        elementID: 'root'
    }
};

const mapDispatchToProps = dispatch => ({
    addElement: (text, parentID) => dispatch(addElement(text, parentID)),
    deleteElement: (elementID) => dispatch(deleteElement(elementID))
});

const NodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Node);

export default NodeContainer