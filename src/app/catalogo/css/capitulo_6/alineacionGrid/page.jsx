import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function AlineacionGridCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Alineación en Grid`}/>
                <Texto texto={`Grid también puede alinear elementos al igual que Flexbox.`}/>
                <Codigo lenguaje={"css"} codigo={`/*alineacion horizontal -*/
justify-items: start; /*alinea los elementod de forma horizontal- al inicio*/
justify-items: center; /*alinea los elementod de forma horizontal- al centro*/
justify-items: end; /*alinea los elementod de forma horizontal- al final*/

/*alineacion vertical |*/
align-items: start; /*alinea los elementod de forma vertical | al inicio*/
align-items: center; /*alinea los elementod de forma vertical | al centro*/
align-items: end; /*alinea los elementod de forma vertical | al final*/

/*justify-content(alineacion horizontal -)*/
justify-content: start; /*alinea el contenedor al inicio*/
justify-content: center; /*alinea el contenedor al centro*/
justify-content: end; /*alinea el contenedor al final*/

/*align-content(alineacion vertical |)*/
align-content: start; /*alinea el contenedor al inicio*/
align-content: center; /*alinea el contenedor al centro*/
align-content: end; /*alinea el contenedor al final*/

/*justify-self(alineacion horizontal -)*/
justify-self: start; /*alinea un solo elemento al inicio*/
justify-self: center; /*alinea un solo elemento al centro*/
justify-self: end; /*alinea un solo elemento al final*/`}/>
            </Resumen>
            <Titulo text={`Alineación en Grid`}/>
            <Texto texto={`En Grid, al igual que en Flexbox, podemos alinear los elementos. Existen dos formas principales de alineación:

1. Alinear el contenido dentro de cada celda.

2. Alinear las filas y columnas en el contenedor.`}/>
            

            {/* justify-items */}
            <Titulo level={2} text={`justify-items`}/>
            <Texto texto={`Esta propiedad alinea los elementos dentro de sus celdas en el eje horizontal (_).

1. start: posiciona los elementos al inicio.

2. center: posiciona los elementos al centro.

3. end: posiciona los elementos al final.`}/>
            <Web>
                <div className="css--alineacionGridJustifyItem--ejemplo">
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

            
            {/* align-items */}
            <Titulo level={2} text={`align-items`}/>
            <Texto texto={`Esta propiedad alinea los elementos dentro de sus celdas en el eje vertical (|).

1. start: posiciona los elementos al inicio.

2. center: centra los elementos.

3. end: posiciona los elementos al final.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="align_item">
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
            <Codigo lenguaje={"css"} codigo={`.align_item {
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    align-items: center;
}
.align_item div{
    border: 1px solid #000;
}`}/>
            <Web>
                <div className="css--alineacionGridAlignItem--ejemplo">
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

            {/* justify-content */}
            <Titulo level={2} text={`justify-content`}/>
            <Texto texto={`Esta propiedad alinea el contenido del contenedor en el eje horizontal (_).

1. start: alinea al inicio.

2. center: alinea al centro.

3. end: alinea al final.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="justify_content">
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
            <Codigo lenguaje={"css"} codigo={`.justify_content {
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    justify-content: center;
}`}/>
            <Web>
            <div class="css--alineacionGridJustifyContent--ejemplo">
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


            {/* align-content */}
            <Titulo level={2} text={`align-content`}/>
            <Texto texto={`Esta propiedad alinea el contenido del contenedor en el eje vertical (|).

1. start: alinea al inicio.

2. center: alinea al centro.

3. end: alinea al final.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="align_content">
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
            <Codigo lenguaje={"css"} codigo={`.align_content {
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    height: 100%;
    align-content: center;
}`}/>
            <Web>
                <div className="css--alineacionGridAlignContent--ejemplo">
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


            {/* justify-self y align-self */}
            <Titulo level={2} text={`justify-self y align-self`}/>
            <Texto texto={`Estas propiedades permiten alinear un solo elemento dentro de su celda.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="self">
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
            <Codigo lenguaje={"css"} codigo={`.self {
    background-color: #646158;
    border: 2px solid #87d10f;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
}

.self div {
    padding: 15px;
    background-color: #00000066;
    border: 2px solid #000;
    color: #fff;
}

.self div:nth-child(1) {
    align-self: start;
    justify-self: start;
}

.self div:nth-child(5) {
    align-self: center;
    justify-self: end;
}

.self div:nth-child(6) {
    align-self: center;
    justify-self: start;
}

.self div:nth-child(9) {
    align-self: end;
    justify-self: end;
}`}/>
            <Web>
                <div className="css--alineacionGridSelf--ejemplo">
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
            <Texto texto={`De forma predeterminada, todos los elementos están centrados, pero con align-self y justify-self podemos personalizar la alineación de elementos individuales. `}/>
            <Enlace texto={"grid area"} link={"/catalogo/css/capitulo_6/gridArea"}/>
        </MainCap>
    )
}