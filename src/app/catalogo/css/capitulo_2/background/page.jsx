import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";


// importar css
import "./background.css";

export default function BackgroundCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`background`}/>
                <Texto texto={`Esta propiedad se utiliza para establecer un fondo en un elemento, ya sea un color sólido, una imagen de fondo u otras opciones de estilo.`}/>
                <Codigo lenguaje={"css"} codigo={`background-color: red; /*poner un color de fondo*/
background-image: url("link de la imagen");
/*ajustar imagenes*/
background-size: contain; /*ajusta la imagen a su escala real*/
background-size: cover: /*ajusta la imagen a su contenedor*/
/*repeticion de imagen*/
background-repeat: repat; /*esto es para que una imagen se repita varias veces en su escala original*/
background-repeat: norepeat; /*hace que la imagen no se repita en su escala original*/
/*ajustar para mostrar*/
background-clip: border-box; /*mostrar desde el borde*/
background-clip: padding-box; /*la imagen se ajustara al padding*/
background-clip: content-box; /*la imagen se ajusta al contenido*/
/*posisionar imagen*/
background-position: center center; /*posisiona la imagen donde desees*/
/*ajuste de imagen*/
background-attachment: fixed; /*esto hace que un fondo se fije en una posision , da un buen efecto*/
background-attachment: scroll; /*hace que la imagen se mueva con el contenido*/`}/>
            </Resumen>
            <Titulo text={`background`}/>
            <Texto texto={`Esta propiedad nos permite dar fondos a las cajas. Esta tiene muchas propiedades que veremos a continuación.`}/>
            <Titulo level={2} text={`background-color`}/>
            <Texto texto={`Esta propiedad cambia el color de fondo de las cajas.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="background"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.background{
  width: 50%;
  height: 80px;
  background-color: red;
}`}/>
            <Web>
                <div className="css--backgroundColor--ejemplo"></div>
            </Web>

            {/* background image */}
            <Titulo level={2} text={`background-image`}/>
            <Texto texto={`Esta propiedad nos permite poner imágenes como fondo.`}/>
            <Titulo level={4} text={`¿Como usar?`}/>
            <Codigo lenguaje={"css"} codigo={`background-image: url("link de la imagen que queremos");`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="image_content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.image_content{
  width: 100%;
  height: 250px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
}`}/>
            <Web>
                <div className="css--backgroundImage--ejemplo"></div>
            </Web>

            {/* background size */}
            <Titulo level={2} text={`background-size`}/>
            <Texto texto={`Esta propiedad nos permite poner la imagen en su tamaño original o modificarla para que se ajuste como deseemos.
Tiene 2 propiedades:

cover: Hace que la imagen se ajuste automáticamente.
contain: Esta propiedad viene por defecto, pero hace que la imagen se adapte a la resolución de su contenedor.
A esta también se le puede posicionar con porcentajes:
background-size: 100%;
Pero en ese caso, es mejor usar cover.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="size_content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.size_content{
  width: 100%;
  height: 250px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-size: cover;
}`}/>
            <Web>
                <div className="css-backgroundSize--ejemplo" ></div>
            </Web>

            {/* background-repeat */}
            <Titulo level={2} text={`background-repeat`}/>
            <Texto texto={`Esta propiedad nos sirve para que una imagen no se repita.
Como te habrás dado cuenta, la imagen por defecto se suele repetir, pero gracias a esta propiedad evitamos eso.`}/>
            <Codigo lenguaje={"css"} codigo={`background-repeat: no-repeat; /*es para que la imagen no se repita.*/
background-repeat: repeat; /*es para que la imagen se repita.*/`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="repeat_content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.repeat_content{
  width: 75%;
  height: 180px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: repeat;
}`}/>
            <Web>
                <div className="css--backgroundRepeat--ejemplo"></div>
            </Web>
            <Codigo lenguaje={"css"} codigo={`.repeat_content{
  width: 75%;
  height: 180px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: no-repeat;
}`}/>
            <Web>
                <div className="css--backgroundNoRepeat--ejemplo"></div>
            </Web>

            {/* background-clip */}
            <Titulo level={2} text={`background-clip`}/>
            <Texto texto={`Esta propiedad tiene varios valores y sirve para indicar desde qué posición se va a mostrar la imagen: desde los bordes, el padding o el contenido.

border-box: La imagen se ajusta a los bordes.
padding-box: La imagen se ajusta al padding.
content-box: La imagen se ajusta al contenido.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="clip_content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.clip_content{
  width: 75%;
  height: 150px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-size: cover;
  background-clip: border-box;
}`}/>
            <Web>
                <div className="css--backgroundClip--ejemplo"></div>
            </Web>

            {/* background-position */}
            <Titulo level={2} text={`background-position`}/>
            <Texto texto={`Esta propiedad nos permite posicionar una imagen como queramos. Recibe dos parámetros: el primero define la posición horizontal (de izquierda a derecha) y el segundo la posición vertical (de arriba a abajo).

Los valores que puede tomar background-position son:

. top
. left
. bottom
. right
. center`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="position_content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.position_content{
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  width: 75%;
  height: 150px;
  background-size: 65% 35%;
  background-repeat: no-repeat;
  background-color: #000;
  border: 4px solid #2eff55;
  background-position: center center;
}`}/>
            <Web>
                <div className="css--backgroundPosition--ejemplo1"></div>
            </Web>
            <Codigo lenguaje={"css"} codigo={`.position_content{
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  width: 75%;
  height: 150px;
  background-size: 65% 35%;
  background-repeat: no-repeat;
  background-color: #000;
  border: 4px solid #2eff55;
  background-position: start center;
}`}/>
            <Web>
                <div className="css--backgroundPosition--ejemplo2"></div>
            </Web>

            {/* background-attachment */}
            <Titulo level={2} text={`background-attachment`}/>
            <Texto texto={`background-attachment es una propiedad en CSS que determina si una imagen de fondo se mantiene fija o se desplaza junto con el contenido de la página.

. fixed → La imagen de fondo se mantiene fija en una posición específica, incluso cuando el usuario desplaza la página.
. scroll → La imagen de fondo se mueve junto con el contenido de la página mientras el usuario la desplaza.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="attachment_content"></div>`}/>
            <Codigo lenguaje={"css"} codigo={`.attachment_content{
  width: 75%;
  height: 75%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-attachment: fixed;
}`}/>
            <Web>
                <div className="css--backgroundAttachment--ejemplo1"></div>
            </Web>
            <Codigo lenguaje={"css"} codigo={`.attachment_content{
  width: 75%;
  height: 150px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-attachment: scroll;
}`}/>
            <Web>
                <div className="css--backgroundAttachment--ejemplo2"></div>
            </Web>
        </MainCap>
    )
}