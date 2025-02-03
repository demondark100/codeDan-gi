import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";


export default function PropiedadesTextoCss(){
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Propiedades de texto`}/>
                <Texto texto={`Con estas propiedades, podemos modificar el texto de varias maneras, como el tamaño, la tipografía, el grosor, el espaciado y más, para personalizar su apariencia según nuestras necesidades.`}/>
                <Codigo lenguaje={"css"} codigo={`font-size: 15px; /*modificar tamaño de letras*/
font-family: cursive; /*modificar tipografia*/
line-height: 2; /*altura de un texto*/
font-weight: 800; /*grosor de letra*/`}/>
                <Titulo level={2} text={`Importar tipografia de google`}/>
                <Codigo lenguaje={"html"} codigo={`<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap" rel="stylesheet">
</head>
<body>
  <main>
    <p class="tipografia_google">
      esta tipografia me gusto :D
    </p>
  </main>
</body>`}/>
                <Codigo lenguaje={"css"} codigo={`.tipografia_google{
  font-family: 'Rubik Gemstones', cursive;
}`}/>
            </Resumen>
            <Titulo text={`Propiedades de texto`}/>
            <Texto texto={`Aquí exploraremos las propiedades de las letras. Comencemos con:`}/>
            <Titulo level={2} text={`font-size`}/>
            <Texto texto={`Con font-size podemos definir el tamaño del texto.

Medidas fijas:
px → Medida fija en píxeles.
cm → Centímetros a escala real.
mm → Milímetros a escala real.
pt → Medida en puntos tipográficos.
Generalmente, se usa px (píxeles), pero puedes elegir cualquier otra medida según tus necesidades.`}/>
            <Codigo lenguaje={"html"} codigo={`<h6 class="subtitulo_1">
  este es un subtitulo feliz.
</h6>`}/>
            <Codigo lenguaje={"css"} codigo={`.subtitulo_1{
  font-size: 23px;
}`}/>
            <Web>
                <div style={{fontSize: "23px"}}>este es un subtitulo feliz.</div>
            </Web>
            <Texto texto={`Podemos elegir cualquier unidad de medida para modificar el tamaño del texto. Lo ideal es experimentar y ajustar los valores según nuestras necesidades para lograr el diseño deseado.`}/>
            
            {/* font-family */}
            <Titulo level={2} text={`font-family`}/>
            <Texto texto={`Esta propiedad define la tipografía del texto.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="tipografia">
  esto es la tipografia.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.tipografia{
  font-family: cursive;
}`}/>
            <Web>
                <p style={{fontFamily: "cursive"}}>esto es la tipografia.</p>
            </Web>

            {/* line-height */}
            <Titulo level={2} text={`line-height`}/>
            <Texto texto={`Esta propiedad define el espacio vertical que ocupará una oración o palabra. Por ejemplo, si establecemos un valor de 2, se incrementará el espacio entre las líneas, y las letras se centrarán más en el espacio disponible.`}/>
            <Codigo lenguaje={"html"} codigo={`<p class="line_height">
  esto ocupara mas espacio en cuention de altura.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`.line_height{
  line-height: 2;
}`}/>
            <Web>
                <p style={{lineHeight: 2}}>esto ocupara mas espacio en cuention de altura.</p>
            </Web>

            {/* font-weight */}
            <Titulo level={2} text={`font-weight`}/>
            <Texto texto={`Esta propiedad hace que las letras sean más gruesas, es decir, que las líneas que forman las letras no sean tan delgadas.`}/>
            <Codigo lenguaje={"html"} codigo={`<p id="grosor">
  estas letras seran mas gruesas.
</p>`}/>
            <Codigo lenguaje={"css"} codigo={`#grosor{
  font-weight: 800;
}`}/>
            <Texto texto={`Con font-weight puedes ajustar el grosor de las letras. En lugar de usar el valor 800, puedes probar con valores como 300 o 400, según el grosor que desees para el texto.`}/>
            <Web>
                <p style={{fontWeight: 800}}>estas letras seran mas gruesas.</p>
            </Web>

            {/* importar tipografias de google */}
            <Titulo level={2} text={`importar tipografias de google`}/>
            <Texto 
                texto={`. Haz {clic aqui} para ir a las tipografías de Google.
. Busca una tipografía que te guste.
. Haz clic en la tipografía seleccionada.
. Una vez dentro de la página de la tipografía, haz clic en el último icono en la parte superior derecha; si pasas el mouse por encima, debe decir "View Selected Families".
. Copia el código donde dice "Use on the Web" y pégalo en el <head> de tu sitio web.
. Copia la parte de abajo donde dice "CSS Rules to Specify Families". Este código se usará para aplicar la tipografía a las letras de tu sitio web.`}
                enlaces={{"clic aqui": {url: "https://fonts.google.com/",target: "_blank"}}}
            />
            <Codigo lenguaje={"html"} codigo={`<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap" rel="stylesheet">
</head>
<body>
  <main>
    <p class="tipografia_google">
      esta tipografia me gusto :D
    </p>
  </main>
</body>`}/>
            <Codigo lenguaje={"css"} codigo={`.tipografia_google{
  font-family: 'Rubik Gemstones', cursive;
}`}/>
            <Texto texto={`Si te das cuenta, hay una coma seguida de otra tipografía. Esa segunda tipografía es la que se usa por defecto en CSS. En caso de que la tipografía de Google no se cargue correctamente, se aplicará la tipografía predeterminada que especificamos en CSS. Esto asegura que siempre haya una tipografía de respaldo disponible.`}/>
            <Web>
                <p>esta tipografia me gusto :D</p>
            </Web>
        </MainCap>
    )
}