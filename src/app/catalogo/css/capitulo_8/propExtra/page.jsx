import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


export default function CosasExtraCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Cosas extra de css`}/>
                <Texto texto={`Las propiedades rtl (right-to-left) y ltr (left-to-right) definen la dirección en la que se escribe el texto. rtl posiciona el texto de derecha a izquierda, mientras que ltr lo hace de izquierda a derecha.`}/>
                <Codigo lenguaje={"css"} codigo={`direction: rtl; /*el texto se posisiona de derecha a izquierda*/
direction: ltr; /*el texto se posisiona de izquierda a derecha*/`}/>
                <Texto texto={`La propiedad letter-spacing en CSS se usa para controlar el espacio entre los caracteres de un texto. Se puede definir en unidades como px, em, rem, entre otras.`}/>
                <Codigo lenguaje={"css"} codigo={`letter-spacing: 10px; /*las letras se separan 10px*/`}/>
                <Texto texto={`La propiedad user-select: none; en CSS evita que el usuario pueda seleccionar el texto de un elemento. Esto es útil para prevenir copias no deseadas o mejorar la experiencia en ciertos elementos interactivos.`}/>
                <Codigo lenguaje={"css"} codigo={`user-select: none;`}/>
                <Texto texto={`La propiedad scroll-behavior: smooth; permite un desplazamiento suave en la página en lugar de uno brusco.`}/>
                <Codigo lenguaje={"css"} codigo={`*{
    /* es recomendable ponerlo para todos los elementos para que se haga una transision en el scroll. */


    scroll-behavior: smooth;
}`}/>
            </Resumen>
            <Titulo text={`Cosas extra de css`}/>
            <Titulo level={2} text={`direction`}/>
            <Texto texto={`La propiedad direction nos ayuda a definir la dirección del texto en un elemento. Tiene dos valores principales:

rtl (right to left): el texto se mueve de derecha a izquierda.
ltr (left to right): el texto se mueve de izquierda a derecha (valor predeterminado).`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="rtl_content direction">
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, impedit! Debitis repudiandae doloremque obcaecati consequuntur aperiam cum, voluptate laboriosam totam maxime commodi adipisci error rem tempore minus placeat inventore eos.
    </p>
</div>
<div class="ltr_content direction">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia quos. Cum voluptas, accusamus maiores aliquid error natus eum, aspernatur sit eveniet deserunt magni necessitatibus a omnis eaque, unde odit!
    </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.direction{
    background-color: #000;
    color: #fff;
    font-family: serif;
    text-shadow: 2px 5px 15px #fff;
}
.rtl_content{
    direction: rtl;
}
.ltr_content{
    direction: ltr;
}`}/>
            <Web>
                <div className="css--ceDirection1--ejemplo css--ceDirection--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, impedit! Debitis repudiandae doloremque obcaecati consequuntur aperiam cum, voluptate laboriosam totam maxime commodi adipisci error rem tempore minus placeat inventore eos.
                    </p>
                </div>
                <div className="css--ceDirection2--ejemplo css--ceDirection--ejemplo">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, mollitia quos. Cum voluptas, accusamus maiores aliquid error natus eum, aspernatur sit eveniet deserunt magni necessitatibus a omnis eaque, unde odit!
                    </p>
                </div>
            </Web>


            {/* Letter Spacing */}
            <Titulo level={2} text={`Letter Spacing`}/>
            <Texto texto={`La propiedad letter-spacing nos sirve para ajustar el espacio entre las letras de un texto. Podemos definir la separación en unidades como píxeles (px), em, rem, etc.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="tituloLetter">
    <h1>HOLA MUNDO</h1>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.tituloLetter{
    background-color: #000;
    box-shadow: 2px 4px 8px 15px #000;
    border: 2px solid #0f0;
}
.tituloLetter h1{
    color: #fff;
    text-shadow: 2px 5px 15px #fff;
    letter-spacing: 10px;
    text-align: center;
}`}/>
            <Web>
                <div className="css--ceLetterSpacing--ejemplo">
                    <h1>HOLA MUNDO</h1>
                </div>
            </Web>


            {/* User Selected */}
            <Titulo level={2} text={`User Selected`}/>
            <Texto texto={`La propiedad user-select nos permite controlar si un usuario puede seleccionar un texto en una página web. Por ejemplo, con user-select: none; evitamos que el usuario pueda seleccionar el texto.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="no_seleccion">
    jaja no puedes seleccionarme
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.no_seleccion{
    background-color: #000;
    color: #fff;

    /* con none indicamos que no queremos que el usuario seleccione este texto */

    user-select: none;
}`}/>
            <Web>
                <p className="css--ceUserSelect--ejemplo">
                    jaja no puedes seleccionarme
                </p>
            </Web>



            {/* Scroll Behavior */}
            <Titulo level={2} text={`Scroll Behavior`}/>
            <Texto texto={`La propiedad scroll-behavior nos permite hacer que el desplazamiento dentro de una página sea más suave en lugar de ser brusco. Por ejemplo, con scroll-behavior: smooth;, el desplazamiento tendrá un efecto de suavizado.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="containerScrollF">
    <h1>una pagina informativa xd</h1>
    <a href="#articulo_2">articulo 2</a>
    <h2>articulo 1</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut iste, ea placeat tempora natus earum quasi nisi animi distinctio labore. Nostrum nisi eveniet voluptatum tenetur maxime ipsa aperiam voluptates eligendi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur iusto assumenda adipisci veritatis ab voluptatum, placeat qui voluptate eligendi nobis porro magnam nemo magni officia accusamus quos nesciunt harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore. Quaerat, tempore dolorum! Vero eum aliquam animi at architecto quibusdam, quam necessitatibus, assumenda iusto eveniet minus repellat magnam nostrum accusamus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque odit veniam soluta, quis aperiam explicabo numquam quam eum officiis sint quibusdam architecto sit vel cupiditate exercitationem? Necessitatibus, voluptatem voluptatibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias modi provident unde velit quo adipisci ab iste ex asperiores, voluptate consequuntur, suscipit repellendus error ratione quae et! Aliquam, qui!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius expedita pariatur debitis aliquid fugiat vitae facilis corrupti dolores, voluptatum totam accusamus voluptatem eum doloremque dicta nesciunt laborum maiores minus!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, deserunt a ea odio reiciendis nam numquam ab harum, illo fuga officiis aspernatur. Itaque nisi cumque voluptatibus eaque exercitationem aperiam tempore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit nemo corrupti sit voluptate, ullam sequi. Facilis tempore, in labore, est ratione vitae iste expedita temporibus a voluptatem quibusdam asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ducimus deleniti ad eligendi magnam distinctio a dicta laborum ipsa velit quos commodi! Deleniti enim excepturi, voluptatibus quaerat aut fugit debitis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quas! Quas laborum accusantium, voluptatum, corporis labore cupiditate vel maiores maxime inventore ea harum veritatis doloribus temporibus in nulla minima! Porro.
    </p>

    <h2 id="articulo_2">articulo 2</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae, molestiae totam impedit iusto ipsum aliquid repellat nemo asperiores perferendis, possimus consequuntur veritatis reprehenderit qui obcaecati laboriosam. Facilis, possimus ratione.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto. Perspiciatis molestiae est neque quia, inventore minus possimus officiis consequuntur voluptatem, quidem a illum eaque optio odio eveniet enim tempora!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora modi accusamus, maiores qui, numquam, animi culpa quisquam beatae quae eveniet. A nobis similique voluptatem nesciunt illum impedit numquam sequi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, totam sapiente officiis inventore perspiciatis cum nihil aliquid optio suscipit reprehenderit. Eligendi omnis numquam, sed debitis deleniti perspiciatis quisquam dolorem labore. 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur harum repellendus obcaecati eos aliquam id nam? Numquam nesciunt, nulla sequi magnam beatae labore eum molestiae exercitationem facere atque non?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam vitae voluptatum deleniti expedita quo ad minima obcaecati voluptatem aliquid perferendis quisquam eligendi enim aut officia blanditiis vel, voluptates incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum sequi, eaque, aspernatur distinctio hic laborum maxime accusamus qui laboriosam nihil sapiente iure. Dignissimos rerum et magnam atque? Enim, vero!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus a natus nobis aspernatur, neque consectetur earum non dolore culpa harum perspiciatis, vitae consequuntur veritatis rerum ullam hic reprehenderit qui?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae ut repellendus similique labore voluptatum aliquid, ad dicta mollitia repellat? Repellat laudantium, distinctio corporis vitae accusantium animi quam in aut!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque quos minus quia sequi consequuntur. Alias quas enim placeat corporis? Maxime vel, incidunt sapiente omnis tempora delectus rerum ad ex.
    </p>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`body{
    background-color: #000;
    color: #fff;
}
*{
    /* es recomendable ponerlo para todos los elementos para que se haga una transision en el scroll. */


    scroll-behavior: smooth;
}
a{
    text-decoration: none;
    color: #fff;
}

h1{
    color: #000;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
}

h2{
    color: #000;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
}`}/>
        </MainCap>
    )
}