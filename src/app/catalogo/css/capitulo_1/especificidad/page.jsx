import React from "react";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function EspecificidadCss() {
    return(
        <MainCap>
            <Titulo text={`Especificidad en CSS`}/>
            <Texto texto={`La especificidad es una regla fundamental en CSS que determina qué estilo se aplica cuando hay múltiples reglas que coinciden con el mismo elemento. Es decir, cuando un elemento tiene múltiples estilos posibles aplicados a él, CSS decide cuál aplicar según la especificidad de los selectores involucrados.`}/>
            <Titulo level={2} text={`¿Cómo funciona la especificidad?`}/>
            <Texto texto={`Cada selector en CSS tiene una "puntuación de especificidad" que se calcula basándose en su tipo. Cuanto más específico sea un selector, más alta será su puntuación de especificidad, lo que hace que su estilo tenga mayor prioridad.

La especificidad se calcula en cuatro partes, que son:

1. ID (A): Cada ID tiene una gran prioridad. Especificidad de ID = 100.

2. Clase, pseudo-clase (B): Las clases y las pseudo-clases tienen una prioridad menor que los ID. Especificidad de clase = 10.

3. Elemento, pseudo-elemento (C): Los selectores de tipo de elemento (como p, h1, div) tienen la menor prioridad. Especificidad de elemento = 1.
4. Selector universal (*): Se considera lo menos específico. La especificidad del selector universal es 0.

La especificidad se puede representar como una tupla de cuatro valores: (A, B, C, D).`}/>
            <Titulo level={2} text={`Ejemplos de especificidad`}/>
            
        </MainCap>
    )
}