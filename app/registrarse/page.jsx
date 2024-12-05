"use client";
import "@/app/registrarse/registrarse.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Registrarse(){
    const [inputs, setInputs] = useState([]);
    // seleccionar todos los textos indicativos.
    const texto = useRef([]);

    // funcion para mover el texto indicativo
    function moveText(move,index) {
        let parrafo = texto.current[index];
        if(move == "up"){
            texto.current.forEach((i,indexText) => {
                if (!inputs[indexText]) {
                    i.classList.remove("contentRegister__form--contentInput__p--up");
                }
            });
            parrafo.classList.add("contentRegister__form--contentInput__p--up");
        } else {
            parrafo.classList.remove("contentRegister__form--contentInput__p--up");
        }
    }

    // funcion para controlar los inputs.
    function manejarInputs(index,value){
        let parrafo = texto.current[index];
        setInputs(input=>{
            const update = [...input];
            update[index] = value;
            return update;
        })

        value === "" ?
            moveText("down",index):
            moveText("up",index)
    }

    return (
        <main className="contentRegister">
            <form className="contentRegister__form">
                <h1 className="contentRegister__form--h1">Registrarse</h1>
                <div 
                    onClick={()=>moveText("up",0)}
                    className="contentRegister__form--contentInput"
                >
                    <p 
                        ref={(el)=>texto.current[0] = el}
                        className="contentRegister__form--contentInput__p"
                    >
                        Nombre de usuario
                    </p>

                    <input 
                        className="contentRegister__form--contentInput__input" 
                        type="text"
                        onChange={(e)=>manejarInputs(0,e.target.value)}
                    />

                    <button
                        className="contentRegister__form--contentInput__btnDel"
                    >
                        <FontAwesomeIcon icon={faX}/>
                    </button>
                </div>

                <div 
                    onClick={()=>moveText("up",1)}
                    className="contentRegister__form--contentInput"
                >
                    <p 
                        ref={(el)=>texto.current[1] = el}
                        className="contentRegister__form--contentInput__p"
                    >
                        Email
                    </p>
                    <input 
                        className="contentRegister__form--contentInput__input" 
                        type="text" 
                        onChange={(e)=>manejarInputs(1,e.target.value)}
                    />

                    <button
                        className="contentRegister__form--contentInput__btnDel"
                    >
                        <FontAwesomeIcon icon={faX}/>
                    </button>
                </div>

                <div 
                    onClick={()=>moveText("up",2)}
                    className="contentRegister__form--contentInput"
                >
                    <p 
                        ref={(el)=>texto.current[2] = el}
                        className="contentRegister__form--contentInput__p"
                    >
                        Contraseña
                    </p>
                    <input 
                        className="contentRegister__form--contentInput__input" 
                        type="text" 
                        onChange={(e)=>manejarInputs(2,e.target.value)}
                    />

                    <button
                        className="contentRegister__form--contentInput__btnDel"
                    >
                        <FontAwesomeIcon icon={faX}/>
                    </button>
                </div>
                
                <div 
                    onClick={()=>moveText("up",3)}
                    className="contentRegister__form--contentInput"
                >
                    <p 
                        ref={(el)=>texto.current[3] = el}
                        className="contentRegister__form--contentInput__p"
                    >
                        Confirmar contraseña
                    </p>
                    <input 
                        className="contentRegister__form--contentInput__input" 
                        type="text" 
                        onChange={(e)=>manejarInputs(3,e.target.value)}
                    />
                    <button
                        className="contentRegister__form--contentInput__btnDel"
                    >
                        <FontAwesomeIcon icon={faX}/>
                    </button>
                </div>

                <div className="contentRegister__form--contentLink">
                    <Link href={"/"}>¿Ya tienes una cuenta?</Link>
                </div>

                <button className="contentRegister__form--btnRegister">Crear cuenta</button>
            </form>
        </main>
    )
}