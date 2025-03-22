import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";



export default function CubirBezierCss(){
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`Cubic bezier`}/>
                <Texto texto={`Con esta propiedad manejamos la curva de la animación, es decir, la velocidad y el ritmo de las transiciones y animaciones.`}/>
                <Codigo lenguaje={"css"} codigo={`transition-timing-function: cubic-bezier(0.4,0.23,0.36,0.1);`}/>
                <Texto texto={`Aquí tienes una herramienta que te ayudará a crear de forma más sencilla los cubic-bezier:`}/>
                <Enlace texto={`Cubic Bezier Generator`} link={"https://cubic-bezier.com/#.42,0,.58,1"}/>
            </Resumen>
            <Titulo text={`Cubic bezier`}/>
            <Texto texto={`Esta propiedad se utiliza en transition-timing-function y animation-timing-function. Sirve para modificar la velocidad de las animaciones y transiciones del elemento mediante curvas de Bézier.

Esta función acepta cuatro parámetros que controlan la aceleración y desaceleración a lo largo del tiempo.`}/>
            <Codigo lenguaje={"css"} codigo={`Cubic-beszier(cooderana x y de arriba , coordenada del otro punto);
Cubic-beszier(cooderana x y de arriba , cooderana x y de arriba , coordenada del otro punto ,coordenada del otro punto);
Cubic-beszier(0.25,0.8,0.9,0.7);`} />
            

            {/* Cubic beszier transisition */}
            <Titulo level={2} text={`Cubic beszier transisition`}/>
            <Codigo lenguaje={"css"} codigo={`<div class="cubic_content">
    <div class="cubic_div"></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.cubic_content{
    background-color: #9eb6ff;
    width: 100%;
    height: 50%;
}
.cubic_div{
    width: 25%;
    height: 45%;
    background-color: #87d10f;
    border: 2px #000 solid;
    transition-property: left background;
    transition-duration: 1s;
    position: relative;
    left: 0;

    transition-timing-function: cubic-bezier(0.4,0.23,0.36,0.1);
}

.cubic_content:hover .cubic_div{
    background-color: #000;
    left: 50%;
}`}/>
            <Web>
                <div className="css--cubicBezierTransition--ejemplo">
                    <div className="css--cubicBezierTransition--ejemplo_div"></div>
                </div>
            </Web>


            {/* Cubic beszier animation */}
            <Titulo level={2} text={`Cubic beszier animation`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="animation_cubic">
    <div class="animation_cubic_div"></div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.animation_cubic{
    background-color: #9eb6ff;
    width: 100%;
    height: 50%;
}
.animation_cubic_div{
    width: 25%;
    height: 45%;
    background-color: #87d10f;
    border: 2px #000 solid;
    position: relative;
    left: 0;
    animation-name: con_cubic;
    animation-duration: 1s;
    animation-iteration-count: 3;
    
    animation-timing-function:  cubic-bezier(0.4,0.23,0.36,0.1);
}

@keyframes con_cubic {
    0%{
        left: 0;
        background-color: #87d10f;
    }
    100%{
        left: 100%;
        background-color: #000;
    }
}`}/>
            <Web>
                <div className="css--animationCubicBezier--ejemplo">
                    <div className="css--animationCubicBezier--ejemplo_div"></div>
                </div>
            </Web>
            

            <Texto texto={`Aquí tienes una herramienta que te ayudará a crear de forma más sencilla los cubic-bezier:`}/>
            <Enlace texto={`Cubic Bezier Generator`} link={"https://cubic-bezier.com/#.42,0,.58,1"}/>
        </MainCap>
    )
}