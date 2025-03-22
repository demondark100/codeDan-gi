import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function GridCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid`}/>
                <Texto texto={`Con display: grid; podemos crear filas y columnas. Por defecto, Grid crea columnas, pero podemos personalizar su estructura con otras propiedades.`}/>
                <Codigo lenguaje={"css"} codigo={`display: grid;`}/>
            </Resumen>
            <Titulo text={`grid`}/>
            <Texto texto={`grid es similar a flex, pero permite crear tanto filas como columnas, ofreciendo un control más preciso sobre la distribución de los elementos.`}/>
            <Texto texto={`Al aplicar display: grid;, el elemento se comportará como un bloque y sus elementos hijos se convertirán en celdas dentro de la cuadrícula, permitiendo su personalización.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_content">
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grid_content{
    display: grid;
}
.grid_content div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridContainerEjemplo1--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>
            <Texto texto={`Al aplicar display: grid;, se crean columnas por defecto, pero podemos definir el número de columnas y filas con propiedades como grid-template-columns y grid-template-rows.`}/>
            <Enlace texto={`grid-template`} link={"/catalogo/css/capitulo_6/gridTemplate"}/>
        </MainCap>
    )
}