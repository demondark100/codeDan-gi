import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function SelectoresElementosJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Selectores de elementos`}/>
                <Texto texto={`Los selectores nos permiten seleccionar cualquier elemento o grupo de elementos del HTML. Con "elementos" nos referimos a las cajitas que componen una página, como párrafos, imágenes, enlaces, etc.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const id1 = document.getElementById("id1"); // seleccionar por id.
const parrafos = document.getElementsByTagName("p"); // selecciona varios elementos de un tipo en este caso todos los <p>
const idQuery = document.querySelector("#idQuery"); // selecciona un elemento por clase o id
const claseQuery = document.querySelector(".claseQuery"); // selecciona un elemento por clase o id
const parrafos = document.querySelectorAll(".parrafos"); // selecciona varios elementos por clase, y se crea un arreglo.`}/>
            </Resumen>

            <Titulo text={`Selectores de elementos`}/>
            <Texto texto={`Los selectores nos permiten seleccionar cualquier elemento o grupo de elementos del HTML. Con "elementos" nos referimos a las cajitas que componen una página, como párrafos, imágenes, enlaces, etc.`}/>
                <Codigo lenguaje={"html"} codigo={`<body>
  <p></p>
  <a></a>
  <img>
  <main></main>
  <footer></footer>
</body>`}/>
            <Titulo level={2} text={`Sintaxis general`}/>
            <Codigo lenguaje={"javascript"} isSyntax={true} codigo={`let variable = document.tipoDeSelector("nombre_del_elemento");`}/>


            {/* getElementById */}
            <Titulo level={2} text={`getElementById`}/>
            <Codigo lenguaje={"html"} codigo={`<p id="elemento"></p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let parrafo = document.getElementById("elemento");`}/>
            <Texto texto={`Selecciona un solo elemento por su id.`}/>
            


            {/* getElementsByTagName */}
            <Titulo level={2} text={`getElementsByTagName`}/>
            <Codigo lenguaje={"html"} codigo={`<p></p>
<p></p>
<p></p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let parrafos = document.getElementsByTagName("p");`}/>
            <Texto texto={`Selecciona todos los elementos que tengan esa etiqueta (por ejemplo, todos los <p>).`}/>


            <Titulo level={2} text={`querySelector`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="elemento1"></p>
<p id="elemento2"></p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let parrafo1 = document.querySelector(".elemento1");
let parrafo2 = document.querySelector("#elemento2");`}/>
            <Texto texto={`Selecciona el primer elemento que coincida con el selector (puede ser clase ., id #, etiqueta, etc.).`}/>



            {/* querySelectorAll */}
            <Titulo level={2} text={`querySelectorAll`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="elemento"></p>
<p class="elemento"></p>`}/>
            <Codigo lenguaje={"javascript"} codigo={`let parrafos = document.querySelectorAll(".elemento");`}/>
            <Texto texto={`Selecciona todos los elementos que coincidan con el selector (por ejemplo, todos los que tengan la misma clase).`}/>


            
        </MainCap>
    )
}