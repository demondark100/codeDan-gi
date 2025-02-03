import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function EspecificidadCss() {
    return(
        <MainCap>
            <Resumen>
              <Titulo text={`Especificidad en CSS`}/>
              <Texto texto={`Los selectores de ID tienen la mayor prioridad.
Las clases y las pseudo-clases tienen una prioridad intermedia.
Los selectores de tipo (elementos HTML) tienen la menor prioridad.
Si dos reglas tienen la misma especificidad, la última regla definida en el CSS se aplica.
!important puede sobrescribir la especificidad, pero debe usarse con cuidado.`}/>
              <Codigo lenguaje={"html"} codigo={`<div>
  <p>Cascada</p>
</div>
<div>
  <p class="clase">cascada con clase</p>
  <p class="clase">Cascada con clase</p>
  <p>Elemento</p>
</div>
<div>
  <p id="mi-id">id</p>
</div>
<div>
  <p class="important">important</p>
  <p class="important">important</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`p{color: green;}
p{color: red};
.clase{color: red;}
.clase{color: blue;}
parrafo="important"
p[parrafo="important"]{color: orange !important;
#mi-id{color: yrllow;}}
.important{color: red !important;}
.important{color: ping;}
`}/>
              <Web>
                <p style={{color: "red"}}>Cascada</p>
                <p style={{color: "blue"}}>cascada con clase</p>
                <p style={{color: "blue"}}>cascada con clase</p>
                <p style={{color: "red"}}>Elemento</p>
                <p style={{color: "yellow"}}>id</p>
                <p style={{color: "red"}}>important</p>
              </Web>  
            </Resumen>
            <Titulo text={`Especificidad en CSS`}/>
            <Texto texto={`La especificidad es una regla fundamental en CSS que determina qué estilo se aplica cuando hay múltiples reglas que coinciden con el mismo elemento. Es decir, cuando un elemento tiene múltiples estilos posibles aplicados a él, CSS decide cuál aplicar según la especificidad de los selectores involucrados.`}/>
            <Titulo level={2} text={`¿Cómo funciona la especificidad?`}/>
            <Texto texto={`Cada selector en CSS tiene una "puntuación de especificidad" que se calcula basándose en su tipo. Cuanto más específico sea un selector, más alta será su puntuación de especificidad, lo que hace que su estilo tenga mayor prioridad.

La especificidad se calcula en cuatro partes, que son:

1. ID (A): Cada ID tiene una gran prioridad. Especificidad de ID = 100.

2. Clase, pseudo-clase (B): Las clases y las pseudo-clases tienen una prioridad menor que los ID. Especificidad de clase = 10.

3. Elemento, pseudo-elemento (C): Los selectores de tipo de elemento (como p, h1, div) tienen la menor prioridad. Especificidad de elemento = 1.
4. Selector universal (*): Se considera lo menos específico. La especificidad del selector universal es 0.

La especificidad se puede representar como una tupla de cuatro valores: (A, B, C, D).`}/>
            <Titulo level={2} text={`Ejemplos de especificidad`}/>
            <Titulo level={2} text={`Selector de ID:`}/>
            <Codigo lenguaje={"html"} codigo={`<p id="mi-id">Un texto</p>`}/>
            <Codigo lenguaje={"css"} codigo={`#mi-id {
  color: blue;
}`}/>
            <Web>
              <p style={{color: "blue"}}>Un texto</p>
            </Web>
            <Texto texto={`La especificidad es (1, 0, 0, 0) porque se utiliza un selector de ID.`}/>
            <Titulo level={2} text={`Selector de clase:`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="mi-clase">Un texto</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.mi-clase {
  color: red;
}`}/>
            <Web>
              <p style={{color: "red"}}>Un texto</p>
            </Web>
            <Texto texto={`La especificidad es (0, 1, 0, 0) porque se utiliza un selector de clase.`}/>
            <Titulo level={2} text={`Selector de tipo (elemento):`}/>
            <Codigo lenguaje={"html"} codigo={`<p>Un texto</p>`}/>
            <Codigo lenguaje={"css"} codigo={`p {
  color: green;
}`}/>
            <Web>
              <p style={{color: "green"}}>Un texto</p>
            </Web>
            <Texto texto={`La especificidad es (0, 0, 1, 0) porque se utiliza un selector de tipo de elemento.`}/>

            <Titulo level={2} text={`Combinación de selectores:`}/>
            <Texto texto={`Si tienes una combinación de selectores, por ejemplo:`}/>
            <Codigo lenguaje={"html"} codigo={`<div>
  <p>
    Un texto
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`div p {
  color: orange;
}`}/>
            <Web>
              <div>
                <p style={{color: "orange"}}>
                  Un texto
                </p>
              </div>
            </Web>
            <Texto texto={`La especificidad es (0, 0, 2, 0) porque el selector div tiene una especificidad de (0, 0, 1, 0) y el selector p tiene una especificidad de (0, 0, 1, 0), por lo que sumamos ambos.`}/>

            <Titulo level={2} text={`Reglas de especificidad`}/>
            <Texto texto={`La regla con mayor especificidad gana: Si un selector con un valor más alto de especificidad entra en conflicto con otro selector de menor especificidad, el primero será el que aplique el estilo.`}/>
            <Codigo lenguaje={"html"} codigo={`<div>
  <p id="#mi-id ">Texto 1</p>
  <p>Texto 2</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`p {
  color: green; /* Especificidad: (0, 0, 1, 0) */
}

#mi-id {
  color: blue; /* Especificidad: (1, 0, 0, 0) */
}`}/>
          <Web>
            <p style={{color: "blue"}}>Texto 1</p>
            <p style={{color: "green"}}>Texto 2</p>
          </Web>
          <Texto texto={`En este caso, si ambos selectores coinciden con un <p> dentro de un elemento con id="mi-id", el color aplicado será azul debido a que el selector #mi-id tiene mayor especificidad.`}/>
          <Texto texto={`En caso de empate, el último selector gana: Si dos reglas tienen la misma especificidad, el último selector declarado en el CSS será el que se aplique.`}/>
          <Codigo lenguaje={"html"} codigo={`<p>Texto</p>`}/>
          <Codigo lenguaje={"css"} codigo={`p {
  color: green;
}

p {
  color: red;
}`}/>
          <Web>
            <p style={{color: "red"}}>Texto</p>
          </Web>
          <Texto texto={`Aquí, el color aplicado será rojo, porque la segunda regla p tiene la misma especificidad que la primera, pero es la última definida.

Importancia de !important: Si una regla contiene !important, su especificidad será máxima, aunque tenga una especificidad más baja que otras reglas. Sin embargo, el uso de !important debe ser evitado en la medida de lo posible, ya que puede complicar el mantenimiento del código.`}/>
          <Codigo lenguaje={"html"} codigo={`<p>Texto</p>`}/>
          <Codigo lenguaje={"css"} codigo={`p {
  color: green !important;
}

p {
  color: red;
}`}/>
          <Web>
            <p style={{color: "green"}}>Texto</p>
          </Web>
          <Texto texto={`En este caso, aunque la regla de color: red se declare después, el color aplicado será verde, ya que la propiedad !important tiene más peso.`}/>
        </MainCap>
    )
}