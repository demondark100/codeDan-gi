"use client";
import "@/app/login/login.css";
import { faEnvelope, faEye, faLock, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// importaciones de react
import React, { useState, useRef } from 'react';


function Login() {

    // contenedor del input de contraseña.
    const input = useRef(null);

    // inputs
    const [inputsValue, setInputsValue] = useState([]);

    const [btnsShow, setBtnsShow] = useState([]);

    // obtener valores de inputs
    function manejarInputs(value,index) {
        setInputsValue(input=>{
            const update = [...input];
            update[index] = value;
            return update;
        });
        value == "" ? 
            setBtnsShow(btn=>{
                const update = [...btn];
                update[index] = false;
                return update
            })
            :
            setBtnsShow(btn=>{
                const update = [...btn];
                update[index] = true;
                return update
            })
    }

    // funcion para eliminar un input.
    function delInput(e) {
        e.preventDefault();
        setInputsValue(input=>{
            const update = [...input];
            update[0] = "";
            return update;
        })
        setBtnsShow(btn=>{
            const update = [...btn];
            update[0] = false;
            return update
        })
    }


    function changeType(e) {
        e.preventDefault();
        console.log(inputsValue)
    }



    return (  
        <main className="contentLogin">
            <form className="contentLoginForm">
                <h1>Iniciar sesion</h1>
                <div className="contentLoginForm--contentInputs">
                    <input 
                        type="email"
                        value={inputsValue[0] || ""}
                        onInput={(e)=>manejarInputs(e.target.value,0)}
                    />
                    {
                        btnsShow[0] && <button onClick={(e)=>delInput(e)}>
                            <FontAwesomeIcon icon={faX}/>
                        </button>
                    }
                    <span>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                </div>
                <div className="contentLoginForm--contentInputs">
                    <input 
                        ref={input} 
                        type="password"
                        value={inputsValue[1] || ""}
                        onInput={(e)=>manejarInputs(e.target.value,1)}
                    />
                    {
                        btnsShow[1] && <button onClick={changeType}>
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    }
                    <span>
                        <FontAwesomeIcon icon={faLock}/>
                    </span>
                </div>
            </form>
        </main>
    );
}

export default Login;