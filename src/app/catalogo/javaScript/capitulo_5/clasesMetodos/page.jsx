import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function ClasesMetodosDomJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`clases y metodos`}/>
                <Texto texto={`Con estos métodos de classList, podemos manipular fácilmente las clases de los elementos HTML desde JavaScript. Es muy común usarlos junto con CSS para aplicar estilos dinámicos, según las acciones del usuario o el estado de la página.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const div = document.quierySelector(".div");
div.classList.add("content"); // agregar una clase.
div.classList.remove("content"); // elimina una clase.
div.classList.item(0); // devuelve el indice de alguna clase , es como llamar la posision de un array.
div.classList.contains("div"); // verifica si incluye una clase o no.
div.classList.replace("div","content"); // reemplaza una clase por otra.
div.classList.toggle("div"); // si tiene la clase que indicamos la elimina pero si no la tiene la agrega.`}/>
            </Resumen>
            <Titulo text={`clases y metodos`}/>
            <Texto texto={`Manipular clases en JavaScript es muy útil para cambiar el estilo o comportamiento de los elementos según el contexto de tu aplicación. Para eso usamos classList.`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`elemento.classList.metodo("clase");`}/>


            {/* Métodos de classList */}
            <Titulo level={2} text={`Métodos de classList`}/>
            
            <Titulo level={3} text={`add()`}/>
            <Texto texto={`Agrega una clase al elemento.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="agregar">agregar</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const agregar = document.querySelector(".agregar"); 
agregar.classList.add("agregado");`}/>

            <Titulo level={3} text={`remove()`}/>
            <Texto texto={`Elimina una clase del elemento.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="quitar removido">quitar</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const quitar = document.querySelector(".quitar"); 
quitar.classList.remove("removido");`}/>


            <Titulo level={3} text={`item()`}/>
            <Texto texto={`Devuelve el nombre de la clase que está en una posición específica, como si fuera un array.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="indice otraClase">índice</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const indice = document.querySelector(".indice");
console.log(indice.classList.item(0));
console.log(indice.classList.item(1));`}/>
            <Consola language={"javascript"} result={`indice
otraClase`}/>


            <Titulo level={3} text={`contains()`}/>
            <Texto texto={`Verifica si el elemento contiene una clase específica. Devuelve true o false.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="incluye">incluye</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const incluye = document.querySelector(".incluye"); 
incluye.classList.contains("incluye"); 
incluye.classList.contains("otra");`}/>
            <Consola colorResult="#00f" language={"javascript"} result={`true
false`}/>

            
            <Titulo level={3} text={`replace()`}/>
            <Texto texto={`Reemplaza una clase por otra.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="reemplazar">reemplazar</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const reemplazar = document.querySelector(".reemplazar"); 
reemplazar.classList.replace("reemplazar", "reemplazado");`}/>


            <Titulo level={3} text={`toggle()`}/>
            <Texto texto={`Agrega una clase si no existe, y si existe, la elimina. Es útil para alternar estados.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="distinto">distinto</p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const distinto = document.querySelector(".distinto"); 
distinto.classList.toggle("distinto"); // La quita
distinto.classList.toggle("distinto"); // La vuelve a poner`}/>
        </MainCap>
    )
}