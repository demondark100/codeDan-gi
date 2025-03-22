import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";

import "./estilos.css";


export default function FlexDirectionCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`flex-direction`}/>
                <Texto texto={`Esto hace que las cajas dentro de un contenedor se alineen en filas o columnas.`}/>
                <Codigo lenguaje={"css"} codigo={`flex-direction: column; /*posisiona las cajas en columnas*/
flex-direction: row; /*posisiona las cajas en filas*/`}/>
                <Texto texto={`"reverse" funciona igual que column y row, pero las cajas se posicionan en orden inverso.`}/>
                <Codigo lenguaje={"css"} codigo={`flex-direction: row-reverse;
flex-direction: column-revese;`}/>
            </Resumen>
            <Titulo text={`flex-direction`}/>
            <Texto texto={`¿Recuerdan que mencioné que Flexbox se mueve de arriba a abajo y de izquierda a derecha?

Ahora veremos cómo funcionan las columnas y las filas.

Flexbox, por defecto, organiza los elementos en filas.`}/>
            
            {/* ejemplo de fila */}
            <Titulo level={2} text={`Fila`}/>
            <Web>
                <div className="css--flexDirectionEjemploFilaContent">
                    <div>Fila 1</div>
                    <div>Fila 2</div>
                    <div>Fila 3</div>
                </div>
            </Web>
            {/* fin del ejemplo de fila */}
            

            {/* ejemplo de columna */}
            <Titulo level={2} text={`Columna`}/>
            <Web>
                <div className="css--flexDirectionEjemploColumnaContent">
                    <div>Fila 1</div>
                    <div>Fila 2</div>
                    <div>Fila 3</div>
                </div>
            </Web>
            {/* fin de ejemplo de columna */}


            <Texto texto={`Ahora, para decidir cómo queremos que se comporten los elementos, usamos la propiedad flex-direction, que tiene las siguientes opciones:

flex-direction: row; → Organiza los elementos en fila (por defecto).
flex-direction: column; → Organiza los elementos en columna.
Ahora veremos cómo usarlo.`}/>
            <Titulo level={2} text={`Fila`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="filas_content">
  <div>
    fila.
  </div>
  <div>
    fila.
  </div>
  <div>
    fila.
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.filas_content{
  display: flex;
}
.filas_content div{
  width: 120px;
  height: 120px;
  background-color: #50515f;
  color: #fff;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--flexDirectionRow--ejemplo">
                    <div>
                        fila.
                    </div>
                    <div>
                        fila.
                    </div>
                    <div>
                        fila.
                    </div>
                </div>
            </Web>
            <Texto texto={`En este caso, no es necesario agregar flex-direction: row; porque Flexbox usa esta propiedad por defecto. Sin embargo, podemos especificarla si hemos cambiado la dirección a columna y queremos volver a filas.`}/>


            {/* ejemplo de columna */}
            <Titulo level={2} text={`columna`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="column_content">
  <div>
    columna
  </div>
  <div>
    columna
  </div>
  <div>
    columna
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.column_content{
  display: flex;
  flex-direction: column;
}
.column_content div{
  width: 120px;
  height: 120px;
  background-color: #50515f;
  color: #fff;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--flexDirectionColum--ejemplo">
                    <div>
                        columna
                    </div>
                    <div>
                        columna
                    </div>
                    <div>
                        columna
                    </div>
                </div>
            </Web>

            <Titulo level={2} text={`reverse`}/>
            <Texto texto={`También podemos invertir el orden de los elementos con:

flex-direction: row-reverse; → Invierte las filas (de derecha a izquierda).
flex-direction: column-reverse; → Invierte las columnas (de abajo hacia arriba).
Ahora, veamos un ejemplo de uso.`}/>

            
            {/* ejemplo de row reverse  */}
            <Titulo level={2} text={`row-reverse`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="reverse_content">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.reverse_content{
  display: flex;
  flex-direction: row-reverse;
}
.reverse_content div{
  margin: 15px;
  width: 150px;
  height: 120px;
}
.reverse_content div:nth-child(1){
  background-color: #ff6868;
  color: #fff;
}
.reverse_content div:nth-child(2){
  background-color: #486fc4;
  color: #fff;
}
.reverse_content div:nth-child(3){
  background-color: #7155d8;
  color: #fff;
}`}/>
            <Web>
                <div className="css--flexDirectionRowReverse--ejemplo">
                    <div>
                        caja 1
                    </div>
                    <div>
                        caja 2
                    </div>
                    <div>
                        caja 3
                    </div>
                </div>
            </Web>


            {/* ejemplo de column reverse */}
            <Codigo lenguaje={"html"} codigo={`<div class="column_reverse">
  <div>
    caja 1
  </div>
  <div>
    caja 2
  </div>
  <div>
    caja 3
  </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.column_reverse{
  display: flex;
  flex-direction: column-reverse;
}
.column_reverse div{
  margin: 15px;
  width: 150px;
  height: 120px;
}
.column_reverse div:nth-child(1){
  background-color: #ff6868;
  color: #fff;
}
.column_reverse div:nth-child(2){
  background-color: #486fc4;
  color: #fff;
}
.column_reverse div:nth-child(3){
  background-color: #7155d8;
  color: #fff;
}`}/>
            <Web>
                <div className="css--flexDirectionColumn--ejemplo">
                    <div>
                        caja 1
                    </div>
                    <div>
                        caja 2
                    </div>
                    <div>
                        caja 3
                    </div>
                </div>
            </Web>
        </MainCap>
    )
}