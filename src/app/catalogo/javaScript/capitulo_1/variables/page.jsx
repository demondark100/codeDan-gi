import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";



export default function VariablesJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`variables`}/>
                <Texto texto={`Las variables almacenan cualquier tipo de datos para ser reutilizados.`}/>
                <Codigo lenguaje={"javascript"} codigo={`var saludo1 = "hola mundo";  // Variable global, no respeta los bloques de código.
let saludo2 = "hola mundo";  // Respeta los bloques de código.
const saludo3 = "hola mundo"; // No puede cambiar su valor y respeta los bloques de código.`}/>
                <Texto texto={`Recomendación: Usa let para variables que cambian y const para valores fijos. Evita var por problemas de ámbito.`}/>
            </Resumen>

            <Titulo text={`variables`} />
            <Texto texto={`En JavaScript, hay distintas formas de declarar variables:

var: No es recomendable usarlo.

let: Es la forma correcta de declarar variables, ya que permite reasignación.

const: Su valor no puede cambiar después de ser asignado.`}/>
            <Codigo lenguaje={"javascript"} codigo={`var number1 = 15;
let number2 = 15; 
const number3 = 15;`}/>
            

            {/* var */}
            <Titulo level={2} text={`var`}/>
            <Texto texto={`El uso de var en JavaScript no es recomendable porque puede generar problemas con el ámbito (scope) de las variables.

Por ejemplo, declarar una variable con var es similar a asignarla directamente sin ninguna palabra clave:`}/>
            <Codigo lenguaje={"javascript"} codigo={`// al usar var es como si hicieramos esto.
string1 = "una cadena";
// usando var
var string2 = "una cadena pero con var";`}/>
            <Texto texto={`El problema principal de var es que no respeta el ámbito de bloque, lo que puede causar errores difíciles de detectar. Por eso, es mejor usar let o const.`}/>

            
            <Titulo level={2} text={`let`}/>
            <Texto texto={`Si deseas declarar variables de forma correcta, debes usar let, ya que respeta el ámbito de bloque y evita problemas al redeclarar variables.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let numero = 15;`}/>
            <Texto texto={`Podemos cambiar el valor de una variable sin volver a usar let.
Error (redeclaración de variable)`}/>
            <Codigo lenguaje={"javascript"} codigo={`let number = 20;
let number = 10; // Esto genera un error`}/>
            <Consola language={"javascript"} result={`Uncaught SyntaxError: Identifier 'number' has already been declared`} colorResult="#f00"/>
            <Texto texto={`Correcto (reasignación de valor)`}/>
            <Codigo lenguaje={"javascript"} codigo={`let number = 20;
number = 10; // Así se cambia el valor correctamente
console.log(number);`}/>
            <Consola language={"javascript"} result={`10`} colorResult="#00f"/>


            <Titulo level={2} text={`const`}/>
            <Texto texto={`Cuando declaramos variables con const, su valor no puede cambiar después de la asignación inicial.
Error al intentar reasignar una constante`}/>
            <Codigo lenguaje={"javascript"} codigo={`const nombre = "German";
nombre = "Mario"; // Esto generará un error`}/>
            <Consola language={"javascript"} result={`Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:2:8`} colorResult="#f00"/>
            <Texto texto={`Usa const cuando el valor no deba cambiar, como en constantes matemáticas:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const PI = 3.1416;`}/>
        </MainCap>
    )
}