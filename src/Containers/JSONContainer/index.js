import {connect} from "react-redux"
import JSONVision from "../../Components/JSONVision";


const mapStateToProps = (state) => {
    return {
        state: state,
    }
};

const JSONContainer = connect(
    mapStateToProps,
    undefined
)(JSONVision);

export default JSONContainer