import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function PropParents() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`propiedades de parents`}/>
                <Codigo lenguaje={"javascript"} codigo={`element.parentElement; // Devuelve el elemento HTML padre
element.parentNode;    // Devuelve el nodo padre (más general)`}/>
                <Texto texto={`Dato: parentElement es más seguro si estás trabajando exclusivamente con elementos HTML, ya que garantiza que el resultado será un elemento, no otro tipo de nodo.`}/>
            </Resumen>
            <Titulo text={`propiedades de parents`}/>
            <Texto texto={`Estas propiedades nos permiten acceder al elemento padre de cualquier nodo HTML.`}/>
            
            
            {/* parentElement y parentNode */}
            <Titulo level={2} text={`parentElement y parentNode`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <p class="a_1">contenido</p>
    <p class="a_2">contenido</p>
    <p class="a_3">contenido</p>
</div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const content = document.querySelector(".content");
const a_1 = document.querySelector(".a_1");
const a_2 = document.querySelector(".a_2");

console.log(a_1.parentElement); 
console.log(a_2.parentNode);`}/>
            <Consola language={"javascript"} result={`<div class="content">...</div>
<div class="content">...</div>`}/>
            <Texto texto={`parentElement: Devuelve el elemento HTML padre del nodo actual (o null si no hay padre válido).

parentNode: Devuelve el nodo padre del elemento, que puede ser un elemento HTML, un documento, o incluso un comentario.

Ambos se comportan casi igual en el DOM de elementos HTML, por eso suelen usarse de forma intercambiable.`}/>
        </MainCap>
    )
}