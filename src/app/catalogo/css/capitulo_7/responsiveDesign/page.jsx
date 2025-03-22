import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";


import "./estilos.css";

export default function ResponsiveDesignCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`responsive design`}/>
                <Texto texto={`Con esto, adaptamos nuestra web a distintas resoluciones.`}/>
                <Codigo lenguaje={"css"} codigo={`/*estilos de la version movil*/
@media(min-width: 750px){
    /*estilos pc*/
}
@media(min-width: 1200px){
    /*estilos de pantallas mas grandes*/
}`}/>
            </Resumen>
            <Titulo text={`responsive design`}/>
            <Texto texto={`El Responsive Design permite adaptar el diseño de un sitio web a diferentes dispositivos y tamaños de pantalla, mejorando la experiencia del usuario en móviles, tabletas, computadoras y televisores.

Para lograrlo, utilizamos Media Queries, que funcionan como condiciones en CSS para aplicar estilos dependiendo del tamaño de la pantalla.`}/>
            <Titulo level={2} text={`¿Cómo funcionan las Media Queries?`}/>
            <Texto texto={`Las Media Queries permiten definir estilos que se activan solo cuando la pantalla cumple ciertas condiciones, como el ancho mínimo o máximo.`}/>
            <Codigo lenguaje={"css"} codigo={`/* Si la pantalla tiene 600px o más, aplica estos estilos */
@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Si la pantalla tiene 1200px o más, aplica estos estilos */
@media screen and (min-width: 1200px) {
  body {
    background-color: darkblue;
    color: white;
  }
}`}/>
            <Titulo level={2} text={`Metodologías de Responsive Design`}/>
            <Titulo level={3} text={`1. Mobile First (Recomendado)`}/>
            <Texto  texto={`Se diseñan los estilos para móviles primero y luego se agregan Media Queries para dispositivos más grandes.
Beneficios:

Carga más rápida en dispositivos móviles.
Código más limpio y estructurado.
Evita sobrescribir estilos innecesarios.`}/>
            <Codigo lenguaje={"css"} codigo={`/* Estilos base (para móviles) */
body {
  font-size: 16px;
}

/* Para pantallas de 768px o más (tabletas y PC) */
@media screen and (min-width: 768px) {
  body {
    font-size: 18px;
  }
}`}/>
            <Titulo level={3} text={`2. Desktop First (No recomendado)`}/>
            <Texto texto={`Se diseñan los estilos para escritorio primero y luego se adaptan a pantallas más pequeñas.
Problemas:
Puede generar código desordenado.
Aumenta la carga en dispositivos móviles al sobrescribir estilos.`}/>
            <Codigo lenguaje={"css"} codigo={`/* Estilos base (para escritorio) */
body {
  font-size: 20px;
}

/* Para móviles de 600px o menos */
@media screen and (max-width: 600px) {
  body {
    font-size: 16px;
  }
}`}/>
            <Titulo level={2} text={`Ejemplo Completo de Responsive Design`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diseño Responsivo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header id="header">
        <b class="logo">Mi Proyecto</b>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <div class="contenedor">
        <main id="main">
            <h1>Bienvenido a Mi Página Web</h1>
            <p>Este es un ejemplo de diseño responsivo utilizando Mobile First.</p>
        </main>

        <aside id="aside">
            <h2>Publicidad</h2>
            <p>¡Descubre nuestras ofertas exclusivas!</p>
        </aside>
    </div>

    <footer id="footer">
        <p>&copy; 2025 Mi Proyecto. Todos los derechos reservados.</p>
    </footer>

</body>
</html>`}/>
            <Codigo lenguaje={"css"} codigo={`/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos base (Mobile First) */
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    text-align: center;
    background-color: #f4f4f4;
    color: #333;
}

/* Estilos del Header */
#header {
    background-color: #000;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    color: #70ffff;
    font-size: 24px;
    margin-bottom: 10px;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: #c5ffc5;
    text-decoration: none;
    font-size: 18px;
}

nav ul li a:hover {
    color: #468f46;
}

/* Estilos del Contenido */
.contenedor {
    width: 90%;
    margin: 20px auto;
}

#main {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#main h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

#aside {
    background-color: #fffb06;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
}

/* Estilos del Footer */
#footer {
    background-color: #000;
    color: white;
    padding: 10px;
    margin-top: 20px;
}

/* Estilos para Tablet (Mínimo 768px) */
@media screen and (min-width: 768px) {
    #header {
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 40px;
    }

    nav ul {
        display: flex;
    }

    .contenedor {
        display: flex;
        justify-content: space-between;
    }

    #main {
        width: 70%;
    }

    #aside {
        width: 25%;
        margin-top: 0;
    }
}

/* Estilos para Escritorio (Mínimo 1024px) */
@media screen and (min-width: 1024px) {
    .contenedor {
        width: 80%;
    }

    #main h1 {
        font-size: 28px;
    }

    #aside {
        background-color: #ff2424;
        color: white;
    }
}`}/>
            <Web>
                <div className="css--responsiveDesignContent--ejemplo">
                    <div className="css--responsiveHeader--ejemplo">
                        <b className="css--responsiveHeaderLogo--ejemplo">Mi Proyecto</b>
                        <nav className="css--responsiveHeaderNav--ejemplo">
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="css--responsiveDesignContentMain--ejemplo">
                        <div className="css--responsiveMain--ejemplo">
                            <h1>Bienvenido a Mi Página Web</h1>
                            <p>Este es un ejemplo de diseño responsivo utilizando Mobile First.</p>
                        </div>

                        <div className="css--responsiveAside--ejemplo">
                            <h2>Publicidad</h2>
                            <p>¡Descubre nuestras ofertas exclusivas!</p>
                        </div>
                    </div>

                    <div className="css--responsiveFooter--ejemplo">
                        <p>&copy; 2025 Mi Proyecto. Todos los derechos reservados.</p>
                    </div>
                </div>
            </Web>
        </MainCap>
    )
}