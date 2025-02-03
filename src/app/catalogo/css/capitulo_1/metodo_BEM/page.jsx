import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Link from "next/link";

export default function Metodologia_BemHTML(params) {
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`Metodología BEM`}/>
                <Texto texto={`BEM organiza CSS usando bloques (.card), elementos (.card__title) y modificadores (.card--active) para mejorar claridad y reutilización.`}/>
                <Codigo lenguaje={"html"} codigo={`<div class="content">
  <p class="content__p">
    <b class="content__p--b">contenido</b>
  </p>
</div>`}/>
                <Web>
                    <div>
                        <p>
                            <b>contenido</b>
                        </p>
                    </div>
                </Web>
            </Resumen>
            <Titulo text={`Metodología BEM`}/>
            <Texto texto={`BEM, que significa Block, Element, Modifier (Bloque, Elemento, Modificador), es una metodología para escribir y organizar CSS de manera clara, escalable y mantenible. Fue creada por el equipo de Yandex y es ampliamente adoptada por desarrolladores que buscan evitar la complejidad y el desorden en sus estilos.`}/>

            <Titulo level={2} text={`Conceptos clave en BEM`}/>
            <Titulo level={2} text={`1. Bloque (Block)`}/>
            <Texto texto={`Un bloque es un componente independiente que representa una parte funcional o visual de la interfaz. Ejemplos de bloques pueden ser un botón, una tarjeta o un menú.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="menu">
    <p>Bloque</p>
</div>`}/>
            <Web>
                <p>Bloque</p>
            </Web>

            <Titulo level={2} text={`Elemento (Element)`}/>
            <Texto texto={`Un elemento es una parte del bloque que no puede existir de forma independiente. Representa un componente interno de un bloque, como un enlace dentro de un menú.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="menu">
  <a class="menu__link" href="#">Inicio</a>
</div>`}/>
            <Web>
                <Link href={"/"}>Inicio</Link>
            </Web>

            <Titulo level={2} text={`3. Modificador (Modifier)`}/>
            <Texto texto={`Un modificador define el estado, apariencia o comportamiento de un bloque o elemento. Los modificadores permiten variar un bloque o elemento sin duplicar código.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="menu menu--horizontal">
  <a class="menu__link menu__link--active" href="#">Inicio</a>
</div>`}/>
            <Web>
                <Link href={"/"}>Inicio</Link>
            </Web>
            <Titulo level={2} text={`Ejemplo practico`}/>
            <Codigo lenguaje={"html"} codigo={`<form class="formulario">
  <input type="text" class="formulario__input--diferente">
  <input type="text" class="formulario__input">
  <input type="text" class="formulario__input">
  <input type="text" class="formulario__input">
  <input type="text" class="formulario__input--diferente">
  <input type="text" class="formulario__input">
</form>`}/>
            <Codigo lenguaje={"css"} codigo={`.formulario__input--diferente{
  color: orange;
}
.formulario__input{
  color: green;
}`}/>
            <Web>
                <div>
                    <input type="text" style={{color: "orange"}} />
                    <input type="text" style={{color: "green"}} />
                    <input type="text" style={{color: "green"}} />
                    <input type="text" style={{color: "green"}} />
                    <input type="text" style={{color: "orange"}} />
                    <input type="text" style={{color: "green"}} />
                </div>
            </Web>
                
            <Titulo level={2} text={`Ejercicio`}/>
            <Codigo lenguaje={"html"} codigo={`<nav class="navbar navbar--dark">
  <ul class="navbar__menu">
    <li class="navbar__item navbar__item--active">
      <a class="navbar__link" href="#">Inicio</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__link" href="#">Servicios</a>
    </li>
    <li class="navbar__item">
      <a class="navbar__link" href="#">Contacto</a>
    </li>
  </ul>
</nav>`}/>
            <Codigo lenguaje={"css"} codigo={`/* Bloque */
.navbar {
  background-color: #f8f9fa;
  padding: 10px 20px;
}

.navbar--dark {
  background-color: #343a40;
  color: white;
}

/* Elementos */
.navbar__menu {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 16px;
}

.navbar__item {
  font-size: 16px;
}

.navbar__link {
  text-decoration: none;
  color: inherit;
}

/* Modificador */
.navbar__item--active .navbar__link {
  font-weight: bold;
  color: #007bff;
}`}/>
            <Web>
                <nav style={{backgroundColor: "#343a40"}}>
                    <ul style={{
                        listStyle: "none",
                        padding: "0",
                        display: "flex",
                        gap: "16px"
                    }}>
                        <li>
                            <Link style={{color: "#007bff",textDecoration: "none"}} href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link style={{textDecoration: "none"}} href="/">Servicios</Link>
                        </li>
                        <li>
                            <Link style={{textDecoration: "none"}} href="/">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </Web>
        </MainCap>
    )
}