import MainCap from "@/app/catalogo/componentes/main/main"
import Web from "@/app/catalogo/componentes/web/web"
import Codigo from "@/componentes/cursos/codigo/codigo"
import Texto from "@/componentes/cursos/texto/texto"
import Titulo from "@/componentes/cursos/titulo/titulo"
import Resumen from "@/componentes/cursos/resumen/resumen"


// css
import "./textShadow.css";

export default function TextShadowCss(){
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`text-shadow`}/>
                <Texto texto={`Con CSS podemos agregar sombras a los textos.`}/>
                <Codigo lenguaje={"css"} codigo={`/*bordes en los textos*/
text-shadow:   -2px  |   2px    |    15px    |  green;
            izquierda| arriba   | desenfoque |  color
            derecha  | abajo    |            |`}/>
            </Resumen>
            <Titulo text={`text-shadow`}/>
            <Texto texto={`text-shadow permite añadir sombras a los textos, definiendo su posición en los ejes X e Y, el nivel de desenfoque y el color. A diferencia de box-shadow, no incluye la propiedad de borde.`}/>
            <Codigo lenguaje={"css"} codigo={`text-shadow:   -2px  |   2px    |    15px    |  green;
            izquierda| arriba   | desenfoque |  color
            derecha  | abajo    |            |`}/>
            <Texto texto={`-2px → Desplazamiento en el eje X (izquierda si es negativo, derecha si es positivo).
2px → Desplazamiento en el eje Y (arriba si es negativo, abajo si es positivo).
15px → Nivel de desenfoque.
green → Color de la sombra.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="sombra_de_texto">
    un texto feliz :D
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.sombra_de_texto{
  background-color: black;
  color: white;
  height: 45px;
  width: 55%;
  margin: auto;
  text-shadow: 5px 5px 15px white;
}`}/>
            <Web>
                <p className="css--textShadow--ejemplo">
                    un texto feliz :D
                </p>
            </Web>
        </MainCap>
    )
}