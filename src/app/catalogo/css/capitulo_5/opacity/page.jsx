import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function OpacityCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`opacity`}/>
                <Texto texto={`En resumen, opacity define la transparencia de un elemento, aceptando valores de 0 (completamente transparente) a 1 (opaco), con valores intermedios como 0.1, 0.5, etc.`}/>
                <Codigo lenguaje={"css"} codigo={`opacity: 1; /*nada de transparencia*/
opacity: 0.5; /*transparencia media*/
opacity: 0; /*transparencia completa*/`}/>
            </Resumen>
            <Titulo text={`opacity`}/>
            <Texto texto={`La propiedad opacity permite ajustar la transparencia de un elemento, creando efectos visuales elegantes y dinámicos.`}/>
            <Texto texto={`La propiedad opacity acepta valores entre 0 y 1, donde 0 es completamente transparente y 1 es completamente opaco. También se pueden usar valores intermedios como 0.1, 0.5, 0.9, etc., para ajustar el nivel de transparencia.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="opacity__content">
    <div>caja 1</div>
    <div>caja 2</div>
    <div>caja 3</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.opacity__content{ /*ejemplo de caja*/
    width: 100%;
    height: 100%;
    background-color: cornflowerblue;
}

.opacity__content div{
    width: 150px;
    height: 150px;
    border: 1px solid yellow;
    margin-bottom: 15px;
    background-color: black;
    color: white;
}

.opacity__content div:nth-child(1) {
    opacity: 1;
}
.opacity__content div:nth-child(2) {
    opacity: 0.5;
}
.opacity__content div:nth-child(3) {
    opacity: 0;
    margin-bottom: 0;
}`}/>
            <Web>
                <div className="css--contentOpacity1--ejemplo">
                    <div>caja 1</div>
                    <div>caja 2</div>
                    <div>caja 3</div>
                </div>
            </Web>
        </MainCap>
    )
}