"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function PrompJs() {

    const pedirNombre = () => {
        let nuevoNombre = prompt("¿Cómo te llamas?");
        
        return `Hola, ${nuevoNombre}`;
    };

    const pedirDatosString=()=>{
        let numero = prompt("Pon un número.");
        let booleano = prompt("Pon true o false");

        return `${typeof(numero)}
${typeof(booleano)}`;
    }


    const solucionParseInt=()=>{
        let numero1 = prompt("Dime el número 1");
        let numero2 = prompt("Dime el número 2");

        let suma = parseInt(numero1) + parseInt(numero2);
        return suma;

    }


    const problemasConcatenacion=()=>{
        let numero1 = prompt("Dime el número 1");
        let numero2 = prompt("Dime el número 2");

        let resultado = numero1 + numero2; 
        return resultado;

    }
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`prompt`}/>
                <Texto texto={`Con prompt() podemos pedir un dato al usuario, pero siempre se guarda como una cadena de texto (string).`}/>
                <Codigo lenguaje={"javascript"} codigo={`let numero = prompt("dime un numero cualquiera."); // pedir dato al usuario
// y guardar ese dato en una variable.
console.log(numero);`}/>
            </Resumen>
            <Titulo text={`prompt`}/>
            <Texto texto={`En JavaScript, la función prompt() se usa para pedir datos al usuario a través de una ventana emergente.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre);`}/>
            <Consola language={"javascript"} codigo={pedirNombre} />
            <Texto texto={`Explicación:

prompt("¿Cuál es tu nombre?") muestra una ventana emergente donde el usuario puede escribir su respuesta.

El valor ingresado se guarda en la variable nombre.

Luego, console.log() imprime el mensaje junto con el valor ingresado.

Este método es útil para interactuar con los usuarios y obtener datos de entrada en tiempo real.`}/>


            {/* string */}
            <Titulo level={2} text={`String y el uso de prompt()`}/>
            <Texto texto={`Todo lo que se escribe dentro del espacio que nos ofrece prompt() se guarda como una cadena de texto (string). Esto significa que, incluso si el usuario ingresa un número, JavaScript lo tratará como una cadena.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = prompt("Pon un número.");
let booleano = prompt("Pon true o false");

console.log(
  typeof(numero),  // string
  typeof(booleano) // string
);
`}/>
            <Consola language={"javascript"} codigo={pedirDatosString} colorResult="#00f"/>


            {/* Problema con la concatenación */}
            <Titulo level={2} text={`Problema con la concatenación`}/>
            <Texto texto={`Cuando intentamos sumar dos valores ingresados por el usuario, en realidad se concatenan en lugar de realizarse una operación matemática.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero1 = prompt("Dime el número 1");
let numero2 = prompt("Dime el número 2");

let resultado = numero1 + numero2; 
console.log(resultado);`}/>
            <Consola language={"javascript"} codigo={problemasConcatenacion}/>
        
        
            {/* Solución: Convertir a número con parseInt() */}
            <Texto texto={`JavaScript nos proporciona funciones para convertir string en valores numéricos. Una de ellas es parseInt().`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero1 = prompt("Dime el número 1");
let numero2 = prompt("Dime el número 2");

let suma = parseInt(numero1) + parseInt(numero2);
console.log(suma);`}/>
            <Consola language={"javascript"} codigo={solucionParseInt}/>
        </MainCap>
    )
}