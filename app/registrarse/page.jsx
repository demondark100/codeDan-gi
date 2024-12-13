"use client";
import "@/app/registrarse/registrarse.css";
import { faCheck, faEnvelope, faEye, faEyeLowVision, faLock, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useRef, useDebugValue } from "react";


// validar seguridad de contraseña.
import zxcvbn from 'zxcvbn';

export default function Registrarse() {
    // Estado de los inputs
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [btnClose, setBtnClose] = useState([false, false]); // botones para eliminar el contenido de algun campo.
    const [btnEye, setBtnEye] = useState([false,false]); // boton para mostrar o ocultar la contraseña
    const [btnPasswordIcon, setBtnPasswordIcon] = useState([false,false]); // iconos del boton de password.
    const labelsRef = useRef([]); // Referencias de los textos indicativos.
    const [showErr, setShowErr] = useState(false); // mostrar o ocultar error.
    const [msgError, setMsgError] = useState("asd"); // mensajes de error.


    // Función para manejar cambios en los inputs
    function manejarInputs(index, value) {
        setInputs((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });

        setBtnClose((prev) => {
            const updated = [...prev];
            updated[index] = value !== "";
            return updated;
        });


    }

    // Función para restablecer un input
    function delInput(e, index) {
        e.preventDefault();
        manejarInputs(index, "");
    }


    function sendData(e) {
        e.preventDefault();
        let email = /^[a-zA-Z0-9.]{6,30}@gmail\.com$/;
        const password = zxcvbn(inputs[2] || inputs[3]);
        if (inputs[0].length < 5){showHideError(`El nombre debe tener al menos 5 caracteres.`)}
        else if(!email.test(inputs[1])){showHideError(`El correo es invalido.`)}
        else if(inputs[2].length < 8 || inputs[3].length < 8){showHideError("La contraseña debe tener al menos 8 caracteres.")}
        else if(inputs[2] != inputs[3]){showHideError("La segunda contraseña debe ser igual a la primera.")}
        else if(password.score != 4){showHideError("Tu contraseña es demasiado insegura.")}
    }

    function showHideError(msg) {
        setShowErr(true);
        setMsgError(msg);
        setTimeout(() => {
            setShowErr(false);
        }, 5000);
    }

    // Generar dinámicamente los inputs
    const inputFields = [
        { placeholder: "Nombre de usuario", icon: faUser, type: "text" },
        { placeholder: "Email", icon: faEnvelope, type: "text" },
        { placeholder: "Contraseña", icon: faLock, type: "password" },
        { placeholder: "Confirmar contraseña", icon: faCheck, type: "password" }
    ];

    return (
        <main className="contentRegister">
            <form className="contentRegister__form">
                <h1 className="contentRegister__form--h1">Registrarse</h1>
                {inputFields.map((field, index) => (      
                    <div
                        className="contentRegister__form--contentInput"
                        onClick={() => {
                            labelsRef.current[index].classList.add("contentRegister__form--contentInput__p--up")
                        }}
                        key={index}
                    >
                        <p
                            ref={(el) => (labelsRef.current[index] = el)}
                            className={`contentRegister__form--contentInput__p ${
                                inputs[index] ? "contentRegister__form--contentInput__p--up" : ""
                            }`}
                        >
                            {field.placeholder}
                        </p>
                        <span className="iconRegistenForm">
                            <FontAwesomeIcon icon={field.icon} />
                        </span>
                        <input
                            className="contentRegister__form--contentInput__input"
                            type={field.type}
                            value={inputs[index]}
                            onChange={(e) => manejarInputs(index, e.target.value)}
                        />
                        {/* renderizar botones para borrar todo el contenido de un campo */}
                        {
                            btnClose[index] && (
                                <button
                                    className="contentRegister__form--contentInput__btnDel"
                                    onClick={(e) => delInput(e, index)}
                                >
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            )
                        }
                    </div>
                ))}
                {/* mensaje de error */}
                {
                    showErr && <p
                        className="contentRegister__form--contentInputErr"
                    >
                        {msgError}
                    </p>
                }

                <div className="contentRegister__form--contentLink">
                    <Link href={"/"}>¿Ya tienes una cuenta?</Link>
                </div>
                <button 
                    type="submit" 
                    className="contentRegister__form--btnRegister"
                    onClick={sendData}
                >
                    Crear cuenta
                </button>
            </form>
        </main>
    );
}