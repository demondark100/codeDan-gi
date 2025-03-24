import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function OpenHideButtonResumen({setState,state}) {
    const [isBtnX,setIsBtnX] = useState(false);
    const hundleStates=()=>{
        setState(!state);
        setIsBtnX(!isBtnX);
    }

    return (
        <button    
            onClick={hundleStates}
            className={`btnOpenHideResumen ${isBtnX ? "btnOpenHideResumenClose":""}`}
        >
            {
                isBtnX ? 
                    <FontAwesomeIcon icon={faX}/>:
                    <FontAwesomeIcon icon={faClipboardList}/>
            }
        </button>
    )
}