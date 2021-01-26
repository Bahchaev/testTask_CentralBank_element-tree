import React, {useState} from "react";
import Switch from "react-switch";
import NodeContainer from "../../Containers/NodeContainer";
import JSONContainer from "../../Containers/JSONContainer";
import styles from "./styles.module.css"


function App() {

    const [isChecked, setIsChecked] = useState(false);
    const handleSwitch =() => {
        setIsChecked(!isChecked)
    };

    return (
        <div className={styles.container}>
            <div className={styles.switchContainer}>
                <Switch onChange={handleSwitch} checked={isChecked}/> <span> Show JSON </span>
            </div>
            <div style={!isChecked ? {display: "none"} : {display: "block"}}><JSONContainer/></div>
            <div style={isChecked ? {display: "none"} : {display: "block"}}><NodeContainer/></div>
        </div>
    );
}

export default App;
