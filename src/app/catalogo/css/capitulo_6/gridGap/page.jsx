import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function GridGapCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid-gap`}/>
                <Texto texto={`Esta propiedad hace que los elementos hijos tengan un espacio entre sí, pero sin separarse del borde del contenedor.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-column-gap: 10px; /*dejar espacio en las columnas |*/
grid-row-gap: 10px; /*dejar espacio en las filas -*/
grid-gap: 10px; /*dejar espacio en filas - y columnas |*/`}/>
            </Resumen>
            <Titulo text={`grid-gap`}/>
            <Texto texto={`Esto funciona como un margin, pero se aplica a todas las celdas del grid, separándolas entre sí sin afectar el contenedor.`}/>
            <Codigo lenguaje={"css"} codigo={`grid-gap: 15px;`}/>
            
            {/* grid-column-gap */}
            <Titulo level={2} text={`grid-column-gap`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="gap_column">
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
        <div>
            a
        </div>
    </div>`}/>
            <Codigo lenguaje={"css"} codigo={`.gap_column{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        border: 5px solid #3ce4b1;
    }
    .gap_column div{
        border: 2px solid #000;
    }`}/>
            <Web>
                <div className="css--gridGagColumnGap--ejmplo">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>
            <Texto texto={`Como puedes notar, se deja un espacio de 10px entre cada celda en las columnas, pero no afecta la separación con el contenedor.`}/>


            {/* grid-row-gap */}
            <Titulo level={2} text={`grid-row-gap`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_row">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grid_row{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    border: 5px solid #3ce4b1;
}
.grid_row div{
    border: 2px solid #000;
}`}/>
            <Web>
            <div className="css--gridGapGridRow--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>
            <Texto texto={`Como puedes notar, las filas se separan entre sí, pero no se separan del borde del contenedor.`}/>
            
            
            {/* ejemplo de grid gap */}
            <Titulo level={2} texto={`grid-gap`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_gap">
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
    <div>
        a
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grid_gap{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    border: 5px solid #3ce4b1;
}
.grid_gap div{
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridGap--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>
            <Texto texto={`Como puedes notar, ahora se separan tanto las filas como las columnas, manteniendo siempre una separación entre las celdas, pero sin separarse del borde del contenedor.`}/>

            <Enlace texto={`asignar espacios`} link={"/catalogo/css/capitulo_6/asignarEapciosGrid"}/>
        </MainCap>
    )
}