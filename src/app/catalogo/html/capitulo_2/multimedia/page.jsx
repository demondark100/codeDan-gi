import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function MultimediaHtml() {
    return (  
        <MainCap>
            <Resumen>
                <Titulo text={`Multimedia`}/>
                <Texto texto={`Tenemos etiquetas para poner videos , imagenes , audio.`}/>
                <Codigo lenguaje={"html"} codigo={`<!-- poner imagen -->
<img src="enlace de imagen" alt="texto por si acaso se borra">

<!-- usar algun video de youtube -->
<iframe  src="https://www.youtube.com/embed/TX_YDR_6_yo"></iframe>

<!-- usar algun video de forma local -->
<video src="carpeta/video.mp4" controls></video>

<!-- usar algun audio de forma local -->
<audio src="carpeta/video.mp3" controls></audio>`}/>
                <Web>
                    <img src="#" alt="texto por si acaso se borra" />
                    <iframe  src="https://www.youtube.com/embed/TX_YDR_6_yo"></iframe>
                    <video src="#" controls></video>
                    <audio src="#" controls></audio>
                </Web>
            </Resumen>
            
            <Titulo text={`Multimedia`}/>
            <Texto texto={`Con estas etiquetas vamos a poner imagenes, vudeos y audios.`}/>
            <Titulo level={2} text={`img`}/>
            <Texto texto={`Esta etiqueta tiene un atributo parecido a "href" el cual es "scr" solo que aqui debemos de poner la ruta de la imagen que queremos poner esto puede ser de forma local y de protocolo https recuerda que de forma local debes moverte de carpeta en carpeta "../" o "/".

Luego el atributo "alt" es para poner un mensaje por si acaso laimagen se borra.`}/>
            <Codigo codigo={`<img src="enlace de imagen" alt="texto por si acaso se borra">`}/>
            <Web><img src="#" alt="texto por si acaso se borra" /></Web>
            <Codigo codigo={`<img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="javaScript">

<!-- es este caso hemos puesto la imagen de un sitio externo.  -->

<!-- no copiar la parte de abajo -->

<!-- <img src="carpeta/imagen.png" alt="imagen local"> -->

<!-- aqui estariamos poniendo una imagen de forma local osea una imagen que nosotro tenemos en nuestra pc -->`}/>
            <Web>
                <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="javaScript" />
            </Web>

            <Titulo level={2} text={`video`}/>
            <Texto texto={`Esta etiqueta es para poner videos y que a diferencia de "img" esta si necesita un sierre.`}/>
            <Codigo lenguaje={"html"} codigo={`<iframe  src="https://www.youtube.com/embed/TX_YDR_6_yo">

</iframe>

<!-- con iframe estamos agregando videos de youtube para poder pomer un video de youtube 
debemos dar donde dice compartir y habra una opcion que dice incorporar
copiaras todo ese iframe. -->

<!-- no copiar el de abajo -->

<video src="carpeta/video.mp4" controls>

</video>

<!-- con video agregaremos videos de nuestros archivos locales 
siempre deben tener el atributo controls para poder controlar el video. -->
`}/>
            <Web>
                <iframe  src="https://www.youtube.com/embed/TX_YDR_6_yo"></iframe>
            </Web>
            <Titulo level={2} text={`audio`}/>
            <Texto texto={`Es igual que video solo que ponemos audio.`}/>
            <Codigo lenguaje={"html"} codigo={`<audio src="carpeta/audio.mp3" controls>
</audio>`}/>
            <Web>
                <audio src="#" controls></audio>
            </Web>
        </MainCap>
    );
}

export default MultimediaHtml;