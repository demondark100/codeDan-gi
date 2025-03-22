import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function gridDinamicoCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid dinamico`}/>
                <Titulo level={2} text={`min-content y max-content`}/>
                <Texto texto={`Con estas propiedades manejamos el tamaño mínimo y máximo de las celdas en CSS Grid.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-columns: repeat(3, max-content); /* Las celdas ocupan el espacio máximo según su contenido */
grid-template-columns: repeat(3, min-content); /* Las celdas se ajustan al contenido más pequeño posible */`}/>
                <Titulo level={2} text={`minmax()`}/>
                <Texto texto={`Con minmax(), definimos un tamaño mínimo y máximo para las celdas.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-columns: repeat(3, minmax(80px, 200px)); 
/* Parámetro 1: medida mínima */
/* Parámetro 2: medida máxima */`}/>
                
                <Titulo level={2} text={`auto-fill`}/>
                <Texto texto={`auto-fill acomoda las celdas de forma dinámica sin necesidad de indicar cuántas columnas o filas queremos.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); 
/* Las celdas se acomodan de forma dinámica según la resolución */`}/>
                <Titulo level={2} text={`auto-fit`}/>
                <Texto texto={`auto-fit es similar a auto-fill, pero las celdas se expanden para ocupar el ancho total del contenedor.`}/>
                <Codigo lenguaje={"css"} codigo={`grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); 
/* Las celdas se ajustan al ancho del contenedor y se posicionan automáticamente */`}/>
            </Resumen>
            <Titulo text={`grid dinamico`}/>
            <Texto texto={`Con estas propiedades podemos posicionar mejor los elementos y manejar su comportamiento dentro de la cuadrícula.`}/>
            <Titulo level={2} text={`min-content y max-content`}/>
            <Texto texto={`Estas propiedades ajustan el tamaño de los elementos dentro del contenedor al mínimo o máximo espacio requerido. Generalmente, se utilizan dentro de repeat().`}/>


            {/* ejemplo de min-content */}
            <Titulo level={3} text={`Ejemplo con min-content`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="min_content">
    <div>a</div>
    <div>a</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.min_content {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: repeat(3, 1fr);
    background-color: #60615f;
}
.min_content div {
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
            <Web>
                <div className="css--gridDinamicoMinContent--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>

            {/* max-content */}
            <Titulo level={3} text={`Ejemplo con max-content`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="max_content">
    <div>a</div>
    <div>a</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.max_content {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: repeat(3, 120px);
    background-color: #60615f;
}
.max_content div {
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
            <Web>
                <div className="css--gridDinamicoMaxContent--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>

            {/* minmax() */}
            <Titulo level={2} text={`minmax()`}/>
            <Texto texto={`Esta propiedad nos permite definir un tamaño mínimo y máximo para las celdas.`}/>
            <Titulo level={3} text={`Ejemplo de uso`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="min_max">
    <div>a</div>
    <div>a</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.min_max {
    display: grid;
    grid-template-columns: repeat(3, minmax(80px, 200px));
    grid-template-rows: repeat(3, 1fr);
    background-color: #60615f;
}
.min_max div {
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
            <Web>
                <div className="css--gridDinamicoMinMx--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>


            {/* auto-fill */}
            <Titulo level={2} text={`auto-fill`}/>
            <Texto texto={`Esta propiedad posiciona dinámicamente las celdas una al lado de otra o en la siguiente fila cuando el espacio es insuficiente.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="auto_fill">
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.auto_fill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    background-color: #60615f;
}
.auto_fill div {
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
            <Web>
                <div className="css--gridDinamicoAutoFill--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
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
            <Texto texto={`A medida que se modifique la resolución de la pantalla, los elementos se reacomodarán de manera dinámica.`}/>


            {/* auto-fit */}
            <Titulo level={2} text={`auto-fit`}/>
            <Texto texto={`A diferencia de auto-fill, esta propiedad hace que los elementos se expandan para ocupar el espacio disponible.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="auto_fit">
    <div>a</div>
    <div>a</div>
    <div>a</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.auto_fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    background-color: #60615f;
}
.auto_fit div {
    border: 2px solid #000;
    background-color: #00000066;
    color: #fff;
}`}/>
            <Web>
                <div className="css--gridDinamicoAutoFit--ejemplo">
                    <div>a</div>
                    <div>a</div>
                    <div>a</div>
                </div>
            </Web>

            <Enlace texto={"Alineacion en grid"} link={`/catalogo/css/capitulo_6/alineacionGrid`}/>
        </MainCap>
    )
}