import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";

export default function TransitionCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`transition`}/>
                <Texto texto={`Con transition, podemos añadir animaciones suaves a los cambios de estilo, como en :hover.`}/>
                <Codigo lenguaje={"css"} codigo={`transition-duration: 1s; /*duracion de una transision*/
transition-property: background; /*que propiedad recibira la transision*/
transition-delay: 1s; /*la transision se ejecutara despues de un tiempo que indiquemos*/
background-color: inherit; /*inherit hace que algun contenedor erede el color de su contenedor*/

/*curva de tiempo en una animacion/transision*/
.timing_content div:nth-child(1){
  transition-timing-function: linear;
}
.timing_content div:nth-child(2){
  transition-timing-function: ease;
  /* "ease" es la propiedad que viene por defecto. */
}
.timing_content div:nth-child(3){
  transition-timing-function: ease-in;
}
.timing_content div:nth-child(4){
  transition-timing-function: ease-out;
}
.timing_content div:nth-child(5){
  transition-timing-function: ease-in-out;
}`}/>
            </Resumen>
            <Titulo text={`transition`}/>
            <Texto texto={`Esto es para hacer transiciones en distintas cosas, es como dar una animación, por ejemplo, a los hover.
En simples palabras, transition nos mostrará el proceso de un cambio a otro`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="ejemplo1_tr">
    <p>hola.</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.ejemplo1_tr {
    background-color: #000;
    color: #fff;
    transition-duration: .5s;
}

.ejemplo1_tr:hover {
    background-color: #0f0;
    color: #000;
}`}/>
            <Web>
                <div className="css--transition--ejemplo">
                    <p>hola.</p>
                </div>
            </Web>
            <Texto texto={`Al pasar el mouse sobre el elemento <p>, la transición de color se hace de forma progresiva.`}/>

            <Titulo level={2} text={`transition-property`}/>
            <Texto texto={`Con esto, indicamos qué propiedad queremos que haga la transición, por ejemplo: background, color, font, etc.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="property_content">
    <div class="cajita1"></div>
</div>
`}/>
            <Codigo lenguaje={"css"} codigo={`.property_content {
    background-color: #1815d1f8;
    height: 65%;
    padding: 10px;
}

.cajita1 {
    width: 35%;
    height: 40%;
    background-color: #87d10f;
    transition-property: background;
    transition-duration: .5s;
}

.cajita1:hover {
    background-color: #2f87a1;
}`}/>
            <Web>
                <div className="css--transitionProperty--ejemplo">
                    <div></div>
                </div>
            </Web>
            <Texto texto={`Si no especificamos transition-property, el sitio web consumirá más recursos, lo que puede afectar el rendimiento.`}/>
            

            {/* transition-duration */}
            <Titulo level={2} text={`transition-duration`}/>
            <Texto texto={`Esta propiedad define cuánto tiempo durará la transición. Se puede expresar en segundos:

1s, 2s, 3s, etc.
También se pueden usar valores menores a un segundo: .5s, .1s, .8s.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="duration_content">
    <div class="cajita2"></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.duration_content {
    background-color: #000000f8;
    height: 65%;
    padding: 10px;
}

.cajita2 {
    width: 35%;
    height: 40%;
    background-color: #ffffff;
    transition-property: background;
    transition-duration: 1s;
}

.cajita2:hover {
    background-color: #000000;
}`}/>
            <Web>
                <div className="css--transitionDutation--ejemeplo">
                    <div></div>
                </div>
            </Web>
            <Texto texto={`Aquí, la transición se hace en 1 segundo, pero puedes modificar este tiempo según tu preferencia.`}/>


            {/* transition-delay */}
            <Titulo level={2} text={`transition-delay`}/>
            <Texto texto={`Si queremos que la transición no ocurra al instante, podemos establecer un tiempo de espera con transition-delay.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="delay_content">
    <div class="cajita3"></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.delay_content {
    background-color: #000000f8;
    height: 65%;
    padding: 10px;
}

.cajita3 {
    width: 35%;
    height: 40%;
    background-color: #ffffff;
    transition-property: background;
    transition-duration: 1s;
    transition-delay: 1s;
}

.cajita3:hover {
    background-color: #000000;
}`}/>
            <Web>
                <div className="css--transitionDeloy--ejemplo">
                    <div></div>
                </div>
            </Web>
            <Texto texto={`Mantén el mouse sobre el cuadrado blanco durante un segundo para que la transición se active.`}/>


            {/* inherit */}
            <Titulo level={2} text={`inherit`}/>
            <Texto texto={`Esta propiedad hereda el color de su contenedor.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="i_content">
    <div class="i_hijo"></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.i_content {
    background-color: #2f87a1;
    width: 100%;
    height: 50%;
    padding: 15px;
}

.i_hijo {
    width: 35%;
    height: 35%;
    border: 2px solid #000;
    background-color: inherit;
}`}/>
            <Web>
                <div className="css--transitionInherit--ejemplo">
                    <div></div>
                </div>
            </Web>


            {/* transition-timing-function */}
            <Titulo level={2} text={`transition-timing-function`}/>
            <Texto texto={`Esta propiedad define la curva de tiempo que tomará la animación.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="timing_content">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.timing_content {
    padding: 25px;
    background-color: #2f87a1;
}

.timing_content div {
    border: 2px solid #000;
    margin: 15px;
    width: 25%;
    height: 50px;
    background-color: #000;
    transition-property: background, left;
    transition-duration: 1s;
    position: relative;
    left: 0;
}

.timing_content:hover div {
    left: 50%;
    background-color: inherit;
}

.timing_content div:hover {
    background-color: inherit;
}

.timing_content div:nth-child(1) {
    transition-timing-function: linear;
}

.timing_content div:nth-child(2) {
    transition-timing-function: ease;
}

.timing_content div:nth-child(3) {
    transition-timing-function: ease-in;
}

.timing_content div:nth-child(4) {
    transition-timing-function: ease-out;
}

.timing_content div:nth-child(5) {
    transition-timing-function: ease-in-out;
}`}/>
            <Web>
                <div className="css--transitionTiming--ejemplo">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Web>
            <Texto texto={`Como puedes notar, las animaciones parecen moverse a diferentes velocidades, pero todas terminan al mismo tiempo, solo que la animación crea una curva de tiempo.`}/>


            {/* Diferencia de tiempos en transition-property y transition-duration */}
            <Titulo level={2} text={`Diferencia de tiempos en transition-property y transition-duration`} />
            <Texto texto={`Si queremos que cada propiedad tenga un tiempo de animación diferente, debemos separarlos con comas.`}/>
            <Codigo lenguaje={"css"} codigo={`transition-property: background, left;
transition-duration: .4s, 1.2s;`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="diferencia_content">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.diferencia_content {
    padding: 25px;
    background-color: #2f87a1;
}

.diferencia_content div {
    border: 2px solid #000;
    margin: 15px;
    width: 25%;
    height: 50px;
    background-color: #000;
    transition-property: background, left;
    transition-duration: .4s, 1.2s;
    position: relative;
    left: 0;
}

.diferencia_content:hover div {
    left: 50%;
    background-color: inherit;
}

.diferencia_content div:hover {
    background-color: inherit;
}

.diferencia_content div:nth-child(1) {
    transition-timing-function: linear;
}

.diferencia_content div:nth-child(2) {
    transition-timing-function: ease;
}

.diferencia_content div:nth-child(3) {
    transition-timing-function: ease-in;
}

.diferencia_content div:nth-child(4) {
    transition-timing-function: ease-out;
}

.diferencia_content div:nth-child(5) {
    transition-timing-function: ease-in-out;
}`}/>
            <Web>
                <div className="css--transitionDiferenciaTime--ejemplo">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Web>
            <Texto texto={`Aquí, el background cambia más rápido que la posición left.`}/>
        </MainCap>
    )
}