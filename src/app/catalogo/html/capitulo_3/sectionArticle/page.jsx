import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function SectionArticleHtml() {
    return (  
        <MainCap>
            <Resumen>
                <Titulo text={`section y article`}/>
                <Texto texto={`Estructura de mejor forma nuestra web.`}/>
                <Codigo lenguaje={"html"} codigo={`<article>
  <section>
    <h4>esta es la seccion numero 1</h4>
    <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
  </section>

  <section>
    <h4>esta es la seccion numero 2</h4>
    <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
  </section>
</article>`}/>
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
                </Web>
            </Resumen>

            <Titulo text={`section y article`}/>
            <Texto texto={`Con <section> y <article> estructuramos de mejor forma nuestro sitio web.`}/>
            <Titulo level={2} text={`sin section ni article`}/>
            <Texto texto={`De esta manera es la forma incorrecta ya que las cosas estan en el aire con lo cual el seo de la pagina esta mal.`}/>
            <Codigo lenguaje={"html"} codigo={`<h3>esta es una pagina basica</h3>
<p>
  aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
</p>
<p>
  bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
</p>`}/>
            <Web>
                <h3>esta es una pagina basica</h3>
                <p>
                aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
                </p>
                <p>
                bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
                </p>
            </Web>
            <Titulo level={2} text={`article y section`}/>
            <Texto texto={`De esta forma es la correcta de estructurar una pagina.

En este caso el articulo solo tendra una sola seccion.`}/>
            <Codigo lenguaje={"html"} codigo={`<article>
  <section>
    <h3>esta es una pagina basica</h3>
    <p>
      aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
    </p>
    <p>
      bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
    </p>
  </section>
</article>`}/>
            <Web>
                <article>
                    <section>
                        <h3>esta es una pagina basica</h3>
                        <p>
                        aqui estamos dando un ejemplo del como no se debe estructurar una pagina web.
                        </p>
                        <p>
                        bueno aqui pondremos cualquier cosa la cosa es rellenar todo xd.
                        </p>
                    </section>
                </article>
            </Web>
            <Texto texto={`Tambien se puede hacer con mas secciones.`}/>
            <Codigo lenguaje={"html"} codigo={`<article>
  <section>
    <h4>esta es la seccion numero 1</h4>
    <p>aqui pondremos lo que sea no se me ocurre nada para escribir.</p>
  </section>

  <section>
    <h4>esta es la seccion numero 2</h4>
    <p>podemos poner secciones infinitas la cosa es que la pagina este bien estructurada.</p>
  </section>
</article>`}/>
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
            </Web>
        </MainCap>
    );
}

export default SectionArticleHtml;