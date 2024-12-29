import Content from "@/app/catalogo/componentes/content/content";
import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import "./conseptos.css";
import Imagen from "@/componentes/cursos/media/imagen/imagen";

// imagenes
import propiedades from "./caja.png";
import Resumen from "@/componentes/cursos/resumen/resumen";


function ConceptosBasicosHTML() {
    return (
        <MainCap>
            <Resumen 
                titulo={"Conceptos básicos"}
                contenido={[{
                    "mensaje": `La sintaxis de HTML se basa en "<>" y "</>".`,
                    "lenguaje": "html",
                    "codigo": `<button>botón</button>`
                },{
                    "mensaje": `Cada caja tiene propiedades en común que serían:
1. Border: Bordes de las cajas.
2. Margen: Espacio que tiene una caja por fuera.
3. Padding: Espacio que tiene una caja por dentro.`
                }]}
            />
            <Titulo level={1} text={`Conceptos básicos`}/>
            <Texto texto={`La sintaxis de HTML es muy sencilla, esto debido a que una página web está hecha de varias cajas, por ejemplo, los menús u otras cosas.`}/>
            <Titulo level={2} text={`Sintaxis`}/>
            <Texto texto={`La sintaxis de HTML se basa en etiquetas las cuales se abren con "<" y se cierran con ">", por ejemplo:`}/>
            <Codigo lenguaje={"html"} codigo={`<etiqueta>contenido</etiqueta>`}/>
            <Texto texto={`Dentro de "etiqueta" debe ir el contenido que queramos, por ejemplo, títulos, párrafos, botones, videos, imágenes, etc.`}/>
            <Titulo level={2} text={`Borde`}/>
            <Texto texto={`El borde es lo que tiene una caja alrededor, por ejemplo, tenemos este botón el cual tendrá un pequeño borde azul.`}/>
            <Content>
                <button className="btn-border-conceptos-basicos">button</button>
            </Content>
            <Titulo level={2} text={"Margen"}/>
            <Texto texto={`El margen en una caja es el espacio que existe desde la parte exterior de una caja, por ejemplo, estos dos botones tendrán un espacio.`}/>
            <Content>
                <button className="btn-margin-conceptos-basicos">button</button>
                <button className="btn-margin-conceptos-basicos">button</button>
            </Content>
            <Titulo level={2} text={`Padding`}/>
            <Texto texto={`Padding, a diferencia de margen, es el espacio que tiene una caja pero de forma interna, por ejemplo, este botón.`}/>
            <Content>
                <button className="btn-padding-conceptos-basicos">button</button>
            </Content>
            <Titulo level={2} text={`Inspeccionar`}/>
            <Texto texto={`Ahora, para ver de forma más detallada todas las propiedades que tiene una caja, puedes inspeccionar la página y luego en la parte de "Styles" bajamos hasta abajo y veremos todas las propiedades de una caja.`}/>
            <Imagen src={propiedades} alt={"propiedades"} />
        </MainCap>
    );
}

export default ConceptosBasicosHTML;