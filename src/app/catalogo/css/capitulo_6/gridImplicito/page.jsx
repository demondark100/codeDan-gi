import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";
import Enlace from "@/componentes/cursos/enlace/enlace";


export default function GridImplicitoCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid implicito`}/>
                <Texto texto={`Grid implícito crea automáticamente filas o columnas adicionales cuando hay más elementos de los que caben en la estructura definida. Esto permite que los elementos adicionales sigan organizándose dentro del grid sin necesidad de especificarlos manualmente.`}/>
            </Resumen>
            <Titulo text={`grid implicito`}/>
            <Texto texto={`Cuando creamos un elemento extra que excede las filas o columnas definidas, Grid genera automáticamente nuevas celdas para acomodarlo. A esto se le llama Grid implícito.`}/>
            <Titulo level={2} text={`Ejemplo 1: Grid Implícito con fr`}/>
            <Texto texto={`En el siguiente código, hemos definido tres columnas y tres filas. Sin embargo, agregamos más elementos de los que caben en la cuadrícula, lo que hace que Grid cree una nueva fila automáticamente.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_impl">
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grid_impl {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    border: 5px solid #2f87a1;
}

.grid_impl div {
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridImplicito1--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>

            <Texto texto={`Observación: Aunque solo se declararon 3 filas y 3 columnas, al haber 10 elementos, CSS Grid crea una cuarta fila automáticamente para acomodar los elementos adicionales.`}/>
            
            {/* ejemplo 2 */}
            <Titulo level={2} text={`Ejemplo 2: Grid Implícito con valores fijos (px)`}/>
            <Texto texto={`En este caso, usamos valores fijos de 120px en cada celda. Sin embargo, hay más elementos de los que caben en la cuadrícula, por lo que Grid vuelve a generar una nueva fila implícita.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_implicito">
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
    <div>.</div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grid_implicito {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
    border: 5px solid #2f87a1;
}

.grid_implicito div {
    border: 2px solid #000;
}`}/>
            <Web>
                <div className="css--gridImplicito2--ejemplo">
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </Web>

            <Texto texto={`Hemos definido 3 filas y 3 columnas con un tamaño fijo de 120px, pero hay 11 elementos en total. CSS Grid crea automáticamente una cuarta fila para acomodar los elementos extra, aunque sin los estilos definidos en grid-template-rows.

Solución: Para controlar el tamaño de las filas implícitas, podemos usar la propiedad grid-auto-rows o grid-auto-columns.`}/>
            <Enlace texto={`grid auto`} link={"/catalogo/css/capitulo_6/gridAuto"}/>
        </MainCap>
    )
}