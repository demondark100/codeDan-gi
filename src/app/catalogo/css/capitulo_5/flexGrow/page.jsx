import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function FlexGrowCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`flex-grow`}/>
                <Texto texto={`flex-grow ajusta el espacio sobrante dentro del contenedor flexible, expandiendo las cajas hijas según el valor asignado.`}/>
                <Codigo lenguaje={"css"} codigo={`flex-grow: 1;`}/>
            </Resumen>
            <Titulo text={`flex-grow`}/>
            <Texto texto={`La propiedad flex-grow permite que las cajas se expandan para ocupar el espacio disponible dentro del contenedor. Se aplica a los elementos hijos, no al contenedor.`}/>
            <Codigo lenguaje={"html"} codigo={`<h4>sin grow</h4>
<div class="sin_grow">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>

<h4>con grow</h4>
<div class="con_grow">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h4{
  color: #08eb1a;
  text-shadow: 5px 5px 15px #08eb1a;
  text-align: center;
  font-size: 1.5em;
}
.sin_grow{
  display: flex;
  height: 40vh;
  border: 2px solid #08eb1a;
  padding: 15px;
}
.sin_grow div{
  border: 2px solid #08eb1a;
  color: #08eb1a;
}
.con_grow{
  display: flex;
  height: 40vh;
  border: 2px solid #08eb1a;
  padding: 15px;
}
.con_grow div{
  border: 2px solid #08eb1a;
  color: #08eb1a;
  flex-grow: 1;
}`}/>
            <Web>
                <div className="css--flexGrowContent1--ejemplo">
                    <h4 className="css--flexGrowContent1Title--ejemplo">sin grow</h4>
                    <div className="css--flexGrowSinGrow--ejemplo">
                        <div>
                            caja 1
                        </div>
                        <div>
                            caja 2
                        </div>
                        <div>
                            caja 3
                        </div>
                    </div>

                    <h4 className="css--flexGrowContent1Title--ejemplo">con grow</h4>
                    <div className="css--flexGrowConGrow--ejemplo">
                        <div>
                            caja 1
                        </div>
                        <div>
                            caja 2
                        </div>
                        <div>
                            caja 3
                        </div>
                    </div>
                </div>
            </Web>

            <Texto texto={`La propiedad flex-grow se puede asignar individualmente a cada elemento hijo, permitiendo definir cuánto espacio extra ocupará en relación con los demás elementos dentro del contenedor flexible.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grow_ejemplo">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grow_ejemplo{
  display: flex;
  height: 40vh;
  padding: 15px;
  background-color: #000;
}
.grow_ejemplo div{
  color: #32a8a8;
  border: 2px solid #32a8a8;
}
.grow_ejemplo div:nth-child(1){
  flex-grow: 1;
}
.grow_ejemplo div:nth-child(3){
  flex-grow: 2;
}`}/>
            <Web>
                <div className="css--flexGrowContent2--ejemplo">

                    <div className="css--flexGrowGrowEjemplo--ejemplo">
                        <div>
                            caja 1
                        </div>
                        <div>
                            caja 2
                        </div>
                        <div>
                            caja 3
                        </div>
                    </div>
                </div>
            </Web>

            <Enlace texto={`flex-basis`} link={"/catalogo/css/capitulo_5/flexBasis"}/>
        </MainCap>
    )
}