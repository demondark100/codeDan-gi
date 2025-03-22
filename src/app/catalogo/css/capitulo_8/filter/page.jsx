import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


import logo from "../../../../../../public/logo.jpg";

export default function FilterCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`filter`}/>
                <Texto texto={`La propiedad filter aplica efectos visuales (filtros) a elementos, especialmente imágenes. Permite agregar desenfoques, ajustes de brillo, contraste, sombras y más.`}/>
                <Codigo lenguaje={"css"} codigo={`filter: blur(5px); /*la imagen se desenfoca*/
filter: brightness(2); /*ajusta el brollo de la imagen*/
filter: contrast(1); /*ajusta el contraste de la imagen*/
filter: drop-shadow(2px 5px 15px #000); /*da sombra a imagenes transparentes*/
filter: grayscale(1); /*ajusta cuanto gris tendra la imagen*/
filter: invert(50%); /*invierte los colores de una imagen*/
filter: saturate(.5); /*la imagen se saturara sus colores*/`}/>
            </Resumen>
            <Titulo text={`filter`}/>
            <Texto texto={`Como su nombre indica, esta propiedad permite aplicar filtros a elementos HTML, especialmente visibles en imágenes.

Principales valores:

none: valor por defecto.

blur(cantidad): desenfoca la imagen.

brightness(0-1+): ajusta el brillo (0 sin brillo, 1 normal, valores mayores aumentan el brillo).

contrast(0-1+): ajusta el contraste (funciona similar al brillo).

drop-shadow(x y blur color): agrega sombras a imágenes con transparencia.

grayscale(1): convierte la imagen a escala de grises.

invert(0%-100%): invierte los colores de la imagen.

saturate(0-1+): ajusta la saturación (0 para escala de grises, 1 normal, valores mayores intensifican los colores).`}/>
            <Titulo level={2} text={`blur`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="blur_content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.blur_content img{
    width: 40%;
    filter: blur(5px);
}`}/>
            <Web>
                <div className="css--filterBlur--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
            </Web>



            {/* brightness */}
            <Titulo level={2} text={`brightness`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="brightness_content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>
<div class="brightness_content2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.brightness_content img{
    width: 40%;
    filter: brightness(2);
}
.brightness_content2 img{
    display: block;
    margin-top: 8px;
    width: 40%;
    filter: brightness(.7);
}`}/>
            <Web>
                <div className="css--filterBrightness1--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
                <div className="css--filterBrightness2--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
            </Web>


            {/* contrast */}
            <Titulo level={2} text={`contrast`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contrast_content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>
<div class="contrast_content2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contrast_content img{
    width: 40%;
    filter: contrast(2);
}
.contrast_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: contrast(.5);
}`}/>
            <Web>
                <div className="css--filterContrast1--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
                <div className="css--filterContrast2--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
            </Web>


            {/* drop-shadow */}
            <Titulo level={2} text={`drop-shadow`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="dropShadow">
    <img src="imagen transparente" alt="img transparente" />
</div>`}/>
            <Web>
                <div className="css--filterDropShadow--ejemplo">
                    <img src={logo.src} alt="logo" />
                </div>
            </Web>


            {/* grayscale */}
            <Titulo level={2} text={`grayscale`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grayscale_content1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>
<div class="grayscale_content2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grayscale_content1 img{
    width: 40%;
    filter: grayscale(.4);
}
.grayscale_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: grayscale(2);
}`}/>
            <Web>
                <div className="css--filterGrayScale1--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
                <div className="css--filterGrayScale2--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
            </Web>


            {/* invert */}
            <Titulo level={2} text={`invert`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="invert_content1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>
<div class="invert_content2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.invert_content1 img{
    width: 40%;
    filter: invert(15%);
}
.invert_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: invert(100%);
}`}/>
            <Web>
                <div className="css--filterInvert1--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
                <div className="css--filterInvert2--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
            </Web>



            {/* saturate */}
            <Titulo level={2} text={`saturate`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="saturate_content1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>
<div class="saturate_content2">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>
<div class="saturate_content3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.saturate_content1 img{
    width: 40%;
    filter: saturate(0);
}
.saturate_content2 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: saturate(1);
}
.saturate_content3 img{
    display: block;
    margin-top: 5px;
    width: 40%;
    filter: saturate(2);
}`}/>
            <Web>
                <div className="css--filterStaturate1--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
                <div className="css--filterStaturate2--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
                <div className="css--filterStaturate3--ejemplo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vVQmOEYUC3sOv7yVNBohQcHIpL7XFbuuLg&s" alt="imagen" />
                </div>
            </Web>
        </MainCap>
    )
}