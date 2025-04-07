import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function ArreglosJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`arreglos`}/>
                <Texto texto={`Los arreglos pueden almacenar múltiples datos, a diferencia de una variable que solo puede contener un único valor.`}/>
                <Codigo lenguaje={"javascript"} codigo={`let frutas = ["manzana", "sandía", "pera", "durazno", "naranja", "teléfono"];

console.log(frutas[0]); // manzana
console.log(frutas[1]); // sandía
console.log(frutas[2]); // pera
console.log(frutas[3]); // durazno
console.log(frutas[4]); // naranja

// Modificar un elemento del arreglo
frutas[4] = "granadilla";
console.log(frutas[4]); // granadilla`}/>
            </Resumen>
            <Titulo text={`arreglos`}/>
            <Texto texto={`La sintaxis de los arreglos en JavaScript no cambia en absolutamente nada en comparación con la lógica de su uso. La única diferencia es la forma en la que declaramos la variable que guardará el arreglo.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let arreglo1 = ["dato 1", "dato 2"];
const arreglo2 = ["dato 1", "dato 2"];`}/>
            <Codigo lenguaje={"javascript"} codigo={`let juegos = [ 
    "GTA",
    "Left 4 Dead",
    "Tekken",
    "Agar.io",
    "Plantas vs. Zombies"
]; 
console.log(juegos[0]);
console.log(juegos[1]);
console.log(juegos[2]); 
console.log(juegos[3]);
console.log(juegos[4]);`}/>
            <Consola language={"javascript"} result={`GTA
Left 4 Dead
Tekken
Agar.io
Plantas vs. Zombies`}/>
            <Titulo level={2} text={`Arreglos bidimensionales`}/>
            <Texto texto={`Aquí la sintaxis es similar a la de los arreglos simples, pero cambia la forma en que creamos la variable que almacena el arreglo bidimensional.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let colores = [
    ["rojo", "verde"],
    ["azul", "amarillo", "negro"],
    ["blanco", "celeste"],
    "morado"
];
console.log(colores[3]);
console.log(colores[0][0]);
console.log(colores[0][1]);
console.log(colores[1][0]);
console.log(colores[1][1]);
console.log(colores[1][2]);
console.log(colores[2][0]);
console.log(colores[2][1]);`}/>
            <Consola language={"javascript"} result={`morado
rojo
verde
azul
amarillo
negro
blanco
celeste`} />
            <Titulo level={2} text={`Uso de const en arreglos`}/>
            <Texto texto={`¿Qué pasa si intentamos cambiar el valor de una posición dentro de un arreglo declarado con const?
¡Hagamos la prueba!`}/>
            <Codigo lenguaje={"javascript"} codigo={`const arreglo = ["dato 1", "dato 2", "dato 3"];
arreglo[2] = "este dato me cae mal >:v";
console.log(arreglo);`}/>
            <Consola language={"javascript"} result={`(3) ['dato 1', 'dato 2', 'este dato me cae mal >:v']`}/>
            <Texto texto={`¡Sorprendente, sí deja cambiarlo!`}/>
            <Titulo level={2} text={`¿Por qué sucede esto?`}/>
            <Texto texto={`En JavaScript, cuando declaramos un arreglo con const, la referencia al arreglo en sí no puede ser cambiada, es decir, no podemos reasignar la variable arreglo.
Sin embargo, los valores dentro del arreglo sí pueden ser modificados individualmente.`}/>
        </MainCap>
    )
}