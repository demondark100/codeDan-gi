"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Web from "@/app/catalogo/componentes/web/web";
import { useRef } from "react";



export default function AtributosInputJs() {

    // poner placeholder
    const inputPlaceholder = useRef();
    const putPlaceholder=()=>{
        inputPlaceholder.current.placeholder = "Nombre";
        return "";
    }

    // cambiar el type de un input 
    const inputType = useRef();
    const changeType=()=>{
        inputType.current.type = "password";
        return "";
    }

    // poner un valor
    const inputValue = useRef();
    const changeValue=()=>{
        inputValue.current.value = "Music";
        return "";
    }

    // cambiar background
    const inputBg = useRef();
    const changeBg=()=>{
        inputBg.current.style.backgroundColor = "#0f0";
        return "";
    }


    // funcion para cambiar bg de forma interactiva
    const parrafoBgIn = useRef();
    const changeBgParrafoIn=()=>{

        const fondo = prompt(`Escoge un color de fondo:
        1. Rojo
        2. Verde
        3. Azul`);

        if (fondo == 1) {
            parrafoBgIn.current.style.backgroundColor = "#f00";
        } else if (fondo == 2) {
            parrafoBgIn.current.style.backgroundColor = "#0f0";
        } else if (fondo == 3) {
            parrafoBgIn.current.style.backgroundColor = "#00f";
        } else {
            alert("Solo te di tres opciones.");
        }
        return "";    
    }

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Atributos de input`}/>
                <Texto texto={`Podemos modificar inputs de forma directa usando sus propiedades como si fueran objetos. También podemos aplicar estilos con .style, lo que nos permite personalizar visualmente nuestros elementos HTML desde JavaScript.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const input = document.getElementById("input");
input.placeholder = "nombre"; // modifica el placeholder de un input.
input.type = "password"; // modifica el tipo de dato que recibira el input.
input.value = "Music"; // modifica o asigna un valor por defecto al input.

// este es un atributo global, se puede usar en todos los elementos html.

input.style.backgroundColor = "#000"; // asigna un fondo negro a un input.
input.style.color = "#fff"; // asigna un color al input`}/>
            </Resumen>
            <Titulo text={`Atributos de input`}/>
            <Texto texto={`Los inputs tienen atributos especiales que podemos modificar directamente como si fueran propiedades de un objeto, sin necesidad de usar .setAttribute().`}/>
            <Codigo isSyntax={true} lenguaje={"javascript"} codigo={`variable.atributo = "valor";`}/>


            {/* placeholder */}
            <Titulo level={2} text={`placeholder`}/>
            <Texto texto={`Muestra un texto indicativo dentro del input, útil como guía para el usuario.`}/>
            <Codigo lenguaje={"html"} codigo={`<input class="textoPlace" type="text">`}/>
            <Codigo lenguaje={"javascript"} codigo={`const textoPlace = document.querySelector(".textoPlace"); 
textoPlace.placeholder = "Nombre";`}/>
            <Consola language={"javascript"} codigo={putPlaceholder}/>
            <Web>
                <input ref={inputPlaceholder} type="text" />
            </Web>


            {/* type */}
            <Titulo level={2} text={`type`}/>
            <Texto texto={`Cambia el tipo de input (por ejemplo: text, password, email, etc.).`}/>
            <Codigo lenguaje={"javascript"} codigo={`<input class="tipo" type="text">`}/>
            <Codigo lenguaje={"javascript"} codigo={`const tipo = document.querySelector(".tipo"); 
tipo.type = "password";`}/>
            <Consola languagee={"javascript"} codigo={changeType}/>
            <Web>
                <input ref={inputType} type="text" />
            </Web>


            {/* value */}
            <Titulo level={2} text={`value`}/>
            <Texto texto={`Establece el valor por defecto del input.`}/>
            <Codigo lenguaje={"html"} codigo={`<input class="valor" type="text">`}/>
            <Codigo lenguaje={"javascript"} codigo={`const valor = document.querySelector(".valor"); 
valor.value = "Music";`}/>
            <Consola language={"javascript"} codigo={changeValue}/>
            <Web>
                <input type="text" ref={inputValue }/>
            </Web>


            <Titulo level={2} text={`style`}/>
            <Texto texto={`Este atributo sirve para aplicar estilos directamente desde JavaScript como si estuviéramos escribiendo CSS.`}/>
            <Codigo isSyntax={true} lenguaje={"javascript"} codigo={`elemento.style.propiedadCSS = "valor";`}/>
            <Texto texto={`Recuerda: en JavaScript, las propiedades CSS que llevan guion (-) se escriben en camelCase:

background-color → backgroundColor

font-size → fontSize`}/>
            <Codigo lenguaje={"javascript"} codigo={`<p id="colorLetra">Fondo</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const colorLetra = document.getElementById("colorLetra");
colorLetra.style.backgroundColor = "#0f0"; // Color verde`}/>
            <Consola language={"javascript"} codigo={changeBg}/>
            <Web>
                <p ref={inputBg}>Fondo</p>
            </Web>


            <Titulo level={2} text={`Ejercicio interactivo: cambia el fondo`}/>
            <Codigo lenguaje={"html"} codigo={`<p id="colorStyle">Cambio de fondo</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const colorStyle = document.getElementById("colorStyle");

const fondo = prompt(\`Escoge un color de fondo:
1. Rojo
2. Verde
3. Azul\`);

if (fondo == 1) {
  colorStyle.style.backgroundColor = "#f00";
} else if (fondo == 2) {
  colorStyle.style.backgroundColor = "#0f0";
} else if (fondo == 3) {
  colorStyle.style.backgroundColor = "#00f";
} else {
  alert("Solo te di tres opciones.");
}`}/>
            <Consola language={"javascript"} codigo={changeBgParrafoIn}/>
            <Web>
                <p ref={parrafoBgIn}>Cambio de fondo</p>                             
            </Web>

            
        </MainCap>
    )
}