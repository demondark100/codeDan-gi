import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

export default function DivHtml(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`div`}/>
                <Texto texto={`Esto es para separa la informacion es varios bloques.`}/>
                <Codigo lenguaje={"html"} codigo={`<div><p>contenido</p></div>
<div><p>contenido</p></div>
<div><p>contenido</p></div>`}/>
                <Web>
                    <div><p>contenido</p></div>
                    <div><p>contenido</p></div>
                    <div><p>contenido</p></div>
                </Web>
            </Resumen>

            <Titulo text={`div`}/>
            <Texto texto={`Los divs nos sirven para agrupar los contenidos en distintas cajas es como decir una caja que guarda otras cajas esto es muy importante en especial a la hora de trabajar con css y javaScript.`}/>
            <Codigo lenguaje={"html"} codigo={`<div>todo el contenido que queremos poner</div>`}/>
            <Titulo level={2} text={`ejercicio 1`}/>
            <Texto texto={`Agrupar dos div y poner elementos html.`}/>
            <Codigo lenguaje={"html"} codigo={`<div>
  <h2>este es el div 1</h2>
  <p>
    aqui agrupremos los elementos que queramos.
  </p>
  <p>
    podemos poner imagenes lo que sea.
  </p>
</div>

<div>
  <h2>este es el div 2</h2>
  <p>
    aqui agrupremos los elementos que queramos.
  </p>
  <p>
    podemos poner imagenes lo que sea.
  </p>
</div>`}/>
            <Web>
                <div>
                    <h2>este es el div 1</h2>
                    <p>
                        aqui agrupremos los elementos que queramos.
                    </p>
                    <p>
                        podemos poner imagenes lo que sea.
                    </p>
                    </div>

                    <div>
                    <h2>este es el div 2</h2>
                    <p>
                        aqui agrupremos los elementos que queramos.
                    </p>
                    <p>
                        podemos poner imagenes lo que sea.
                    </p>
                </div>
            </Web>
        </MainCap>
    )
}