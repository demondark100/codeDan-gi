import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function TransformCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`transform`}/>
                <Texto texto={`la propiedad transform en CSS transforma un elemento, permitiendo modificar su posición, tamaño, rotación e inclinación.`}/>
                <Codigo lenguaje={"css"} codigo={`/*translate(de izquierda a derecha , de arriba a abajo);*/
transform: translate(110px,80px); /*esto traslada de lugar a un elemento*/
/*scale(escala de la altura , escala del ancho);*/
transform: scale(2 , .4); /*El elemento duplica su tamaño*/
transform: skew(45deg,15deg); /*el elemento se inclina hacia la izquierda*/
transform: rotate(90deg); /*rotar un elemento usando grados*/
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); /*el elemento forma un rombo*/`}/>
            </Resumen>
            <Titulo text={`transform`}/>
            <Texto texto={`Esta propiedad transforma el elemento de distintas formas, las cuales veremos a continuación.`}/>
            
            
            {/* translate */}
            <Titulo level={2} text={`translate`}/>
            <Texto texto={`"translate" es una propiedad que nos permitira posisionar/mover a un elemento.
translate tiene 2 parametros:`}/>
            <Codigo lenguaje={"css"} codigo={`translate(de izquierda a derecha , de arriba a abajo);
translate(150px , 120px);`}/>
            <Texto texto={`A esta propiedad se le pueden asignar valores negativos para mover el elemento hacia la izquierda o hacia arriba.`}/>
            <Codigo lenguaje={"css"} codigo={`translate(-150px , -120px);`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="translate_content1">
    <b>:D</b>
</div>
<div class="translate_content2">
    <b>:D</b>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.translate_content1{
    width: 120px;
    height: 120px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;


    transform: translate(110px,80px);
}
.translate_content1 b{
    color: #fff;
}

.translate_content2{
    width: 120px;
    height: 120px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;


    transform: translate(-30px,-140px);
}
.translate_content2 b{
    color: #fff;
}`}/>
            <Web>
                <div className="css--transformTranslate1--ejemplo">
                    <b>:D</b>
                </div>
                <div className="css--transformTranslate2--ejemplo">
                    <b>:D</b>
                </div>
            </Web>

            
            {/* scale */}
            <Titulo level={2} text={`scale`}/>
            <Texto texto={`Esta propiedad permite aumentar o reducir el tamaño de un elemento escalándolo en función de su tamaño original.

Por ejemplo, si una caja tiene un width y height de 120px:

Con scale(2), la caja se duplicará de tamaño a 240px x 240px.
Con scale(3), crecerá a 360px x 360px.
Con scale(0.5), se reducirá a la mitad, quedando en 60px x 60px.
También existen scaleX y scaleY para escalar en una sola dirección, pero se suele usar scale() para simplificar el código.`}/>
            <Codigo lenguaje={"css"} codigo={`scale(escala de la altura , escala del ancho);
scale(2 , .4);`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="scale_content1">
    <b>:D</b>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.scale_content1{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;

    transform: scale(2 , .4);
}
.scale_content1 b{
    color: #fff;
}`}/>
            <Web>
                <div className="css--transformScale--ejemplo">
                    <b>:D</b>
                </div>
            </Web>
            <Texto texto={`Si a la propiedad scale le pasamos solo un parámetro, el escalado se aplicará de manera proporcional tanto al ancho como al alto del elemento.`}/>
            <Codigo lenguaje={"css"} codigo={`transform: scale(2);`}/>
            


            {/* skew */}
            <Titulo level={2} text={`skew`}/>
            <Texto texto={`"Skew" es una transformación que permite inclinar un elemento en dos dimensiones (horizontal y vertical). Esta propiedad se utiliza para distorsionar el elemento, haciendo que sus lados se inclinen en diferentes direcciones.

La propiedad skew acepta valores positivos o negativos y puede aplicarse en los ejes X e Y mediante skewX() y skewY(), respectivamente.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="skew_content">
    <b>:D</b>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.skew_content{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;

    transform: skew(45deg,15deg);
}
.skew_content b{
    color: #fff;
}`}/>
            <Web>
                <div className="css--transformSkew--ejemplo">
                    <b>:D</b>
                </div>
            </Web>


            {/* rotate */}
            <Titulo level={2} text={`rotate`}/>
            <Texto texto={`Con rotate podemos rotar un elemento a través de grados. Por ejemplo, si queremos que un elemento rote 90 grados, usamos deg.`}/>
            <Codigo lenguaje={"css"} codigo={`transform: rotate(90deg);`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="rotateContent">
    <b>:D</b>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.rotateContent{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;

    transform: rotate(90deg);
}
.rotateContent b{
    color: #fff;
}`}/>
            <Web>
                <div className="css--transformRotate--ejemplo">
                    <b>:D</b>
                </div>
            </Web>



            {/* Clip Path */}
            <Titulo level={2} text={`Clip Path`}/>
            <Texto texto={`Clip Path es un una propiedad que nos servira para dar formas a los elementos. hay un sitio web que nos facilitara su uso click en el titulo que dice Clip Path.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="clip_content">
    <p>
        :D
    </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.clip_content{
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px groove #5fcdee;


    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
.clip_content p{
    color: #fff;
}`}/>
            <Web>
                <div className="css--transformClipPath--ejemplo">
                    <p>
                        :D
                    </p>
                </div>
            </Web>
            <Enlace texto={`Crear clip path personalizado`} link={"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"}/>
        </MainCap>
    )
}