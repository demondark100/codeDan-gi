import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function HtmlSemantico() {
    return (  
        <MainCap>
            <Titulo level={1} text={`HTML semántico`}/>
            <Texto texto={`Aquí veremos algunas etiquetas de HTML para empezar con unos cuantos proyectos.`}/>
            <Titulo level={2} text={`Títulos`}/>
            <Texto texto={`Estos se representan desde el h1 hasta h6 de esta manera.`}/>
            <Codigo lenguaje={"html"} codigo={`<body>
  <h1>
    Es el encabezado principal de la página y
    se utiliza para el título principal del contenido.
  </h1>

  <h2>
    Se utiliza para los títulos de secciones
    importantes dentro del contenido.
  </h2>

  <h3>
    Se utiliza para los títulos de 
    subsecciones dentro de una sección.
  </h3>

  <h4>
    Se utiliza para títulos de 
    subsecciones dentro de una subsección.
  </h4>

  <h5>
    Se utiliza para títulos de subsecciones
    dentro de una subsección de h4.
  </h5>

  <h6>
    Se utiliza para títulos de subsecciones
    dentro de una subsección de h5.
  </h6>
</body>`}/>
            <Web>
                <h1>
                    Es el encabezado principal de la página y
                    se utiliza para el título principal del contenido.
                </h1>

                <h2>
                    Se utiliza para los títulos de secciones
                    importantes dentro del contenido.
                </h2>

                <h3>
                    Se utiliza para los títulos de 
                    subsecciones dentro de una sección.
                </h3>

                <h4>
                    Se utiliza para títulos de 
                    subsecciones dentro de una subsección.
                </h4>

                <h5>
                    Se utiliza para títulos de subsecciones
                    dentro de una subsección de h4.
                </h5>

                <h6>
                    Se utiliza para títulos de subsecciones
                    dentro de una subsección de h5.
                </h6>
            </Web>
            <Titulo level={2} text={`Párrafos`}/>
            <Texto texto={`Los párrafos se representan con "<p>" y como su nombre lo dice nos sirve para poner párrafos en nuestro sitio web.`}/>
            <Codigo lenguaje={"html"} codigo={`<body>
  <p>Aquí va el párrafo</p>
</body>`}/>
            <Web>
                <p>Aquí va el párrafo</p>
            </Web>
            <Titulo level={2} text={`Textos`}/>
            <Texto texto={`Ahora veremos algunas etiquetas que sirven para decorar o marcar textos para que resalten en algo.`}/>
            <Codigo lenguaje={"html"} codigo={`<b>Texto en negrita</b>
<i>Texto en itálico</i>
<strike>Texto tachado</strike>
<small>Letra pequeña</small>

<!-- Hay muchas más etiquetas pero esas son las más usadas. -->`}/>
            <Web>
                <b>Texto en negrita</b>
                <i>Texto en itálico</i>
                <strike>Texto tachado</strike>
                <small>Letra pequeña</small>
            </Web>
        </MainCap>
    );
}

export default HtmlSemantico;