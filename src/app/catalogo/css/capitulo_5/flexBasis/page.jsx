import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function FlexBasisCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`flex-basis`}/>
                <Texto texto={`flex-basis define el ancho inicial de un elemento hijo y puede recibir tanto medidas fijas como relativas.`}/>
                <Codigo lenguaje={"css"} codigo={`flex-basis: 150px; // ancho inicial en pixeles.
flex-basis: 25%; // ancho inicial en porcentaje.`}/>
            </Resumen>
            <Titulo text={`flex-basis`}/>
            <Texto texto={`flex-basis define el tamaño inicial de un elemento antes de que se apliquen otras propiedades de flexbox, como flex-grow o flex-shrink.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="flex__grow">
    <div>caja 1</div>
    <div>caja 2</div>
    <div>caja 3</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.flex__grow{
    display: flex;
    background-color: #000;
    width: 100%;
}
.flex__grow div{
    background-color: #6f6666;
    color: #fff;
    border: #120e0e;
    margin: 15px;
    height: 350px;
    width: 50px;
}

.flex__grow div:nth-child(1){
    flex-basis: 150px;
}`}/>
            <Web>
                <div className="css--flexBasisEjemplo1--ejemplo">
                    <div>caja 1</div>
                    <div>caja 2</div>
                    <div>caja 3</div>
                </div>
            </Web>
            <Texto texto={`flex-basis acepta tanto unidades fijas (px, cm) como relativas (vw, %, etc.), permitiendo definir un tamaño inicial flexible para los elementos.`}/>

            <Enlace texto={`flex-shrink`} link={"/catalogo/css/capitulo_5/flexShrink"}/>
        </MainCap>
    )
}