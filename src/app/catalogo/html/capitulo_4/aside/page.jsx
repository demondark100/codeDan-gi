import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


function AsideHtml() {
    return (  
        <MainCap>
            <Resumen>
                <Titulo text={`aside`}/>
                <Texto texto={`<aside> se usa para barras laterales, enlaces, publicidad, informacion adicional.`}/>
                <Codigo lenguaje={"html"} codigo={`<aside>contenido</aside>`}/>
            </Resumen>


            <Titulo text={`aside`}/>
            <Texto texto={`La etiqueta <aside> en HTML se usa para contenido relacionado, como barras laterales, enlaces, publicidad o información adicional que complementa el contenido principal.`}/>
            <Codigo lenguaje={"html"} codigo={`<aside>
    contenido extra o una navegacion secundaria.
</aside>
`}/>
            <Web>
                <aside>
                    contenido extra o una navegacion secundaria.
                </aside>
            </Web>
            <Texto texto={`Todo completo con lo anterior.`}/>
            <Codigo lenguaje={"html"} codigo={`<article>
  <section>
    <h4>esta es la seccion numero 1</h4>
    <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
  </section>

  <section>
    <h4>esta es la seccion numero 2</h4>
    <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
  </section>
</article>

<aside>
  contenido extra o navegacion secundaria
</aside>`}/>
            <Web>
                <article>
                    <section>
                        <h4>esta es la seccion numero 1</h4>
                        <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
                    </section>

                    <section>
                        <h4>esta es la seccion numero 2</h4>
                        <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
                    </section>
                </article>

                <aside>
                    contenido extra o navegacion secundaria
                </aside>
            </Web>

        </MainCap>
    );
}

export default AsideHtml;