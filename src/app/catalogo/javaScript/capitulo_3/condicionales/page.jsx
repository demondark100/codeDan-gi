"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function CondicionalesJs() {

    const numNegOrPos=()=>{
        let numero = prompt("Dime un numero y sabremos si el numero es positivo o negativo.");
        if(parseInt(numero) > 0){
        alert(`el numero ${numero} es positivo.`);
        } else if(parseInt(numero) < 0){
        alert(`el numero ${numero} es negativo.`);
        } else {
        alert(`el numero es 0`);
        }
    }

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`condicionales`}/>
                <Texto texto={`Una condicional sirve para tomar un camino u otro según una condición dada.`}/>
                <Codigo lenguaje={"javascript"} codigo={`let lenguaje = prompt("Digita un lenguaje de programación:");
lenguaje = lenguaje.toLowerCase();

if (lenguaje === "javascript") {
  alert("Lenguaje usado mayormente en el desarrollo web.");
} else if (lenguaje === "python") {
  alert("Lenguaje usado mayormente en el desarrollo backend o hacking.");
} else {
  alert("Este lenguaje no se encontró en nuestra base de datos.");
}`}/>
            </Resumen>
            <Titulo text={`condicionales`}/>
            <Texto texto={`Las condicionales en JavaScript tienen la siguiente sintaxis:

"si" se reemplaza por "if".

"entonces:" se representa con {}.

"sino si" se reemplaza por "else if".

"sino" se reemplaza por "else".`}/>
            <Titulo level={2} text={`Sintaxis`}/>
            <Codigo lenguaje={"javascript"} codigo={`if (condición) {
  // Código a ejecutar si la condición se cumple
} else if (otraCondición) {
  // Código a ejecutar si la segunda condición se cumple
} else {
  // Código a ejecutar si ninguna de las condiciones anteriores se cumple
}`}/>
            <Titulo level={2} text={`Ejemplo`}/>
            <Texto texto={`Comprobar si un número es positivo, negativo o cero.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = prompt("Dime un número y sabremos si es positivo o negativo.");
if (parseInt(numero) > 0) {
  alert(\`El número ${"${numero}"} es positivo.\`);
} else if (parseInt(numero) < 0) {
  alert(\`El número ${"${numero}"} es negativo.\`);
} else {
  alert("El número es 0.");
}`}/>
            <Consola language={"javascript"} codigo={numNegOrPos} result={`undefined`} colorResult="#666"/>
        </MainCap>
    )
}