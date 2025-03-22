import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function AlineacionFlexCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Alineacion flex`}/>
                <Texto texto={`Con display: flex; alinearemos el contenido de un contenedor de manera eficiente usando propiedades como justify-content y align-items.`}/>
                <Codigo lenguaje={"css"} codigo={`/*Todas las propiedades se comportaran segun direccion "row" o  "column"*/
/*justify-content*/
justify-content: center; /*centra elementos.*/
justify-content: start; /*elinea las cajas al inicio del contenedor*/
justify-content: end; /*alinea las cajas al final del contenedor*/
justify-content: space-around; /*Las cajas tienen el mayor espacio posible*/
justify-content: space-between; /*Da un margin auto a todas las cajas*/
justify-content: space-evenly; /*Las cajas tienen un mismo margin*/

/*align-items*/
align-items: center; /*centra elementos*/
align-items: start; /*posisiona al inicio las cajas*/
align-items: end; /*posisiona al final las cajas*/

/*align-self*/ /*esto alinea solo a un elemento hijo y no a todos en general*/
align-self: start; /*alinea una caja al inicio del contenedor*/
align-self: center; /*centra una caja*/
align-self: end; /*alinea una caja al final del contenedor*/

/*en vez de usar start,end puedes usar flex-start y flex-end*/`}/>
                
            </Resumen>
            <Titulo text={`Alineacion flex`}/>
            <Titulo level={2} text={`alineamiento horizontal(hechado _ )`}/>
            <Texto texto={`Podemos alinear los elementos hijos dentro de un contenedor de manera práctica utilizando justify-content.

Esta propiedad ofrece varias opciones para ajustar la distribución de los elementos:

center: Centra los elementos en el contenedor.
space-around: Distribuye los elementos con espacios iguales alrededor de ellos.
space-between: Coloca los elementos con el mayor espacio posible entre ellos, sin márgenes en los extremos.
space-evenly: Distribuye los elementos de manera uniforme, asegurando que el espacio entre ellos y los bordes del contenedor sea el mismo.`}/>
            
            
            <Titulo level={2} text={`justify-content`}/>
            <Codigo lenguaje={"html"} codigo={`<h2>center</h2>
<div class="center">
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

<h2>space around</h2>

<div class="space_around">
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

<h2>space between</h2>

<div class="space_between">
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

<h2>space evenly</h2>

<div class="space_evenly">
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
            <Codigo lenguaje={"css"} codigo={`body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #000;
}

h2{
    text-align: center;
    font-size: 1.8em;
    color: #32fff5;
    text-shadow: -2px -2px 15px #32fff5;
}


/* center */

.center{
    display: flex;
    justify-content: center;
}
.center div{
    color: #fff;
    width: 120px;
    height: 120px;
    border: 2px solid #57ff09;
}


/* space-around */

.space_around{
    display: flex;
    justify-content: space-around;
}
.space_around div{
    color: #fff;
    width: 120px;
    height: 120px;
    border: 2px solid #57ff09;
}


/* space-between */

.space_between{
    display: flex;
    justify-content: space-between;
}
.space_between div{
    color: #fff;
    width: 120px;
    height: 120px;
    border: 2px solid #fff;
}


/* space-evenly */

.space_evenly{
  display: flex;
  justify-content: space-evenly;
}
.space_evenly div{
  color: #fff;
  width: 120px;
  height: 120px;
  border: 2px solid #fff;
}`}/>
            <Web>
                <div className="css--contentJustifyContent--ejemplo">
                    <h2 className="css--contentJustifyContent--ejemplo--title">center</h2>
                    <div className="css--justifyContentCenter--ejemplo">
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

                    <h2 className="css--contentJustifyContent--ejemplo--title">space around</h2>

                    <div className="css--justifyContentSpaceAround--ejemplo">
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

                    <h2 className="css--contentJustifyContent--ejemplo--title">space between</h2>

                    <div className="css--justifyContentSpaceBetween--ejemplo">
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

                    <h2 className="css--contentJustifyContent--ejemplo--title">space evenly</h2>

                    <div className="css--justifyContentSpaceEvenly--ejemplo">
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
                </div>
            </Web>


            {/* alineamiento vertical(parado | ) */}
            <Titulo level={2} text={`alineamiento vertical(parado | )`}/>
            <Texto texto={`Existen dos propiedades para alinear los elementos:

align-items
align-content
Ambas propiedades tienen los siguientes valores:

flex-start: Alinea los elementos al inicio.
center: Centra los elementos.
flex-end: Alinea los elementos al final.
Diferencia entre ambas:

align-items alinea solo una línea de elementos.
align-content alinea todas las líneas de elementos`}/>
            <Titulo level={2} text={`align-items`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content_items">
  <div class="start">
    <div>
      start.
    </div>
  </div>
  <div class="center">
    <div>
      center.
    </div>
  </div>
  <div class="end">
    <div>
      end
    </div>
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content_items{
  margin-top: 15px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
}



.start{
  height: 100vh;
  display: flex;
  align-items: flex-start;
}
.start div{
  border: 2px solid #0df795;
  color: #0df795;
  font-size: 1.5em;
  width: 120px;
  height: 120px;
}


.center{
  height: 100vh;
  display: flex;
  align-items: center;
}
.center div{
  border: 2px solid #0df795;
  color: #0df795;
  font-size: 1.5em;
  width: 120px;
  height: 120px;
}


.end{
  height: 100vh;
  display: flex;
  align-items: flex-end;
}
.end div{
  border: 2px solid #0df795;
  color: #0df795;
  font-size: 1.5em;
  width: 120px;
  height: 120px;
}`}/>
            <Web>
                <div className="css--alignItemsContainer--ejemplo">
                    <div className="css--alignItemsContentItems--ejemplo">
                        <div className="css--alignItemsStart--ejemplo">
                            <div>
                                start.
                            </div>
                        </div>
                        <div className="css--alignItemsCenter--ejemplo">
                            <div>
                                center.
                            </div>
                        </div>
                        <div className="css--alignItemsEnd--ejemplo">
                            <div>
                                end
                            </div>
                        </div>
                    </div>
                </div>
            </Web>



            {/* flex-start vs stretch */}
            <Titulo level={2} text={`flex-start vs stretch`}/>
            <Texto texto={`"flex-start" no es la propiedad predeterminada; por defecto, los elementos se alinean con stretch, lo que hace que ocupen todo el espacio disponible en el eje transversal.`}/>
            <Codigo lenguaje={"html"} codigo={`
<div class="stretch">
  <div>
    stretch
  </div>
  <div>
    stretch
  </div>
</div>


<div class="flex_start">
  <div>
    flex-start
  </div>
  <div>
    flex-start
  </div>
</div>`} />
            <Codigo lenguaje={"css"} codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.stretch{
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
}
.stretch div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}

.flex_start{
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.flex_start div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--flexStartStretchContent--ejemplo">
                    <div className="css--alineacionStretch--ejemplo">
                        <div>
                            stretch
                        </div>
                        <div>
                            stretch
                        </div>
                    </div>


                    <div className="css--alineacionFlexStart--ejemplo">
                        <div>
                            flex-start
                        </div>
                        <div>
                            flex-start
                        </div>
                    </div>
                </div>
            </Web>


            {/* align-content */}
            <Titulo level={2} text={`align-content`}/>
            <Texto texto={`align-content se usa para alinear varias líneas dentro de un contenedor flex cuando hay espacio extra en el eje transversal.`}/>
            <Codigo lenguaje={"html"} codigo={`
<div class="align_content1">
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
</div>



<div class="align_content2">
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
  <div>
    content
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h3{
  color: #03cdff;
  text-shadow: 5px 5px 15px #03cdff;
  font-size: 1.5em;
  text-align: center;
}


.align_content1{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #03cdff;
  flex-wrap: wrap;
}
.align_content1 div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}


.align_content2{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  border: 2px solid #03cdff;
  flex-wrap: wrap;
}
.align_content2 div{
  border: 2px solid #03cdff;
  color: #03cdff;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--alignContentContainer--ejemplo">
                    <div className="css--alineacionAlignContent1--ejemplo">
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                    </div>



                    <div className="css--alineacionAlignContent2--ejemplo">
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                        <div>
                            content
                        </div>
                    </div>
                </div>
            </Web>



            {/* align-self */}
            <Titulo level={2} text={`align-self`}/>
            <Texto texto={`También podemos alinear una sola caja con align-self, que acepta los mismos valores que align-items.`}/>
            <Codigo lenguaje={"html"} codigo={`
<div className="AlignSelfCajas">
  <div className="AlignSelfCajas__caja1">
    caja 1
  </div>
  <div className="AlignSelfCajas__caja2">
    caja 2
  </div>
  <div className="AlignSelfCajas__caja3">
    caja 3
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`body{
  background-color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h3{
  text-shadow: 5px 5px 15px #21fa74;
  color: #21fa74;
  font-size: 1.5em;
  text-align: center;
}

.AlignSelfCajas{
  height: 100vh;
  border: 2px solid #21fa74;
  display: flex;
  justify-content: center;
}
.AlignSelfCajas__caja1{
  align-self: flex-start;
  color: #21fa74;
  border: 2px solid #21fa74;
}
.AlignSelfCajas__caja2{
  align-self: center;
  color: #21fa74;
  border: 2px solid #21fa74;
}
.AlignSelfCajas__caja3{
  align-self: flex-end;
  color: #21fa74;
  border: 2px solid #21fa74;
}`}/>
            <Enlace link={"/catalogo/css/capitulo_5/flexGrow"} texto={`flex-grow`}/>     
        </MainCap>
    )
}