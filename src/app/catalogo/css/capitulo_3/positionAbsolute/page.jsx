import MainCap from "@/app/catalogo/componentes/main/main";
import "./absolute.css";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function PositionAbsoluteCss(){
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`position absolute`}/>
                <Texto texto={`positiom: absolute; no ocupa espacio real en la web.`}/>
                <Codigo lenguaje={"css"} codigo={`position: absolute; /* posicionar la caja como absoluta */  
/* movimiento de la caja */
top: 15px;  /* mover desde arriba */
right: 15px;  /* mover desde la derecha */
bottom: 15px; /* mover desde abajo */
left: 15px; /* mover desde la izquierda */
z-index: 5; /* controlar la superposición de elementos */`}/>
            </Resumen>
            <Titulo text={`position absolute`}/>
            <Texto texto={`Esta propiedad, a diferencia de "position: relative;", no ocupa espacio real en el sitio web. También obtiene las mismas propiedades de position: relative;, como:

top
right
bottom
left
z-index`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="position_1">
  caja 1
</div>
<div class="position_2">
  caja 2
</div>
<div class="position_3">
  caja 3
</div>
<div class="position_4">
  caja 4
</div>`} />
            <Codigo lenguaje={"css"} codigo={`.position_1{
  background-color: green;
  width: 35%;
  height: 120px;
  position: relative;
}
.position_2{
  background-color: orange;
  width: 35%;
  height: 120px;
  position: relative;
}
.position_3{
  background-color: yellow;
  left: 25px;
  width: 35%;
  height: 120px;
  position: absolute;
}
.position_4{
  background-color: brown;
  width: 35%;
  height: 120px;
  position: relative;
}`}/>
            <Web>
                <div className="css--Absoluteposition_1--ejemplo">
                    caja 1
                </div>
                <div className="css--Absoluteposition_2--ejemplo">
                    caja 2
                </div>
                <div className="css--Absoluteposition_3--ejemplo">
                    caja 3
                </div>
                <div className="css--Absoluteposition_4--ejemplo">
                    caja 4
                </div>
            </Web>
            <Texto texto={`Si te fijas, parece que la caja 3 desapareció, pero no es así. Recuerda que "position: absolute;" no ocupa espacio real en el sitio web, por lo que la caja 3 está debajo de la caja 4. Esto sucede porque la caja 4 tiene "position: relative;", el cual sí ocupa espacio en la página.`}/>
            <Enlace link={"/catalogo/css/capitulo_3/zIndex"} texto={`z-index`}/>
        </MainCap>
    )
}