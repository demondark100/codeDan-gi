import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

function ListasHtml() {
    return (  
        <MainCap>
            <Resumen 
                titulo={`Listas`}
                contenido={[{
                    "mensaje": `Hay dos tipos de listas: ordenadas y desordenadas. Ambas deben llevar de forma obligatoria la etiqueta <li> dentro de ellas. La etiqueta <ol> se utiliza para listas enumeradas, mientras que la etiqueta <ul> se usa para listas desordenadas, es decir, que no se enumeran.`,
                    "lenguaje": "html",
                    "codigo": `<!-- Ordenadas -->
<ol>
  <li>contenido</li>
  <li>podemos poner cuantos &quot;li&quot; queramos</li>
</ol>
<!-- Desordenadas -->
<ul>
  <li>contenido</li>
  <li>podemos poner cuantos &quot;li&quot; queramos</li>
</ul>`
                }]}
            />
            <Titulo level={1} text={`Listas`}/>
            <Texto texto={`Existen dos tipos de listas: las ordenadas y las desordenadas.
Ordenada:
&lt;ol&gt;&lt;/ol&gt;
Desordenada:
&lt;ul&gt;&lt;/ul&gt;
Ambas deben contener la etiqueta &lt;li&gt;. Ahora veremos cómo es la estructura.`}/>
            <Codigo lenguaje={"html"} codigo={`<!-- Ordenadas -->
<ol>
  <li>contenido</li>
  <li>podemos poner cuantos &quot;li&quot; queramos</li>
</ol>
<!-- Desordenadas -->
<ul>
  <li>contenido</li>
  <li>podemos poner cuantos &quot;li&quot; queramos</li>
</ul>`}/>
            <Web>
                <ol>
                    <li>contenido</li>
                    <li>podemos poner cuantos &quot;li&quot; queramos</li>
                </ol>
                <ul>
                    <li>contenido</li>
                    <li>podemos poner cuantos &quot;li&quot; queramos</li>
                </ul>
            </Web>
            <Titulo level={2} text={`Ejercicio 1`}/>
            <Texto texto={`Crear una lista ordenada que muestre animes populares.`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>Lista ordenada</title>
  </head>
  <body>
    <h1>Lista de animes populares</h1>
    <ol>
      <li>Re:Zero</li>
      <li>High School DxD</li>
      <li>Blood-C</li>
      <li>Tate no Yuusha</li>
      <li>Shingeki no Kyojin</li>
    </ol>
  </body>
</html>`}/>
            <Web>
                <h1>Lista de animes populares</h1>
                <ol>
                    <li>Re:Zero</li>
                    <li>High School DxD</li>
                    <li>Blood-C</li>
                    <li>Tate no Yuusha</li>
                    <li>Shingeki no Kyojin</li>
                </ol>
            </Web>
            <Titulo level={2} text={`Ejercicio 2`}/>
            <Texto texto={`Hacer el mismo ejercicio pero con listas desordenadas.`}/>
            <Codigo lenguaje={"html"} codigo={`<!DOCTYPE html>
<html>
  <head>
    <title>Lista desordenada</title>
  </head>
  <body>
    <h1>Lista de animes populares</h1>
    <ul>
      <li>Re:Zero</li>
      <li>High School DxD</li>
      <li>Blood-C</li>
      <li>Tate no Yuusha</li>
      <li>Shingeki no Kyojin</li>
    </ul>
  </body>
</html>`}/>
            <Web>
                <h1>Lista de animes populares</h1>
                <ul>
                    <li>Re:Zero</li>
                    <li>High School DxD</li>
                    <li>Blood-C</li>
                    <li>Tate no Yuusha</li>
                    <li>Shingeki no Kyojin</li>
                </ul>
            </Web>
        </MainCap>
    );
}

export default ListasHtml;