import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function FuncionesJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`funciones`}/>
                <Texto texto={`Las funciones sirven para reutilizar un bloque de código las veces que necesitemos, evitando repetir lo mismo una y otra vez.`}/>
                <Codigo lenguaje={"javascript"} codigo={`function nombreDeFuncion() {}  // crear una funcion
function saludar(nombre) { // funcion con parametro
  return \`Hola ${"${nombre}"}\`;
}
saludar("Parametro"); // llamar funcion

const multiplicar = function (a, b) return a * b}; // funcion anonima
const dividir = (a, b) => a / b; // funcion flecha`}/>
            </Resumen>
            <Titulo text={`funciones`}/>
            <Texto texto={`Las funciones en JavaScript permiten reutilizar código, recibir parámetros y devolver valores.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`function nombreDeFuncion(parametros) {
  // Código de la función
  return valor; // Opcional
}

// Llamar a la función
nombreDeFuncion(argumentos);`}/>

            
            {/* Función Básica */}
            <Titulo level={2} text={`Función Básica`}/>
            <Codigo lenguaje={"javascript"} codigo={`function saludar(nombre) {
  return \`Hola ${"${nombre}"}, tu caricatura es demasiado buena\`;
}

// Llamar a la función
console.log(saludar("Patricio")); 
// Salida: Hola Gumball, tu caricatura es demasiado buena`}/>
            <Consola language={"javascript"} result={`Hola Patricio, tu caricatura es demasiado buena`}/>


            {/* Función sin Parámetros */}
            <Titulo level={2} text={`Función sin Parámetros`}/>
            <Codigo lenguaje={"javascript"} codigo={`function mensaje() {
  return "¡Bienvenido a JavaScript!";
}

console.log(mensaje()); 
// Salida: ¡Bienvenido a JavaScript!`}/>
            <Consola language={"javascript"} result={`¡Bienvenido a JavaScript!`}/>


            {/* Función con Múltiples Parámetros */}
            <Titulo level={2} text={`Función con Múltiples Parámetros`}/>
            <Codigo lenguaje={"javascript"} codigo={`function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3));`}/>
            <Consola language={"javascript"} result={`8`} colorResult="#00f"/>


            {/* Función con Valores por Defecto */}
            <Titulo level={2} text={`Función con Valores por Defecto`}/>
            <Codigo lenguaje={"javascript"} codigo={`function presentacion(nombre = "Invitado") {
  return \`Hola, ${"${nombre}"}\`;
}

console.log(presentacion());
console.log(presentacion("Ana"));`}/>
            <Consola language={"javascript"} result={`Hola, Invitado
Hola, Ana`}/>

            {/* Función como Expresión (Función Anónima) */}
            <Titulo level={2} text={`Función como Expresión (Función Anónima)`}/>
            <Codigo lenguaje={"javascript"} codigo={`const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 5));`}/>
            <Consola language={"javascript"} result={`20`} colorResult={"#00f"}/>

            
            {/* Función Flecha (=>) */}
            <Titulo level={2} text={`Función Flecha (=>)`}/>
            <Codigo lenguaje={"javascript"} codigo={`const dividir = (a, b) => a / b;

console.log(dividir(10, 2));`}/>
            <Consola language={"javascript"} result={`5`} colorResult="#00f"/>
        </MainCap>
    )
}