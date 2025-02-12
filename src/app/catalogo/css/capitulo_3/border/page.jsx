import MainCap from "@/app/catalogo/componentes/main/main"
import Web from "@/app/catalogo/componentes/web/web"
import Codigo from "@/componentes/cursos/codigo/codigo"
import Texto from "@/componentes/cursos/texto/texto"
import Titulo from "@/componentes/cursos/titulo/titulo"
import Resumen from "@/componentes/cursos/resumen/resumen"


// css
import "./border.css";
import Enlace from "@/componentes/cursos/enlace/enlace"

export default function BorderCss() {
    return(
        <MainCap>
            <Resumen>
                <Titulo text={`border`}/>
                <Texto texto={`La propiedad border en CSS se encarga de manejar los bordes de los elementos HTML, permitiendo definir su grosor, estilo y color.`} />
                <Codigo lenguaje={"css"} codigo={`border: 2px solid blue; /*poner un borde a una caja*/
border: none; /*quitar el borde a una caja*/
border-radius: 15px; /*redondear el borde de una caja*/
/*poner borde en solo un lado*/
border-top: 2px solid red; /*poner borde arriba*/
border-right: 2px solid red; /*poner borde a la derecha*/
border-bottom: 2px solid red; /*poner borde abajo*/
border-left: 2px solid red; /*poner borde a la izquierda*/
`}/>
            </Resumen>
            <Titulo text={`border`}/>
            <Texto texto={`Esta propiedad define el borde de un elemento, permitiendo personalizar su grosor, estilo y color.`} />
            <Titulo level={2} text={`¿Como usar border?`}/>
            <Codigo lenguaje={"css"} codigo={`propiedad   |   valor 1      |  valor 2                |    valor 3
            |                |                         |
border:     | ancho de borde | que borde dar a la caja | color de borde;`}/>

            <Codigo lenguaje={"html"} codigo={`<div class="borde">
    borde
</div>`}/>
            <Codigo lenguaje={`css`} codigo={`.borde{
    border: 2px solid blue;
    width: 80px;
    height: 80px;
}`}/>
            <Web>
                <div className="css--borderSolid1--ejemplo">
                    borde
                </div>
            </Web>

            <Titulo text={`none`}/>
            <Texto texto={`La propiedad none en border indica que un elemento no tenga ningún borde. Es útil, por ejemplo, para quitar el borde predeterminado de un botón.`}/>
            <Codigo lenguaje={"html"} codigo={`<button>
    con borde
</button>
<button class="sinBorde">
    sin borde
</button>`}/>
            <Codigo lenguaje={"css"} codigo={`.sinBorde{
    border: none;
}`}/>
            <Web>
                <div>
                    <button>con borde</button>
                    <button className="css--borderNode--ejemplo">sin border</button>
                </div>
            </Web>

            {/* border radius */}
            <Titulo level={2} text={`border-radius`}/>
            <Texto texto={`La propiedad border-radius nos permite redondear los bordes de un elemento. Si se usa un valor alto, como 50%, se puede lograr una forma circular, ideal para botones o imágenes de perfil.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    <button class="content__btnEnviar"> <!-- ejemplo de boton para enviar formulario -->
        Enviar
    </button>
    <div class="content__imgPerfil"> <!-- ejemplo de foto de perfil -->
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJEXcbbkpCtnDfiE6MZbyU7zut1d5gaVSOw&s" />
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.content__btnEnviar{
    border-radius: 8px;
    background-color: green;
    color: white;
    padding: 8px 25px 8px 25px;
    border: 1px solid black;
    margin: 8px;
}

/*ejemplo de foto de perfil*/
.content__imgPerfil{
    background-color: black;
    padding: 15px;
    width: 150px;
}
.content__imgPerfil img{
    border-radius: 50%;
    width: 85px;
    height: 85px;
}`}/>
            <Web>
                <div>
                    <button className="css--borderBtnEnviar--ejemplo">
                        Enviar
                    </button>
                    <div className="css--borderRadiusImgPerfil--ejemplo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJEXcbbkpCtnDfiE6MZbyU7zut1d5gaVSOw&s" />
                    </div>
                </div>
            </Web>
            <Texto texto={`Con border-radius, podemos usar diferentes unidades de medida como px, %, cm, entre otras, para definir el nivel de redondeo de los bordes.`}/>


            {/* border direcciones */}
            <Titulo level={2} text={`direcciones`}/>
            <Texto texto={`Al igual que margin y padding, border también se puede aplicar de forma específica a cada lado de un elemento:

border-top: Borde superior.
border-right: Borde derecho.
border-bottom: Borde inferior.
border-left: Borde izquierdo.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="content">
    contenido
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.caja__border{
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border-bottom: 5px solid orangered;
  border-left: 5px solid orangered;
}`}/>
            <Web>
                <div className="css--borderDirecciones--ejemplo">
                    contenido
                </div>
            </Web>

            <Enlace link={"https://www.mclibre.org/consultar/htmlcss/css/css-bordes.html#:~:text=Los%20estilos%20de%20bordes%20definidos,%2C%20ridge%2C%20inset%20y%20outset."} texto={`Mas bordes a parte de solid aqui`} target="_blank"/>
        </MainCap>
    )
}