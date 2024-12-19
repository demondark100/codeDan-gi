"use client";
import "./mensaje.css";
import { useState } from "react";

function MensajesModal({mensaje}) {
    const [action, setAction] = useState(true);

    return (  
        <div className={`mensajeModalContent ${action ? "mensajeModalContentShow":""}`}>
            <div className="mensajeModalContent__info">
                <p>{mensaje}</p>
                <div className="mensajeModalContent__info--btn">
                    <button onClick={()=>setAction(false)}>ok</button>
                </div>
            </div>
        </div>
    );
}

export default MensajesModal;