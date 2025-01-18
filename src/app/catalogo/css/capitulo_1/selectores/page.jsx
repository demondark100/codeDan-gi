import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Link from "next/link";

function SelectoresCSS() {
  return (
    <MainCap>

      <Resumen>
        <Titulo level={2} text="Selectores en CSS" />
        <Texto
          texto={
            "En CSS, los selectores son una parte fundamental, ya que permiten seleccionar los elementos HTML que se desean estilizar. Los selectores pueden ser muy simples o complejos, y se usan para aplicar estilos específicos a los elementos de una página web."
          }
        />
        <Texto
          texto={
            "Existen varios tipos de selectores en CSS, y cada uno tiene su función dependiendo del tipo de elementos o grupos de elementos que quieras seleccionar."
          }
        />
        <Codigo
          lenguaje="html"
          codigo={`<p>Seleccionar por tipo.</p>
<p cñass="clase">Seleccionar por clase</p>
<p id="clase">Seleccionar por id</p>
<p parrafo="atributo">Seleccionar por atributo</p>
`}/>
        <Codigo
          lenguaje="css"
          codigo={`p {color: red;} /* selector de tipo */
.clase{color: red;} /*selector de clase*/
#id{color: red;} /*selector de id*/
parrafo[parrafo]{color:red;} /*selector por atributo en comun*/
p[arrafo="atributo"]{color: red;} /*seleccionar por atributo*/`}
        />
      </Resumen>

      {/* Título fuera de Resumen */}
      <Titulo text="Selectores en CSS" />

      {/* Tipos de selectores */}
      <Titulo level={2} text="Tipos de selectores" />
      <Texto texto="Existen diferentes tipos de selectores en CSS, algunos de los más comunes son:" />

      {/* Selector de elemento (tipo) */}
      <Titulo level={3} text="1. Selector de elemento (tipo)" />
      <Texto
        texto="El selector de tipo se utiliza para seleccionar todos los elementos de un tipo específico, como <p>, <h1>, <div>, etc."
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con selector de tipo -->
<p>Este es un párrafo con estilo aplicado a través del selector de tipo.</p>`}
      />
      <Codigo
        lenguaje="css"
        codigo={`/* CSS para el selector de tipo */
p {
  color: red;
}`}
      />
      <Web>
        <p style={{ color: "red" }}>Este es un párrafo con texto rojo.</p>
      </Web>

      {/* Selector de clase */}
      <Titulo level={3} text="2. Selector de clase" />
      <Texto
        texto="El selector de clase se utiliza para seleccionar todos los elementos que tengan una clase específica. Se denota con un punto (.) antes del nombre de la clase."
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con selector de clase -->
<div class="mi-clase">Este texto tiene estilo aplicado con una clase.</div>`}
      />
      <Codigo
        lenguaje="css"
        codigo={`/* CSS para el selector de clase */
.mi-clase {
  font-size: 20px;
}`}
      />
      <Web>
        <div>Este texto tiene un tamaño de fuente de 20px.</div>
      </Web>

      {/* Selector de ID */}
      <Titulo level={3} text="3. Selector de ID" />
      <Texto
        texto="El selector de ID se utiliza para seleccionar un solo elemento con un identificador único. Se denota con el signo de número (#) antes del ID."
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con selector de ID -->
<div id="mi-id">Este texto tiene un fondo amarillo.</div>`}
      />
      <Codigo
        lenguaje="css"
        codigo={`/* CSS para el selector de ID */
#mi-id {
  background-color: yellow;
}`}
      />
      <Web>
        <div style={{backgroundColor: "yellow"}}>Este texto tiene un fondo amarillo.</div>
      </Web>

      {/* Selector de atributo */}
      <Titulo level={3} text="4. Selector de atributo" />
      <Texto
        texto="Los selectores de atributo se utilizan para seleccionar elementos que tengan un atributo específico con un valor dado."
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con selector de atributo -->
<A href="https://www.ejemplo.com">Este enlace tiene un atributo href.</A>`}
      />
      <Codigo
        lenguaje="css"
        codigo={`/* CSS para el selector de atributo */
a[href] {
  color: green;
}`}
      />
      <Web>
        <Link href="/" style={{ color: "green" }}>
          Este enlace será de color verde.
        </Link>
      </Web>

      {/* Selector de pseudo-clase */}
      <Titulo level={3} text="5. Selector de pseudo-clase" />
      <Texto
        texto="Las pseudo-clases permiten seleccionar elementos en estados específicos, como cuando el usuario pasa el mouse por encima de un elemento."
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con pseudo-clase -->
<A href="https://www.ejemplo.com">Pasa el mouse sobre este enlace.</A>`}
      />
      <Codigo
        lenguaje="css"
        codigo={`/* CSS para el selector de pseudo-clase */
a:hover {
  color: orange;
}`}
      />
      <Web>
        <Link href="/" style={{ color: "orange" }}>
          Pasa el mouse sobre este enlace.
        </Link>
      </Web>

      {/* Selector de pseudo-elemento */}
      <Titulo level={3} text="6. Selector de pseudo-elemento" />
      <Texto
        texto="Las pseudo-elementos permiten aplicar estilos a una parte específica de un elemento, como el primer carácter o la primera línea."
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con pseudo-elemento -->
<p>Este párrafo tiene un primer carácter de color púrpura y más grande.</p>`}
      />
      <Codigo
        lenguaje="css"
        codigo={`/* CSS para el pseudo-elemento */
p::first-letter {
  font-size: 30px;
  color: purple;
}`}
      />
      <Web>
        <p style={{color: "purple"}}>Este párrafo tiene un primer carácter de color púrpura y más grande.</p>
      </Web>

      {/* Notas importantes */}
      <Titulo level={2} text="Notas importantes" />
      <Texto
        texto={`1. Los selectores de clase y de ID deben ser únicos para evitar conflictos de estilo.\n2. Las pseudo-clases y pseudo-elementos no modifican la estructura del DOM, solo el estilo visual.\n3. Es recomendable usar clases y no ID para reutilizar estilos en múltiples elementos.`}
      />
    </MainCap>
  );
}

export default SelectoresCSS;
