import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function PropiedadesSibling() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Propiedades de Sibling`}/>
                <Codigo lenguaje={"javascript"} codigo={`element.previousElementSibling; // Hermano anterior
element.nextElementSibling; // hermano posterior`}/>
                <Texto texto={`Nota: Solo considera elementos HTML, no nodos de texto o comentarios. Si no hay un hermano anterior o siguiente, devuelve null.`}/>
            </Resumen>
            <Titulo text={`Propiedades de Sibling`}/>
            <Texto texto={`Estas propiedades permiten navegar entre elementos hermanos, es decir, aquellos que comparten el mismo elemento padre.`}/>


            {/* previousElementSibling y nextElementSibling */}
            <Titulo level={2} text={`previousElementSibling y nextElementSibling`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <h2 class="title_1">primero</h2>
    <h3 class="title_2">segundo</h3>
    <h3 class="title_3">tercero</h3>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`const title_2 = document.querySelector(".title_2");

console.log(title_2.previousElementSibling);
console.log(title_2.nextElementSibling);`}/>
            <Consola language={"javascript"} result={`<h2 class="title_1">primero</h2>
<h3 class="title_3">tercero</h3>`}/>
            <Texto texto={`previousElementSibling: Devuelve el elemento hermano anterior (el que está justo antes en el mismo nivel).

nextElementSibling: Devuelve el elemento hermano siguiente (el que está justo después en el mismo nivel).`}/>
        </MainCap>
    )
}