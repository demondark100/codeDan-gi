import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function VariablesCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`variables`}/>
                <Texto texto={`Las variables almacenan estilos en CSS, permitiendo reutilizarlos cuando sea necesario.`}/>
                <Codigo lenguaje={"css"} codigo={`:root{
    --un-rojo: #f00; /*se crea una variable que guarda un color.*/
}
.elemento{
    background-color: var(--un-rojo); /*el fondo se pone de color rojo*/
}`}/>
            </Resumen>
            <Titulo text={`variables`}/>
            <Texto texto={`Las variables nos sirven para guardar estilos en CSS.`}/>
            <Codigo lenguaje={"css"} codigo={`--un-rojo: #f00; /*crear variable*/
var(--un-rojo); /*lamar variable*/`}/>


            {/* variables globales */}
            <Titulo level={2} text={`variables globales`}/>
            <Texto texto={`Las variables globales nos permiten usar la variable en cualquier elemento que queramos.
Para usarlas, es necesario crear un :root`}/>
            <Web>
                <div className="css--variablesGlobalesCss--ejemplo"></div>
                <div className="css--variablesGlobalesCssP1--ejemplo">
                    <p>
                        un parrafo cualquiera XD.
                    </p>
                </div>
            </Web>




            {/* variable locales */}
            <Titulo level={2} text={`variable locales`}/>
            <Texto texto={`Estas, a diferencia de las variables globales, no necesitan :root, pero solo se aplicarán al elemento al que se le definan. Por ejemplo, si creamos una variable para un p, esa variable solo funcionará dentro de los p y no en otros elementos, ya que es una variable local.`}/>
            <Codigo lenguaje={"html"} codigo={`<p>
    esto cambiara.
</p>
<p>
    tambien cambiara.
</p>
<div>
    no cambiara :c
</div>
<b>
    no cambiara.
</b>`}/>
            <Codigo lenguaje={"css"} codigo={`body{
    background-color: #000000ea;
}
p{
    --un-verde: #0f0;
}
p{
    color: var(--un-verde);
}
div{
    background-color: var(--un-verde);
}
b{
    background-color: var(--un-verde);
}`}/>
            <Web>
                <div className="css--variablesLocales--ejemplo">
                    <p>
                        esto cambiara.
                    </p>
                    <p>
                        tambien cambiara.
                    </p>
                    <div>
                        no cambiara :c
                    </div>
                    <b>
                        no cambiara.
                    </b>
                </div>
            </Web>
        </MainCap>
    )
}