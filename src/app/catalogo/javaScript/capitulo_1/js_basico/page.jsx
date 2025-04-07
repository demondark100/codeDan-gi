"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

export default function BasicoJs() {
    return (
        <MainCap>
            
            <Resumen>
                <Titulo text={`javaScript basico`}/>
                <Texto texto={`Ahora veremos conceptos básicos de JavaScript, como comentar código y visualizar los resultados de nuestro codigo.`}/>
                <Codigo lenguaje={"javascript"} codigo={`// comentamos lineas con "//" , esto ignorara esa linea de codigo
/*
    comentar codigo 
    en varias lineas
*/
alert("hola mundo"); // mostrar algo en una ventana del navegador.
console.log("hola mundo"); // mostrar algo en la consola del navegador.`}/>
            </Resumen>

            <Titulo text={`javaScript basico`}/>
            <Titulo level={2} text={`Comentar codigo`}/>
            <Texto texto={`Los comentarios en el código permiten escribir notas sin que el lenguaje las interprete. Se usan para documentar o desactivar partes del código.`}/>
            <Codigo lenguaje={"javascript"} codigo={`// Esto es un comentario de una línea
/* 
    Esto es un comentario 
    de varias líneas 
*/`}/>
            <Titulo level={2} text={`alert`}/>
            <Texto texto={`Con alert() podemos mostrar un mensaje emergente en la pantalla.`}/>
            <Codigo lenguaje={"javascript"} codigo={`alert("¡Hola, este es un mensaje!");`}/>
            <Consola language={"javascript"} result={`undefined`} codigo={()=>alert("¡Hola, este es un mensaje!")} colorResult="#666"/>
            <Texto texto={`Al ejecutarlo, aparecerá una ventana con el mensaje "¡Hola, este es un mensaje!".`}/>

            {/* console.log() */}
            <Titulo level={2} text={`console.log()`}/>
            <Texto texto={`console.log() se usa para mostrar mensajes en la consola del navegador, lo que ayuda a depurar código.`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("Hola, esto es un mensaje en la consola");
`}/>
            <Consola language="javascript" result={`Hola, esto es un mensaje en la consola`} codigo={()=>console.log("Hola, esto es un mensaje en la consola")}/>
            <Texto texto={`Para verlo, abre la consola del navegador presionando F12 y ve a la pestaña "Consola".`}/>
        </MainCap>
    )
}