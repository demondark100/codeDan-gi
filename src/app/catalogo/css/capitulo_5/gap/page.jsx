import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function FlexGapCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`flex gap`}/>
                <Texto texto={`Con gap separamos de forma más sencilla los elementos hijos dentro de un contenedor flex.`}/>
                <Codigo lenguaje={"css"} codigo={`.content {
    display: flex;
    gap: 15px; /* Separa los elementos hijos con 15px de espacio */
}`}/>
            </Resumen>
            <Titulo text={`flex gap`}/>
            <Texto texto={`Con gap en flexbox podemos separar los elementos hijos dentro de un contenedor de manera más sencilla. Antes, la separación se lograba aplicando margin a cada elemento hijo, lo que requería más código y podía generar problemas al controlar la distribución del espacio.

El uso de gap soluciona esto, ya que separa los elementos hijos de forma nativa y sin necesidad de especificar márgenes individuales.`}/>

            <Titulo level={2} text={`¿Como era separar antes?`}/>
            <Texto texto={`Para entender mejor, veamos cómo se separaban los elementos usando margin:`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="flex__content">
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.flex__content{
    display: flex;
    background-color: #0a0b0a;
    flex-wrap: wrap;
    margin: 8px;
}
.flex__content div{
    width: 150px;
    height: 150px;
    margin: 15px;
    background-color: #4a504a;
}`}/>
            <Web>
                <div className="css--felxGapMargen--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>
            <Texto texto={`En este caso, cada elemento hijo tiene un margin: 15px;, lo que significa que hay un margen en todos los lados del elemento, lo que puede afectar el diseño de manera no deseada.`}/>

            <Titulo text={`Separacion con gap`}/>
            <Texto texto={`Ahora veamos cómo podemos lograr la misma separación de una manera más sencilla con gap:`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="gap_content">
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.gap_content{
    display: flex;
    flex-wrap: wrap;
    margin: 8px;
    background-color: #000;
    gap: 15px; 
}
.gap_content div{
    width: 150px;
    height: 150px;
    background-color: #4a4444;
}`}/>
            <Web>
                <div className="css--felxGap--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>
            <Texto texto={`Al usar gap, simplemente lo aplicamos al contenedor y automáticamente se genera el espacio entre los elementos hijos, sin necesidad de definir márgenes individuales en cada uno. Esto hace que el código sea más limpio, fácil de mantener y más predecible en el diseño.`}/>
        </MainCap>
    )
}