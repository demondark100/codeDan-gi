"use client";

import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function ObjectMathJs() {
    const numeroRandom=()=>{
        let numero = Math.random();
        return numero;
    }

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Object Math`}/>
                <Texto texto={`El objeto Math es una herramienta esencial para trabajar con cálculos matemáticos en JavaScript.
Nos ayuda a obtener raíces, redondear números, generar aleatorios y comparar valores de forma rápida y eficiente.`}/>
                <Codigo lenguaje={"javascript"} codigo={`Math.sqrt(25); // 5 | devuelve la raiz cuadrada de un numero.
Math.cbrt(25); // 2.924017738212866 | devuelve la raiz cubica de un numero.
let maximo = [123,8456,12];
Math.max(...maximo); // 8456 | busca el numero maximo en un arreglo.
let minimo = [123,8456,12];
Math.min(...minimo); // 12 | busca el numero menor de todo el arreglo.
Math.random() // genera un numero aleatorio decimal.
Math.round() // convierte en numero entero un numero decimal.
// combo
Math.round(Math.random()*100) // genera un numero entero aleatorio entre el 0 y 100.
Math.floor() // redondea un numero hacia abajo al numero mas cercano
Math.ceil() // redondea un numero hacia arriba al numero mas cercano`}/>
            </Resumen>
            <Titulo text={`Object Math`}/>
            <Texto texto={`El objeto Math nos ofrece herramientas útiles para realizar operaciones matemáticas de forma sencilla.`}/>


            {/* Math.sqrt() */}
            <Titulo level={2} text={`Math.sqrt()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = Math.sqrt(25);   
console.log(numero);`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`5`}/>
            <Texto texto={`Devuelve la raíz cuadrada de un número.`}/>


            {/* Math.cbrt() */}
            <Titulo level={2} text={`Math.cbrt()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = Math.cbrt(25);
console.log(numero);`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`2.924017738212866`}/>
            <Texto texto={`Devuelve la raíz cúbica de un número.`}/>


            <Titulo level={2} text={`Spread Operator con`}/>
            <Titulo level={3} text={`Math.max() y Math.min()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numeros = [123, 8456, 12];
console.log(Math.max(...numeros));
console.log(Math.min(...numeros));`}/>
            <Consola language={"javascript"} result={`8456
12`}/>
            <Texto texto={`Nos permite encontrar el valor máximo o mínimo dentro de un arreglo numérico.`}/>


            {/* Math.random() */}
            <Titulo level={2} text={`Math.random()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = Math.random();
console.log(numero);`}/>
            <Consola language={"javascript"} codigo={numeroRandom}/>
            <Texto texto={`Genera un número decimal aleatorio entre 0 y 1.`}/>


            {/* Math.round() */}
            <Titulo level={2} text={`Math.round()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = 5.888;  
console.log(Math.round(numero));`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`6`}/>
            <Texto texto={`Redondea un número al entero más cercano.`}/>


            {/* Math.floor() */}
            <Titulo level={2} text={`Math.floor()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = 5.9;
console.log(Math.floor(numero));`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`5`}/>
            <Texto texto={`Redondea un número hacia abajo al entero más cercano.`}/>


            {/* Math.ceil() */}
            <Titulo level={2} text={`Math.ceil()`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = 5.1;
console.log(Math.ceil(numero));`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`6`}/>
            <Texto texto={`Redondea un número hacia arriba al entero más cercano.`}/>
        </MainCap>
    )
}