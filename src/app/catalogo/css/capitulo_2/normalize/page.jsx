import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Enlace from "@/componentes/cursos/enlace/enlace";

export default function NormalizeCss(params) {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Normalize`}/>
                <Enlace link={"https://necolas.github.io/normalize.css/"} texto={`Descargar normalize`}/>
                <Texto texto={`Con Normalize.css, eliminamos los estilos predeterminados del navegador, permitiéndonos trabajar con un diseño más limpio y consistente en todos los dispositivos y navegadores. Esto nos ayuda a evitar problemas con márgenes, paddings y otros estilos que podrían interferir con nuestro diseño.`}/>
            </Resumen>
            <Titulo text={`Normalize`}/>
            <Texto texto={`Para empezar, los navegadores siempre aplican un estilo por defecto. Por ejemplo, si escribimos un texto en una página web, notarás que las letras son de color negro. Esto ocurre porque el navegador define ese estilo predeterminado.

Ahora observa esto:`}/>
            <Codigo lenguaje={"html"} codigo={`
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cupiditate tempora deleniti minima quidem sequi, rerum eos libero repudiandae. Praesentium neque quod earum id nesciunt ipsa consequatur inventore consectetur quibusdam?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores quibusdam ducimus, cumque in, consequuntur a necessitatibus distinctio qui corporis officiis amet assumenda quae eligendi? Fugiat mollitia deleniti doloremque perspiciatis.
</p>`}/>
            <Texto texto={`Como te puedes dar cuenta, hay un espacio alrededor del contenido. Esto sucede porque el navegador aplica un margen y un relleno por defecto a ciertos elementos. Estos estilos predeterminados pueden ajustarse o eliminarse usando CSS.`}/>
            <Web>
                <div style={{padding: "30px"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cupiditate tempora deleniti minima quidem sequi, rerum eos libero repudiandae. Praesentium neque quod earum id nesciunt ipsa consequatur inventore consectetur quibusdam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores quibusdam ducimus, cumque in, consequuntur a necessitatibus distinctio qui corporis officiis amet assumenda quae eligendi? Fugiat mollitia deleniti doloremque perspiciatis.
                </div>
            </Web>
            <Titulo level={2} text={`Uso de normalize`}/>
            <Texto texto={`Normalize.css se encarga de restablecer todos los estilos que los navegadores aplican por defecto, permitiéndonos diseñar nuestra página de la forma que queramos sin interferencias.

Cómo descargar y usar Normalize.css:

1. Haz {clic aquí} para descargar Normalize.css.

2. Haz clic en "Download".

3. Haz clic derecho sobre el archivo y selecciona "Guardar como".

4. Enlaza el archivo Normalize.css en tu sitio web, igual que enlazarías un archivo CSS común.

5. Abre el archivo Normalize.css y realiza los siguientes cambios:

    Agregar un selector universal (*) en la parte superior con:`}
                enlaces={{"clic aquí": {url: "https://necolas.github.io/normalize.css/",target: "_blank"}}}
            />
            <Codigo lenguaje={"css"} codigo={`* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}`}/>
            <Texto texto={`Esto asegura que los elementos respeten exactamente el tamaño que les asignamos, sin que los márgenes o el relleno afecten su tamaño total.
    Buscar la propiedad img y agregar:`}/>
            <Codigo lenguaje={"css"} codigo={`img {
    border-style: none;
    max-width: 100%;
}`}/>
            <Texto texto={`Esto evita que las imágenes sobresalgan en dispositivos móviles, asegurando que se ajusten al ancho del contenedor.`}/>
        </MainCap>
    )
}