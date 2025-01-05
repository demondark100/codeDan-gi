import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function EstructuraHtml() {
    return (
        <MainCap>
            <Resumen>
              <Titulo level={1} text={`Estructura HTML`}/>
              <Texto texto={`Para evitar escribir la estructura de forma manual, "VSCode" y "Sublime Text" tienen formas de hacer eso rápido.

En VSCode: escribe "!" y luego presiona "TAB".

En Sublime Text: escribe "html" y luego presiona "TAB".

En ambos casos se creará esta estructura básica de HTML.`}/>
              <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
  </head>
  <body>
    Contenido de la página
  </body>
</html>`}/>
              <Web>
                <p>Contenido de la página</p>
              </Web>
            </Resumen>



            <Titulo level={1} text={`Estructura HTML`}/>
            <Texto texto={`Ahora que sabemos cómo es la sintaxis de HTML, vamos a explicar la estructura que tiene HTML. Esta estructura se debe crear en cada página que vamos a crear.`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Título de la página</title>
  </head>
  <body>
    Contenido de la página
  </body>
</html>`}/>
            <Titulo level={2} text={`<!DOCTYPE html>`}/>
            <Texto texto={`Con esto vamos a indicar al navegador que nuestro archivo está escrito con HTML.`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>`}/>
            <Titulo level={2} text={`<html>`}/>
            <Texto texto={`<html></html> es la etiqueta raíz en la cual tiene dos etiquetas muy importantes: <head> y <body>.`}/>
            <Codigo lenguaje={"html"} codigo={`<html>
  <head>

  </head>
  <body>

  </body>
</html>`}/>
            <Texto texto={`La etiqueta <head> contiene información sobre el documento, como el título y la descripción del mismo.`}/>
            <Codigo lenguaje={"html"} codigo={`<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>

  </body>
</html>`}/>
            <Texto texto={`La etiqueta <body> contiene el contenido visible en la página web, como el texto, las imágenes y los enlaces.`}/>
            <Codigo lenguaje={"html"} codigo={`<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    Contenido de este sitio web como imágenes, videos, enlaces, juegos, etc.
  </body>
</html>`}/>
            <Titulo level={2} text={`Atajo`}/>
            <Texto texto={`Ahora, escribir todo eso puede ser bastante tedioso, por eso los editores de texto dan atajos para que la estructura se cree de forma automática.

1. En Visual Studio Code escribe "!" y presiona TAB.
2. En Sublime Text escribe "html" y presiona TAB.`}/>
        </MainCap>
    );
}

export default EstructuraHtml;