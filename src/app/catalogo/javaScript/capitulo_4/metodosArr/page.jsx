import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function MetodosArrJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Metodos de arreglo`}/>
                <Texto texto={`Los métodos de arreglo nos facilitan muchas tareas del día a día al trabajar con datos.
Con ellos podemos agregar, eliminar, ordenar, recorrer, transformar y manipular elementos de manera rápida y eficiente.
Dominar estos métodos hará que tu código sea más limpio, corto y fácil de entender.`}/>
                <Codigo lenguaje={"javascript"} codigo={`let num = [4,8,2,9];

num.pop()  // [4,8,2] | quita el ultimo elemento de un arreglo.
num.shift()  // [8,2,9] | quita el primer elemento de un arreglo.
num.push(1); // [4,8,2,9,1] | agrega un elemento al final del arreglo.
num.unshift(7); // [7,4,8,2,9] | agrega un elemento al inicio del arreglo.
num.reverse(); // [9,2,8,4] | pone en reversa los elementos de un arreglo.
num.splice(1,2,"new number") // [4,"new number",9] | elimina y reemplaza uno o varios elementos de un arreglo.
num.sort(); // [2,4,8,9] | ordena los numeros de menor a mayor o las strings de a a la z.
let num2 = num.slice(1,3); // [8,2] | crea un subarreglo.
num.join(" - "); // "4 - 8 - 2 - 9" | convierte un arreglo en string y reemplaza las "," por la string que pasemos como parametro.
num.forEach(i=>console.log(i)) // 4 8 2 9 | Recorre de forma automatica un arreglo.
num.map(i=>{return i.toString()}) // ["4","8","2","9"] | mapea y da la posibilidad de modificar todos los elementos de un arreglo.`}/>
            </Resumen>
            <Titulo text={`Metodos de arreglo`}/>
            <Texto texto={`Al igual que los métodos de cadena, los arreglos también tienen métodos que nos facilitarán muchas tareas.`}/>
            <Titulo level={2} text={`pop y shift`}/>
            <Titulo level={3} text={`pop`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "pera", "naranja"];
let frutas2 = frutas.pop();
console.log(frutas);
console.log(frutas2);`}/>
            <Consola language={"javascript"} result={`["manzana", "pera"]
naranja`}/>
            <Texto texto={`Este método sirve para eliminar el último elemento de un arreglo.`}/>
            <Titulo level={3} text={`shift`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "pera", "naranja"];
let frutas2 = frutas.shift();
console.log(frutas);
console.log(frutas2);`}/>
            <Consola language={"javascript"} result={`["pera", "naranja"]
manzana`}/>
            <Texto texto={`Este método sirve para eliminar el primer elemento de un arreglo.`}/>



            {/* push y unshift */}
            <Titulo level={2} text={`push y unshift`}/>
            <Titulo level={3} text={`push`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "naranja"];
frutas.push("pera");
console.log(frutas);`}/>
            <Consola language={"javascript"} result={`["manzana", "naranja", "pera"]`}/>
            <Texto texto={`Sirve para agregar un elemento al final del arreglo.`}/>
            <Titulo level={3} text={`unshift`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["naranja", "pera"];
frutas.unshift("manzana");
console.log(frutas);`}/>
            <Consola language={"javascript"} result={`["manzana", "naranja", "pera"]`}/>
            <Texto texto={`Sirve para agregar un elemento al inicio del arreglo.`}/>



            {/* reverse */}
            <Titulo level={2} text={`reverse`}/>
            <Codigo lenguaje={"javascript"} codigo={`let abecedario = ["a", "b", "c", "d"];
console.log(abecedario.reverse());`}/>
            <Consola language={"javascript"} result={`["d", "c", "b", "a"]`}/>
            <Texto texto={`Sirve para invertir el orden de los elementos de un arreglo.`}/>


            {/* splice */}
            <Titulo level={2} text={`splice`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "pera", "naranja", "sandía", "mango"];
let frutas2 = frutas.splice(1, 1, "fresa");

console.log(frutas);
console.log(frutas2);`}/>
            <Consola language={"javascript"} result={`["manzana", "fresa", "naranja", "sandía", "mango"]
["pera"]`}/>
            <Texto texto={`Sirve para eliminar o reemplazar elementos a partir de una posición específica.`}/>


            {/* sort */}
            <Titulo level={2} text={`sort`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numeros = [5, 4, 3, 8, 7, 3, 0];
console.log(numeros.sort());`}/>
            <Consola language={"javascript"} result={`[0, 3, 3, 4, 5, 7, 8]`}/>
            <Texto texto={`Sirve para ordenar los elementos de un arreglo (ya sean numéricos o alfabéticos).`}/>
            


            {/* slice */}
            <Titulo level={2} text={`slice`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "pera", "naranja", "mango", "sandía", "piña"];
let frutas2 = frutas.slice(1, 3);
console.log(frutas2);`}/>
            <Consola language={"javascript"} result={`["pera", "naranja"]`}/>
            <Texto texto={`Sirve para crear un subarreglo a partir de una parte del arreglo original (sin modificar el original).`}/>


            <Titulo level={2} text={`join`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "naranja", "pera", "durazno", "piña"];
console.log(frutas.join(" - "));`}/>
            <Consola language={"javascript"} result={`manzana - naranja - pera - durazno - piña`}/>
            <Texto texto={`Convierte un arreglo en una cadena de texto, usando el separador que definamos.`}/>


            {/* forEach */}
            <Titulo level={2} text={`forEach`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "naranja", "piña", "mango"]; 
frutas.forEach(i => {
  console.log(i);
});`}/>
            <Consola language={"javascript"} result={`manzana
naranja
piña
mango`}/>
            <Texto texto={`Sirve para recorrer un arreglo y ejecutar una función por cada elemento. Es una forma más sencilla y moderna de usar bucles.`}/>



            {/* map */}
            <Titulo level={2} text={`map`}/>
            <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "naranja", "piña", "mango"];

let frutasEnMayusculas = frutas.map(fruta => {
  return fruta.toUpperCase();
});

console.log(frutasEnMayusculas);`}/>
            <Consola language={"javascript"} result={`["MANZANA", "NARANJA", "PIÑA", "MANGO"]`}/>
            <Texto texto={`Crea un nuevo arreglo aplicando una función a cada elemento del original.`}/>
        </MainCap>
    )
}