import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function MetadatosHtml() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Metadatos`}/>
                <Texto texto={`Los metadatos nos sirve para proporcionar a los navegadores, estos van dentro de la etiqueta <head> y el usuario no puede ver estos datos en la pagina.`}/>
                <Codigo lenguaje={"html"} codigo={`<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="programacion,desarrollo web,aprendizaje">
  <meta name="descripcion" content="aqui aprenderas desarrollo web front-end y backend tambien otras cosas extras como linux">
  <meta name="autor" content="nombre de autor">
  <meta name="copyright" content="nomre de empresa">
  <meta name="robots content="index">
</head>`}/>
            </Resumen>

            <Titulo text={`Metadatos`}/>
            <Texto texto={`Los metadatos en HTML son información sobre la página web que no se muestra al usuario pero que es útil para navegadores, motores de búsqueda y otras herramientas. Se definen en el <head> usando etiquetas como <meta>. Por ejemplo:

<meta charset="UTF-8">: Especifica la codificación de caracteres.

<meta name="description" content="Descripción de la página">: Describe el contenido para SEO.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Optimiza la vista en dispositivos móviles.

Son claves para accesibilidad, SEO y rendimiento.`}/>
            <Titulo level={2} text={`ejemplo`}/>
            <Texto texto={`los metadatos se trabajan con la etiqueta meta.`}/>
            <Codigo lenguaje={"html"} codigo={`<head>
  <meta charset="UTF-8">
</head>
`}/>
            <Titulo level={2} text={`Tipos de metadatos`}/>
            <Texto texto={`Estos se estructuran de la siguiente manera.`}/>
            <Codigo lenguaje={"html"} codigo={`<head>
  <meta nombre="nombre de meta" contenido="poner el contenido">
</head>`}/>
            <Texto texto={`keywords: Se usan para añadir palabras clave relacionadas con el sitio web. Por ejemplo, si el sitio trata sobre comida, podríamos incluir ingredientes como "harina", "azúcar", "sal", etc. (Nota: Actualmente, esta etiqueta es poco utilizada por motores de búsqueda).

description: Describe el sitio web. Solo se permiten hasta 160 caracteres, útiles para mostrar en los resultados de búsqueda.

author: Indica quién es el autor del sitio web.

copyright: Especifica los derechos de autor o el nombre de la empresa propietaria del sitio.

robots: Indica si una página debe ser indexada por los motores de búsqueda. Usa valores como "index" (indexada) o "noindex" (no indexada).`}/>
            <Codigo lenguaje={"htmñ"} codigo={`<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="programacion,desarrollo web,aprendizaje">
  <meta name="descripcion" content="aqui aprenderas desarrollo web front-end y backend tambien otras cosas extras como linux">
  <meta name="autor" content="nombre autor">
  <meta name="copyright" content="nombre empresa">
  <meta name="robots content="index">
</head>`}/>
        </MainCap>
    );
}

export default MetadatosHtml;