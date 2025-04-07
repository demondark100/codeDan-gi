import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function FuncionesNativasJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`funciones nativas de javascript`}/>
                <Texto texto={`Las funciones de JavaScript nos ayudan a realizar tareas comunes de manera más sencilla y eficiente.`}/>
                <Codigo lenguaje={"javascript"} codigo={`console.log(typeof "string"); // muestra que tipo de dato es algun elemento
console.log(typeof("string")); // muestra que tipo de dato es algun elemento
console.log(parseInt("25")); // convierte una string que tiene numero a un numero entero
console.log(isNaN("asd")); // comprueba si algun dato no es un numero
console.log(isFinite("578")); // comprueba si algun dato es finito o no 

// eval
let exprecion = "*"
let numero = eval(5 + exprecion + 5); // ejecuta una cadena de texto como si fuese codigo javaScript
console.log(numero);`}/>
                <Consola language={"javascript"} colorResult="#00f" result={`string
string
25
true
true
25`}/>
            </Resumen>

            <Titulo text={`funciones nativas de javascript`}/>
            <Texto texto={`JavaScript tiene funciones integradas que facilitan el trabajo con datos. Estas funciones permiten, por ejemplo, determinar el tipo de un dato, realizar conversiones y manipular estructuras.`}/>
            


            <Titulo level={2} text={`typeof`}/>
            <Texto texto={`La función typeof se usa para determinar el tipo de dato de un valor o variable.

Si es una cadena de texto, devuelve "string".

Si es un número, devuelve "number".

Si es un booleano, devuelve "boolean".`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log(typeof "hola");   // "string"
console.log(typeof 15);       // "number"
console.log(typeof false);    // "boolean"

let color = "negro";
console.log(typeof color);    // "string"`}/>
            <Consola language={`javascript`} result={`string
number
boolean
string`} colorResult="#00f"/>


            {/* parseInt() */}
            <Titulo level={2} text={`parseInt()`}/>
            <Texto texto={`La función parseInt() convierte un valor de tipo string que contiene números en un dato de tipo number.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let valor = "15";
console.log(parseInt(valor));`}/>
            <Consola language={"javascript"} result={`15`} colorResult="#00f"/>
            <Texto texto={`valor: Es la cadena de texto que queremos convertir a número.`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log(parseInt("15"));

let number = "25";
console.log(parseInt(number));`}/>
            <Consola language={"javascript"} result={`15
15`} colorResult="#00f"/>
            <Texto texto={`Comprobemos el tipo de dato:`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = "18";

console.log(typeof parseInt(numero)); // "number"
console.log(typeof numero);           // "string"`}/>
            <Consola language={"javascript"} result={`number
string`} colorResult="#00f"/>


            {/* isNaN */}
            <Titulo level={2} text={`isNaN()`}/>
            <Texto texto={`La función isNaN() verifica si un valor NO es un número.

Reglas de isNaN():
Si el valor no es un número, devuelve true.

Si el valor es un número, devuelve false.`}/>
            <Codigo lenguaje={"javascript"} codigo={`isNaN(valor); // Retorna true si NO es un número, false si ES un número.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numberFalse = "n";  // No es un número
let numberTrue = "14";  // Parece un número pero es un string
let nativeNumber = 14; // Es un número

console.log(isNaN(numberFalse));
console.log(isNaN(numberTrue));
console.log(isNaN(nativeNumber));`}/>
            <Consola language={"javascript"} result={`true
false
false`} colorResult="#00f"/>


            {/* isFinite */}
            <Titulo level={2} text={`isFinite()`}/>
            <Texto texto={`La función isFinite() verifica si un valor es un número finito.

Reglas de isFinite():
Devuelve true si el valor es un número finito.

Devuelve false si el valor es NaN, Infinity o -Infinity.`}/>
            <Codigo lenguaje={"javascript"} codigo={`isFinite(valor); // Retorna true si el número es finito, false si no lo es.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = 15;
console.log(isFinite(numero)); // true

let noNumber = NaN;
console.log(isFinite(noNumber)); // false

console.log(isFinite(Infinity));  // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite("100"));     // true (convierte el string a número)
console.log(isFinite("Hola"));    // false (no es un número)`}/>
            
            <Consola language={"javascript"} colorResult="#00f" result={`true
false
false
false
true
false`}/>


            {/* eval() */}
            <Titulo level={2} text={`eval()`}/>
            <Texto texto={`La función eval() ejecuta una cadena de texto como si fuera código JavaScript. Puede interpretar expresiones matemáticas, asignaciones de variables y ejecutar funciones dinámicamente.

eval() puede ser peligroso si se usa con datos no confiables, ya que permite la ejecución de código arbitrario, lo que podría llevar a vulnerabilidades de seguridad.`}/>
            <Codigo lenguaje={"javascript"} codigo={`eval(codigoEnTexto);`}/>
            <Texto texto={`Ejemplo 1: Evaluar una operación matemática`}/>
            <Codigo lenguaje={"javascript"} codigo={`let expresion = "*";
let numero = eval(5 + expresion + 5);  // Interpreta como 5 * 5
console.log(numero);`}/>
            <Consola language={"javascript"} result={`25`} colorResult="#00f"/>
            <Texto texto={`Ejemplo 2: Ejecutar código dinámicamente`}/>
            <Codigo lenguaje={"javascript"} codigo={`let codigo = "let x = 10; x * 2;";
let resultado = eval(codigo);
console.log(resultado);`}/>
            <Consola language={"javascript"} result={`20`} colorResult="#00f"/>
            <Titulo level={3} text={`¿Por qué eval() es peligroso?`}/>
            <Texto texto={`Si eval() recibe una entrada del usuario, un atacante podría ejecutar código malicioso.
Ejemplo de un posible ataque:`}/>
            <Codigo lenguaje={"javascript"} codigo={`let inputUsuario = "console.log('Hackeado!');";
eval(inputUsuario);  // Ejecuta el código dentro del string`}/>
            <Consola language={"javascript"} result={`Hackeado!`}/>
        </MainCap>
    )
}