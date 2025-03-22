import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function GridTemplateCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid-template`}/>
                <Texto texto={`Con grid-template-rows y grid-template-columns asignamos el número y tamaño de filas y columnas en un grid.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-rows: 150px 150px 150px; /*asignar filas -*/
grid-template-columns: 150px 150px 150px; /*asignar columnas |*/`}/>
                <Texto texto={`Con fr creamos filas y columnas que ocupan proporcionalmente todo el espacio disponible en su contenedor.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-rows: 1fr 1fr 1fr; /*asignar filas -*/
grid-template-columns: 1fr 1fr 1fr; /*asignar columnas |*/`}/>
            </Resumen>
            <Titulo text={`grid-template`}/>
            <Texto texto={`Con grid-template-rows y grid-template-columns podemos definir cuántas filas y columnas queremos en un contenedor Grid. Estas propiedades se aplican al grid container.`}/>
            <Titulo level={2} text={`grid-template-rows`}/>
            <Texto texto={`Con grid-template-rows podemos definir cuántas filas queremos en nuestro grid container.`}/>
            <Codigo lenguaje={"css"} codigo={`/* grid-template-rows define la cantidad de filas en el grid container y sus respectivas medidas. */
/* ejemplo: */
grid-template-rows: 10px 10px 10px 10px 10px;
/*Esto creará 5 filas con una altura de 10px cada una.*/`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="rows_content">
    <div>
        caja 1
    </div>
    <div>
        caja 2
    </div>
    <div>
        caja 3
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.rows_content{
    display: grid;
    grid-template-rows: 150px 150px 150px 150px;
}
.rows_content div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridTemplateRows--ejemplo">
                    <div>caja 1</div>
                    <div>caja 2</div>
                    <div>caja 3</div>
                </div>
            </Web>
            <Texto texto={`Nosotros pusimos 3 elementos hijos/cajas, pero definimos grid-template-rows con 4 valores, y aun así, la última fila se dibuja en el contenedor.`}/>
            
            
            {/* ejemplo de grid-template-columns */}
            <Titulo level={2} text={`grid-template-columns`}/>
            <Texto texto={`Esto funciona igual que grid-template-rows, pero se aplica a las columnas.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content_columns">
    <div>
        caja 1
    </div>
    <div>
        caja 2
    </div>
    <div>
        caja 3
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.content_columns{
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;
}
.content_columns div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridTemplateColumns--ejemplo">
                    <div>
                        caja 1
                    </div>
                    <div>
                        caja 2
                    </div>
                    <div>
                        caja 3
                    </div>
                </div>
            </Web>
            <Texto texto={`Aquí también se crea una columna adicional, incluso si no hay suficientes elementos para llenarla`}/>

            <Texto texto={`grid-template-columns y grid-template-rows pueden recibir cualquier unidad de medida como px, cm, %, vw, vh, etc., para definir el tamaño de las celdas.`}/>


            {/* fr */}
            <Titulo level={2} text={`fr`}/>
            <Texto texto={`grid tiene su propia unidad de medida llamada fr (fracción), que permite que los elementos se ajusten automáticamente al tamaño disponible dentro del contenedor.`}/>
            <Codigo lenguaje={"css"} codigo={`/* estos se deben poner como medidas. */
grid-template-rown: 1fr 1fr;
grid-template-columns: 1fr 1fr:`}/>
            <Codigo lenguaje={"css"} codigo={`.fr_content{
    display: grid;
    height: 50%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.fr_content div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridTemplatFr--ejemplo">
                    <div>caja 1</div>
                    <div>caja 2</div>
                    <div>caja 3</div>
                    <div>caja 4</div>
                </div>
            </Web>

            <Enlace texto={`grid-gap`} link={"/catalogo/css/capitulo_6/gridGap"}/>
        </MainCap>
     )
}