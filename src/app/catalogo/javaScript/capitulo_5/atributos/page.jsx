"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Web from "@/app/catalogo/componentes/web/web";


import { useRef } from "react";

export default function AtributosJs() {
    const input1 = useRef();
    const changeAttribute=()=>{
        input1.current.setAttribute("type","color")
        return "";
    }


    return (
        <MainCap>
            <Resumen>
                <Titulo text={`atributos`}/>
                <Texto texto={`Con estos métodos podemos leer, modificar o eliminar atributos de cualquier elemento HTML.
Son súper útiles para hacer páginas interactivas y personalizadas al momento.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const input = document.getElementById("input");
input.setAttribute("type","color"); // cambia el atributo de algun elemento.
input.getAttribute("type"); // true | verifica si un atributo existe en algun elemento html.
input.removeAttribute("type"); // remueve/elimina el atributo de algun elemento html.`}/>
            </Resumen>

            <Titulo text={`atributos`}/>
            <Texto texto={`Manipular atributos nos sirve especialmente en los inputs, ya que suelen tener varios atributos como type, placeholder, required, etc.
Sin embargo, podemos modificar atributos de cualquier elemento: imágenes, audio, párrafos, botones y más.`}/>
            <Codigo isSyntax={true} lenguaje={"javascript"} codigo={"elemento.tipoDeCambio(\"parámetros\");"}/>
 

            <Titulo level={2} text={`setAttribute()`}/>
            <Texto texto={`Permite modificar o agregar un atributo a un elemento.`}/>
            <Codigo lenguaje={"html"} codigo={`<input class="color" type="text">`}/>
            <Codigo lenguaje={"javascript"} codigo={`let a = document.querySelector(".color");
a.setAttribute("type", "color");`}/>
            <Texto texto={`Cambia el tipo del input de texto a selector de color (type="color").`}/>
            <Consola language={"javascript"} codigo={changeAttribute}/>
            <Web>
                <input ref={input1} type="text" />
            </Web>


            <Titulo level={2} text={`getAttribute()`}/>
            <Texto texto={`Permite acceder al valor de un atributo.`}/>
            <Codigo lenguaje={"html"} codigo={`<input class="acceder" type="text">`}/>
            <Codigo lenguaje={"javascript"} codigo={`let a = document.querySelector(".acceder");
console.log(a.getAttribute("type"));`}/>
            <Web>
                <input type="text" />
            </Web>
            <Consola language={"javascript"} result={`text`}/>
            <Texto texto={`Devuelve el valor del atributo (text).
✔️ Si el atributo existe, devuelve su valor.
❌ Si no existe, devuelve null.`}/>


            <Titulo level={2} text={`removeAttribute()`}/>
            <Texto texto={`Permite eliminar un atributo de un elemento.`}/>
            <Codigo lenguaje={"html"} codigo={`<input class="remover" type="text">`}/>
            <Codigo lenguaje={"javascript"} codigo={`let a = document.querySelector(".remover");
a.removeAttribute("type");`}/>
           <Texto texto={`El input ya no tendrá el atributo type.`}/>
        </MainCap>
    )
}