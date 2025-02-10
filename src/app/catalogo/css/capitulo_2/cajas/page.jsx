import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";


import "./cajas.css";

export default function CajasCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`cajas`}/>
                <Texto texto={`Existen dos tipos de cajas:
bloque: Ocupa todo el espacio de pantalla.
linea: Ocupa solo el espacio necesario.`}/>
            </Resumen>
            <Titulo text={`Cajas`}/>
            <Texto texto={`En HTML, existen dos tipos principales de cajas:
1. Cajas en bloque
2. Cajas en linea
Estos tipos de cajas determinan cómo se estructuran y comportan los elementos en una página web.`}/>
            
            
            <Titulo level={2} text={`bloque`}/>
            <Texto texto={` Ocupan todo el ancho disponible de su contenedor.
 Generan un salto de línea antes y después del elemento.
 Se pueden modificar con width y height.`}/>
            <Codigo lenguaje={"html"} codigo={`<div></div>
<p></p>
<h1></h1> <!-- hasta --> <h6></h6>
<section></section>`}/>
            <Titulo level={2} text={`Ejemplo grafico`}/>
            <Web>
                <div className="css--cajasBloque--ejemploContent">
                    <p className="css--cajasBloque--ejemploContent__text">Elemento de bloque</p>
                </div>
            </Web>
            
            <Titulo level={2} text={`linea`}/>
            <Texto texto={`Ocupan solo el espacio necesario para su contenido.
 No generan un salto de línea.
 Se pueden colocar varias en la misma línea.`}/>
            <Codigo lenguaje={"html"} codigo={`<span></span> 
<a></a> 
<strong></strong>
<em></em>`}/>
            <Titulo level={2} text={`Ejemplo grafico`}/>
            <Web>
                <div className="css--cajasLinea--ejemploContent">
                    <b className="css--cajasLinea--ejemploContent__text">Elemento en linea</b>
                </div>
            </Web>
        </MainCap>
    )
}