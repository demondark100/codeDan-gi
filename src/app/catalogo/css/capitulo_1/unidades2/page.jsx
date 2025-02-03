import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Enlace from "@/componentes/cursos/enlace/enlace";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


// importar css
import "./allScreen.css";

export default function UnidadesParte2Css() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Unidades parte 2`}/>
                <Texto texto={`Las medidas relativas se adaptan al ancho de la pantalla o al ancho de su contenedor, según se necesite.`}/>
                <Codigo lenguaje={"css"} codigo={`div{  /*se adapta a la medida de su contenedor*/
  width: 100%;
  height: 100%;
}
div{ /*se adapta a la medida de la pantalla*/
  width: 100vw;
  height: 100vh;
}`}/>
            </Resumen>
            <Titulo text={`Unidades parte 2`}/>
            <Texto texto={`Ahora vamos a ver mas medidas relativas pero esta vez para las cagitas posdata todas las propiedades nuevas que veremos son medidas relativas no fijas.`}/>
            <Texto 
                texto={`Para entender un poco mejor, debemos aprender {background color}; sin embargo, no es estrictamente necesario para poder avanzar.`} 
                enlaces={{"background color": {url: "/catalogo/css/capitulo_2/background",target: ""}}}
            />
            <Titulo level={2} text={`Medidas relativas`}/>
            <Texto texto={`ViewportHeight y ViewportWidth:

ViewportHeight (vh): Representa el alto total de la pantalla.
ViewportWidth (vw): Representa el ancho total de la pantalla.
En CSS, se utilizan las unidades vh y vw:

1vh equivale al 1% de la altura del viewport.
1vw equivale al 1% del ancho del viewport.

"width" es la propiedad que indica el ancho de un elemento.
"height" es la propiedad que indica la altura de un elemento.`}/>
            <Codigo lenguaje={"html"} codigo={`<div>
  <p>
    este body ocupara toda la pantalla.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`div{
  background-color: black;
  width: 100vw;
  height: 100vh;
}
div p{
  color: white;
}`}/>
            <Texto texto={`Con 100vw, estamos indicando que el elemento ocupe todo el ancho de la pantalla.
Con 100vh, estamos indicando que el elemento ocupe toda la altura de la pantalla.

Puedes modificar estos valores para ajustar el tamaño del elemento según tus necesidades, y verás que se adapta a todas las resoluciones.`}/>
            <Web>
                <div className="unidade2--css--allscreen">
                    <p>
                        este body ocupara toda la pantalla.
                    </p>
                </div>
            </Web>

            {/* porcentajes */}
            <Titulo level={2} text={`Porcentajes`}/>
            <Texto texto={`Estos son similares al viewport, pero solo se ajustarán al ancho del contenedor, no al de toda la pantalla.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenr_1">
  <div class="content_porcentaje">
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contenr_1{
  width: 256px;
  height: 256px;
  background-color: black;
}
.content_porcentaje{
  width: 100%;
  height: 50%;
  background-color: greenyellow;
}`}/>
            <Texto texto={`Al div "content_porcentaje" le asignamos un ancho del 100%, pero solo ocupó el ancho de su contenedor, no de toda la pantalla. Lo mismo ocurre con la propiedad height, que solo ocupó la altura de su contenedor y no de toda la pantalla, como sucede con el viewport.`}/>
            <Web>
                <div className="css--porcentaje--content--unidades2">
                    <div></div>
                </div>
            </Web>
        </MainCap>
    )
}