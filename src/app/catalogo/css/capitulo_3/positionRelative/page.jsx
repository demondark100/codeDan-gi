import MainCap from "@/app/catalogo/componentes/main/main"
import Web from "@/app/catalogo/componentes/web/web"
import Codigo from "@/componentes/cursos/codigo/codigo"
import Texto from "@/componentes/cursos/texto/texto"
import Titulo from "@/componentes/cursos/titulo/titulo"
import Resumen from "@/componentes/cursos/resumen/resumen"


// css
import "./relative.css";
import Enlace from "@/componentes/cursos/enlace/enlace"

export default function PositionRelativeCss() {
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`Position relative`}/>
                <Texto texto={`Al posicionar una caja con "relative", esta conserva su espacio original en la página.`}/>
                <Codigo lenguaje={"css"} codigo={`position: relative; /* Posicionar una caja en "relative" */
/* Cambiar de lugar */
top: 15px;  /* Posicionar una caja hacia abajo */
right: 15px;  /* Posicionar una caja hacia la izquierda */
bottom: 15px;  /* Posicionar una caja hacia arriba */
left: 15px;  /* Posicionar una caja hacia la derecha */`}/>
            </Resumen>
            <Titulo text={`position relative`}/>
            <Texto texto={`La propiedad position nos permite posicionar elementos de manera personalizada. Al aplicarla, el elemento adquiere nuevas propiedades como:

top: Distancia desde la parte superior.
right: Distancia desde la derecha.
bottom: Distancia desde la parte inferior.
left: Distancia desde la izquierda.
z-index: Controla la superposición de los elementos.`}/>
            <Texto texto={`position: relative; permite mover un elemento sin afectar el flujo del documento, es decir, conserva su espacio original en la página como si no se hubiera movido.`}/>
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
}
.relative_3{
  background-color: green;
  position: relative;
}`}/>
            <Web>
                <div className="css--positionRelative1--ejemplo">
                    caja 1
                </div>
                <div className="css--positionRelative2--ejemplo">
                    caja 2
                </div>
                <div className="css--positionRelative3--ejemplo">
                    caja 3
                </div>
            </Web>
            <Texto texto={`Al usar position, lo más común es ajustar la posición del elemento con top y left, ya que permiten moverlo desde su ubicación original sin afectar otros elementos.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="mover_caja">
    cajita.
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.mover_caja{
    margin: auto;
    background-color: lightblue;
    color: black;
    width: 25%;
    height: 125px;
    position: relative;
    top: -10px;
    left: -85px;
}`}/>
            <Web>
                <div className="css-positionRelativeMovimientoTop--ejemplo">
                    cajita.
                </div>
            </Web>
            <Texto texto={`Si te fijas, en lugar de usar "right: 85px;", utilizamos "left: -85px;", y en vez de "bottom: 10px;", usamos "top: -10px;". Esto se debe a que top y left tienen prioridad sobre bottom y right, por así decirlo.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="caja">
    caja.
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.caja{
    background-color: red;
    color: white;
    width: 25%;
    height: 150px;
    position: relative;
    bottom: 50px;
    top: 15px;
    left: 55px;
    right: 200px;
}`}/>
            <Web>
                <div className="css--positionRelative2--ejemplo">
                    caja.
                </div>
            </Web>
            <Texto texto={`Si te das cuenta, el elemento no responde a bottom ni a right, ya que top y left tienen mayor prioridad.`}/>
            <Enlace link={"/catalogo/css/capitulo_3/positionAbsolute"} texto={"position absolute"}/>
        </MainCap>
    )
}


// falta poner el link