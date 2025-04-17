import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function createElementsJs(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`creacion de elementos`}/>
                <Texto texto={`Con esto crearemos elementos HTML desde JavaScript, ya sea de forma individual con createElement o de forma optimizada con createDocumentFragment.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const parrafo = document.createElement("P"); // crea un elemento html.
const fragmento = document.createDocumentFragment(); // crea un fragmento y evita que la pagina se renderice desde 0 varias veces.`}/>
            </Resumen>
            <Titulo text={`Creación de elementos`}/>
            <Texto texto={`Podemos crear elementos HTML dinámicamente desde JavaScript para agregarlos luego al DOM. Estas son las formas más comunes:`}/>


            {/* createElement() */}
            <Titulo level={2} text={`createElement()`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenedor"></div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const contenedor = document.querySelector(".contenedor");
let parrafo = document.createElement("p");`}/>
            <Texto texto={`Con document.createElement("etiqueta") creamos un nuevo elemento HTML.

Dato curioso: Aunque en algunos ejemplos verás etiquetas como "P", lo correcto y más común es escribirlas en minúsculas: "p", "li", "ul", etc. JavaScript lo reconoce igual, pero por convención se usa minúsculas.`}/>

            
            {/* createDocumentFragment() */}
            <Titulo level={2} text={`createDocumentFragment()`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenedor"></div>`}/>
            <Codigo lenguaje={"javascript"} codigo={`const contenedor = document.querySelector(".contenedor");
let fragmento = document.createDocumentFragment();`}/>
            <Texto texto={`createDocumentFragment() sirve para optimizar el rendimiento, especialmente cuando trabajamos con bucles. En lugar de actualizar el DOM una y otra vez (lo cual es costoso), usamos un fragmento como contenedor temporal, lo llenamos con los elementos y lo insertamos todo de una sola vez al DOM.`}/>
        </MainCap>
    )
}