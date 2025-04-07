import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function CamelCase() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`camelCase`}/>
                <Texto texto={`"camelCase" es una forma muy común de nombrar variables. Sirve para facilitar la lectura y escritura de los nombres de las variables de manera más sencilla.`}/>
                <Codigo lenguaje={"javascript"} codigo={`let camelCase;
let unaPalabra;`}/>
            </Resumen>
            <Titulo text={`camelCase`}/>
            <Texto texto={`Para usar camelCase, debemos empezar escribiendo en minúscula y reemplazar los espacios por mayúsculas en cada nueva palabra.`}/>
            <Titulo level={3} text={`Sin camelCase`}/>
            <Codigo lenguaje={"javascript"} codigo={`let primer numero = 15;
console.log(primer numero);`}/>
            <Consola language={"javascript"} result={`Uncaught SyntaxError: Unexpected identifier 'numero'`} colorResult="#f00"/>
            <Titulo level={3} text={`Con camelCase`}/>
            <Codigo lenguaje={"javascript"} codigo={`let primerNumero = 15;
console.log(primerNumero);`}/>
            <Consola language={"javascript"} result={`15`} colorResult="#00f"/>
            <Texto texto={`El uso de camelCase es útil para declarar variables de manera más clara y legible, especialmente cuando sus nombres contienen más de una palabra. En lugar de usar espacios, se emplean mayúsculas para separar las palabras, mejorando la comprensión del código.`}/>
        </MainCap>
    )
}