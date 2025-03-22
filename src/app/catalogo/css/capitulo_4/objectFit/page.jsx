import MainCap from "@/app/catalogo/componentes/main/main";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Texto from "@/componentes/cursos/texto/texto";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Web from "@/app/catalogo/componentes/web/web";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";


import logo from "../../../../../../public/logo.jpg";

export default function ObjectFitCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`ovject-fit`}/>
                <Texto texto={`"object-fit" sirve para ajustar cómo una imagen se adapta a su contenedor.`}/>
                <Codigo lenguaje={"css"} codigo={`/*contain*/
.contain img{ /*imagen en escala real*/
  width: 100%;
  object-fit: contain;
}
/*cover*/
.cover img{ /*ajusta la imagen al tamaño de su contenedor*/
  width: 100%;
  object-fit: cover;
}
/*none*/
.none img{  /*ajusta la imagen a su escala real*/
  width: 100%;
  object-fit: none;
}
/*object-position*/
.position img{  /*posisiona una imagen donde deseemos*/
  width: 100%;
  object-fit: cover;
  object-position: right;
}`}/>
            </Resumen>
            <Titulo text={`object-fit`}/>
            <Texto texto={`Esta propiedad nos permitirá controlar los estilos de las imágenes para centrarlas, ajustarlas correctamente, etc.`}/>


            {/* contain */}
            <Titulo level={2} text={`contain`}/>
            <Texto texto={`"contain" hace que la imagen se ponga a su resolucion real por mas que el contenedor sea demasiado grande.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="contain">
  <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.contain{
    margin: auto;
    width: 85%;
    height: 400px;
    border: 2px solid blue;
    display: flex;
}
.contain img{
    width: 100%;
    object-fit: contain;
}`}/>
            <Web>
                <div className="css--containObjectFit--ejemplo">
                    <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen" />
                </div>
            </Web>


            {/* cover */}
            <Titulo level={2} text={`cover`}/>
            <Texto texto={`"cover" ajusta la imagen al tamaño de su contenedor, recortándola para que se vea bien.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="cover">
  <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.cover{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.cover img{
  width: 100%;
  object-fit: cover;
}`}/>
            <Web>
                <div className="css--coverObjectFit--ejemplo">
                    <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen" />
                </div>
            </Web>


            {/* none */}
            <Titulo level={2} text={`none`}/>
            <Texto texto={`"none" mantiene la imagen en su tamaño original sin escalarla al contenedor.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="none">
  <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.none{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.none img{
  width: 100%;
  object-fit: none;
}`}/>
            <Web>
                <div className="css--noneObjectFit--ejemplo">
                    <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen" />
                </div>
            </Web>


            {/* object-position */}
            <Titulo level={2} text={`object-position`}/>
            <Texto texto={`Esto sirve para posicionar una imagen en la parte superior, inferior, derecha o izquierda del contenedor.

Puedes usar propiedades como top, right, bottom y left, con valores en px, em, %, etc.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="position">
  <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen">
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.position{
  margin: auto;
  width: 85%;
  height: 400px;
  border: 2px solid blue;
  display: flex;
}
.position img{
  width: 100%;
  object-fit: cover;
  object-position: right;
}`}/>
            <Web>
                <div className="css--ovjectPosition--ejemplo">
                    <img src="https://miro.medium.com/v2/resize:fit:5740/1*PUcvumUoqGVeqLKPvJo70A.jpeg" alt="imagen" />
                </div>
            </Web>
        </MainCap>
    )
}