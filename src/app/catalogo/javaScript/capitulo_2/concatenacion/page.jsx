import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";



export default function ConcatenacionJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Concatenacion`}/>
                <Texto texto={`La concatenación une dos cadenas de texto. JavaScript tiene dos formas de concatenar:`}/>
                <Codigo lenguaje={"javascript"} codigo={`let palabra = "mundo";

// Forma 1: Usando el operador +
console.log("Hola " + palabra); // Hola mundo

// Forma 2: Usando template strings
console.log(\`Hola ${"${palabra}"}\`); // Hola mundo`}/>
            </Resumen>
            <Titulo text={`Concatenacion`}/>
            <Texto texto={`En JavaScript tenemos dos formas de concatenar las cadenas:

Usando el símbolo "+" (método tradicional).

Usando backticks (\`\`) y el símbolo ${"${{}}"}`}/>
            <Titulo level={2} text={`Método tradicional`}/>
            <Texto texto={`La forma tradicional es usar "+" para concatenar las cadenas con las comillas normales ("").`}/>
            <Codigo lenguaje={"javascript"} codigo={`let nombre = "Mike";
let oracion = "Hola " + nombre + " soy una IA";
console.log(oracion);`}/>
            <Consola language={`javascript`} result={`Hola Mike soy una IA`}/>
            

            {/* Template strings */}
            <Titulo level={2} text={`Template strings`}/>
            <Texto texto={`Recomiendo usar las template strings en este lenguaje, ya que facilitan mucho la tarea de concatenar.

Para usar template strings, debemos cambiar las comillas normales ("") por comillas invertidas (\`\`). Para escribirlas, presiona (Alt + 96) al mismo tiempo.

También usaremos el símbolo ${"${{}}"}, y dentro de las llaves colocaremos el valor que queremos concatenar.`}/>
            <Codigo lenguaje={"javascript"} codigo={`let oracionEjemplo = \`Hola ${"${valor que queremos poner, o sea, puede ser una variable o cualquier otro dato}"}.\`;`}/>
            <Codigo lenguaje={"javascript"} codigo={`let musica = "Do I Wanna Know?";
let oracion = \`La música ${"${musica}"} es un temazo.\`;
console.log(oracion);`}/>
            <Consola language={"javascript"} result={`La música Do I Wanna Know? es un temazo.`}/>
            
            <Titulo level={3} text={`Ventajas`}/>
            <Texto texto={`Las template strings tienen muchas ventajas sobre las comillas normales.

1. Permiten escribir en múltiples líneas
Comillas normales`}/>
            <Codigo lenguaje={"javascript"} codigo={`let comillas = "Con las comillas
no puedo escribir abajo";
console.log(comillas);`}/>
            <Consola language={"javascript"} result={`Uncaught SyntaxError: Invalid or unexpected token`} colorResult="#f00"/>
            <Titulo level={3} text={`Template strings`} />
            <Codigo lenguaje={"javascript"} codigo={`let template = \`Con template strings
sí puedo escribir
abajo. ¡Qué buena ventaja!\`;
console.log(template);

// Resultado:
// Con template strings
// sí puedo escribir
// abajo. ¡Qué buena ventaja!`}/>
            <Consola language={"javascript"} result={`Con template strings
sí puedo escribir
abajo. ¡Qué buena ventaja!`}/>
            <Titulo level={3} text={`Permiten escribir código HTML`}/>
            <Texto texto={`Comillas normales`}/>
            <Codigo lenguaje={"javascript"} codigo={`let codeComillas = "<p>Hola código HTML</p>
<p>Esto dará un error</p>";
console.log(codeComillas);`}/>
            <Consola language={"javascript"} result={`Uncaught SyntaxError: Invalid or unexpected token`} colorResult="#f00"/>
            <Titulo level={3} text={`Template strings`}/>
            <Codigo lenguaje={"javascript"} codigo={`let codeComillas = \`<p>Hola código HTML</p>
<p>Esto no dará un error</p>\`;
console.log(codeComillas);`}/>
            <Consola language={"javascript"} result={`<p>Hola código HTML</p>
<p>Esto no dará un error</p>`}/>

            <Titulo level={3} text={`¿Es más fácil?`}/>
            <Texto texto={`Además de ofrecer más ventajas, las template strings permiten concatenar de forma más sencilla.`}/>
            <Titulo level={3} text={`Comillas normales`}/>
            <Codigo lenguaje={"javascript"} codigo={`let juego = "dying light";
let oracionComilla = "El juego " + juego + " es demasiado bueno. Sí lo recomendaría en todos lados.";
console.log(oracionComilla);`}/>
            <Consola language={"javascript"} result={`El juego dying light es demasiado bueno. Sí lo recomendaría en todos lados.`}/>
            <Titulo level={3} text={`Template strings`}/>
            <Codigo lenguaje={"javascript"} codigo={`let juego = "left 4 dead 2";
let oracionComilla = \`El juego ${"${juego}"} es demasiado bueno. Sí lo recomendaría en todos lados.\`;
console.log(oracionComilla);`}/>
            <Consola language={"javascript"} result={`El juego left 4 dead 2 es demasiado bueno. Sí lo recomendaría en todos lados.`}/>
            <Texto texto={`Como puedes notar, con template strings nos evitamos el uso del símbolo "+" y también los espacios manuales dentro de la concatenación ("" + variable + "").`}/>
        </MainCap>
    )
}