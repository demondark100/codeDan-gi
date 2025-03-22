import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function OrderCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`order`}/>
                <Texto texto={`order permite reorganizar elementos flexibles según se desee. Solo se aplica a los elementos hijos dentro de un contenedor flex.`}/>
                <Codigo lenguaje={"css"} codigo={`order: 2;`}/>
            </Resumen>
            <Titulo text={`order`}/>
            <Texto texto={`La propiedad order nos permite cambiar el orden de las cajas flexibles dentro de un contenedor. Es útil para diseños responsivos, ya que nos permite reorganizar los elementos sin cambiar el HTML. Esta propiedad se aplica a los elementos hijos.`}/>
            <Codigo lenguaje={"css"} codigo={`order: orden que queremos;`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="order_content">
    <div class="caja1">
        caja 1.
    </div>
    <div class="caja2">
        caja 2.
    </div>
    <div class="caja3">
        caja 3.
    </div>
    <div class="caja4">
        caja 4.
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.order_content{
    display: flex;
    background-color: #000;
    border: 2px solid #87d10f;
}
.caja1{
    width: 20%;
    color: #87d10f;
    order: 2;
    margin: 15px;
    border: 2px solid #ff0000;
}
.caja2{
    width: 20%;
    color: #87d10f;
    order: 1;
    margin: 15px;
    border: 2px solid #ff0000;
}
.caja3{
    width: 20%;
    color: #87d10f;
    order: 4;
    margin: 15px;
    border: 2px solid #ff0000;
}
.caja4{
    width: 20%;
    color: #87d10f;
    order: 3;
    margin: 15px;
    border: 2px solid #ff0000;
}`}/>
            <Web>
                <div className="css--orderContent--ejemplo">
                    <div className="css--orderContent--caja1--ejemplo">
                        caja 1.
                    </div>
                    <div className="css--orderContent--caja2--ejemplo">
                        caja 2.
                    </div>
                    <div className="css--orderContent--caja3--ejemplo">
                        caja 3.
                    </div>
                    <div className="css--orderContent--caja4--ejemplo">
                        caja 4.
                    </div>
                </div>
            </Web>

            <Texto texto={`Al analizar el ejemplo de código, podemos ver cómo la propiedad order nos permite reorganizar los elementos según nuestras necesidades. Esta flexibilidad es muy útil para crear diseños personalizados y adaptables.`}/>
        </MainCap>
    )
}