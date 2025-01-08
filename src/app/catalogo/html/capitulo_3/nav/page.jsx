import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Link from "next/link";

function NavHtml() {
    return (  
        <MainCap>
            <Resumen>
                <Titulo text={`nav`}/>
                <Texto texto={`Esto es para especificar que navegaremos en la web.`}/>
                <Codigo lenguaje={"html"} codigo={`<header>
  <nav>
      <ul>
        <li><a href="pagina_1.html">cuenta</a> </li>
        <li><a href="pagina_2.html">sobre nosotros</a> </li>
        <li><a href="pagina_3.html">registrarse</a></li>
        <li><a href="pagina_4.html">inicio de sesion</a> </li>
      </ul>
    </nav>
</header>`}/>
                <Web>
                    <header>
                        <nav>
                            <ul>
                                <li><Link href="/">cuenta</Link> </li>
                                <li><Link href="/">sobre nosotros</Link> </li>
                                <li><Link href="/">registrarse</Link></li>
                                <li><Link href="/">inicio de sesion</Link> </li>
                            </ul>
                        </nav>
                    </header>
                </Web>
            </Resumen>

            <Titulo text={`nav`}/>
            <Texto texto={`La etiqueta <nav> se utiliza para crear un sistema de navegación en el sitio web, como menús o enlaces a otras secciones o páginas. Generalmente, se coloca dentro de un <header> si es parte de un menú principal, pero no es obligatorio si no forma parte del encabezado.

El contenido dentro de <nav> suele ser estático, como un menú que permanece constante en todas las páginas, por ejemplo, las opciones de navegación en la parte superior de un sitio web.`}/>
            <Titulo level={2} text={`Estructura`}/>
            <Codigo lenguaje={"html"} codigo={`<nav>
  enlaces para navegar en nuestro sitio web
</nav>`}/>
            <Texto texto={`Ahora hagamos un pequeño menu solo con html.`}/>
            <Codigo lenguaje={"html"} codigo={`<header>
  <nav>
      <ul>
        <li><a href="pagina_1.html">cuenta</a> </li>
        <li><a href="pagina_2.html">sobre nosotros</a> </li>
        <li><a href="pagina_3.html">registrarse</a></li>
        <li><a href="pagina_4.html">inicio de sesion</a> </li>
      </ul>
    </nav>
</header>`}/>
            <Web>
                <header>
                    <nav>
                        <ul>
                            <li><Link href="/">cuenta</Link> </li>
                            <li><Link href="/">sobre nosotros</Link> </li>
                            <li><Link href="/">registrarse</Link></li>
                            <li><Link href="/">inicio de sesion</Link> </li>
                        </ul>
                    </nav>
                </header>
            </Web>
        </MainCap>
    );
}

export default NavHtml;