import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function OperadoresJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`operadores logicos`}/>
                <Texto texto={`JavaScript tiene varios operadores lógicos y de comparación que nos permiten programar de manera eficiente y precisa.`}/>
                <Codigo lenguaje={"javascript"} codigo={`5 == "5" // compara si un dato es igual a otro
5 === 5 // compara si un dato es estrictamente igual a otro
15 != "18" // compara si un dato es distinto a otro
18 !== "18" // compara si un dato es estrictamente a otro`}/>
            </Resumen>
            <Titulo text={`operadores logicos`}/>
            <Texto texto={`En JavaScript, los operadores lógicos se utilizan para realizar comparaciones y evaluar condiciones.

Operadores Lógicos Básicos
AND (y): && → Devuelve true si ambas condiciones son verdaderas.

OR (o): || → Devuelve true si al menos una condición es verdadera.

NOT (negación): ! → Invierte el valor de una condición.

Diferente de: != → Compara solo valores.

Diferente estricto: !== → Compara valores y tipos de datos.`}/>

            
            <Titulo level={2} text={`Operadores de Igualdad`}/>
            <Titulo level={3} text={`Igualdad flexible (==)`}/>
            <Texto texto={`Compara solo los valores, sin importar el tipo de dato.`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("15" == 15); `}/>
            <Consola language={"javascript"} result={`true`} colorResult="#00f"/>
            
            <Titulo level={3} text={`Igualdad estricta (===)`}/>
            <Texto texto={`Compara tanto el valor como el tipo de dato.`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("15" === 15);
console.log("15" === "15");`}/>
            <Consola language={"javascript"} result={`false
true`} colorResult="#00f"/>
            
            <Titulo level={3} text={`Diferencia (!=)`}/>
            <Texto texto={`Verifica si los valores son diferentes, sin considerar el tipo de dato.`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("15" != 15);`}/>
            <Consola language={"javascript"} result={`false`} colorResult="#00f"/>

            <Titulo level={3} text={`Diferencia estricta (!==)`}/>
            <Texto texto={`Verifica si los valores o tipos de datos son diferentes.`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log("15" !== 15);`}/>
            <Consola language={`javascript`} result={`true`} colorResult="#00f"/>
        </MainCap>
    )
}