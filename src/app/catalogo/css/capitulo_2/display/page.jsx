import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";


import "./display.css";

export default function DisplayCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`display`}/>
                <Texto texto={`display: Controla cómo se comporta un elemento en la página (bloque, en línea, etc.).
width: Define el ancho de un elemento.
height: Define la altura de un elemento

block: Permite modificar un elemento de muchas formas como el ancho, alto, etc.
inline: No permite modificar un elemento en cuanto ancho y alto.
inline-block: Se comporta como inline pero permite obtener propiedades de block.`}/>
                <Codigo lenguaje={"css"} codigo={`.elemento1{
    display: block;
    width: 50px;
    height: 50px;
}
.elemento2{
    display: inline;
}
.elemento3{
    display: inline-block;
    height: 50px;
}`}/>
            </Resumen>
            <Titulo text={`display`}/>
            <Texto texto={`La propiedad display en CSS nos permite modificar el comportamiento de los elementos en una página web.

Algunos de los valores más comunes son:

display: block; → Convierte un elemento en bloque, ocupando todo el ancho disponible.
display: inline; → Convierte un elemento en línea, permitiendo que otros elementos se sitúen a su lado.
display: inline-block; → Combina características de los elementos en línea y en bloque: respeta el flujo de línea, pero permite definir width y height.
display: none; → Oculta el elemento por completo, sin ocupar espacio en la página.

Esta propiedad es muy útil para organizar y modificar la estructura de una página según sea necesario.`}/>
            <Titulo level={2} text={`block`}/>
            <Codigo lenguaje={"html"} codigo={`<b class="linea">linea</b>
<b class="bloque">bloque</b>`}/>
            <Codigo lenguaje={"css"} codigo={`.linea{ /*ejemplo en linea*/
    border: 1px solid #000;
}
.bloque{ /*ejemplo en bloque*/
    display: block;
    border: 1px solid #000;
}`}/>
            <Web>
                <div className="css--displayContent--ejemplo1">
                    <b className="css--displayContent--ejemplo__linea">linea</b>
                    <b className="css--displayContent--ejemplo__bloque">bloque</b>
                </div>
            </Web>

            {/* width y height */}
            <Titulo level={2} text={`Propiedad de caja número 1: width y height`}/>
            <Texto texto={`Diferencia entre elementos en línea y de bloque
En HTML, los elementos se dividen en elementos de bloque y elementos en línea:

Elementos de bloque ocupan todo el ancho disponible y permiten modificar propiedades como width, height, margin, padding, entre otras.

Elementos en línea solo ocupan el ancho de su contenido y no permiten cambiar propiedades como width y height.
width y height

width → Define el ancho de un elemento.
height → Define la altura de un elemento.
Ambas propiedades pueden utilizar diferentes unidades de medida, como:

px (píxeles)
% (porcentaje)
cm (centímetros)
pt (puntos)
vh (viewport height)
vw (viewport width)
Si intentamos aplicar width y height a un elemento en línea, no tendrán efecto a menos que cambiemos su comportamiento con display: block; o display: inline-block;.`}/>
            <Codigo lenguaje={"html"} codigo={`<b>
  esto es un elemento en linea no se puede
  modificar el ancho y la altura.
</b>
<p>
  este es un elemento en bloque si se puede
  modificar el ancho y la altura.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`b{
  background-color: red;
  color: white;
  width: 150px;
  height: 150px;
}
p{
  background-color: blue;
  color: white;
  width: 150px;
  height: 110px;
}`}/>
            <Web>
                <div>
                    <b className="css--bLinea--ejemplo__text">esto es un elemento en linea no se puede
                    modificar el ancho y la altura.</b>
                    <p className="css--pLinea--ejemplo__text">este es un elemento en bloque si se puede
                    modificar el ancho y la altura.</p>
                </div>
            </Web>
            <Texto texto={`Para finalizar con esta parte, podemos hacer que un elemento en línea pueda recibir las propiedades de un elemento de bloque usando la propiedad display.`}/>
            <Codigo lenguaje={"html"} codigo={`<b class="lineaBloque">
    Comportamiento en linea con propiedades de elementos en bloque.
</b>`}/>
            <Codigo lenguaje={"css"} codigo={`.lineaBloque{
    display: inline-block;
    height: 100px;
    background-color: lightblue;
}`}/>
            <Web>
                <b className="css--displayLineBloque--ejemplo">
                    Comportamiento en linea con propiedades de elementos en bloque.
                </b>
            </Web>
            <Texto texto={`Al usar display: inline-block;, el elemento mantendrá su comportamiento en línea, pero ahora podrá aceptar propiedades como width y height, cosa que normalmente los elementos en línea no pueden hacer.`}/>

        </MainCap>
    )
}