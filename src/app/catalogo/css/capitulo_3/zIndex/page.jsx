import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Enlace from "@/componentes/cursos/enlace/enlace";

// css
import "./zIndex.css";


export default function ZIndexCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`z-index`}/>
                <Texto texto={`l z-index controla la superposición de elementos, permitiendo que unos estén encima de otros.`}/>
                <Codigo lenguaje={"css"} codigo={`z-index: 2; /*Posicionar una caja encima de dos cajas*/
/*Mientras mayor sea el valor, la caja se posicionará más arriba*/`}/>
            </Resumen>
            <Titulo text={`z-index`}/>
            <Texto texto={`z-index se usa para controlar la superposición de elementos. Si te diste cuenta, en position: absolute y position: relative había cajas que se superponían unas sobre otras, pero esto se puede controlar con z-index.

Es muy importante recordar que z-index siempre comienza desde la capa 0.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="relative_1">
  caja 1
</div>
<div class="relative_2">
  caja 2
</div>
<div class="relative_3">
  caja 3
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.relative_1 , .relative_2 , .relative_3 {
  width: 25%;
  height: 125px;
  color: wheat;
  margin: auto;
}
.relative_1{
  background-color: red;
  position: relative;
}
.relative_2{
  background-color: blue;
  position: relative;
  top: 25px;
  z-index: 1;
}
.relative_3{
  background-color: green;
  position: relative;
}`}/>
            <Web>
                <div className="css--relative_1ZIndex--ejemplo">
                    caja 1
                </div>
                <div className="css--relative_2ZIndex--ejemplo">
                    caja 2
                </div>
                <div className="css--relative_3ZIndex--ejemplo">
                    caja 3
                </div>
            </Web>


            <Texto texto={`Ahora, para comprender mejor el uso de position: relative, position: absolute y z-index, crearemos una ventana modal aplicando estos conceptos.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <p>Modal</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.content{
    background-color: black;
    height: 100%;
    min-height: 250px;
    padding-top: 15px;
    position: relative;
}

.content p{
    position: relative;
    background-color: white;
    margin: auto;
    width: 65px;
    height: 20px;
}`}/>
            <Web>
                <div className="css--ventanaModalZIndex--ejemplo">
                    <p>Modal</p>
                </div>
            </Web>

            <Enlace link={"/catalogo/css/capitulo_3/positionFixed"} texto={`position fixed`}/>
        </MainCap>
    )
}