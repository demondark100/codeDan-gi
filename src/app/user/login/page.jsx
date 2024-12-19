"use client";
import MensajesModal from "@/componentes/mensajesModal/mensaje";
import "./login.css";
import { faEnvelope, faEye, faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState ,useRef } from 'react';
import { showHideBtnsInputUser } from "../componentesUser/moverPlaceholder";

// función para mostrar u ocultar los botones de los inputs
function Login() {

    // contenedor del input de contraseña
    const input = useRef(null);

    // estado para los valores de los inputs
    const [inputsValue, setInputsValue] = useState(["", ""]);

    // estado para mostrar/ocultar los botones
    const [btnsShow, setBtnsShow] = useState([false, false]);

    // referencia de los placeholders
    const placeHolderRef = useRef([]);

    // tipo de input para la contraseña
    const [inputType, setInputType] = useState("password");


    // mensajes de error
    const [showHideMsgError, setShowHideMsgError] = useState(false); // mostrar o ocultar mensajes de error
    const [msgError, setMsgError] = useState(""); // mensajes de error.

    // obtener valores de los inputs
    function manejarInputs(value, index) {
        setInputsValue(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });

        // actualiza la visibilidad del botón basado en el input
        setBtnsShow(prev => {
            const updated = [...prev];
            updated[index] = value !== "";
            return updated;
        });
    }

    // función para eliminar el input
    function delInput(e, index) {
        e.preventDefault();
        setInputsValue(prev => {
            const updated = [...prev];
            updated[index] = "";  // borrar el valor del input
            return updated;
        });

        setBtnsShow(prev => {
            const updated = [...prev];
            updated[index] = false;  // ocultar el botón
            return updated;
        });
    }

    // cambiar el tipo de input (contraseña o texto)
    function changeType(e) {
        e.preventDefault();
        setInputType(inputType === "password" ? "text" : "password");
    }

    // función para enviar los datos
    function sendData(e) {
        e.preventDefault();
        let email = /^[a-zA-Z0-9.]{6,30}@gmail\.com$/;
        if (!email.test(inputsValue[0])) {
            showMsgErr("El correo no es válido.");
        } else if (inputsValue[1].length < 8) {
            showMsgErr("La contraseña debe tener al menos 8 caracteres.");
        }
    }


    // funcion  para mostrar o ocultar el mensaje de error.
    function showMsgErr(msg) {
        setMsgError(msg);
        setShowHideMsgError(true);
        setTimeout(() => setShowHideMsgError(false), 5000);
    }

    return (
        <main className="contentLogin">
            <MensajesModal mensaje={`Se ha finalizado solo el front-end y aun no es recomendable iniciar sesion o registrarse.`}/>
            <form className="contentLoginForm">
                <h1>Iniciar sesión</h1>

                {/* Correo electrónico */}
                <div 
                    className="contentLoginForm--contentInputs"
                    onClick={()=>showHideBtnsInputUser(inputsValue,setBtnsShow,0)}
                >
                    <input
                        type="email"
                        value={inputsValue[0] || ""}
                        onInput={(e) => manejarInputs(e.target.value, 0)}
                    />
                    {
                        btnsShow[0] && <button onClick={(e) => delInput(e, 0)}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    }
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <p
                        ref={(el) => (placeHolderRef.current[0] = el)}
                        className={`contentLoginForm--contentInputs--text ${inputsValue[0] ? "contentLoginForm--contentInputs--text--up" : ""}`}
                    >
                        Correo electrónico
                    </p>
                </div>

                {/* Contraseña */}
                <div 
                    className="contentLoginForm--contentInputs"
                    onClick={()=>showHideBtnsInputUser(inputsValue,setBtnsShow,1)}
                >
                    <input
                        ref={input}
                        type={inputType}
                        value={inputsValue[1] || ""}
                        onInput={(e) => manejarInputs(e.target.value, 1)}
                    />
                    {
                        btnsShow[1] && <button onClick={changeType}>
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                    }
                    <span className="iconLoginForm">
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <p
                        className={`contentLoginForm--contentInputs--text ${inputsValue[1] ? "contentLoginForm--contentInputs--text--up" : ""}`}
                        ref={(el) => (placeHolderRef.current[1] = el)}
                    >
                        Contraseña
                    </p>
                </div>

                {/* mensajes de error */}
                {showHideMsgError && <p className="contentLoginFormErr">{msgError}</p>}

                <Link className="contentLoginForm__link" href={"/user/registrarse"}>¿Aún no tienes una cuenta?</Link>

                <button
                    className="contentLoginForm__btnSend"
                    onClick={(e) => sendData(e)}
                >Iniciar sesión</button>
            </form>
        </main>
    );
}

export default Login;