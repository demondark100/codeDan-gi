import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Imagen from "@/componentes/cursos/media/imagen/imagen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


import "./padding.css";
import Resumen from "@/componentes/cursos/resumen/resumen";

export default function PaddingCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`padding`}/>
                <Texto texto={`El padding es el espacio interno de un elemento en HTML, es decir, el margen entre su contenido y su borde. Se utiliza para separar el contenido de un elemento de su límite, mejorando la distribución y apariencia del diseño.`}/>
                <Codigo lenguaje={"css"} codigo={`padding-top: 8px; /*espacio exterio hacia arriba*/
padding-left: 8px; /*espacio exterior de la izquierda*/
padding-right: 8px; /*espacio exterior de la derecha*/
padding-bottom: 8px; /*espacio exterior de abajo*/
/*resumir todo*/
padding: 8px 8px 8px 8px;
/*arriba*/  /*derecha*/  /*abajo*/  /*izquierda*/

padding: 15px; /*aplicar padding en todos los lados*/`}/>
            </Resumen>
            <Titulo text={`padding`}/>
            <Texto texto={`Padding en HTML es un espacio interno añadido alrededor del contenido de un elemento, separándolo de su borde.`}/>
            <Imagen src={"https://lh6.ggpht.com/-lN8-wB8_dBc/Tl-DgEaap0I/AAAAAAAAJZY/B7AkhYYiN6A/image3.png?imgmax=800"} alt={"padding"}/>
            <Texto texto={`Padding tiene las siguientes propiedades:
"padding-top; 15px;" = cuanto espacio queremos en la parte de arriba.
"padding-right: 15px;" = cuanto espacio queremos en la parte derecha.
"padding-bottom: 15px;" = cuanto espacio queremos en la parte de abajo.
"padding-left: 15px;" = cuanto espacio queremos en la parte izquierda.`}/>
            <Texto texto={`Además de definir el padding individualmente para cada lado, también puedes establecerlo en una sola línea para simplificar el código:

padding: 15px; → Aplica el mismo espacio en todos los lados.
padding: 10px 20px; → Aplica 10px arriba y abajo, 20px a la izquierda y derecha.
padding: 10px 15px 20px; → Aplica 10px arriba, 15px a los lados y 20px abajo.
padding: 5px 10px 15px 20px; → Aplica 5px arriba, 10px a la derecha, 15px abajo y 20px a la izquierda.
Esto permite escribir menos código y mantenerlo más ordenado.`}/>
            <Titulo level={2} text={`Ejemplo con padding a cada lado`}/>

            {/* padding top */}
            <Titulo level={3} text={`padding-top`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="arriba">arriba</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.arriba{
    display: inline-block;
    background-color: blue;
    padding-top: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--paddingTop--ejemplo">arriba</div>
            </Web>

            {/* padding-right */}
            <Titulo level={3} text={`padding-right`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="derecha">arriba</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.derecha{
    display: inline-block;
    background-color: blue;
    padding-right: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--paddingright--ejemplo">arriba</div>
            </Web>

            {/* padding-bottom */}
            <Titulo level={3} text={`padding-bottom`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="abajo">abajo</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.abajo{
    display: inline-block;
    background-color: blue;
    padding-bottom: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--paddingbottom--ejemplo">abajo</div>
            </Web>

            {/* padding-left */}
            <Titulo level={3} text={`padding-left`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="izquierda">izquierda</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.izquierda{
    display: inline-block;
    background-color: blue;
    padding-left: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--paddingLeft--ejemplo">izquierda</div>
            </Web>


            {/* padding en una sola linea */}
            <Titulo level={2} text={`padding en una sola linea`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="oneLine">padding en una linea</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.oneLine{
    display: inline-block;
    background-color: blue;
    padding: 15px 25px 10px 30px;
    color: white;
}`}/>
            <Web>
                <div className="css--paddingOneLine--ejemplo">padding en una linea</div>
            </Web>


            {/* padding */}
            <Titulo level={3} text={`padding`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="all">padding en todos lados</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.all{
    display: inline-block;
    background-color: blue;
    padding: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--paddingAll--ejemplo">padding en todos lados</div>
            </Web>
        </MainCap>
    )
}