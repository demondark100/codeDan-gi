import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";


import "./display.css";

export default function DisplayCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`display`}/>
                <Texto texto={`Display modifica el comportamiento de un elemento en la página.`}/>
                <Codigo lenguaje={"css"} codigo={`display: block; /*ocupa todo el ancho*/]
display: inline; /*solo ocupa el espacio necesario*/
display: inline-block; /*ocupa solo el espacio necesario con las caracteristicas de display block*/
display: flex; /*ocupa todo el ancho*/
display: grid; /*ocupa todo el ancho*/
display: none; /*oculta un elemento*/`}/>
            </Resumen>
            <Titulo text={`display`}/>
            <Texto texto={`Veremos otras propiedades de display, pero sin profundizar.

Además de:

display: block;
display: inline;
display: inline-block;
También tenemos:

display: flex;
display: grid;
Estas propiedades modifican el comportamiento de las cajas.`}/>
            <Titulo level={2} text={`Ahora veremos todos los comportamientos que tiene display.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="block">
  todo el espacio
</div>
<div class="inline">
  espacio necesario
</div>
<div class="inlineBlock">
  espacio necesario con el comportamiento de display block
</div>
<div class="flex">
  todo el espacio adquiriendo nuevas caracteristicas
</div>
<div class="grid">
  todo el espacio adquiriendo nuevas caracteristicas
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.block{
    display: block;
    background-color: black;
    color: wheat;
}
.inline{
    display: inline;
    background-color: black;
    color: wheat;
    margin-top: 15px;
}
.inlineBlock{
    display: inline-block;
    background-color: black;
    color: wheat;
    margin-top: 15px;
}
.flex{
    display: block;
    background-color: black;
    color: wheat;
    margin-top: 15px;
}
.grid{
    display: block;
    background-color: black;
    color: wheat;
    margin-top: 15px;
}`}/>
            <Web>
                <div className="css--displayBlock--ejemplo">
                    todo el espacio
                </div>
                <div className="css--displayInline--ejemplo">
                    espacio necesario
                </div>
                <div className="css--displayInlineBlock--ejemplo">
                    espacio necesario con el comportamiento de display block
                </div>
                <div className="css--displayFlex--ejemplo">
                    todo el espacio adquiriendo nuevas caracteristicas
                </div>
                <div className="css--displayGrid--ejemplo">
                    todo el espacio adquiriendo nuevas caracteristicas
                </div>
            </Web>
            <Titulo level={2} text={`none`}/>
            <Texto texto={`Con display: none; podemos ocultar un elemento sin ocupar espacio en la página.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="oculto">oculto</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.oculto{
    display: none;
}`}/>
            <Web>
              <div style={{display: "none"}}>oculto</div>
            </Web>
        </MainCap>
    )
}