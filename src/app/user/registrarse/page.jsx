"use client";
import "./registrarse.css";
import { faCheck, faEnvelope, faEye, faEyeLowVision, faLock, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useRef, useDebugValue } from "react";


// validar seguridad de contraseña.
import zxcvbn from 'zxcvbn';


// funcion para mostrar el boton cuando es necesario
import { showHideBtnsInputUser } from "../componentesUser/moverPlaceholder";
import MensajesModal from "@/componentes/mensajesModal/mensaje";


export default function Registrarse() {
    // Estado de los inputs
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [btnsInput, setBtnsInput] = useState([false, false, false, false]); // botones de cada campo.
    const inputsRef = useRef([]); // inputs
    const [btnPasswordIcon, setBtnPasswordIcon] = useState([false,false]); // iconos del boton de password.
    const labelsRef = useRef([]); // Referencias de los textos indicativos.
    const [showErr, setShowErr] = useState(false); // mostrar o ocultar error.
    const [msgError, setMsgError] = useState("asd"); // mensajes de error.

    const [inputsType, setInputsType] = useState(["password","password"]);

    // Función para manejar cambios en los inputs
    function manejarInputs(index, value) {
        setInputs((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });

        value == ""?
            setBtnsInput((prev) => {
                const updated = [...prev];
                updated[index] = false;
                return updated;
            }):
            setBtnsInput((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
            });
    }


    // Función para restablecer un input
    function delInput(e, index) {
        e.preventDefault();
        e.stopPropagation();
        setBtnsInput(btn=>{
            const update = [...btn];
            update[index] = false;
            return update;
        })

        setInputs((input)=>{
            const update = [...input];
            update[index] = "";
            return update;
        })
    }

    // funcion para mostrar o ocultar el contenido de contraseñas.
    function showPassword(e,indexPassword) {
        e.preventDefault();
        setBtnPasswordIcon(btn=>{
            const update = [...btn];
            update[indexPassword] = !update[indexPassword];
            return update;
        })
        if (inputsType[indexPassword] === "password") {
            inputsType[indexPassword] = "text";
        } else {
            inputsType[indexPassword] = "password";
        }
    }


    // enviar datos 
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

    // funcion para mostrar o ocultar los mensajes de error.
    function showHideError(msg) {
        setShowErr(true);
        setMsgError(msg);
        setTimeout(() => {
            setShowErr(false);
        }, 5000);
    }

    return (
        <main className="contentRegister">
            <MensajesModal mensaje={`Se ha finalizado solo el front-end y aun no es recomendable iniciar sesion o registrarse.`}/>
            <form className="contentRegister__form">
                <h1 className="contentRegister__form--h1">Registrarse</h1>

                {/* nombre de usuario */}
                <div
                    className="contentRegister__form--contentInput"
                    onClick={() =>showHideBtnsInputUser(inputs,setBtnsInput,0)}
                >
                    <p
                        ref={(el) => (labelsRef.current[0] = el)}
                        className={`contentRegister__form--contentInput__p ${
                            inputs[0] ? "contentRegister__form--contentInput__p--up" : ""
                        }`}
                    >
                        Nombre de usuario
                    </p>
                    <span className="iconRegistenForm">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                        className="contentRegister__form--contentInput__input"
                        type={"text"}
                        value={inputs[0]}
                        onChange={(e) => manejarInputs(0, e.target.value)}
                    />
                    {/* renderizar botones para borrar todo el contenido de un campo */}
                    {
                        btnsInput[0] && (
                            <button
                                className="contentRegister__form--contentInput__btnDel"
                                onClick={(e) => delInput(e, 0)}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        )
                    }
                </div>

                {/* correo electronico */}
                <div
                    className="contentRegister__form--contentInput"
                    onClick={() => showHideBtnsInputUser(inputs,setBtnsInput,1)}
                >
                    <p
                        ref={(el) => (labelsRef.current[1] = el)}
                        className={`contentRegister__form--contentInput__p ${
                            inputs[1] ? "contentRegister__form--contentInput__p--up" : ""
                        }`}
                    >
                        Correo electronico
                    </p>
                    <span className="iconRegistenForm">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                        className="contentRegister__form--contentInput__input"
                        type={"text"}
                        value={inputs[1]}
                        onChange={(e) => manejarInputs(1, e.target.value)}
                    />
                    {/* renderizar botones para borrar todo el contenido de un campo */}
                    {
                        btnsInput[1] && (
                            <button
                                className="contentRegister__form--contentInput__btnDel"
                                onClick={(e) => delInput(e, 1)}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        )
                    }
                </div>

                {/* contraseña */}
                <div
                    className="contentRegister__form--contentInput"
                    onClick={() => showHideBtnsInputUser(inputs,setBtnsInput,2)}
                >
                    <p
                        ref={(el) => (labelsRef.current[2] = el)}
                        className={`contentRegister__form--contentInput__p ${
                            inputs[2] ? "contentRegister__form--contentInput__p--up" : ""
                        }`}
                    >
                        Contraseña
                    </p>
                    <span className="iconRegistenForm">
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                        ref={(el)=>(labelsRef.current[2] = el)}
                        className="contentRegister__form--contentInput__input"
                        type={inputsType[0]}
                        value={inputs[2]}
                        onChange={(e) => manejarInputs(2, e.target.value)}
                    />
                    {/* renderizar botones para borrar todo el contenido de un campo */}
                    {
                        btnsInput[2] && (
                            <button
                                className="contentRegister__form--contentInput__btnDel"
                                onClick={(e) => showPassword(e, 0)}
                            >
                                {
                                    btnPasswordIcon[0] ? 
                                        <FontAwesomeIcon icon={faEye} />:
                                        <FontAwesomeIcon icon={faEyeLowVision} />
                                }
                            </button>
                        )
                    }
                </div>

                {/* confirmar contraseña */}
                <div
                    className="contentRegister__form--contentInput"
                    onClick={() => showHideBtnsInputUser(inputs,setBtnsInput,3)}
                >
                    <p
                        ref={(el) => (labelsRef.current[3] = el)}
                        className={`contentRegister__form--contentInput__p ${
                            inputs[3] ? "contentRegister__form--contentInput__p--up" : ""
                        }`}
                    >
                        Confirmar contraseña
                    </p>
                    <span className="iconRegistenForm">
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <input
                        ref={(el)=>(labelsRef.current[3] = el)}
                        className="contentRegister__form--contentInput__input"
                        type={inputsType[1]}
                        value={inputs[3]}
                        onChange={(e) => manejarInputs(3, e.target.value)}
                    />
                    {/* renderizar botones para borrar todo el contenido de un campo */}
                    {
                        btnsInput[3] && (
                            <button
                                className="contentRegister__form--contentInput__btnDel"
                                onClick={(e) => showPassword(e, 1)}
                            >
                                {
                                    btnPasswordIcon[1] ? 
                                        <FontAwesomeIcon icon={faEye} />:
                                        <FontAwesomeIcon icon={faEyeLowVision} />
                                }
                            </button>
                        )
                    }
                </div>

                {/* mensaje de error */}
                {
                    showErr && <p
                        className="contentRegister__form--contentInputErr"
                    >
                        {msgError}
                    </p>
                }

                <div className="contentRegister__form--contentLink">
                    <Link href={"/user/login"}>¿Ya tienes una cuenta?</Link>
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