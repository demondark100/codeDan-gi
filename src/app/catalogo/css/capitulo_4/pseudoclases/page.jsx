import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function PseudoclasesCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`pseudoclases`}/>
                <Texto texto={`Las pseudoclases en CSS permiten aplicar estilos según el estado o interacción de un elemento, como :hover, :focus, :active y :nth-child().`}/>
                <Codigo lenguaje={"css"} codigo={`/*hover*/
.hover_e:hover{ /*se estiliza cuando el usuario pase el mouse sobre el elemento*/
  color: wheat;
  background-color: black;
}

/*link*/
#click{
  background-color: black;
  color: wheat;
}
#click:link{ /*se estiliza cuando el usuario hace click en un link*/
  background-color: green;
}

/*active*/
#btn{
  background-color: black;
  color: wheat;
  display: block;
  margin: auto;
}
#btn:active{ /*se estiliza cuando se mantiene clickeado un elemento*/
  background-color: orange;
  color: black;
}


/*focus*/
#input:focus{ /*se estiliza cuando se hace click a un elemento*/
  background-color: black;
  color: orange;
}


/*nth-child*/
li:nth-child(odd) {
    background-color: lightblue; /* Elementos impares */
}

li:nth-child(even) {
    background-color: lightgreen; /* Elementos pares */
}

li:nth-child(3) {
    font-weight: bold;
    color: red; /* Solo el tercer elemento */
}`}/>
            </Resumen>
            <Titulo text={`pseudoclases`}/>
            <Texto texto={`Las pseudoclases de CSS se usan para seleccionar y aplicar estilos a elementos según su estado, interacción con el usuario o posición en el documento, permitiendo estilos dinámicos sin modificar el HTML.`}/>
            <Codigo lenguaje={"sintaxis"} codigo={`elemento:pseudoclase{}`}/>


            {/* hover */}
            <Titulo level={2} text={`hover`}/>
            <Texto texto={`"hover" se activará cuando pases el mouse sobre un elemento. Puedes aplicar cualquier estilo que desees.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="hover_e">
    hover.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.hover_e:hover{
    color: wheat;
    background-color: black;
}`}/>
            <Web>
                <p className="css--pseudoclasesHover--ejemplo">
                    hover.
                </p>
            </Web>


            {/* link */}
            <Titulo level={2} text={`link`}/>
            <Texto texto={`":link" se aplica a los enlaces no visitados, permitiendo asignarles un estilo antes de que el usuario haga clic en ellos.`}/>
            <Codigo lenguaje={"html"} codigo={`<a id="click" href="#">click aqui</a>`}/>
            <Codigo lenguaje={"css"} codigo={`#click{
    background-color: black;
    color: wheat;
}
#click:link{
    background-color: green;
}`}/>
            <Web>
                <a className="css--pseudoclasesLink--ejemplo" href="#">click aqui</a>
            </Web>


            {/* active */}
            <Titulo level={2} text={`active`}/>
            <Texto texto={`":active" se activará mientras se mantenga presionado el clic sobre el elemento al que se le aplicó esta pseudoclase.`}/>
            <Codigo lenguaje={"html"} codigo={`<button id="btn_1">
    activado
</button>`}/>
            <Codigo lenguaje={"css"} codigo={`#btn_1{
    background-color: black;
    color: wheat;
    display: block;
    margin: auto;
}
#btn_1:active{
    background-color: orange;
    color: black;
}`}/>
            <Web>
                <button className="css--pseudoclasesActive--ejemplo">
                    activado
                </button>
            </Web>


            {/* focus */}
            <Titulo level={2} text={`focus`}/>
            <Texto texto={`":focus" se usa principalmente en inputs y se activa cuando el elemento recibe enfoque, es decir, cuando el usuario hace clic en él o navega con el teclado.`}/>
            <Codigo lenguaje={"html"} codigo={`<input type="text" id="inputFeliz">`}/>
            <Codigo lenguaje={"css"} codigo={`#inputFeliz:focus{
    background-color: black;
    color: orange;
}`}/>
            <Web>
                <input type="text" className="css--pseudoclasesFocus--ejemplo" />
            </Web>


            {/* nth-child */}
            <Titulo level={2} text={`nth-child`}/>
            <Texto texto={`:nth-child(n) selecciona elementos según su posición dentro de un contenedor, donde n puede ser un número, palabra clave o fórmula.`}/>
            <Codigo lenguaje={"html"} codigo={`<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    <li>Elemento 4</li>
    <li>Elemento 5</li>
</ul>`}/>
            <Codigo lenguaje={"css"} codigo={`li:nth-child(odd) {
    background-color: lightblue; /* Elementos impares */
}

li:nth-child(even) {
    background-color: lightgreen; /* Elementos pares */
}

li:nth-child(3) {
    font-weight: bold;
    color: red; /* Solo el tercer elemento */
}`}/>
            <Web>
                <ul>
                    <li className="css--pseudoclasesNthChild--ejemplo">Elemento 1</li>
                    <li className="css--pseudoclasesNthChild--ejemplo">Elemento 2</li>
                    <li className="css--pseudoclasesNthChild--ejemplo">Elemento 3</li>
                    <li className="css--pseudoclasesNthChild--ejemplo">Elemento 4</li>
                    <li className="css--pseudoclasesNthChild--ejemplo">Elemento 5</li>
                </ul>
            </Web>
        </MainCap>
    )
}