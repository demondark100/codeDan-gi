import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Imagen from "@/componentes/cursos/media/imagen/imagen";

export default function ColorCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`color`}/>
                <Texto texto={`CSS ofrece diversas formas de aplicar color.`}/>
                <Codigo lenguaje={"css"} codigo={`/*rgb*/
color: rgb(150,256,38); /*solo se pueden poner desde el 0 al 255, 0 nada de color 255 color al maximo*/
/*rgba*/
background-color: rgba(0,255,12,0.5); /*esto es para colorizar con opacidad , estos van desde el 0 al 1 , la opacidad se pone como ultimo parametro*/
/*hexadecimal*/
/*estos es una mescla entre numero y alfabeto*/
/*desde el 1 al 9 y a hasta la f*/
color: #0f0; /*solo de 3 se usa cuando se quiere lograr un color fijo*/ 
color: #a7e476; /*de 6 digitos es para mesclar colores*/
background-color: #a7e4763d; /*con 8 digitos elegimos la opacidad del color*/
`}/>
            </Resumen>
            <Titulo text={`color`}/>
            <Texto texto={`Tenemos distintas formas de definir colores en CSS, por ejemplo, la que hemos estado usando hasta ahora:`}/>
            <Codigo lenguaje={"css"} codigo={`color: red;`}/>
            <Texto texto={`Sin embargo, existen formas más precisas de especificar colores como los Hexadecimales:`}/>
            <Codigo lenguaje={"css"} codigo={`color: #000eef;`}/>
            <Texto texto={`RGB (Rojo, Verde, Azul - Red, Green, Blue):`}/>
            <Codigo lenguaje={"css"} codigo={`color: rgb(150, 255, 120);`} />


            {/* rgb */}
            <Titulo level={2} text={`¿Cómo usar RGB en CSS?`}/>
            <Texto texto={`0 significa ausencia del color.
255 es el valor máximo, representando el color en su máxima intensidad.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="rgbContent">
    texto
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.rgbContent{
    width: 150px;
    height: 85px;
    margin: 15px;
    background-color: black;
    color: rgb(150, 255, 12);
}`}/>
            <Web>
                <div className="css--rgb-ejemplo1--ejemplo">texto</div>
            </Web>


            {/* rgba */}
            <Titulo level={2} text={`rgba`}/>
            <Texto texto={`Esto es similar a rgb, pero con rgba podemos definir la opacidad del color.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="rgba__content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.rgba__content{
  width: 150px;
  height: 150px;
  border: 2px solid rgb(8, 55, 207);
  background-color: rgba(252, 114, 72, 0.5);
  margin: 4px
}`}/>
            <Web>
                <div className="css--egbaColor--ejemplo"></div>
            </Web>

            <Texto texto={`El último valor (0.5) representa la transparencia:

0 = totalmente transparente.
1 = completamente opaco.`}/>

            {/* hexadecimal */}
            <Titulo level={2} text={`hexadecimal`}/>
            <Texto texto={`El sistema hexadecimal utiliza 16 unidades: del 0 al 9 y de la A a la F.

Ejemplos:

Formato de 3 caracteres: #f00 (equivale a #ff0000, que es rojo).
Formato de 6 caracteres: #0000ff (color azul).
Si se usa más o menos de 3 o 6 caracteres, el código no será válido.`}/>
            <Imagen src={"https://i.ytimg.com/vi/iJcIlC4yFIQ/maxresdefault.jpg"} alt={"hexadecimal"}/>
            <Texto texto={`Al momento de colorizar con hexadecimales debes saber que:

Se pueden usar números del 0 al 9 y letras de la A a la F.
Estos valores se pueden combinar para formar distintos colores.
Puedes experimentar con diferentes combinaciones para obtener el tono deseado.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="hexaContent"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.hexaContent{
  width: 100px;
  height: 100px;
  border: 2px solid #0837cf;
  background-color: #0ed4ca;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--hexadecimalColor--ejemplo"></div>
            </Web>
            <Texto texto={`Para dar opacidad en hexadecimal, agregaremos dos valores más después de los seis valores del color. Estos también seguirán la escala de "00" (mínima opacidad) a "FF" (máxima opacidad).

Ejemplo:

#00000080 → Negro con 50% de opacidad.
#FF0000CC → Rojo con 80% de opacidad.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="hexaOpacoContent"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.rgb_o{
  width: 100px;
  height: 100px;
  border: 2px solid #0837cf;
  background-color: #ff5b3e7e;
  margin: 15px;
}`}/>
            <Web>
                <div className="css--hexadecimalOpacoColor--ejemplo"></div>
            </Web>
        </MainCap>
    )
}