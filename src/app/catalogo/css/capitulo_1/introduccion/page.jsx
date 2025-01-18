import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function IntroduccionCSS() {
  return (
    <MainCap>
      {/* Título fuera de Resumen */}
      <Titulo text="Introducción a CSS" />

      {/* Resumen del tema */}
      <Resumen>
        <Texto
          texto={
            "CSS (Cascading Style Sheets) es el lenguaje utilizado para estilizar páginas web. Permite agregar colores, fuentes, diseños y hacer que tu sitio sea visualmente atractivo."
          }
        />
        <Texto
          texto={
            "En CSS, se definen reglas para los elementos HTML, como color, tamaño de fuente, márgenes, bordes, y mucho más. A continuación te mostramos un ejemplo básico de cómo puedes aplicar estilos a un elemento HTML."
          }
        />
        <Codigo
          lenguaje="html"
          codigo={`<!-- HTML con CSS en línea -->
<div style="color: blue; font-size: 20px;">Texto azul y grande</div>`}
        />
        <Codigo
          lenguaje="css"
          codigo={`/* Estilo CSS */
div {
  color: blue;
  font-size: 20px;
}`}
        />
      </Resumen>

      {/* ¿Qué es CSS? */}
      <Titulo level={2} text="¿Qué es CSS?" />
      <Texto
        texto={
          "CSS significa Cascading Style Sheets (Hojas de Estilo en Cascada). Es un lenguaje que describe cómo los elementos HTML deben mostrarse en la pantalla, papel o en otros medios. Sirve para separar la estructura del contenido (HTML) del diseño visual."
        }
      />

      {/* Formas de conectar CSS con HTML */}
      <Titulo level={2} text="Formas de conectar CSS con HTML" />
      <Texto texto="Hay tres formas principales de aplicar CSS: en línea, interno y externo. A continuación se explican con ejemplos." />

      {/* CSS en línea */}
      <Titulo level={3} text="1. CSS en línea" />
      <Texto texto="Los estilos se aplican directamente en el atributo `style` del elemento HTML. Es útil para cambios rápidos o específicos, pero no se recomienda para proyectos grandes." />
      <Codigo
        lenguaje="html"
        codigo={`<!-- CSS en línea -->
<div style="color: blue; font-size: 20px;">Texto azul y grande</div>`}
      />
      <Web>
        <div style={{ color: "blue", fontSize: "20px" }}>Texto azul y grande</div>
      </Web>

      {/* CSS interno */}
      <Titulo level={3} text="2. CSS interno" />
      <Texto texto="Se utiliza la etiqueta `<style>` dentro del archivo HTML, generalmente en la sección `<head>`. Es útil para páginas pequeñas o estilos específicos de una sola página." />
      <Codigo
        lenguaje="html"
        codigo={`<!-- CSS interno -->
<style>
  h1 {
    color: red;
    font-size: 24px;
  }
</style>
<h1>Este es un título rojo</h1>`}
      />
      <Web>
        <div>
          <h1 style={{ color: "red", fontSize: "24px" }}>Este es un título rojo</h1>
        </div>
      </Web>

      {/* CSS externo */}
      <Titulo level={3} text="3. CSS externo" />
      <Texto texto="Se utiliza un archivo separado con extensión `.css`, vinculado al archivo HTML mediante la etiqueta `<link>`. Es la forma más recomendada, ya que permite reutilizar estilos en varias páginas." />
      
      {/* Código del archivo HTML que vincula el archivo CSS externo */}
      <Codigo
        lenguaje="html"
        codigo={`<!-- HTML con CSS externo -->
<link rel="stylesheet" href="styles.css" />`}
      />
      
      {/* Código del archivo CSS separado */}
      <Codigo
        lenguaje="css"
        codigo={`/* Archivo styles.css */
h1 {
  color: green;
  font-size: 30px;
}`}
      />

      <Web>
        <div>
          <p style={{"color": "green"}}>Simulación: Un archivo externo llamado <code>styles.css</code> contiene estilos que afectan este texto.</p>
        </div>
      </Web>

      {/* Notas importantes */}
      <Titulo level={2} text="Notas importantes" />
      <Texto
        texto={`1. CSS en línea se utiliza solo en casos muy específicos.\n2. CSS interno es útil para estilos locales, pero no es eficiente para proyectos grandes.\n3. CSS externo es la mejor práctica, ya que facilita el mantenimiento y la reutilización de estilos.`}
      />
    </MainCap>
  );
}

export default IntroduccionCSS;