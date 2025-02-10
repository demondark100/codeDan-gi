import MainCap from "@/app/catalogo/componentes/main/main"
import Web from "@/app/catalogo/componentes/web/web"
import Codigo from "@/componentes/cursos/codigo/codigo"
import Imagen from "@/componentes/cursos/media/imagen/imagen"
import Texto from "@/componentes/cursos/texto/texto"
import Titulo from "@/componentes/cursos/titulo/titulo"

// css
import "./margin.css";
import Resumen from "@/componentes/cursos/resumen/resumen"

export default function MarginCss(){
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`margin`}/>
                <Texto texto={`El margin es el espacio exterior de una caja/elemento HTML, separándolo de otros elementos.`}/>
                <Codigo lenguaje={"css"} codigo={`margin: auto; /* Centra el elemento horizontalmente dentro de su contenedor */
margin-top: 15px; /* Agrega un espacio de 15px en la parte superior */
margin-left: 15px; /* Agrega un espacio de 15px a la izquierda */
margin-right: 15px; /* Agrega un espacio de 15px a la derecha */
margin-bottom: 15px; /* Agrega un espacio de 15px en la parte inferior */
`}/>
            </Resumen>
            <Titulo text={`margin`}/>
            <Texto texto={`El margin es el espacio externo de un elemento en HTML, utilizado para separar un elemento de otros a su alrededor. A diferencia del padding, que añade espacio dentro del borde de un elemento, el margin crea espacio fuera de él, afectando su posición en la página.`}/>
            <Imagen src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyITuYnHozccMOWw1Q0AbqTGF0PArIuMXKlWtR9esF7LDxT0lyyFRRWCC5sqxMSULIVw&usqp=CAU"} alt={"margin"}/>
            <Texto texto={`Al igual que padding, margin permite especificar los espacios externos de un elemento en cada dirección:

margin-top: 15px; → Espacio en la parte superior.
margin-right: 15px; → Espacio en el lado derecho.
margin-bottom: 15px; → Espacio en la parte inferior.
margin-left: 15px; → Espacio en el lado izquierdo.`}/>

            {/* margin top */}
            <Titulo level={3} text={`margin-top`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="arriba">
    <p>arriba</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.arrba{
    background-color: green;
}
.arrba p{
    background-color: blue;
    display: inline-block;
    margin-top: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--marginTop--ejemplo">
                    <p>arriba</p>
                </div>
            </Web>


            {/* margin right */}
            <Titulo level={3} text={`margin-right`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="derecha">
    <p>derecha</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.derecha{
    background-color: green;
}
.derecha p{
    background-color: blue;
    display: inline-block;
    margin-right: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--marginRight--ejemplo">
                    <p>derecha</p>
                </div>
            </Web>
            <Texto texto={`En este caso mando el texto a la izquierda para poder ver el efecto de "margin-right".`}/>


            {/* margin bottom */}
            <Titulo level={3} text={`margin-bottom`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="abajo">
    <p>abajo</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.abajo{
    background-color: green;
}
.abajo p{
    background-color: blue;
    display: inline-block;
    margin-bottom: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--marginBottom--ejemplo">
                    <p>abajo</p>
                </div>
            </Web>


            {/* margin left */}
            <Titulo level={3} text={`margin-left`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="izquierda">
    <p>izquierda</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.izquierda{
    background-color: green;
}
.izquierda p{
    background-color: blue;
    display: inline-block;
    margin-left: 15px;
    color: white;
}`}/>
            <Web>
                <div className="css--marginLeft--ejemplo">
                    <p>izquierda</p>
                </div>
            </Web>

            
            {/* margin auto */}
            <Titulo level={2} text={`margin auto`}/>
            <Texto texto={`La propiedad margin: auto; se usa para centrar elementos horizontalmente dentro de su contenedor, siempre que tengan un width definido.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contenedor">
    <p>centro</p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contenedor{
    width: 100%;
    background-color: green;
}
.contenedor p{
    margin: auto;
    background-color: blue;
    color: white;
    width: 20%;
}`}/>
            <Web>
                <div className="css--marginAuto--ejemplo">
                    <p>centro</p>
                </div>
            </Web>
            <Texto texto={`Esto hace que el margen izquierdo y derecho se ajusten automáticamente, centrando el elemento.`}/>
        </MainCap>
    )
}