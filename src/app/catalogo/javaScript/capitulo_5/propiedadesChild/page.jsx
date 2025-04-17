"use client";
import { useState } from "react";

import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function PropiedadesChildJs(){

    const [text1,setText1] = useState("hola mundo");
    const changeText1 = () => {
        setText1("adios mundo");
        return "";
    }

    const [showText2,setShowText2] = useState(true);
    const changeShowText2 = () => {
        setShowText2(false);
        return "";
    }

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Propiedades de Childs`}/>
                <Texto texto={`Con estas propiedades puedes:`}/>
                <Codigo lenguaje={"javascript"} codigo={`content.replaceChild(nuevoElemento, antiguoElemento); // Reemplaza hijos
content.removeChild(elemento); // Elimina hijos
content.hasChildNodes(); // Verifica si hay hijos`}/>
            </Resumen>
            
            <Titulo text={`Propiedades de Childs`}/>
            <Texto texto={`Con estas propiedades podemos reemplazar, eliminar o comprobar la existencia de elementos hijos dentro de un contenedor HTML.`}/>
            
            {/* replaceChild */}
            <Titulo level={2} text={`replaceChild`}/>
            <Texto texto={`Reemplaza un hijo por otro dentro de un contenedor.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <p class="p">hola mundo</p>
</div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const content = document.querySelector(".content");
const p = document.querySelector(".p");

const parrafo_nuevo = document.createElement("p");
parrafo_nuevo.textContent = "adios mundo";

content.replaceChild(parrafo_nuevo, p);`}/>
            <Consola language={"javascript"} codigo={changeText1}/>
            <Web>
                <p>{text1}</p>
            </Web>
            <Texto texto={`Explicación: Reemplazamos el <p> con otro <p> que contiene nuevo contenido.`}/>


            <Titulo level={2} text={`removeChild`}/>
            <Texto texto={`Elimina un hijo específico de un contenedor.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <p class="parrafo">hola mundo</p>
</div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const content = document.querySelector(".content");
const parrafo = document.querySelector(".parrafo");

content.removeChild(parrafo);`}/>
            <Consola language={"javascript"} codigo={changeShowText2}/>
            <Web>
                {showText2 && <p>hola mundo</p>}
            </Web>
            <Texto texto={`Explicación: Elimina el elemento <p class="parrafo">.`}/>


            {/* hasChildNodes */}
            <Titulo level={2} text={`hasChildNodes`}/>
            <Texto texto={`Verifica si un elemento tiene hijos.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <p class="parrafo"></p>
</div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const content = document.querySelector(".content");

console.log(content.hasChildNodes());`}/>
            <Consola language={"javascript"} result={`true`} colorResult="#00f"/>
            <Texto texto={`Explicación: Devuelve true si tiene al menos un nodo hijo, false si no.`}/>
        </MainCap>
    )
}