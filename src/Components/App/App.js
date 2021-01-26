import React, {useState} from "react";
import Switch from "react-switch";
import NodeContainer from "../../Containers/NodeContainer";
import JSONContainer from "../../Containers/JSONContainer";


function App() {

    const [isChecked, setIsChecked] = useState(false);
    const handleSwitch =() => {
        setIsChecked(!isChecked)
    };

    return (
        <div>
            <div>
                <Switch onChange={handleSwitch} checked={isChecked}/> <span> Show JSON </span>
            </div>
            <div style={!isChecked ? {display: "none"} : {display: "block"}}><JSONContainer/></div>
            <div style={isChecked ? {display: "none"} : {display: "block"}}><NodeContainer/></div>
        </div>
    );
}

export default App;
