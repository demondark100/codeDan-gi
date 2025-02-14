import MainCap from "@/app/catalogo/componentes/main/main"
import Web from "@/app/catalogo/componentes/web/web"
import Codigo from "@/componentes/cursos/codigo/codigo"
import Texto from "@/componentes/cursos/texto/texto"
import Titulo from "@/componentes/cursos/titulo/titulo"
import Resumen from "@/componentes/cursos/resumen/resumen"


import "./outline.css";

export default function OutlineCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`outline`}/>
                <Texto texto={`El outline es similar al border, pero no ocupa espacio dentro del diseño del elemento.`}/>
                <Codigo lenguaje={"css"} codigo={`/*
Aplica un contorno similar a border,
pero sin afectar el espacio del elemento.*/
outline: 10px solid orange;

/*Elimina el contorno de un elemento (útil
para quitar el resaltado en inputs).*/
outline: none; `}/>
            </Resumen>
            <Titulo text={`outline`}/>
            <Texto texto={`El outline es un borde que no afecta el tamaño de las cajas, a diferencia de border. En otras palabras, el outline no ocupa espacio real en el diseño del sitio web.`}/>
            <Titulo level={2} text={`Ejemplo con border`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="border">
    border
</div>
<div class="caja">
    caja
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.border{
  background-color: green;
  border: 8px solid orangered;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}
.caja{
  background-color: blue;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}`}/>
            <Web>
                <div className="css--borderEnOutline--ejemplo">border</div>
                <div className="css-outlineCaja--ejemplo">caja</div>
            </Web>
            <Texto texto={`Como podemos ver, border ocupa un espacio real en la página, afectando el tamaño del elemento.`}/>

            {/* ejemplo con outline */}
            <Titulo level={2} text={`Ejemplo con outline`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="outline">
    outline
</div>
<div class="caja">
    caja
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.outline_1{
  background-color: green;
  outline: 10px solid orangered;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}
.outline_2{
  background-color: blue;
  margin: auto;
  width: 35%;
  height: 150px;
  color: whitesmoke;
}`}/>
            <Web>
                <div className="css--outlineCaja--ejemplo">outline</div>
                <div className="css--borderEjemplooutline--ejemplo">caja</div>
            </Web>

            <Texto texto={`Si te fijas, el borde del outline no empuja la caja de abajo porque no ocupa espacio real en el sitio web. Para notar la diferencia, observa la palabra "caja":

Con border, la caja es empujada hacia abajo, permitiendo que la palabra "caja" se vea por completo.
Con outline, la caja no se desplaza, por lo que parte de la palabra "caja" puede quedar oculta.`}/>
            <Texto texto={`Para entender mejor, outline se usa principalmente para resaltar elementos sin afectar su espacio real. Un ejemplo común es el resalte que aparece en los input cuando los seleccionamos.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="input_content">
    <input type="text" placeholder="con outline">
    <input class="sin_outline" type="text" placeholder="sin outline">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.sin_outline{
    outline: none;
}`}/>
            <Texto texto={`Para notar la diferencia, haz clic primero en el input que dice "con outline", y verás cómo aparece un borde sin afectar el tamaño del elemento. Luego, haz clic en el input que dice "sin outline", y notarás que no aparece ese borde resaltado, ya que el outline ha sido eliminado.`}/>
            <Web>
                <div>
                    <input type="text" placeholder="con outline"/>
                    <input type="text" className="css--sinOutlineInput--ejemplo" placeholder="sin outline"/>
                </div>
            </Web>
        </MainCap>
    )
}