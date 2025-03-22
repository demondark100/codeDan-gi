import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";


// css
import "./float.css";

// imagen
import logo from "../../../../../../public/logo.jpg";


export default function FloatCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`float`}/>
                <Texto texto={`Cambia los contenedores de posición de derecha a izquierda y viceversa. Flex es la tecnología que lo reemplazó, pero bueno.`}/>
                <Codigo lenguaje={"css"} codigo={`.contenedor1{
  float: left; /*mover contenedor a la izquierda*/
}
.contenedor2{
  float: right; /*mover contenedor a la derecha*/
}
.contenedor3{
  float: none; /*quitar float*/
}`}/>
            </Resumen>
            <Titulo text={`float`}/>
            <Texto texto={`La propiedad float se usa para posicionar elementos a la izquierda o derecha dentro de su contenedor, permitiendo que otros elementos fluyan a su alrededor.`}/>
            <Texto texto={`float tiene las siguientes propiedades.`}/>
            <Codigo lenguaje={"css"} codigo={`float: left;  /* Posiciona el elemento a la izquierda */
float: right; /* Posiciona el elemento a la derecha */
float: none;  /* No aplica flotación, mantiene la posición normal */`}/>
            
            {/* ejemplo 1 */}
            <Titulo level={"ejemplo"}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content_float1">
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias aut atque odit iure mollitia ipsum dolores maiores, sed ex natus exercitationem recusandae laudantium facilis fuga sunt nam asperiores ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus eaque ipsum nesciunt doloremque facilis temporibus quae odit dolore dicta aut totam culpa harum dignissimos, quod cupiditate ipsam, asperiores quasi?
  </p>
</div>
<div class="content_float2">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab labore tenetur est. Sint nostrum amet animi impedit repellat enim quos ipsam! Exercitationem iure explicabo vero temporibus cumque delectus! Nisi.
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.content_float1{
  background-color: yellow;
  width: 50%;
  float: left;
}
.content_float2{
  background-color: red;
  width: 50%;
  float: right;
}`}/>
            <Web>
                <div className="css--floatEjemploNumero1--ejemplo">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias aut atque odit iure mollitia ipsum dolores maiores, sed ex natus exercitationem recusandae laudantium facilis fuga sunt nam asperiores ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus eaque ipsum nesciunt doloremque facilis temporibus quae odit dolore dicta aut totam culpa harum dignissimos, quod cupiditate ipsam, asperiores quasi?
                    </p>
                </div>
                <div className="css--floatEjemploNumero2--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab labore tenetur est. Sint nostrum amet animi impedit repellat enim quos ipsam! Exercitationem iure explicabo vero temporibus cumque delectus! Nisi.
                    </p>
                </div>
            </Web>
            <Texto texto={`Como te das cuenta, estamos cambiando de posición a los contenedores, uno de derecha a izquierda y otro de izquierda a derecha. Lo malo de esto es que trae problemas de altura.`}/>


            {/* ejemplo 2 */}
            <Codigo lenguaje={"html"} codigo={`<div class="content_float_ejemplo">
  <img class="imagen_Akame" src="https://i.pinimg.com/originals/e0/fa/76/e0fa76944eea642158cc9b071cf7d3ee.jpg" alt="akame" title="akame">
  <h2>Akame</h2>
  <p>
    abc q we atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor 
    sit amet consectetur adipisicing elit. Minus pariatur quos in. Quis vitae voluptas unde iusto voluptates nesciunt, labore incidunt repel
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos quia placeat ullam dolor deserunt ipsum ex, nemo nostrum ad qui nisi, odio atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quos
  </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.content_float_ejemplo{
  border: 2px solid gray;
  width: 85%;
  margin: auto;
  padding: 8px;
}
.imagen_Akame{
  width: 50%;
  float: right;
  margin-right: 5px;
  margin-top: 8px;
}`}/>
            <Web>
                <div class="css--contentFloat--ejemplo2">
                    <img class="css--contentFloatImagen--ejemplo2" src={logo.src} alt="akame" title="akame" />
                    <h2>Akame</h2>
                    <p>
                        abc q we atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Minus pariatur quos in. Quis vitae voluptas unde iusto voluptates nesciunt, labore incidunt repel
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos quia placeat ullam dolor deserunt ipsum ex, nemo nostrum ad qui nisi, odio atque quibusdam laboriosam ab perspiciatis! Cumque, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur quos
                    </p>
                </div>
            </Web>

        </MainCap>
    )
}