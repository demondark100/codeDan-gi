"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

import { useRef } from "react";

export default function GetAndUpdateContentJs() {
    
    const inputName = useRef();
    const giveNameInput =()=>{
        inputName.current.textContent = "Mitsuri";
        return "";
    }


    return (
        <MainCap>
            <Resumen>
                <Titulo text={`obtencion y modificacion de contenido`}/>
                <Texto texto={`Con estas propiedades podemos ver y modificar el contenido de cualquier elemento HTML desde JavaScript. Dependiendo de lo que necesitemos (solo texto, HTML interno o el elemento completo), usaremos textContent, innerHTML u outerHTML.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const content = document.querySelector(".content");
content.textContent; // obtiene el contenido de un elemento html.
content.textContent = "hola"; // modifica el contenido de un elemento html.
content.innerHTML; // hola <b>mundo</b> | muestra el contenido y las etiquetas que estan dentro de un contenedor.
content.innerHTML = \`hola <i>mundo</i>\`; // modifica el contenido y los elementos html dentro de un contenedor.
content.outerHTML; // muestra el contenedor y todo su contenido.`}/>
            </Resumen>
            <Titulo text={`obtencion y modificacion de contenido`}/>
            <Texto texto={`Con estas propiedades podemos ver o modificar el contenido de los elementos HTML desde JavaScript.`}/>

            <Titulo level={2} text={`textContent`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="contenidoTexto"> 
    hola  <b> mundo </b>
</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const contenidoTexto = document.querySelector(".contenidoTexto");
contenidoTexto.textContent;`}/>
            <Texto texto={`textContent devuelve solo el texto del elemento, sin etiquetas HTML.`}/>
            <Consola language={"javascript"} result={`holamundo`}/>
            <Web>
                <p> 
                    hola  <b> mundo </b>
                </p>
            </Web>


            <Titulo level={2} text={`Modificar contenido`}/>
            <Codigo lenguaje={"html"} codigo={`<p>hola: <b class="nombre"></b></p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const nombre = document.querySelector(".nombre");
nombre.textContent = "Mitsuri";`}/>
            <Texto texto={`También puedes asignar un nuevo valor de texto al contenido usando textContent.`}/>
            <Consola language={"javascript"} codigo={giveNameInput}/>
            <Web>
                <p ref={inputName}></p>
            </Web>
            <Titulo level={2} text={`innerHTML`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="HTMLin"> 
    hola  <b> mundo </b> 
</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const htmlin = document.querySelector(".HTMLin"); 
console.log(htmlin.innerHTML);`}/>
            <Texto texto={`innerHTML devuelve el contenido HTML interno, incluyendo etiquetas.`}/>
            <Consola language={"javascript"} result={`hola <b> mundo </b>`}/>
            

            <Titulo level={2} text={`outerHTML`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="todo"> 
    hola  <b> mundo </b> 
</p> `}/>
            <Codigo lenguaje={"javascript"} codigo={`const todo = document.querySelector(".todo"); 
console.log(todo.outerHTML);`}/>
            <Consola language={"javascript"} result={`<p class="todo"> hola <b> mundo </b> </p>`}/>
            <Texto texto={`outerHTML devuelve todo el elemento, incluyendo su etiqueta y contenido.`}/>
        </MainCap>
    )
}