import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";
import Imagen from "@/componentes/cursos/media/imagen/imagen";


export default function AsignarEspaciosGrid() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Asignar espacios`}/>
                <Texto texto={`Con esto podemos asignar espacios a un elemento dentro del contenedor, definiendo su posición y tamaño en la cuadrícula.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-column: 1/3; /*asignar espacios a las columnas |*/
grid-row: 1/3; /*asignar espacios a las filas -*/`}/>
                <Texto texto={`"span" facilita la asignación de espacio en la cuadrícula, ya que en lugar de contar líneas, simplemente indica cuántas filas o columnas debe ocupar un elemento.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-column: 1 / span 2; /*Asignar espacios a las columnas |*/
grid-row: 1 / span 2; /*Asignar espacios a las filas -*/`}/>
            </Resumen>
            <Titulo text={`Asignar espacios`}/>
            <Texto texto={`Nosotros podemos asignar cuánto queremos que ocupe cada celda/grid item.

Estas propiedades se deben aplicar a los elementos hijos dentro del contenedor grid.`}/>
            <Texto texto={`Las líneas del grid tienen un número asignado que nos permite definir el tamaño y la ubicación de los elementos dentro del grid.`}/>
            <Imagen src={"https://keepcoding.io/wp-content/uploads/2022/06/diagrama-de-numeracion-de-lineas-de-grid.jpg"} alt={"grid numbers"}/>
            <Titulo level={2} text={`¿Como usar estas propiedades?`}/>
            <Texto texto={`Para definir cuánto espacio ocupa un elemento en el grid, usamos:

grid-row: Controla la posición y el tamaño del elemento en las filas.
grid-column: Controla la posición y el tamaño del elemento en las columnas`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="espacios">
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.con_resumir{
    display: grid;
    border: 5px solid #32a8a8;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.con_resumir div:nth-child(1){
    grid-column: 1/3;
}
.con_resumir div:nth-child(2){
    grid-row: 2/4;
}
.con_resumir div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--asigEspContent--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>

            <Titulo level={2} text={`span`}/>
            <Texto texto={`Esto nos ayuda a evitar contar las líneas manualmente. Al usar span, en lugar de referirse a los números de línea, se indicará cuántas filas o columnas debe abarcar el elemento.`}/>
            <Texto texto={`Podemos definir desde qué línea empieza un elemento y cuántas filas o columnas ocupará usando span.`}/>
            <Codigo lenguaje={"css"} codigo={`grid-row: 1 / span 3;`}/>
            <Titulo level={3} text={`ejemplo`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="span_content">
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.span_content{
    display: grid;
    border: 5px solid #32a8a8;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.span_content div:nth-child(1){
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
}
.span_content div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--asigEspSpan--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>

            <Enlace texto={`repeat`} link={"/catalogo/css/capitulo_6/repeat"}/>
        </MainCap>
    )
}