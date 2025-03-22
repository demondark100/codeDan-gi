import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Imagen from "@/componentes/cursos/media/imagen/imagen";

export default function ResponsiveBasicoCss() {
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`responsive basico`}/>
                <Texto texto={`Esto permite que nuestra web se adapte a todo tipo de dispositivos, como teléfonos, computadoras, televisores, etc.`}/>
                <Codigo lenguaje={"css"} codigo={`@media (resolución de pantalla) {
    /* Estilos para esa resolución */
}`}/>
            </Resumen>
            <Titulo text={`responsive basico`}/>
            <Texto texto={`"Responsive" se refiere a las diferentes resoluciones que puede tener un sitio web. Por ejemplo, en un sitio web adaptable, cuando lo visualizas en modo móvil, puede aparecer un menú desplegable, mientras que en una resolución de PC, ese menú desaparece y las opciones se muestran directamente.

Ahora, veamos una imagen para comprender mejor este concepto teórico.`}/>
            <Imagen src={"https://www.tutorialspoint.com/css/images/responsive.jpg"} alt={"responsive"}/>
            <Texto texto={`Como puedes notar, el diseño responsive permite que un sitio web se adapte a las resoluciones de distintos dispositivos. Sin un diseño responsive, la visualización podría verse incorrecta en otros dispositivos.`}/>


            {/* Mobile First */}
            <Titulo level={2} text={`Mobile First`}/>
            <Texto texto={`"Mobile First" consiste en diseñar la página primero para dispositivos móviles y luego adaptarla a otras resoluciones. Hacerlo de esta manera facilita la creación de un sitio web adaptable a diferentes tamaños de pantalla.`}/>

            <Texto texto={`Con media queries, podemos adaptar los sitios web a diferentes resoluciones, asegurando que se vean correctamente en distintos dispositivos.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="media_1">
    responsive.
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.media_1{
    width: 350px;
    height: 150px;
    background-color: #ff6738;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
}
@media(min-width: 820px){
    .media_1{
        width: 480px;
        background-color: #1e1cc4;
        color: #fff;
        margin: auto;
        margin-top: 15px;
        margin-bottom: 15px;
    }
}`}/>
            <Web>
                <div className="css--responsiveBasico--ejemplo1">
                    responsive.
                </div>
            </Web>
            <Texto texto={`Ahora veremos otro ejemplo. Si no entiendes algo, lo explicaremos con más detalle más adelante.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content_1">
    <h5>titulo 1</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste accusantium nam fugiat aperiam neque? Et recusandae dolore eum soluta fuga nisi, aliquam ad, perferendis nobis itaque totam blanditiis nesciunt.
    </p>
</div>
<div class="content_2">
  <h5>titulo 2</h5>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maiores dolorem ea vel quo? Esse, ratione! Sit suscipit harum impedit! Natus, dolores porro animi facere voluptatibus atque aut autem exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ad nulla exercitationem nobis sapiente recusandae labore nisi est odio, magnam ipsam atque id laborum corporis facilis illum explicabo eius rem?
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`div{
  display: inline-block;
}
.content_1{
  width: 40%;
  background-color: #777171;
  color: #fff;
  padding: 15px;
}
.content_2{
  width: 40%;
  background-color: #251e1e;
  color: #fff;
  padding: 15px;
}
@media(max-width: 820px){
  div{
    display: block;
  }
  .content_1{
    width: 100%;
  }
  .content_2{
    width: 100%;
    background-color: #251e1e;
  }
}`}/>
            <Texto texto={`Con (max-width: 820px), indicamos que cuando la pantalla tenga una resolución de 820px o menos, se aplicarán otros estilos.`}/>
            <Web>
                <div className="css--responsiveBasicoContent_1--ejemplo">
                    <h5>titulo 1</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste accusantium nam fugiat aperiam neque? Et recusandae dolore eum soluta fuga nisi, aliquam ad, perferendis nobis itaque totam blanditiis nesciunt.
                    </p>
                </div>
                <div className="css--responsiveBasicoContent_2--ejemplo">
                    <h5>titulo 2</h5>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maiores dolorem ea vel quo? Esse, ratione! Sit suscipit harum impedit! Natus, dolores porro animi facere voluptatibus atque aut autem exercitationem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ad nulla exercitationem nobis sapiente recusandae labore nisi est odio, magnam ipsam atque id laborum corporis facilis illum explicabo eius rem?
                    </p>
                </div>
            </Web>
        </MainCap>
    )
}