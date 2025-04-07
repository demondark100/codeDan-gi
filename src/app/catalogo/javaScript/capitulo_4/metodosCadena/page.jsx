import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function MetodosCadenaJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Metodos de cadena`}/>
                <Texto texto={`Los métodos de cadena en JavaScript nos permiten trabajar y manipular texto de forma sencilla, resolviendo tareas comunes como búsqueda, modificación y análisis de cadenas.`}/>
                <Codigo lenguaje={"javascript"} codigo={`let cadena = "Hola mundo";
cadena.startsWith("H"); // true | verifica si una cadena inicia con algun caracter o caracteres.
cadena.endsWith("o"); // true | verifica si una cadena finaliza con algun caracter o caracteres. 
cadena.includes("Hola"); // true | verifica si una cadena incluye algun caracter o caracteres. 
cadena.indexOf("a"); // 3 | busca la posision de algun caracter o caracteres, el conteo inicia desde 0. 
cadena.lastIndexOf("n"); // 7 | busca la ultima posision de algun caracter o caracteres , el conteo inicia desde 0. 
cadena.padStart(12,"<<"); // <<Hola mundo | rellena texto al inicio.
cadena.padEnd(12,">>"); // Hola mundo>> | rellena texto al final. 
cadena.repeat(2); // Hola mundo Hola mundo | repite una cadena de texto. 
cadena.split(" ") // ["Hola","mundo"] | separa una cadena de texto y la convierte en arreglo. 
cadena.substring(5,10); // mundo | crea una subcadena. 
cadena.toLowerCase(); // hola mundo | convierte todas las cadenas en minusculas.
cadena.toUpperCase(); // HOLA MUNDO | convierte todas las cadenas en mayusculas.
let number = 123;
number.toString(); // "123" | convierte distintos tipos de dato en una cadena de texto.
let espacios2 = " music ";
espacios2.trim(); // "music" | quita los espacios del contado de una cadena de texto.`}/>
            </Resumen>
            <Titulo text={`Metodos de cadena`}/>
            <Texto texto={`JavaScript cuenta con métodos de cadena que facilitan muchas tareas que podrían ser demasiado complicadas.`}/>


            {/* startsWith y endsWith */}
            <Titulo level={2} text={`startsWith y endsWith`}/>
            <Titulo level={3} text={`startsWith`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena1 = "hola mundo";
cadena1.startsWith("h");

let cadena2 = "hola mundo";
cadena2.startsWith("a");
// 
console.log(cadena1);
console.log(cadena2);`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`true
false`}/>
            <Texto texto={`Esto nos servirá para saber si una cadena inicia con un carácter específico.
Si inicia con ese carácter, devolverá "true".
Si no inicia con ese carácter, devolverá "false".`}/>
            <Titulo level={3} text={`endsWith`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena1 = "mundo";
cadena1.endsWith("o");

let cadena2 = "mundo";
cadena2.endsWith("e");

console.log(cadena1);
console.log(cadena2);`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`true
false`}/>
            <Texto texto={`Esto nos servirá para saber si una cadena finaliza con algún carácter específico.
Si finaliza con ese carácter, devolverá "true".
Si no finaliza con ese carácter, devolverá "false".`}/>

            {/* includes */}
            <Titulo level={2} text={`includes`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena1 = "hola mundo XD";
cadena1.includes("l"); // Resultado: true

let cadena2 = "hola mundo XD";
cadena2.includes("z"); // Resultado: false`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`true
false`}/>
            <Texto texto={`includes nos permitirá saber si una cadena contiene un carácter o una subcadena específica.
A diferencia de startsWith y endsWith, este método detecta la coincidencia desde cualquier posición, no solo desde el inicio o el final.
Si incluye el carácter o cadena, devolverá "true".
Si no lo incluye, devolverá "false".`}/>


            <Titulo level={2} text={`indexOf y lastIndexOf`}/>
            <Titulo level={3} text={`indexOf`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "hola mundo";
cadena.indexOf("a");
console.log(cadena)`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`3`}/>
            <Texto texto={`Este método nos mostrará la posición del primer carácter encontrado.`}/>


            <Titulo level={2} text={`lastIndexOf`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "vivir es vida";
cadena.lastIndexOf("v");`}/>
            <Consola language={"javascript"} colorResult="#00f" result={`9`}/>
            <Texto texto={`Este nos servirá para saber la última posición de un carácter específico.`}/>



            {/* -1 (cuando no se encuentra) */}
            <Titulo level={2} text={`-1 (cuando no se encuentra)`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "no se encontrará un carácter.";
if (cadena.indexOf("@") == -1) {
    console.log("El carácter @ no existe");
} else {
    console.log(cadena.indexOf("@"));
}`}/>
            <Consola language={"javascript"} result={`El carácter @ no existe`}/>
            <Texto texto={`Si el carácter que queremos buscar no existe, el método retornará -1.`}/>



            {/* padStart y padEnd */}
            <Titulo level={2} text={`padStart y padEnd`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`variable.metodo(
    longitud_total,
    cadena_de_relleno
);`}/>
            <Texto texto={`padStart: añade caracteres al inicio de la cadena.

padEnd: añade caracteres al final de la cadena.`}/>


            {/* padStart */}
            <Titulo level={3} text={`padStart`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "123";
let nuevaCadena = cadena.padStart(4, "0");
console.log(nuevaCadena); // Resultado: "0123"`}/>
            <Consola language={"javascript"} result={`0123`}/>
            <Texto texto={`Esto nos servirá para rellenar una cadena por el inicio.`}/>
            
            <Titulo level={3} text={`padEnd`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "123"; 
let nuevaCadena = cadena.padEnd(4, "4");
console.log(nuevaCadena);`}/>
            <Consola language={"javascript"} result={`1234`}/>
            <Texto texto={`Esto nos servirá para rellenar una cadena por el final.`}/>



            <Titulo level={2} text={`repeat`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "hola";
console.log(cadena.repeat(3));`}/>
            <Consola language={"javascript"} result={`holaholahola`}/>
            <Texto texto={`Esto nos servirá para repetir el contenido de una cadena de texto las veces que queramos.`}/>


            <Titulo level={2} text={`split`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "hola mundo";
console.log(cadena.split(" "));`}/>
            <Consola language={"javascript"} result={`["hola", "mundo"]`}/>
            <Texto texto={`Esto nos servirá para separar una cadena en partes y convertirla en un arreglo.`}/>



            {/* substring */}
            <Titulo level={2} text={`substring`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`nuevaVariable = cadena.substring(inicio, fin);`}/>
            <Texto texto={`El carácter en la posición fin no se incluye.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = "hola mundo";
let subCadena = cadena.substring(5, 10);
console.log(subCadena);`}/>
            <Consola language={"javascript"} result={`mundo`}/>
            <Texto texto={`Esto nos servirá para crear una subcadena.
A diferencia de otros métodos, este sí necesita una variable para guardar el resultado.`}/>

            
            <Titulo level={2} text={`toUpperCase y toLowerCase`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena1 = "hola mundo";
console.log(cadena1.toUpperCase());

let cadena2 = "HOLA MUNDO";
console.log(cadena2.toLowerCase());`}/>
            <Consola language={"javascript"} result={`HOLA MUNDO
hola mundo`}/>
            <Texto texto={`Con toUpperCase() convertimos una cadena a mayúsculas.

Con toLowerCase() convertimos una cadena a minúsculas.`}/>


            {/* toString */}
            <Titulo level={2} text={`toString`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = 123;
cadena.toString();`}/>
            <Consola language={"javascript"} result={`123`}/>
            <Texto texto={`Esto nos servirá para convertir cualquier dato en una cadena de texto.`}/>



            <Titulo level={2} text={`trim, trimStart y trimEnd`}/>
            <Codigo lenguaje={"javascript"} codigo={`let cadena = " hola mundo ";
cadena.trim();`}/>
            <Consola language={"javascript"} result={`hola mundo`}/>
            <Texto texto={`Esto nos servirá para quitar los espacios al principio y al final de una cadena.

Con trimStart() quitamos los espacios del inicio.

Con trimEnd() quitamos los espacios del final.`}/>

        </MainCap>
    )
}