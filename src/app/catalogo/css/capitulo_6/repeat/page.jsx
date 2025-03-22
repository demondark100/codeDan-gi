import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function RepeatGridCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`repeat`}/>
                <Texto texto={`La función repeat() simplifica la creación de filas y columnas en Grid, permitiéndonos definir de manera más concisa cuántas veces se debe repetir un tamaño específico. Puede utilizar medidas flexibles como fr (que se ajusta al contenedor) o medidas tradicionales como px.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-columns: repeat(3,1fr); /*asignar espacios a las columnas |*/
grid-template-rows: repeat(3,1fr); /*asignar espacios a las filas -*/`}/>
            </Resumen>
            <Titulo text={`repeat`}/>
            <Texto texto={`repeat nos ayudará a resumir el código al definir cuántas filas y columnas queremos en nuestra cuadrícula de forma más sencilla.`}/>
            <Codigo lenguaje={"css"} codigo={`grid-template-rows: repeat(cuantas veces , medidas);`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="repeat_content">
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
    <div>
        .
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.repeat_content{
    border: 5px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
}
.repeat_content div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--repeaContent1--ejemplo">
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                </div>
            </Web>

            <Texto texto={`En este caso, estamos usando "1fr" para que las celdas se ajusten automáticamente al ancho del contenedor. Sin embargo, también podemos usar medidas fijas como "px" o "cm", así como medidas relativas como "%" o "vw".`}/>

            <Texto texto={`Para comprender mejor, en lugar de usar "fr", utilizaremos "px". Crearemos una grilla con 3 filas y 4 columnas, asignando medidas en píxeles.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="repeat_content">
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
            <Web>
                <div className="css--repeaContent2--ejemplo">
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                    <div>
                        .
                    </div>
                </div>
            </Web>
                <Enlace texto={`grid implicito`} link={"/catalogo/css/capitulo_6/gridImplicito"}/>
        </MainCap>
    )
}