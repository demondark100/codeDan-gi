import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";

export default function PseudoelementosCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`pseudoelementos`}/>
                <Texto texto={`Los pseudoelementos son un elemento virtual que permite agregar contenido o estilos sin necesidad de modificar el documento HTML.`}/>
                <Codigo lenguaje={"css"} codigo={`.primer_linea::first-line{ /*Estilizizar solo la primera linea*/
  color: blue;
  font-size: 1.5em;
}
.primerLetra::first-letter{ /*Estilizar solo la primer letra*/
  font-size: 1.5em;
  color: blueviolet;
}
#modificarInput::placeholder{ /*solo se usa en inputs , estiliza el texto indicativo*/
  color: wheat;
  background-color: black;
}
.texto_seleccion::selection{ /*estiliza la barra de seleccion*/
  background-color: black;
  color: wheat;
}
/*hijos que no son del DOM sino que son elementos virtuales*/
.oracion__parrafo::before{
  content: "antes";
}
.oracion__parrafo::after{
  content: " despues";
}`}/>
            </Resumen>
            <Titulo text={`pseudoelementos`}/>
            <Texto texto={`Un pseudoelemento en CSS es un elemento virtual que permite agregar contenido o estilos a un elemento sin modificar el HTML. Se usa para mejorar la apariencia sin añadir nuevos elementos al código.`}/>
            <Codigo lenguaje={"sintaxis"} codigo={`elemento::pseudoelemento{/*estilos*/}`}/>


            {/* first-line */}
            <Titulo level={2} text={`first-line`}/>
            <Texto texto={`"first-line" es para dar estilos solo a la primera línea de un texto. Esto se hará de forma dinámica, es decir, si la resolución se hace más pequeña o más grande, la primera línea siempre conservará el estilo que le dimos.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="primer_linea">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis deleniti eum cupiditate consequuntur aperiam deserunt distinctio quis eveniet id tempora sint ipsa, beatae est culpa provident ad voluptatum repudiandae.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in architecto blanditiis sit tempora doloribus ratione modi consectetur, inventore consequuntur rerum dicta hic ab quis placeat quisquam. Consequatur, perspiciatis iure?
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.primer_linea::first-line{
  color: blue;
  font-size: 1.5em;
}`}/>
            <Web>
                <p className="css--pseudoelementoFirstLine--ejemplo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis deleniti eum cupiditate consequuntur aperiam deserunt distinctio quis eveniet id tempora sint ipsa, beatae est culpa provident ad voluptatum repudiandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in architecto blanditiis sit tempora doloribus ratione modi consectetur, inventore consequuntur rerum dicta hic ab quis placeat quisquam. Consequatur, perspiciatis iure?
                </p>
            </Web>


            {/* first-letter */}
            <Titulo level={2} text={`first-letter`}/>
            <Texto texto={`"first-letter" es para darle estilos solo a la primera letra de un texto. Por ejemplo, se puede usar para resaltar la primera letra de un cuento.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="primerLetra">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate, impedit aperiam eaque quasi earum error quas libero, ratione minus magni, repudiandae repellendus cumque recusandae voluptatem vitae? Ratione, sed voluptas?
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.primerLetra::first-letter{
  font-size: 1.5em;
  color: blueviolet;
}`}/>
            <Web>
                <p className="css--pseudoelementosFisrtLetter--ejemplo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate, impedit aperiam eaque quasi earum error quas libero, ratione minus magni, repudiandae repellendus cumque recusandae voluptatem vitae? Ratione, sed voluptas?
                </p>
            </Web>


            {/* placeholder */}
            <Titulo level={2} text={`placeholder`}/>
            <Texto texto={`"placeholder" solo se aplica a los inputs, ya que este atributo pertenece exclusivamente a ellos. Recuerda que el texto del placeholder desaparece cuando escribes algo en el input y solo sirve como texto indicativo.`}/>
            <Codigo lenguaje={"html"} codigo={`<input type="text" id="modificarInput" placeholder="Nombre aqui">`}/>
            <Codigo lenguaje={"css"} codigo={`#modificarInput::placeholder{
  color: wheat;
  background-color: black;
}`}/>
            <Web>
                <input 
                    type="text" 
                    placeholder="Nombre aqui" 
                    className="css--pseudoelementosInput--ejemplo"
                />
            </Web>
            <Texto texto={`Por favor escribe algo en el campo.`}/>


            {/* selection */}
            <Titulo level={2} text={`selection`}/>
            <Texto texto={`"selection" se usa para estilizar la barra de selección de texto. Para probarlo, selecciona el texto y verás cómo cambia su apariencia.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="texto_seleccion">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas explicabo, eius ratione adipisci temporibus iure architecto possimus. Porro quas nesciunt quae necessitatibus assumenda animi quis illum corporis nostrum esse.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.texto_seleccion::selection{
  background-color: black;
  color: wheat;
}`}/>
            <Web>
            <   p className="css--pseudoelementosSelection--ejemplo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas explicabo, eius ratione adipisci temporibus iure architecto possimus. Porro quas nesciunt quae necessitatibus assumenda animi quis illum corporis nostrum esse.
                </p>
            </Web>



            {/* after y before */}
            <Titulo level={2} text={`after y before`}/>
            <Texto texto={`::after y ::before son pseudoelementos en CSS que actúan como hijos del elemento al que se aplican, pero no forman parte del DOM como nodos reales. Se utilizan para agregar contenido o estilos adicionales sin modificar el HTML.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="oracion__parrafo">
    a la
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.oracion__parrafo::before{
    content: "bienvenidos ";
    background-color: green;
    color: white;
}
.oracion__parrafo::after{
    content: " programacion";
    background-color: blue;
    color: white;
}`}/>
            <Web>
                <p className="css--pseudoelementosAfterBefore--ejemplo">
                    a la
                </p>
            </Web>
            <Texto texto={`La propiedad content en CSS se usa con los pseudoelementos ::before y ::after para insertar contenido en un elemento sin modificar el HTML. Puede contener texto, imágenes (url()), iconos y otros elementos visuales, lo que permite crear efectos y animaciones.`}/>
        </MainCap>
    )
}