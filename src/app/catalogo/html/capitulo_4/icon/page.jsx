import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function IconHtml() {
  return (
    <MainCap>
      {/* Resumen del tema */}
      <Resumen>
        <Titulo text="Icon en HTML" />
        <Texto texto={"Aprende cómo agregar un favicon a tu página web utilizando la etiqueta HTML `<link>` con el atributo `rel=\"icon\"`."} />
        <Codigo
          lenguaje="html"
          codigo={`<link rel="icon" href="/ruta-al-icono.ico" />`}
        />
        <Web>
          {/* Ejemplo funcional (simulado) */}
          <p>Mira la pestaña del navegador, debería aparecer un ícono configurado como favicon.</p>
        </Web>
      </Resumen>

      {/* Sección: ¿Qué es un favicon? */}
      <Titulo level={2} text="¿Qué es un favicon?" />
      <Texto
        texto="Un favicon es una pequeña imagen que representa tu página web en el navegador. 
        Generalmente, se muestra en la pestaña del navegador, en los marcadores y accesos directos. 
        Sirve para mejorar la identidad visual y la experiencia del usuario."
      />

      {/* Código para agregar un favicon */}
      <Titulo level={2} text="¿Cómo se agrega un favicon?" />
      <Texto texto="La etiqueta `<link>` se utiliza para agregar el favicon. A continuación, se muestra el código necesario:" />
      <Codigo
        lenguaje="html"
        codigo={`<link rel="icon" href="/ruta-al-icono.ico" />`}
      />
      <Texto
        texto="En el atributo `href`, especifica la ruta del archivo de ícono. Este archivo puede ser un `.ico`, `.png`, o incluso `.svg`. 
        Generalmente, los archivos `.ico` tienen mejor compatibilidad."
      />


      {/* Notas adicionales */}
      <Titulo level={2} text="Notas importantes" />
      <Texto
        texto={`1. El favicon debe estar accesible en la ruta especificada, como \`/favicon.ico\`.
        \n2. Si no aparece, limpia la caché del navegador o asegúrate de que el archivo exista.
        \n3. Puedes usar generadores de favicon en línea para crear uno a partir de cualquier imagen.`}
      />

      {/* Diferentes formatos para favicon */}
      <Titulo level={2} text="Formatos soportados" />
      <Texto
        texto="Los navegadores modernos soportan varios formatos para favicon, como:"
      />
      <Codigo
        lenguaje="html"
        codigo={`<!-- Formato clásico .ico -->
<link rel="icon" href="/favicon.ico" type="image/x-icon">

<!-- Formato moderno .png -->
<link rel="icon" href="/favicon.png" type="image/png">

<!-- Formato SVG -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">`}
      />
    </MainCap>
  );
}

export default IconHtml;