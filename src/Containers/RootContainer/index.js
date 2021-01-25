import {connect} from "react-redux"
import Root from '../../Components/Root/index'
import {addElement, deleteElement} from "../../store/actions/actions";

const mapStateToProps = () => {
    return ((state) => ({
        state: state
    }))
};

const mapDispatchToProps = dispatch => ({
    addElement: (text, parentID) => dispatch(addElement(text, parentID)),
    deleteElement: (elementID) => dispatch(deleteElement(elementID))
});

const RootContainer = connect(
    mapStateToProps(),
    mapDispatchToProps
)(Root);

export default RootContainer