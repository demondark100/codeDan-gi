"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function Window1Js(){
    const openWindow=()=>{
        window.open("https://youtube.com");
        return "";
    }

    return (
        <MainCap>
            <Titulo text={`window parte 1`}/>
            <Texto texto={`El objeto window representa la ventana del navegador. Todos los métodos globales como alert(), prompt() o confirm() son en realidad métodos del objeto window.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`window.metodo();`}/>
            <Texto texto={`También puedes omitir window. al usar la mayoría de sus métodos.`}/>


            {/* Métodos principales */}
            <Titulo level={2} text={`Métodos principales`}/>
            <Codigo lenguaje={"javascript"} codigo={`window.open("https://youtube.com");`}/>
            <Consola language={"javascript"} codigo={openWindow}/>
            <Texto texto={`Abre una nueva pestaña o ventana del navegador con la URL indicada.`}/>


            {/* window.close() */}
            <Titulo level={2} text={`window.close()`}/>
            <Codigo lenguaje={"javascript"} codigo={`window.close();`}/>
            <Texto texto={`Cierra la ventana actual solo si fue abierta mediante window.open() desde el mismo script.`}/>


            {/* window.closed */}
            <Codigo lenguaje={"javascript"} codigo={`window.closed`}/>
        </MainCap>
    )
}