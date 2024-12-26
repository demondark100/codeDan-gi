import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function IntroduccionHtml() {
    return (  
        <main className="mainCap">
            <Titulo level={1} text="Introducción" />
            <Texto texto={`Pppa es un drogosaurio`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("Peppa")
function pepa(){
    console.log("pepa");
}`}/>
<Codigo lenguaje={"html"} codigo={`<html>
    <p></p>
</html>`}/>
        </main>
    );
}

export default IntroduccionHtml;