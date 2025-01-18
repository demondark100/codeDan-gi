import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function MainHtml(params) {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`main`}/>
                <Texto texto={`La etiqueta <main> sirve para poner el contenido principal de la pagina.`}/>
                <Codigo lenguaje={"html"} codigo={`<maim>contenido</main>`}/>
            </Resumen>
            <Titulo text={`main`}/>
            <Texto texto={`La etiqueta <main> en HTML se usa para definir el contenido principal de una página web, es decir, la parte más importante o única de la página que está directamente relacionada con el tema o propósito de esa página. Solo debe haber un <main> por página, y no incluye contenido repetitivo como menús, encabezados, pies de página, o barras laterales.`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con main</title>
  </head>
  <body>

    <header>
      <nav>
        <ul>
          <li>
            navegacion de un menu o algo para 
            el encabezado.
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <section>
          <h1>seccion 1</h1>
        </section>
        <section>
          <h2>seccion 2</h2>
        </section>
        <aside>
          <nav>
            <ul>
              <li>otra navegacion</li>
            </ul>
          </nav>
        </aside>
      </article>
    </main>

  </body>
</html>`}/>
            <Web>
                <div>
                    <article>
                        <section>
                        <h1>seccion 1</h1>
                        </section>
                        <section>
                        <h2>seccion 2</h2>
                        </section>
                        <aside>
                        <nav>
                            <ul>
                            <li>otra navegacion</li>
                            </ul>
                        </nav>
                        </aside>
                    </article>
                </div>
            </Web>
        </MainCap>
    );
}

export default MainHtml;