import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";



export default function CursorCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`cursor`}/>
                <Texto texto={`Con la propiedad cursor, podemos modificar el estilo del puntero del mouse.`}/>
                <Codigo lenguaje={"css"} codigo={`cursor: default; /* Cursor por defecto */
cursor: pointer; /* Manito */
cursor: crosshair; /* Cruz */
cursor: move; /* Flechas de movimiento */
cursor: text; /* Cursor de texto (I) */
cursor: wait; /* Reloj de espera */
cursor: help; /* Signo de interrogación */
cursor: not-allowed; /* Prohibido */`}/>
            </Resumen>
            <Titulo text={`cursor`}/>
            <Texto texto={`El cursor es el puntero del mouse, y se le pueden modificar sus propiedades para cambiar su apariencia y comportamiento.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="cursor_1">
  pasa el mouse aqui.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.cursor_1{
  background-color: gray;
  cursor: pointer;
}`}/>
            <Web>
                <p className="css--cursorPointer1--ejemplo">
                    pasa el mouse aqui.
                </p>
            </Web>
            <Texto texto={`pointer cambia el cursor por una mano, indicando que el elemento es interactivo. Se puede aplicar a cualquier elemento.`}/>

            <Texto texto={`Ahora veremos varios ejemplos de cursor.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="cursor-default">Cursor por defecto</p>
<p class="cursor-pointer">Cursor pointer</p>
<p class="cursor-crosshair">Cursor crosshair</p>
<p class="cursor-move">Cursor move</p>
<p class="cursor-text">Cursor text</p>
<p class="cursor-wait">Cursor wait</p>
<p class="cursor-help">Cursor help</p>
<p class="cursor-not-allowed">Cursor not allowed</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.cursor-default {
    cursor: default; /* Cursor por defecto */
}

.cursor-pointer {
    cursor: pointer; /* Manito */
}

.cursor-crosshair {
    cursor: crosshair; /* Cruz */
}

.cursor-move {
    cursor: move; /* Flechas de movimiento */
}

.cursor-text {
    cursor: text; /* Cursor de texto (I) */
}

.cursor-wait {
    cursor: wait; /* Reloj de espera */
}

.cursor-help {
    cursor: help; /* Signo de interrogación */
}

.cursor-not-allowed {
    cursor: not-allowed; /* Prohibido */
}`}/>
            <Web>
                <p className="css--cursor-default--ejemplo">Cursor por defecto</p>
                <p className="css--cursor-pointer--ejemplo">Cursor pointer</p>
                <p className="css--cursor-crosshair--ejemplo">Cursor crosshair</p>
                <p className="css--cursor-move--ejemplo">Cursor move</p>
                <p className="css--cursor-text--ejemplo">Cursor text</p>
                <p className="css--cursor-wait--ejemplo">Cursor wait</p>
                <p className="css--cursor-help--ejemplo">Cursor help</p>
                <p className="css--cursor-not-allowed--ejemplo">Cursor not allowed</p>
            </Web>
            <Texto texto={`Existen más cursores, pero estos son los más utilizados.`}/>
            <Texto texto={`Aquí más cursores:`}/>
            <Enlace link={"https://www.w3schools.com/cssref/tryit.php?filename=trycss_cursor"} target="_black" texto={`Cursores`}/>
        </MainCap>
    )
}