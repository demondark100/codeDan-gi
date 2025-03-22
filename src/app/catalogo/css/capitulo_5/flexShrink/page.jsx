import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function FlexShrinkCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`flex-shrink`}/>
                <Texto texto={`flex-shrink reduce el tamaño de un elemento hijo cuando no hay suficiente espacio en el contenedor, siendo lo opuesto a flex-grow, que lo expande.`}/>
                <Codigo lenguaje={"css"} codigo={`flex-shrink: 2;`}/>
            </Resumen>
            <Titulo text={`flex-shrink`}/>
            <Texto texto={`flex-shrink es lo opuesto a flex-grow; en lugar de expandir los elementos cuando hay espacio disponible, los encoge cuando no hay suficiente espacio en el contenedor.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="flex__shrink">
    <div>caja 1</div>
    <div>caja 2</div>
    <div>caja 3</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.flex__shrink {
    background-color: #000;
    width: 400px; /* Reducimos el tamaño del contenedor */
    height: 200px;
    display: flex;
}

.flex__shrink div {
    background-color: #3c3939;
    color: #fff;
    margin: 15px;
    flex-grow: 1;
    flex-basis: 200px; /* Establecemos un tamaño base mayor que el contenedor */
}

.flex__shrink div:nth-child(2) {
    flex-shrink: 2; /* Se encogerá más rápido que los demás */
}`}/>
            <Web>
                <div className="css--flexShrinkContent--ejemplo">
                    <div>caja 1</div>
                    <div>caja 2</div>
                    <div>caja 3</div>
                </div>
            </Web>
            <Texto texto={`Como podemos ver, cada div tiene un flex-basis de 200px, pero el contenedor solo mide 400px. Debido a esto, la caja 2 se reduce más que las otras porque flex-shrink ajusta su tamaño para que todas encajen dentro del contenedor.`}/>
        </MainCap>
    )
}