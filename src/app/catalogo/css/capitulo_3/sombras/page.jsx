import MainCap from "@/app/catalogo/componentes/main/main"
import Web from "@/app/catalogo/componentes/web/web"
import Codigo from "@/componentes/cursos/codigo/codigo"
import Texto from "@/componentes/cursos/texto/texto"
import Titulo from "@/componentes/cursos/titulo/titulo"
import Resumen from "@/componentes/cursos/resumen/resumen"

import "./sombras.css";

export default function SombrasCss(){
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`box-shadow`}/>
                <Texto texto={`box-shadow se usa para añadir sombras a los elementos, tanto externas como internas, con opciones para controlar la posición, el desenfoque, el borde y el color de la sombra.`}/>
                <Codigo lenguaje={"css"} codigo={`
.sombraDefault{
    box-shadow: -8px 8px 15px 8px cadetblue; /*sombra por defecto*/                    
}
.sombraInterna{
    box-shadow: inset -8px 8px 15px 8px cadetblue /*sombra interna*/
}
`}/>
            </Resumen>
            <Titulo text={`Sombras`}/>
            <Texto texto={`La propiedad box-shadow en CSS es similar a border, pero en lugar de agregar bordes, permite aplicar sombras a los elementos, mejorando su apariencia visual.`}/>
            <Titulo level={2} text={"box-shadow"}/>
            <Texto texto={`La propiedad box-shadow en CSS se compone de los siguientes valores:

Eje X: Desplazamiento horizontal de la sombra (positivo hacia la derecha, negativo hacia la izquierda).
Eje Y: Desplazamiento vertical de la sombra (positivo hacia abajo, negativo hacia arriba).
Desenfoque: Controla qué tan difusa será la sombra (mayor valor = más difuminada).
Expansión: Ajusta el tamaño de la sombra (positivo para agrandarla, negativo para reducirla).
Color: Define el color de la sombra.`}/>
            <Codigo lenguaje={"css"} codigo={`box-shadow:  2px    |  2px  |    8px    |  3px | green;
                    |       |           |      |
          ixquierda | ariiba| desenfoque| borde| color
          derecha   | abajo |           |      |`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="caja_combreada">
    caja sombreada :D
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.caja_combreada{
    width: 55%;
    background-color: black;
    color: white;
    box-shadow: -8px 8px 15px 8px cadetblue;
    margin: auto;
}`}/>
            <Web>
                <div className="css--sombrasCaja1Content--ejemplo">
                    <div className="css--sombrasCaja1--ejemplo">
                        caja sombreada :D
                    </div>
                </div>
            </Web>

            <Titulo level={2} text={`inset`}/>
            <Texto texto={`La propiedad box-shadow también permite agregar sombras internas a un elemento mediante el uso de la palabra clave inset.

inset: Hace que la sombra se aplique en el interior del borde de la caja, en lugar de fuera de ella (que es el comportamiento por defecto).`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="sombra__interna">
    sombra interna
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.sombra__interna{
    width: 55%;
    background-color: black;
    color: white;
    box-shadow: inset -8px 8px 15px 8px cadetblue;
    margin: auto;
}`}/>
            <Web>
                <div className="css--sombrasCaja2Content--ejemplo">
                    <div className="css--sombrasInset--ejemplo">
                        sombra interna
                    </div>
                </div>
            </Web>
        </MainCap>
    )
}