import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function FlexWrapCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`flex-wrap`}/>
                <Texto texto={`wrap evita que las cajas se encojan, manteniendo la escala que hemos definido.`}/>
                <Codigo lenguaje={"css"} codigo={`flex-wrap: wrap; /*las cajas mantienen su escala*/
flex-wrap: nowrap; /*las cajas puedes cambiar su escala*/
flex-wrap: wrap-reverse; /*las cajas matienen su escala y se posisonaran en reversa.*/
flex-flow: row-reverse wrap; /*forma abreviada de wrap*/`}/>
            </Resumen>
            <Titulo text={`flex-wrap`}/>
            <Texto texto={`Esta propiedad permite que las cajas conserven el ancho exacto que indicamos. Ahora verás a qué me refiero.`}/>
            <Texto texto={`wrap tiene las siguientes propiedades:

flex-wrap: wrap; → Activa la propiedad, permitiendo que los elementos se ajusten en varias líneas.
flex-wrap: nowrap; → Desactiva la propiedad, manteniendo los elementos en una sola línea.`}/>
            
            
            {/* mo-wrap */}
            <Titulo level={2} text={`nowrap`}/>
            <Texto texto={`nowrap es el valor predeterminado en Flexbox, lo que significa que los elementos permanecerán en una sola línea a menos que se indique lo contrario con flex-wrap: wrap;`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="wrap_content1">
  <div>
    caja1.
  </div>
  <div>
    caja2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
  <div>
    caja5.
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.wrap_content1{
  display: flex;
  flex-wrap: nowrap;
}
.wrap_content1 div{
  background-color: #3681e4;
  margin: 15px;
  width: 200px;
  height: 200px;
  color: #fff;
}`}/>
            <Web>
                <div className="css--flexWrapNoWrap--ejemplo">
                    <div>
                        caja1.
                    </div>
                    <div>
                        caja2.
                    </div>
                    <div>
                        caja 3.
                    </div>
                    <div>
                        caja 4.
                    </div>
                    <div>
                        caja5.
                    </div>
                </div>
            </Web>
            <Texto texto={`En un caso real, no es necesario especificar flex-wrap: nowrap;, ya que este es el valor predeterminado en Flexbox.`}/>


            {/* wrap */}
            <Titulo level={2} text={`wrap`}/>
            <Texto texto={`wrap, a diferencia de nowrap, debe activarse explícitamente, ya que permite que las cajas dentro del contenedor mantengan las medidas que les asignamos.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="wrap_content1">
  <div>
    caja1.
  </div>
  <div>
    caja2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
  <div>
    caja5.
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.wrap_content1{
  display: flex;
  flex-wrap: wrap;
}
.wrap_content1 div{
  background-color: #3681e4;
  margin: 15px;
  width: 200px;
  height: 200px;
  color: #fff;
}`}/>
            <Web>
                <div className="css--flexWrapWrap--ejemplo">
                    <div>
                        caja1.
                    </div>
                    <div>
                        caja2.
                    </div>
                    <div>
                        caja 3.
                    </div>
                    <div>
                        caja 4.
                    </div>
                    <div>
                        caja5.
                    </div>
                </div>
            </Web>

            
            {/* flex flow */}
            <Titulo level={2} text={`flex-flow`}/>
            <Texto texto={`Podemos abreviar en una sola línea con flex-flow: row nowrap;, donde:

El primer parámetro define la dirección (row o column).
El segundo parámetro define si los elementos se ajustan (wrap) o no (nowrap).`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="flexFlowContent">
  <div>
    caja 1.
  </div>
  <div>
    caja 2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.flexFlowContent{
  display: flex;
  flex-flow: row-reverse wrap;
}
.flexFlowContent div{
  background-color: #000;
  color: #fff;
  width: 200px;
  height: 200px;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--flexFlowWrap--ejemplo">
                    <div>
                        caja 1.
                    </div>
                    <div>
                        caja 2.
                    </div>
                    <div>
                        caja 3.
                    </div>
                    <div>
                        caja 4.
                    </div>
                </div>
            </Web>
            
            
            {/* wrap-reverse */}
            <Titulo level={2} text={`wrap-reverse`}/>
            <Texto texto={`Esta propiedad es similar a wrap, pero en reversa. En lugar de mover los elementos hacia abajo cuando la resolución se reduce, estos se desplazan hacia arriba.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="wrap_reverse">
  <div>
    caja 1.
  </div>
  <div>
    caja 2.
  </div>
  <div>
    caja 3.
  </div>
  <div>
    caja 4.
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.wrap_reverse{
  display: flex;
  flex-wrap: wrap-reverse;
}
.wrap_reverse div{
  background-color: #233cca;
  width: 200px;
  height: 200px;
  margin: 15px;
}
.wrap_reverse div:nth-child(1){
  background-color: #ff2323;
}
.wrap_reverse div:nth-child(4){
  background-color: #40ffa6;
}`}/>
            <Web>
                <div className="css--flexWrapWrapReverse--ejemplo">
                    <div>
                        caja 1.
                    </div>
                    <div>
                        caja 2.
                    </div>
                    <div>
                        caja 3.
                    </div>
                    <div>
                        caja 4.
                    </div>
                </div>
            </Web>

        </MainCap>
    )
}