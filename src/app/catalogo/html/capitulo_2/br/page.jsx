import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function BrHtml() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={"br"}/>
                <Texto texto={`<br> sirve para dejar un espacio en línea.`}/>
                <Codigo lenguaje={"html"} codigo={`<p>
  esto también será una <br>
  oración demasiado larga pero tendrá saltos <br>
  de línea pero esta vez también <br>
  estoy haciendo los saltos en línea en <br>
  el editor de código para que sea más legible.
</p>`}/>
                <Web>
                    <p>
                        esto también será una <br />
                        oración demasiado larga pero tendrá saltos <br />
                        de línea pero esta vez también <br />
                        estoy haciendo los saltos en línea en <br />
                        el editor de código para que sea más legible.
                    </p>
                </Web>
            </Resumen>


            <Titulo level={1} text={`br`}/>
            <Texto texto={`Esta etiqueta sirve para dar saltos en línea por ejemplo al escribir algo largo, esta etiqueta no necesita una etiqueta de cierre como las otras etiquetas.

otras etiquetas:
<etiqueta></etiqueta>
con br:
<br>`}/>
            <Codigo lenguaje={"html"} codigo={`<p>esta será una oración <br> demasiado larga pero haremos saltos <br> en línea gracias a br ya que esa es su <br> utilidad.</p>`}/>
            <Web>
                <p>esta será una oración <br /> demasiado larga pero haremos saltos <br /> en línea gracias a br ya que esa es su <br /> utilidad.</p>
            </Web>
            <Texto texto={`para hacerlo más legible y no todo esté en una misma línea podemos hacer esto.`}/>
            <Codigo lenguaje={"html"} codigo={`<p>
  esto también será una <br>
  oración demasiado larga pero tendrá saltos <br>
  de línea pero esta vez también <br>
  estoy haciendo los saltos en línea en <br>
  el editor de código para que sea más legible.
</p> 
`}/>
            <Web>
                <p>
                    esto también será una <br />
                    oración demasiado larga pero tendrá saltos <br />
                    de línea pero esta vez también <br />
                    estoy haciendo los saltos en línea en <br />
                    el editor de código para que sea más legible.
                </p>
            </Web>
            <Texto texto={`como te habrás dado cuenta podemos poner <br> en cualquier parte y se hará el salto de línea de forma automática en nuestra página y no afecta si ponemos <br> en una oración que va de corrido o si la oración también tiene saltos de línea en el editor de código.`}/>
        </MainCap>
    );
}

export default BrHtml;