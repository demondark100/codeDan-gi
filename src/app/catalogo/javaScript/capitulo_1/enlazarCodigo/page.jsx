import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function EnlazarCodigo() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Enlazar javaScript`}/>
                <Texto texto={`Para que JavaScript funcione, debe estar enlazado con HTML.`}/>
                <Codigo lenguaje={`html`} codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con javaScript</title>
  </head>
  <body>
    <script src="codigo.js"></script>
  </body>
</html>`}/>
            </Resumen>
            <Titulo text={`Enlazar javaScript`}/>
            <Texto texto={`Para usar JavaScript en un archivo HTML, es necesario enlazarlo correctamente.`}/>

            <Titulo level={2} text={`Cómo enlazar JavaScript a HTML`}/>
            <Texto texto={`Se hace utilizando la etiqueta <script> con el atributo src, que apunta al archivo JavaScript externo.`}/>
            <Codigo lenguaje={"html"} codigo={`<script src="enlace de nuestro archivo"></script>`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con javaScript</title>
  </head>
  <body>
    <p>Pagina</p>
    <script src="codigo.js"></script>
  </body>
</html>`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("Mensaje en consola.")`}/>
            <Web>
                <p>Pagina</p>
            </Web>
            <Consola language={"javascript"} result={`Mensaje en consola.`}/>
            <Texto texto={`La etiqueta <script> debe ir dentro de <body> para evitar errores.

En la sección de ejercicios, aprenderemos a manejar rutas correctamente. En la etiqueta <script>, el atributo src funciona igual que href en <link> para enlazar archivos JavaScript.`}/>
        </MainCap>
    )
} 