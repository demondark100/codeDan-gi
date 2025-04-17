import MainCap from "@/app/catalogo/componentes/main/main";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function DomJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`DOM`}/>
                <Texto texto={`Con el DOM podemos acceder y modificar los elementos HTML, lo que nos permite crear páginas web dinámicas, interactivas y con múltiples funcionalidades.`}/>
            </Resumen>
            <Titulo text={`DOM`}/>
            <Texto texto={`Imagina que estás construyendo una casa muy especial: tu propia página web.
Cada cuarto de esa casa representa una parte de la página:

La sala podría ser el encabezado con el logo

La cocina, una sección de recetas

El dormitorio, una galería de fotos

Y el jardín, los comentarios de los visitantes

Ahora bien, el DOM (Document Object Model) es como un plano interactivo de esa casa.
Gracias a este plano, puedes ver todo lo que hay en cada cuarto, mover cosas de lugar, cambiar los colores de las paredes, agregar nuevas decoraciones o quitar muebles.

Y tú, como diseñador o diseñadora, tienes una herramienta mágica que te permite modificar esa casa cuando quieras. Puedes:

Cambiar el título de una sección

Agregar nuevas imágenes

Esconder elementos que ya no quieres mostrar

Decorar con estilos diferentes según el día

Además, puedes hacer que algunas partes respondan cuando alguien las toca o hace clic, como si las luces se encendieran cuando entras a un cuarto.`}/>
        </MainCap>
    )
}