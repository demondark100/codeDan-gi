"use client";
import { useState } from "react";

import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

export default function getChildJs() {
    const [showParrafo, setShowParrafo] = useState(false);
    const mostrarParrafo = () => {
        setShowParrafo(true);
        return "";
    }

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Obtención de elementos hijos (childs)`}/>
                <Texto texto={`Con esto podemos modificar y agregar elementos hijos de forma dinámica a un contenedor.`}/>
                <Codigo lenguaje={"javascript"} codigo={`content.appendChild(elemento);      // Agrega un elemento hijo al contenedor.
content.firstElementChild;          // Obtiene el primer hijo del contenedor.
content.lastElementChild;           // Obtiene el último hijo del contenedor.
content.children[1];                // Devuelve el hijo en la posición indicada (como un array).`}/>
                <Texto texto={`Estas herramientas son muy útiles para agregar elementos al DOM dinámicamente.`}/>


                <Titulo level={2} text={`Ejemplo práctico`}/>
                <Codigo lenguaje={"html"} codigo={`<div class="contenedor"></div>`}/>
                <Codigo lenguaje={"javascript"} codigo={`const content = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();
const parrafo = document.createElement("P");

parrafo.textContent = "hola mundo";
fragmento.appendChild(parrafo);
content.appendChild(fragmento);`}/>
            </Resumen>
            <Titulo text={`Obtención de elementos hijos (childs)`}/>

            {/* appendChild() */}
            <Titulo level={2} text={`appendChild()`}/>
            <Codigo isSyntax={true} lenguaje={"javascript"} codigo={`variable.appendChild(elementoHijo);`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenedor"></div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const contenedor = document.querySelector(".contenedor");
let parrafo = document.createElement("P");
let fragmento = document.createDocumentFragment();

parrafo.textContent = "hola mundo";
fragmento.appendChild(parrafo);
contenedor.appendChild(fragmento);`}/>
            <Consola language={"javascript"} codigo={mostrarParrafo}/>
            <Web>
                {showParrafo && <p>hola mundo</p>}
            </Web>
            <Texto texto={`appendChild() permite insertar un nodo como hijo de otro nodo.
En este ejemplo:

Creamos un div padre con clase "contenedor".

Creamos un párrafo (<p>) desde JavaScript.

Creamos un fragmento de documento con createDocumentFragment() para mejorar el rendimiento.

Le añadimos contenido al párrafo.

Agregamos el párrafo al fragmento.

Finalmente, agregamos el fragmento al contenedor, insertando el párrafo en el DOM.`}/>


            {/* firstElementChild y lastElementChild */}
            <Titulo level={2} text={`firstElementChild y lastElementChild`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="a_content"> 
    <p>algo 1</p>
    <p>algo 2</p>
    <p>algo 3</p>
</div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const a_content = document.querySelector(".a_content");

let primero = a_content.firstElementChild;
let ultimo = a_content.lastElementChild;

console.log(primero, ultimo);`}/>
            <Consola language={"javascript"} result={`<p>algo 1</p>
<p>algo 3</p>`}/>
            <Texto texto={`Estas propiedades nos permiten obtener el primer y último hijo de un contenedor.`}/>


            {/* children[] */}
            <Titulo level={2} text={`children[]`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="a_content">
    <p>algo 1</p>
    <p>algo 2</p>
    <p>algo 3</p>
</div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const a_content = document.querySelector(".a_content");

let segundo = a_content.children[1];

console.log(segundo);`}/>
            <Consola language={"javascript"} result={`<p>algo 2</p>`}/>
            <Texto texto={`children es una colección que actúa como un array con todos los hijos elementos de un nodo padre (ignora espacios vacíos y nodos de texto). Puedes acceder a ellos con un índice, empezando desde 0.`}/>
        </MainCap>
    )
}