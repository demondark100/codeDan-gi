import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Content from "@/app/catalogo/componentes/content/content";


// css
import "./overflow.css";

export default function OverflowCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`overflow`}/>
                <Texto texto={`overflow permite controlar el comportamiento del contenido cuando se desborda horizontal o verticalmente dentro de un contenedor.`}/>
                <Codigo lenguaje={"css"} codigo={`overflow: auto;   /* Agrega scroll solo si el contenido se desborda */
overflow: scroll; /* Muestra siempre la barra de desplazamiento */
overflow: hidden; /* Oculta el contenido desbordado sin scroll */
overflow-x: scroll; /* Agrega desplazamiento horizontal */
overflow-y: scroll; /* Agrega desplazamiento vertical */`}/>
            </Resumen>
            <Titulo text={`overflow`}/>
            <Texto texto={`Esta propiedad evita que el contenido se desborde de su contenedor.`}/>
            <Content>
                <div className="css--explicacionOverflowTexto--ejemplo">
                    <p>como te das cuenta hay demasiado contenido pero el contendedor es demasiado pequeño pero puedes hacer scroll debido a que estamos usando la propiedad Overflow la cual nos permite controlar para que el contenido no se salga de su contenedor ahora veremos como usar esta propiedad.</p>
                </div>
            </Content>

            <Codigo lenguaje={"html"} codigo={`<div class="contenedor">
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contenedor{
  background-color: gray;
  width: 200px;
  height: 150px;
  margin: auto;
}`}/>
            <Web>
                <div className="css--contenedorOverflow1--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
                    </p>
                </div>
            </Web>
            <Texto texto={`Overflow controla cómo se maneja el contenido que excede los límites de su contenedor:

auto: Agrega un scroll automáticamente si el contenido se desborda.
scroll: Fuerza la aparición de la barra de desplazamiento, aunque no sea necesaria.
hidden: Oculta el contenido que se desborda sin permitir el scroll.`}/>

            {/* overflow hidden */}
            <Titulo level={2} text={`hidden`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="hidden">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
    </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.hidden{
  margin: auto;
  width: 250px;
  background-color: gray;
  height: 250px;
  overflow: hidden;
}`}/>
            <Web>
                <div className="css--contentOverflowHidden--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
                    </p>
                </div>
            </Web>

            {/* overflow scroll */}
            <Titulo level={2} text={`scroll`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="scroll">
  <p>
    texto
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.scroll2{
  margin: auto;
  width: 150px;
  background-color: gray;
  height: 150px;
  overflow: scroll;
}`}/>
            <Web>
                <div className="css--overflowScroll--ejemplo">
                    <p>
                        texto
                    </p>
                </div>
            </Web>
            <Texto texto={`Como puedes notar, la propiedad overflow: scroll; muestra la barra de desplazamiento siempre, incluso si el contenido no se desborda.`}/>
            
            {/* overflow auto */}
            <Titulo level={2} text={`aunto`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="auto">
  <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.overflow_auto{
  margin: auto;
  width: 150px;
  background-color: gray;
  height: 150px;
  overflow: auto;
}`}/>
            <Web>
                <div className="css--overflowAuto--ejemplo">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ullam eaque quia facilis labore soluta sapiente itaque totam tempore vitae vero ducimus asperiores quidem perferendis alias, reprehenderit quo ad odit.</p>
                </div>
            </Web>

            {/* overflow-x */}
            <Titulo level={2} text={`overflow-x`}/>
            <Texto texto={`overflow-x nos permite controlar el desplazamiento horizontal de un elemento, aplicando propiedades como hidden, auto y scroll.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="overflowX">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
    </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.overflowX{
    margin: auto;
    width: 150px;
    background-color: gray;
    height: 150px;
    overflow-x: scroll;
}`}/>
            <Web>
                <div className="css--overflowX--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
                    </p>
                </div>
            </Web>

            <Titulo level={2} text={`overflow-y`}/>
            <Texto texto={`overflow-y nos permite controlar el desplazamiento vertical de un elemento, aplicando propiedades como hidden, auto y scroll.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="overflowY">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
    </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.overflowX{
    margin: auto;
    width: 150px;
    background-color: gray;
    height: 150px;
    overflow-y: scroll;
}`}/>
            <Web>
                <div className="css--overflowY--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione, quod asperiores, aut, nesciunt dolorem quasi ea itaque unde facilis tenetur veritatis. Quia, laboriosam voluptatibus velit id numquam deserunt! Ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia suscipit accusamus voluptates a? Error minus sed molestiae dicta laborum vitae rerum nostrum incidunt quasi officiis tempora, ullam quo blanditiis.
                    </p>
                </div>
            </Web>
        </MainCap>
    )
}