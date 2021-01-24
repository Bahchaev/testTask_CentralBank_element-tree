import {connect} from "react-redux"
import Root from '../../Components/Root/index'
import {addElement} from "../../store/actions/actions";

const mapStateToProps = () => {
    return ((state) => ({
        state: state
    }))
};

const mapDispatchToProps = dispatch => ({
    addElement: (text, parentID) => dispatch(addElement(text, parentID))
});

const RootContainer = connect(
    mapStateToProps(),
    mapDispatchToProps
)(Root);

export default RootContainer