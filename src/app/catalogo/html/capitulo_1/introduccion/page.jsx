import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function IntroduccionHtml() {
    return (  
        <MainCap>
            <Resumen 
                titulo={"Introducción a HTML"}
                contenido={[{
                    "mensaje": `Para crear un archivo HTML es necesario que tenga la extensión ".html".`,
                    "lenguaje": "html",
                    "codigo": `index.html <!-- para página principal -->
archivo.html <!-- Para nombrar una página cualquiera -->`
                }, {
                    "mensaje": `Para abrir la consola del navegador se debe presionar "F12" e ir a "Elementos" o hacer clic derecho y seleccionar "Inspeccionar".`
                }]}
            />
            <Titulo level={1} text="Introducción" />
            <Texto texto="HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Se utiliza para estructurar y presentar contenido en la web." />
            <Texto texto="Para crear un archivo HTML es necesario crear un archivo con la extensión '.html'." />
            <Codigo lenguaje="powershell" codigo="nombre_archivo.html" />
            <Texto texto="Si queremos tener una página principal en nuestro proyecto, es obligatorio que tenga el nombre 'index', por ejemplo 'index.html'. Sin embargo, también podemos crear cualquier página con cualquier nombre, como 'about.html'. Pero si deseamos tener una página principal, es necesario que se llame 'index.html'." />
            <Codigo lenguaje="powershell" codigo={`|_index.html   // página principal\n|_about.html    // otra página\n|_tienda.html   // otra página`} />
            <Titulo level={2} text="Consola del navegador" />
            <Texto texto={`Existen dos formas de abrir la consola del navegador:

1. Presionar F12.

2. Hacer clic derecho, seleccionar "Inspeccionar" y luego ir a la pestaña "Elementos".`}/>
        </MainCap>
    );
}

export default IntroduccionHtml;