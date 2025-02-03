import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


// css
import "./fijas.css" ;
import "./relativas.css";
import Enlace from "@/componentes/cursos/enlace/enlace";
export default function UnidadesCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Unidades`}/>
                <Texto texto={`Hay dos medidas las relativas(cambian segun sea) fijas(no cambian).`}/>
                <Codigo lenguaje={"txt"} codigo={`medidas fijas: px,em,cm,ml,pt
medidas relativas: vw,vh,%`}/>
                <Codigo lenguaje={"css"} codigo={`/*medidas fila*/
p{font-size: 2em;}
p{font-size: 8px;}
p{font-size: 1cm;}
p{font-size: 1pt;}
p{font-size: 4ml;}
/*medidas relativas*/
div{
  width: 100%;
  height: 100%;
}
div{
  width: 100vw;
  height: 100vh;
}`}/>
            </Resumen>

            <Titulo text={`Unidades`}/>
            <Texto texto={`Tenemos dos tipos de medidas.
relativas:
son medidas que dependen de algo osea son variables.
fijas:
estos no cambiaran de medida ya que se quedan estaticas a las medidas que le digamos.`}/>
            <Texto 
                texto={`Para continuar debemos entender que es la propìedad "{font-size}".`} 
                enlaces={{"font-size": {url: "/catalogo/css/capitulo_2/propiedadesText",target: ""}}}
            />
            
            {/* medidas fijas */}
            <Titulo level={2} text={`Medidas fijas`} />
            <Texto texto={`1. px (píxeles): Ideal para medidas precisas en pantallas.
2. cm (centímetros) y mm (milímetros): Usados para impresión.
3. in (pulgadas): Equivalente a 2.54 cm.
4. pt (puntos) y pc (picas): Comunes en diseño editorial.`}/>
            <Texto texto={`Al usar medidas fijas, puede surgir un problema: si queremos trabajar con resoluciones, las medidas de las letras no cambiarán su tamaño.
Si nos fijamos, la cajita que está adentro tiene una medida fija, lo que significa que, al reducir la resolución, la cajita interna se saldrá de su contenedor, lo que nos ocasionará problemas.
Para reducir la resolución, puedes usar Ctrl + la ruedita del mouse; si estás en un dispositivo móvil, notarás que la cajita interna sobresale debido a que tiene una medida fija y no está adaptada para móviles.`}/>
            <Web>
                <div className="content--caja--unidadesFijasCss--1">
                    <div className="content--caja--unidadesFijasCss--2"></div>
                </div>
            </Web>

            {/* medidas relativas */}
            <Titulo level={2} text={`Medidas relativas`}/>
            <Texto texto={`Las medidas relativas si se adaptan a las resoluciones a medida que la resolucion se haga mas pequeña o grande.

en medidas relativas tenemos a Rem y a Em.

estas son como usar porcentajes cosa que veremos mas adelante pero en simples palabras las letras se adaptaran a la resolucion.`}/>

            {/* em */}
            <Titulo level={2} text={`em`}/>
            <Texto texto={`Las unidades "em" se ajustan al font-size de algun contenedor padre.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenedor_padre">
  <p class="contenedor_hijo">
    esto se ajustara segun el padre.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contenedor_padre{
  font-size: 18px;
}
.contenedor_hijo{
  font-size: 1em;
}`}/>
            <Texto texto={`En este caso "1em" es igual a 18 px pero si al contenedor le ponemos 20px "1em" sera igual a 20px puedes ir jugando con esas escalas si ponemos 2em sera 40px y asi sucesivamente.`}/>
            <Web>
                <p>esto se ajustara segun el padre.</p>
            </Web>

            {/* rem */}
            <Titulo level={2} text={`rem`}/>
            <Texto texto={`Las unidades rem no toman el font-size del contenedor padre si no que toman el font-size del body.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="parrafo_rem">
  esto toma las medidas del body.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.parrafo_rem{
  font-size: 1.50rem;
}`}/>
            <Web>
                <p> esto toma las medidas del body.</p>
            </Web>
            
            {/* explicacion grafica de medidas relativas */}
            <Titulo level={2} text={`Explicacion grafica de medidas relativas`}/>
            <Texto texto={`Para entender mejor la resolucion relativa aqui un grafico.
como te das cuenta el cuadradito de adentro se adapta asi es como funciona las medidas relativas tenlo en cuenta ya que estos graficos de medidas fijas/relativas tambien explican como funciona "responsive desing" el cual veremos mas adelante.`}/>
            <Web>
                <div className="content--caja--unidadesRelativasCss--1">
                    <div className="content--caja--unidadesRelativasCss--2"></div>
                </div>
            </Web>

            <Enlace link={"/catalogo/css/capitulo_1/unidades2"} texto={"Unidades parte 2"}/>
        </MainCap> 
    )
}