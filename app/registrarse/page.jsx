"use client";
import "@/app/registrarse/registrarse.css";
import { faCheck, faEnvelope, faLock, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useRef, useDebugValue } from "react";

export default function Registrarse() {
    // Estado de los inputs
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [btnClose, setBtnClose] = useState([false, false, false, false]);
    const labelsRef = useRef([]); // Referencias de los textos indicativos
    const [showErr, setShowErr] = useState([false,false,false,false]);
    const [msgError, setMsgError] = useState("asd"); // mensajes de error
    const [indexInput, setIndexInput] = useState(0); // indices del input que se hace click.

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
        for (let i = 0; i < inputs.length; i++) {
            setShowErr((err)=>{
                const update = [...err];
                update[i] = false;
                return update
            })
            setBtnClose((prev) => {
                const updated = [...prev];
                updated[i] = false;
                return updated;
            });
            if (inputs[i] == "") {
                setMsgError("LLena el espacio.")
                setShowErr((err)=>{
                    const update = [...err];
                    update[i] = true;
                    return update
                })
                break;
            }
        }

    }

    // Generar dinámicamente los inputs
    const inputFields = [
        { placeholder: "Nombre de usuario", icon: faUser, type: "text" },
        { placeholder: "Email", icon: faEnvelope, type: "text" },
        { placeholder: "Contraseña", icon: faLock, type: "password" },
        { placeholder: "Confirmar contraseña", icon: faCheck, type: "password" },
    ];

    return (
        <main className="contentRegister">
            <form className="contentRegister__form">
                <h1 className="contentRegister__form--h1">Registrarse</h1>
                {inputFields.map((field, index) => (
                    <div key={index}>
                        <div
                            className="contentRegister__form--contentInput"
                            onClick={() => {
                                labelsRef.current[index].classList.add("contentRegister__form--contentInput__p--up")
                                setIndexInput(index)
                            }}
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
                            {btnClose[index] && (
                                <button
                                    className="contentRegister__form--contentInput__btnDel"
                                    onClick={(e) => delInput(e, index)}
                                >
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            )}
                        </div>
                        {showErr[index] && (<p
                            className="contentRegister__form--contentInputErr">{msgError}</p>)}
                    </div>

                ))}
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
