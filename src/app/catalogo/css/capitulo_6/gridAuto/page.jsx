import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";

export default function gridAuto() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid Auto`}/>
                <Texto texto={`grid-auto se encarga de crear filas y columnas de forma automática cuando hay elementos de más.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-auto-rows: 128px; /* Crea filas automáticas con una altura de 128px */
grid-auto-columns: 128px; /* Crea columnas automáticas con un ancho de 128px */`}/>
                <Texto texto={`grid-auto-flow maneja el comportamiento de las celdas que se crean automáticamente.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-auto-flow: column; /* Las celdas se crearán automáticamente en columnas */
grid-auto-flow: row; /* Las celdas se crearán automáticamente en filas */
grid-auto-flow: dense; /* Las celdas se ubicarán automáticamente en los espacios vacíos disponibles */`}/>
            </Resumen>
            <Titulo text={`grid Auto`}/>
            <Texto texto={`Con estas propiedades podemos controlar el Grid Implícito. En los ejemplos anteriores, las filas adicionales se creaban automáticamente. Ahora aprenderemos cómo definir el tamaño de estas filas o columnas que se generan dinámicamente.`}/>

            {/* propiedades principales */}
            <Titulo level={2} text={`Propiedades principales:`}/>
            <Codigo lenguaje={"css"} codigo={`grid-auto-columns: medida;
grid-auto-rows: medida;`}/>
            <Texto texto={`Nota: Estas propiedades no admiten repeat(), ya que solo especificamos una medida única para todas las filas o columnas adicionales.`}/>


            {/* Ejemplo sin grid-auto (crecimiento implícito sin control de tamaño) */}
            <Titulo level={2} text={`Ejemplo sin grid-auto (crecimiento implícito sin control de tamaño)`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="sin_auto">
    <div>.</div>
    <div>.</div>
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
            <Codigo lenguaje={"css"} codigo={`.sin_auto {
    border: 5px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 120px);
}

.sin_auto div {
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridAutoContent1--ejemplo">
                    <div>.</div>
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
            <Texto texto={`Problema: Los elementos adicionales no tienen una altura definida, lo que puede causar un diseño inconsistente.`}/>


            {/* Ejemplo con grid-auto-rows (controlando el tamaño de filas adicionales) */}
            <Titulo level={2} text={`Ejemplo con grid-auto-rows (controlando el tamaño de filas adicionales)`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="con_auto">
    <div>.</div>
    <div>.</div>
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
            <Codigo lenguaje={"css"} codigo={`.con_auto {
    border: 5px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 120px);
    grid-auto-rows: 120px; /* Define el tamaño de filas adicionales */
}

.con_auto div {
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridAutoContent2--ejemplo">
                    <div>.</div>
                    <div>.</div>
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

            <Titulo level={2} text={`grid-auto-flow`}/>
            <Texto texto={`Esta propiedad define si los elementos adicionales se colocarán en filas o columnas.`}/>
            <Codigo lenguaje={"css"} codigo={`grid-auto-flow: row;  /* Se crean filas automáticamente (por defecto) */
grid-auto-flow: column;  /* Se crean columnas automáticamente */`}/>
            <Texto texto={`Ejemplo con grid-auto-flow: column`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_flow">
    <div>.</div>
    <div>.</div>
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
            <Codigo lenguaje={"css"} codigo={`.grid_flow {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    grid-auto-flow: column; /* Se crean columnas en lugar de filas */
    grid-auto-columns: 120px; /* Define el ancho de las nuevas columnas */
}

.grid_flow div {
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridAutoContent3--ejemplo">
                    <div>.</div>
                    <div>.</div>
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
            <Texto texto={`Diferencia clave: En lugar de agregar nuevas filas, ahora se agregan columnas automáticamente.`}/>
            

            {/* grid-auto-flow: dense */}
            <Titulo level={2} text={`grid-auto-flow: dense`}/>
            <Texto texto={`La opción dense permite que los elementos se reacomoden si hay espacios vacíos en el grid.`}/>
            <Codigo lenguaje={"css"} codigo={`grid-auto-flow: dense;`}/>
            <Texto texto={`Si un espacio queda vacío y hay un elemento que encaja en él, se moverá automáticamente a esa posición.`}/>
            
            
            <Titulo level={2} text={`Ejemplo con grid-auto-flow: dense`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_flow_dense">
    <div>.</div>
    <div>.</div>
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
            <Codigo lenguaje={"css"} codigo={`.grid_flow_dense {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    border: 4px solid #000;
    background-color: #4d635e;
    grid-auto-flow: dense;
}

.grid_flow_dense div {
    border: 2px solid #000;
    background-color: #211a1a88;
    color: #fff;
}

/* Sección que generará espacios vacíos */
.grid_flow_dense div:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

.grid_flow_dense div:nth-child(2) {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
}

.grid_flow_dense div:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 3;
}`}/>
            <Web>
                <div className="css--gridAutoContent4--ejemplo">
                    <div>.</div>
                    <div>.</div>
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
            <Texto texto={` Efecto de dense: Si se generan espacios vacíos, el grid intentará rellenarlos con elementos más pequeños.`}/>
            
            <Enlace texto={`grid dinamico`} link={"/catalogo/css/capitulo_6/gridDinamico"}/>
        </MainCap>
    )
}