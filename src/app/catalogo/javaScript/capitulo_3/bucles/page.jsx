import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

export default function BuclesJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`bucles`}/>
                <Texto texto={`Los bucles permiten ejecutar tareas repetitivas o recorrer arreglos. Hay dos tipos principales:

1. Bucle for (para) → Se usa cuando sabemos cuántas veces se repetirá.
2. Bucle while (mientras) → Se usa cuando no sabemos cuántas veces se repetirá.`}/>
                <Codigo lenguaje={"javascript"} codigo={`// bucle para
for(let i = 0;i < 4;i++){
  console.log(i); // 0 1 2 3
};

// bucle mientras
let pregunta = prompt("¿Quien es el jefe del custacio cascaruto??");
while(pregunta != "don cangrejo"){
  alert("respuesta incorrecta");
}

let i = 0;
while(i < 5){
  i++;
  console.log(i) // 1 2 3 4 5 
};

let nombres = [
  "Emilia",
  "Charlie",
  "Lucy",
  "Adam",
  "Jorge"
]
for(let i in nombres){ // recorre automaticamente las posisiones de un arrego
  console.log(i) // 0 1 2 3 4 
}
for(let i of nombres){ // recorre automaticamente el contenido de un arrego
  console.log(i) // Emilia Charlie Lucy Adam Jorge
}`}/>
            </Resumen>
            <Titulo text={`bucles`}/>
            <Texto texto={`En JavaScript, existen diferentes tipos de bucles que nos permiten recorrer estructuras de datos como arreglos y objetos. A continuación, explicaremos cada uno con ejemplos.`}/>
            

            {/* Bucle while */}
            <Titulo level={2} text={`Bucle while`}/>
            <Texto texto={`El bucle while ejecuta un bloque de código mientras se cumpla una condición.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`while (condición) {
  // Código a ejecutar
}`}/>
            <Codigo lenguaje={"javascript"} codigo={`let i = 0;
while (i < 5) {
  i++;
  console.log(\`El valor de i es: ${"${i}"}\`);
}`}/>
            <Consola language={"javascript"} result={`El valor de i es: 1
El valor de i es: 2
El valor de i es: 3
El valor de i es: 4
El valor de i es: 5`}/>
            <Texto texto={` Explicación:

Se inicializa la variable i en 0.

Mientras i < 5, el código dentro del bucle se ejecutará.

i++ incrementa el valor en cada iteración.`}/>


            {/* Bucle for */}
            <Titulo level={2} text={`Bucle for`}/>
            <Texto texto={`El bucle for nos permite recorrer un conjunto de datos con una estructura más compacta.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`for (inicialización; condición; actualización) {
  // Código a ejecutar
}`}/>
            <Codigo lenguaje={"javascript"} codigo={`for (let i = 0; i < 5; i++) {
  console.log(\`El valor de i es: ${"${i}"}\`);
}`}/>
            <Consola language={"javascript"} result={`El valor de i es: 0
El valor de i es: 1
El valor de i es: 2
El valor de i es: 3
El valor de i es: 4`}/>
            <Texto texto={` Explicación:

let i = 0 → Inicializa la variable.

i < 5 → Mientras la condición sea verdadera, el bucle continúa.

i++ → Incrementa i en cada iteración.`}/>


            {/* Bucle for...in */}
            <Titulo level={2} text={`Bucle for...in`}/>
            <Texto texto={`El bucle for...in se usa para recorrer las posiciones (índices) de un arreglo o las propiedades de un objeto.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`for (let variable in objeto_o_arreglo) {
  // Código a ejecutar
}`}/>
            <Titulo level={3} text={`jemplo con un arreglo:`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["pera", "manzana", "naranja", "piña"];

for (let i in frutas) {
  console.log(i); // Muestra los índices: 0, 1, 2, 3
}`}/>
            <Consola language={"javascript"} result={`0
1
2
3`}/>
            <Texto texto={` Explicación:

i toma los índices (0, 1, 2, 3) del arreglo.`}/>

            <Titulo level={3} text={`Ejemplo con un objeto:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Lima"
};

for (let key in persona) {
  console.log(\`${"${key}"}: ${"${persona[key]}"}\`);
}`}/>
            <Consola language={"javascript"} result={`nombre: Juan
edad: 25
ciudad: Lima`}/>

            <Texto texto={`Explicación:

key toma las propiedades del objeto (nombre, edad, ciudad).

persona[key] muestra los valores de esas propiedades.`}/>


            {/* Bucle for...of */}
            <Titulo level={2} text={`Bucle for...of`}/>
            <Texto texto={`El bucle for...of recorre directamente los valores de un arreglo o estructura iterable.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`for (let variable of arreglo) {
  // Código a ejecutar
}`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["pera", "manzana", "naranja", "piña"];

for (let fruta of frutas) {
  console.log(fruta);
}`}/>
            <Consola language={"javascript"} result={`pera
manzana
naranja
piña`}/>
            <Texto texto={` Explicación:

fruta toma los valores del arreglo en lugar de los índices.`}/>
        </MainCap>
    )
}