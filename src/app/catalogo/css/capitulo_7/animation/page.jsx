import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function AnimationCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Animation`}/>
                <Texto texto={`"@keyframes" se utiliza para definir animaciones en elementos HTML sin necesidad de interacción del usuario. Permite especificar cómo cambiarán los estilos del elemento en diferentes etapas de la animación.`}/>
                <Codigo lenguaje={"css"} codigo={`.elemento{
  animation-name: animacion; /*nombre de la animacion*/
  animation-duration: 1s; /*cuanto tiempo durara la animacion*/
  animation-iteration-count: 3; /*cuantas veces se repetira la animacion*/
  animation-iteration-count: infinite; /*la animacion se repetira de forma infinita*/
  animation-direction: normal; /*la animacion se comporta de forma normal*/
  animation-direction: reverse; /*la animacion se hace en reversa*/
  animation-direction: alternate; /*la animacion va y viene osea es normal y reverse*/
  animation-direction: alternate-reverse; /*la animacion se comporta como alternate pero en reversa*/
  animation-fill-mode: none; /*la animacion vuelve a la normalidad*/
  animation-fill-mode: forwards; /*la animacion se queda como finaliza*/
  animation-fill-mode: both; /*inicia la animacion con las propiedades del inicio*/
}
@keyframes animacion{ /*"animacion" es el nombre de la animacion*/
  from{
    /*animacion*/
  }
  to{
    /*animacion*/
  }
}`}/>
                <Texto texto={`También podemos definir qué cambios ocurrirán en cada momento específico de la animación utilizando porcentajes (0%, 50%, 100%)`}/>
                <Codigo lenguaje={"css"} codigo={`@keyframes animacion{ /*"animacion" es el nombre de la animacion*/
  0%{
    /*animacion*/
  }
  50%{
    /*animacion*/
  }
  75%{
    /*animacion*/
  }
  100%{
    /*animacion*/
  }
}`}/>
            </Resumen>
            <Titulo text={`Animation`}/>
            <Texto texto={`Las animaciones en CSS permiten cambiar gradualmente los estilos de un elemento a lo largo del tiempo. Se definen con @keyframes y pueden controlarse mediante varias propiedades de la regla animation.`}/>
            <Titulo level={2} text={`Uso de @keyframes`}/>
            <Texto texto={`La regla @keyframes define los pasos de la animación.`}/>
            <Codigo lenguaje={"css"} codigo={`@keyframes nombreAnimacion {
    from { /* Estilos al inicio */ }
    to { /* Estilos al final */ }
}`}/>
            <Texto texto={`También se pueden usar porcentajes para definir múltiples etapas:`}/>
            <Codigo lenguaje={"css"} codigo={`@keyframes nombreAnimacion {
    0% { /* Inicio */ }
    50% { /* Mitad */ }
    100% { /* Fin */ }
}`}/>

            {/* Propiedades de animation */}
            <Titulo level={2} text={`Propiedades de animation`}/>
            
            {/* animation-name */}
            <Titulo level={2} text={`animation-name`}/>
            <Texto texto={`Define el nombre de la animación que se aplicará a un elemento.`}/>
            <Codigo lenguaje={"css"} codigo={`.elemento {
    animation-name: mover;
}

@keyframes mover {
    from { background-color: black; }
    to { background-color: white; }
}`}/>

            {/* animation-duration */}
            <Titulo level={2} text={`animation-duration`}/>
            <Texto texto={`animation-duration es similar a transition-duration.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="ContentAnimation__duratio">
    <div class="animation__duratio"></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.ContentAnimation__duratio{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
    padding: 20px;
}
.animation__duration{
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: mover_caja;
    animation-duration: 2s;
}

@keyframes mover_caja {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
            <Web>
                <div className="css--animationDutation--ejemplo">
                    <div></div>
                </div>
            </Web>


            {/* animation-timing-function */}
            <Titulo level={2} text={`animation-timing-function`}/>
            <Texto texto={`Esto tiene las mismas propiedades que transition-timing-function y funciona igual que transition.`}/>
            <Codigo lenguaje={"css"} codigo={`
animation-timing-function: linear;
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="animation_content">
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.animation_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
    padding: 20px;
}
.animation_content div{
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;
    animation-timing-function: ease-in;
    animation-name: timingFunc;
    animation-duration: 2s;
}

@keyframes timingFunc {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
            <Web>
                <div className="css--animationTimingFunction--ejemplo">
                    <div></div>
                </div>
            </Web>


            {/* animation-iteration-count */}
            <Titulo level={2} text={`animation-iteration-count`}/>
            <Texto texto={`Esto es para indicar cuántas veces se realizará la animación.

Podemos especificar el número de repeticiones o hacer que la animación se ejecute de forma infinita.

animation-iteration-count: 3;
animation-iteration-count: infinite;`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="iteracion_content">
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.iteracion_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.iteracion_content div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: iteracion;
    animation-duration: 1s;
    animation-iteration-count: 3; /*aqui en vez de 3 podemos poner "infinite" o cualquier numero*/
}

@keyframes iteracion {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
            <Web>
                <div className="css--animationIterationCount--ejemplo">
                    <div></div>
                </div>
            </Web>




            {/* animation-direction */}
            <Titulo level={2} text={`animation-direction`}/>
            <Texto texto={`Esto sirve para indicar la dirección o el comportamiento de la animación.

Las opciones disponibles son:

normal: Valor por defecto, la animación se ejecuta en su orden original.
reverse: La animación se ejecuta en reversa.
alternate: La animación va y vuelve, combinando normal y reverse.
alternate-reverse: Igual que alternate, pero iniciando en reversa.`}/>
            <Titulo level={3} text={`reverse`} />
            <Codigo lenguaje={"html"} codigo={`<div class="reverse_content">
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.reverse_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.reverse_content div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: reverseAnimation;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: reverse;
}

@keyframes reverseAnimation {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
            <Web>
                <div className="css--animationDirectionReverse--ejemplo">
                    <div></div>
                </div>
            </Web>



            {/* alternate */}
            <Titulo level={3} text={`alternate`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="alternate_content">
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.alternate_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.alternate_content div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: alternateAnimation;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;
}

@keyframes alternateAnimation {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
            <Web>
                <div className="css--animationDirectionAlternate--ejemplo">
                    <div></div>
                </div>
            </Web>


            {/* alternate-reverse */}
            <Titulo level={3} text={`alternate-reverse`} />
            <Codigo lenguaje={"html"} codigo={`<div class="alternate_reverse_content">
    <div></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.alternate_content{
    width: 100%;
    height: 50%;
    background-color: #9eb6ff;
}
.alternate_content div{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: alternate-reverse;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;
}

@keyframes reverse {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}`}/>
            <Web>
                <div className="css--animationDirectionAlternateReverse--ejemplo">
                    <div></div>
                </div>
            </Web>


            {/* animation-fill-mode */}
            <Titulo level={2} text={`animation-fill-mode`}/>
            <Texto texto={`Esta propiedad define cómo se quedará el elemento al finalizar la animación.

Las opciones disponibles son:

none: La animación vuelve a su estado original.
forwards: El elemento mantiene el estado final de la animación.
backwards: Aplica los estilos del primer fotograma de la animación antes de que esta inicie.
both: Combina forwards y backwards, aplicando los estilos del primer y último fotograma según corresponda.`}/>
            <Codigo lenguaje={"html"} codigo={`<!-- none -->

<div class="none_content">
    <div class="none_hijo">

    </div>
</div>

<!-- forwards -->

<div class="forwards_content">
    <div class="forwards_hijo">

    </div>
</div>

<!-- both -->

<div class="both_content">
    <div class="both_hijo">

    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`/* none */

.none_content{
    width: 100%;
    height: 25%;
    background-color: #9eb6ff;
    margin-bottom: 15px;
}
.none_hijo{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: none_a;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;

    animation-fill-mode: none;
}

@keyframes none_a {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 100%;
        background-color: #fff;
    }
}



/* forwards */

.forwards_content{
    width: 100%;
    height: 25%;
    background-color: #9eb6ff;
    margin-bottom: 15px;
}
.forwards_hijo{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: forwards_a;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: alternate;

    animation-fill-mode: forwards;
}

@keyframes forwards_a {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 70%;
        background-color: #fff;
    }
}


/* both */

.both_content{
    width: 100%;
    height: 25%;
    background-color: #9eb6ff;
    margin-bottom: 15px;
}
.both_hijo{
    top: 15px;
    width: 110px;
    height: 110px;
    border: 2px solid #000;
    background-color: inherit;
    position: relative;

    animation-name: both_a;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-direction: normal;

    animation-fill-mode: both;
}

@keyframes both_a {
    from{
        left: 0;
        background-color: #000;
    }
    to{
        left: 70%;
        background-color: #fff;
    }
}`}/>
        </MainCap>
    )
}