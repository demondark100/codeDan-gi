import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";
import Resumen from "@/componentes/cursos/resumen/resumen";

export default function FlexboxCss() {
    return (
        <MainCap>
            <Resumen>
              <Titulo text={`flexbox`}/>
              <Texto texto={`Esta es otra propiedad de display que hace que las cajas sean flexibles. Al ser flexibles, pueden recibir muchas propiedades nuevas.`}/>
              <Codigo lenguaje={"css"} codigo={`display: flex; /*pone un elemento en "flex"*/`}/>
            </Resumen>
            <Titulo text={`flexbox`}/>
            <Texto texto={`Anteriormente, se solía trabajar con tablas y float para crear sitios web, pero ahora se usa Flexbox porque es más fácil y óptimo.

Flexbox requiere dos elementos principales:

Contenedor flexible (flex container)
Elementos flexibles (flex items)`}/>

            {/* ejempl de flexbox */}
            <Web>
                <div className="css--ejemploFlexContainer--ejemplo">
                    flex contenedor
                    <div className="css--ejemploFlexContenido--ejemplo">
                        flex contenido
                    </div>
                </div>
            </Web>
            {/* fin de ejemplo de flexbox */}

            <Texto texto={`Al aplicar "display: flex;" a un contenedor, este se comportará como un bloque flexible, afectando directamente a sus elementos hijos.

Flexbox organiza los elementos en fila (de izquierda a derecha) o en columna (de arriba a abajo), dependiendo de la dirección establecida.

En lugar de enfocarnos solo en teoría, entenderás mejor Flexbox con la práctica. ¡Así que vamos al código!

Ahora comprobaremos cómo el contenedor flexible se comporta como un bloque.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="flex_content">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi molestias, doloribus est quibusdam velit unde, odit nihil ab quae adipisci veniam corporis soluta alias id eum qui molestiae consequatur.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.flex_content{
  display: flex;
  background-color: #2f87a1;
  color: #e7e4ff;
}`}/>
            <Web>
                <div className="css--ejemplo1Flexbox--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quasi molestias, doloribus est quibusdam velit unde, odit nihil ab quae adipisci veniam corporis soluta alias id eum qui molestiae consequatur.
                    </p>
                </div>
            </Web>


            <Titulo level={2} text={`Más diferencias entre flex y block`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="ejemplo_block">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
  </p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem culpa iusto architecto unde officiis consequuntur totam adipisci, provident eaque. In, inventore. Dolor atque deserunt consequatur quod nisi sequi totam?
  </p>
</div>
<hr />
<div class="ejemplo_flex">
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias sint eligendi cumque. Accusantium, recusandae explicabo cum hic voluptatem debitis repudiandae facilis sit, optio quia praesentium quod ipsum animi cupiditate.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.ejemplo_block{
  display: block;
}
.ejemplo_flex{
  display: flex;
}`}/>
            <Web>
                <div className="css--flexboxEjemploBlock--ejemplo">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae autem culpa iusto architecto unde officiis consequuntur totam adipisci, provident eaque. In, inventore. Dolor atque deserunt consequatur quod nisi sequi totam?
                    </p>
                </div>
                <hr />
                <div className="css--flexboxEjemploFlex--ejemplo">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium blanditiis velit animi autem omnis cupiditate, sapiente illo consectetur quo voluptatem vel dolorem eos cum vero nesciunt inventore. Sapiente, officiis ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestias sint eligendi cumque. Accusantium, recusandae explicabo cum hic voluptatem debitis repudiandae facilis sit, optio quia praesentium quod ipsum animi cupiditate.
                    </p>
                </div>
            </Web>
            <Texto texto={`Como te das cuenta, con block, los elementos hijos se colocan uno debajo del otro, mientras que con flex, los hijos se alinean uno al lado del otro. Si agregamos más elementos al contenedor flex, estos seguirán colocándose en línea, cosa que no sucede con block.

Al trabajar con flex, las cajas siempre se ajustarán al contenido y, a diferencia de float, no habrá problemas con la altura.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenido_flex">
  <p class="parrafo1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deserunt aliquid neque odit iure velit ex voluptas expedita alias, porro reiciendis cupiditate, unde ea. Perferendis hic cumque odit animi laborum.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cum est corporis, quasi ab repellat delectus voluptas optio aliquam deserunt assumenda temporibus dignissimos nesciunt illum suscipit ex! Blanditiis, molestiae asperiores!
  </p>
  <p class="parrafo2">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi recusandae dolorum modi, provident magnam debitis ratione et molestiae facere, beatae soluta possimus numquam voluptate quo, aliquid incidunt repellendus aut ipsa.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contenido_flex{
  display: flex;
  padding: 10px;
}

.parrafo1{
  background-color: #c5bee6;
  padding: 12px;
  margin: 8px;
}
.parrafo2{
  background-color: #34b66a;
  padding: 12px;
  margin: 8px;
}`}/>
            <Web>
                <div className="css--flexboxDisplayFlex--ejemplo">
                    <p className="css--flexboxDisplayFlex--ejemplo--parrafo1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deserunt aliquid neque odit iure velit ex voluptas expedita alias, porro reiciendis cupiditate, unde ea. Perferendis hic cumque odit animi laborum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cum est corporis, quasi ab repellat delectus voluptas optio aliquam deserunt assumenda temporibus dignissimos nesciunt illum suscipit ex! Blanditiis, molestiae asperiores!
                    </p>
                    <p className="css--flexboxDisplayFlex--ejemplo--parrafo2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi recusandae dolorum modi, provident magnam debitis ratione et molestiae facere, beatae soluta possimus numquam voluptate quo, aliquid incidunt repellendus aut ipsa.
                    </p>
                </div>
            </Web>
            <Texto texto={`Como puedes ver, aunque un elemento tenga más texto que otro, ambos se ajustan al contenedor, eliminando los problemas de altura que suelen presentarse con otros métodos de diseño.`}/>
            <Enlace texto={`flex-direction`} link={"/catalogo/css/capitulo_5/flexDirection"}/>
        </MainCap>
    )
}