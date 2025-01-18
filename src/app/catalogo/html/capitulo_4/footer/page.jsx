import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function FooterHtml(params) {
    return (
        <MainCap>
            <Resumen>
                
            </Resumen>
            <Titulo text={`footer`}/>
            <Texto texto={`La etiqueta <footer> en HTML se utiliza para marcar el pie de página de una página web.
Ahora la estructura.`}/>
            <Codigo lenguaje={"html"} codigo={`<footer>
  contenido del pie de pagina.
</footer>`}/>
            <Texto texto={`Ahora como se implementa en un proyecto.`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>pagina con footer</title>
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

    <footer>
      <p>aqui todo el contenido del pie de pagina</p>
    </footer>

  </body>
</html>`}/>
            <Web>
                <div>

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

                    <footer>
                    <p>aqui todo el contenido del pie de pagina</p>
                    </footer>

                </div>
            </Web>
        </MainCap>
    )
}