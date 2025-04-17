"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Web from "@/app/catalogo/componentes/web/web";


import { useRef } from "react";

export default function AtributosGlobalesJs() {
    
    // funcion para cambiar el valor de content editable
    const parrafoEditable = useRef();
    const changeContentEditable=()=>{
        parrafoEditable.current.contentEditable = true;
        return "";
    }


    // funcion para dir
    const dirLeft = useRef();
    const dirRight = useRef();
    const changeDir=()=>{
        dirLeft.current.dir = "rtl";
        dirRight.current.dir = "ltr";
        return "";
    }


    // quitar atributo hidden
    const hiddenQuit = useRef();
    const quitarHidden=()=>{
        hiddenQuit.current.removeAttribute("hidden");
        return "";
    }


    // title 
    const titleRef = useRef();
    const changeTitle=()=>{
        titleRef.current.title = "Hola mundo";
        return "";
    }

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Atributos globales`}/>
                <Texto texto={`Los atributos globales pueden aplicarse a casi cualquier elemento HTML y nos permiten modificar su comportamiento o apariencia.
Podemos editarlos, agregarlos o quitarlos fácilmente desde JavaScript para hacer nuestras páginas más dinámicas y personalizadas.`}/>
                <Codigo lenguaje={"javascript"} codigo={`editarContenido.setAttribute("contentEditable","true"); // El usuario podra modificar un elemento HTML.
dir_1.setAttribute("dir","rtl"); // poner el texto de derecha a izquierda.
dir_2.setAttribute("dir","ltr"); // poner el texto de izquierda a derecha.
mostrar.removeAttribute("hidden"); // remueve el atributo "hidden" el cual se encarga de ocultar un elemento html.
titulo.setAttribute("title","hola mundo"); // cambia el titulo de un elemento html al pasar el cursor sobre ese elemento.`}/>
            </Resumen>
            <Titulo text={`Atributos globales`}/>
            <Texto texto={`Los atributos globales son propiedades que pueden aplicarse a cualquier elemento HTML, sin importar cuál sea.
Nos permiten modificar comportamientos y añadir información útil o estilos especiales.`}/>


            {/* Ejemplos de atributos globales: */}
            <Titulo level={2} text={`Ejemplos de atributos globales:`}/>
            <Titulo level={3} text={`contentEditable`}/>
            <Texto texto={`Permite editar el contenido directamente en la página.`}/>
            <Codigo lenguaje={"html"} codigo={`<p contentEditable="false">Haz clic y cambia este texto</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let editarContenido = document.querySelector(".editarContenido");
editarContenido.setAttribute("contentEditable", "true");`}/>
            <Consola language={"javascript"} codigo={changeContentEditable}/>
            <Web>
                <p ref={parrafoEditable} suppressContentEditableWarning={false} contentEditable={false}>Haz clic y cambia este texto</p>
            </Web>


            {/* dir */}
            <Titulo level={3} text={`dir`}/>
            <Texto texto={`Cambia la dirección del texto:`}/>
            <Codigo lenguaje={"html"} codigo={`<p dir="rtl">Texto de derecha a izquierda</p>
<p dir="ltr">Texto de izquierda a derecha</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let dir_1 = document.querySelector(".dir_1");
dir_1.setAttribute("dir", "rtl");

let dir_2 = document.querySelector(".dir_2");
dir_2.setAttribute("dir", "ltr");`}/>
            <Consola language={"javascript"} codigo={changeDir}/>
            <Web>
                <p ref={dirRight} dir="rtl">Texto de derecha a izquierda</p>
                <p ref={dirLeft} dir="ltr">Texto de izquierda a derecha</p>
            </Web>


            {/* hidden */}
            <Titulo level={2} text={`hidden`}/>
            <Texto texto={`Oculta un elemento visualmente, pero sigue estando en el HTML.`}/>
            <Codigo lenguaje={"html"} codigo={`<p hidden> Este texto está oculto </p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let mostrar = document.querySelector(".ocultar");
mostrar.removeAttribute("hidden");`}/>
            <Consola language={"javascript"} codigo={quitarHidden}/>
            <Web>
                <p ref={hiddenQuit} hidden> Este texto está oculto </p>
            </Web>



            {/* title */}
            <Titulo level={3} text={`title`}/>
            <Texto texto={`Muestra un mensaje flotante cuando pasas el mouse por encima.`}/>
            <Codigo lenguaje={"html"} codigo={`<p title="Descripción">Pasa el cursor sobre este texto</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let titulo = document.querySelector(".titulo");
titulo.setAttribute("title", "Hola mundo");`}/>
            <Consola language={"javascript"} codigo={changeTitle}/>
            <Web>
                <p ref={titleRef} title="Descripción">Pasa el cursor sobre este texto</p>
            </Web>
            <Texto texto={`Estos atributos globales se pueden usar en cualquier etiqueta HTML para hacer que:

El contenido sea editable (contentEditable)

El texto cambie de dirección (dir)

Un elemento se oculte (hidden)

Aparezca un mensaje al pasar el mouse (title)

Hay muchos más, pero estos son los más útiles en la práctica diaria como desarrollador.`}/>
        </MainCap>
    )
}