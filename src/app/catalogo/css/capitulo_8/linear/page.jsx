import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function LinearCss() {
    return (
        <MainCap>
            <Titulo text={`linear`}/>
            <Texto texto={`La propiedad background permite aplicar gradientes a los fondos, como un degradado de azul en la parte superior a rojo en la inferior.`}/>
            <Codigo lenguaje={"css"} codigo={`background: linear-gradient(cuantos grados , los colores que quieras poner);
background: linear-gradient(0deg , #00f , #f00);`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="linear_content1">

</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.linear_content1{
    width: 50%;
    height: 60%;
    background: linear-gradient(0deg , #00f , #f00);
}`}/>
            <Web>
                <div className="css--linearContent--ejemplo"></div>
            </Web>
        </MainCap>
    )
}