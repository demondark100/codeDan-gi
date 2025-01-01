import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function EnlacesHtml(){
    return (
        <MainCap>
            <Resumen 
                titulo={"Enlaces"}
                contenido={[{
                    "mensaje": `Los enlaces se estructuran así:`,
                    "lenguaje": `html`,
                    "codigo": `<a href="enlace" target="abrir en otra pestaña">contenido</a>`
                },{
                    "lenguaje": `html`,
                    "codigo": `<a href="../ruta" target="_blank">click aquí</a>`  
                },{
                    "mensaje": `El atributo "target" no es obligatorio, podemos usarlo solo si deseamos.`
                }]}
            />
            <Titulo level={1} text={`Enlaces`}/>
            <Texto texto={`Esta etiqueta nos sirve para redirigir al usuario hacia otra parte de nuestra página web o a otros sitios, por ejemplo, Facebook, YouTube, etc.

Esta etiqueta se representa por "<a>" y tiene un atributo "href" en el cual debemos poner el enlace que deseamos, ya sea una sección de nuestra página o un enlace externo.`}/>
            <Codigo lenguaje={"html"} codigo={`<a href="cualquier enlace">mensaje que queremos poner</a>`}/>
            <Texto texto={`Ahora daré un ejemplo real de cómo usar "<a href="">".

Redirigir al usuario a una imagen cualquiera.`}/>
            <Codigo lenguaje={"html"} codigo={`<a href="https://www.bing.com/images/search?view=detailV2&ccid=gmTtk%2fbJ&id=CA2A1F058F35F12D65AF10F11796CBD6A2420959&thid=OIP.gmTtk_bJXV97qZzhc7_hGgHaEK&mediaurl=https%3a%2f%2fsm.ign.com%2ft%2fign_latam%2fscreenshot%2fdefault%2fhola-soy-goku_vzxh.1200.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8264ed93f6c95d5f7ba99ce173bfe11a%3frik%3dWQlCotbLlhfxEA%26pid%3dImgRaw%26r%3d0&exph=675&expw=1200&q=hola+soy+goku&simid=608024012174743578&FORM=IRPRST&ck=E32972141ECBBA421BE9490A23D4800A&selectedIndex=3">Hola soy Goku</a>
<!-- pruébalo en tu código -->`}/>
            <Web>
                <a href="https://www.bing.com/images/search?view=detailV2&ccid=gmTtk%2fbJ&id=CA2A1F058F35F12D65AF10F11796CBD6A2420959&thid=OIP.gmTtk_bJXV97qZzhc7_hGgHaEK&mediaurl=https%3a%2f%2fsm.ign.com%2ft%2fign_latam%2fscreenshot%2fdefault%2fhola-soy-goku_vzxh.1200.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8264ed93f6c95d5f7ba99ce173bfe11a%3frik%3dWQlCotbLlhfxEA%26pid%3dImgRaw%26r%3d0&exph=675&expw=1200&q=hola+soy+goku&simid=608024012174743578&FORM=IRPRST&ck=E32972141ECBBA421BE9490A23D4800A&selectedIndex=3">Hola soy Goku</a>
            </Web>
            <Titulo level={2} text={`target`}/>
            <Texto texto={`Este atributo nos sirve para poder redireccionar al usuario, pero se abrirá en otra ventana del navegador. Esto nos sirve por si queremos redireccionar al usuario, pero no queremos que el usuario salga de nuestra página.

Para esto debemos poner el valor "_blank" a target.`}/>
            <Codigo lenguaje={"html"} codigo={`<a href="enlace" target="_blank">contenido</a>
<!-- pruébalo en tu código -->
<!-- cambia "enlace" por cualquier enlace -->
<!-- cambia "contenido" por cualquier cosa-->`}/>
            <Titulo level={2} text={`protocolo local y https`}/>
            <Texto texto={`Como sabemos, con <a> podemos enviar al usuario a otras páginas, pero también podemos enviar al usuario a otras partes de nuestra propia página.`}/>
            <Codigo lenguaje={"html"} codigo={`<a href="/carpeta">click aquí</a>
<!-- si queremos acceder a una carpeta necesitamos de "/" -->
<a href="../carpeta">click aquí</a>
<!-- si queremos retroceder de nuestra posición se usa "../" -->`}/>
            <Titulo level={2} text={`ejercicio 1`}/>
            <Texto texto={`Ahora haremos un pequeño ejercicio donde mandaremos al usuario a otras partes de nuestro sitio web. Esto lo haremos desde cero.

1. Crear una carpeta llamada "paginas".
2. Crear un archivo llamado "pagina1.html" dentro de la carpeta "paginas" y luego abrirla.
3. Crear un archivo llamado "pagina2.html" dentro de la carpeta "paginas"`}/>
            <Titulo level={2} text={`pagina 1`}/>
            <Codigo lenguaje={"html"} codigo={`<!-- copiar todo este código -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 1</title>
  </head>
  <body>
    <h1>Pagina 1</h1>
    <p>Esta es la pagina 1.</p>
    <p>
      <a href="pagina2.html">click aquí.</a>
      para ir a la pagina 2
    </p>
  </body>
</html>
`}/>
            <Web>
                <h1>Pagina 1</h1>
                <p>Esta es la pagina 1.</p>
                <p>
                <a href="/">click aquí.</a>
                para ir a la pagina 2
                </p>
            </Web>
            <Titulo level={2} text={`pagina 2`}/>
            <Codigo lenguaje={"html"} codigo={`<!-- copiar todo este código -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 2</title>
  </head>
  <body>
    <h1>Pagina 2</h1>
    <p>Esta es la pagina 2.</p>
    <p>
      <a href="pagina1.html">click aquí.</a>
      para ir a la pagina 1
    </p>
  </body>
</html>
`}/>
            <Web>
                <h1>Pagina 2</h1>
                <p>Esta es la pagina 2.</p>
                <p>
                <a href="/">click aquí.</a>
                para ir a la pagina 1
                </p>
            </Web>
            <Titulo level={2} text={`ejercicio 2`}/>
            <Texto texto={`1. Crear una carpeta llamada "paginas carpeta".
2. Crear un archivo llamado "pagina1.html" dentro de "paginas carpeta" y luego abrirla.
3. Dentro de la carpeta "paginas carpeta" crear una carpeta llamada "carpeta 2".
4. Crear un archivo llamado "pagina2.html" dentro de la carpeta "carpeta 2"`}/>
            <Titulo level={2} text={`pagina 1`}/>
            <Codigo lenguaje={"html"} codigo={`<!-- copiar todo este código -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 1</title>
  </head>
  <body>
    <h1>Esta es la pagina 1</h1>
    <p>
      <a href="carpeta 2/pagina2.html">
          click aquí
      </a>
      para ir a la pagina 2.
    </p>
  </body>
</html>
`}/>
            <Web>
                <h1>Esta es la pagina 1</h1>
                <p>
                <a href="/">
                    click aquí
                </a>
                para ir a la pagina 2.
                </p>
            </Web>
            <Titulo level={2} text={`pagina 2`}/>
            <Codigo lenguaje={"html"} codigo={`<!-- copiar todo este código -->
<!DOCTYPE html>
<html>
  <head>
    <title>pagina 2</title>
  </head>
  <body>
    <h1>Esta es la pagina 2</h1>
    <p>
      <a href="../pagina1.html">
          click aquí
      </a>
      para ir a la pagina 1.
    </p>
  </body>
</html>
`}/>
        <Web>
            <h1>Esta es la pagina 2</h1>
            <p>
            <a href="../pagina1.html">
                click aquí
            </a>
            para ir a la pagina 1.
            </p>
        </Web>
        </MainCap>
    )
}

export default EnlacesHtml;