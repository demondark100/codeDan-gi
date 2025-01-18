import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

export default function TablasHtml() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Tablas en HTML`} />
                <Texto texto={`Las tablas son estructuras que nos permiten organizar datos de forma clara y ordenada en filas y columnas.`} />
                <Codigo lenguaje={"html"} codigo={`<h2>Usuarios</h2>
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Paquito</td>
      <td>Maraza</td>
      <td>18</td>
    </tr>
    <tr>
      <td>Maryn</td>
      <td>Kitagawa</td>
      <td>18</td>
    </tr>
  </tbody>
</table>`} />
                <Web>
                    <h2>Usuarios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Paquito</td>
                                <td>Maraza</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>Maryn</td>
                                <td>Kitagawa</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>
                </Web>
            </Resumen>

            <Titulo text={`Introducción a Tablas en HTML`} />
            <Texto texto={`Las tablas son útiles para representar datos tabulares, es decir, datos organizados en filas y columnas. En HTML, las tablas se crean utilizando las siguientes etiquetas principales:`} />
            <Texto texto={`- <table>: Define la tabla.
- <thead>: Contiene el encabezado de la tabla (opcional).
- <tbody>: Agrupa el contenido principal de la tabla.
- <tr>: Representa una fila dentro de la tabla.
- <th>: Define una celda de encabezado.
- <td>: Define una celda estándar.`} />
            <Titulo level={2} text={`Estructura básica de una tabla`} />
            <Codigo 
                lenguaje={"html"} 
                codigo={`<table>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
</table>`} 
            />

            <Titulo level={2} text={`Mejores prácticas al usar tablas`} />
            <Texto texto={`- Utiliza <thead>, <tbody> y <tfoot> para mejorar la accesibilidad y el orden semántico.
- Emplea la etiqueta <th> para celdas de encabezado, ya que mejora la claridad y la experiencia del usuario.
- Agrega atributos como "scope" en <th> para especificar su alcance (columna o fila).
- Evita usar tablas para el diseño de páginas; estas deben ser solo para datos tabulares.`} />

            <Titulo level={2} text={`Ejemplo avanzado con <tfoot>`} />
            <Codigo 
                lenguaje={"html"} 
                codigo={`<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Manzanas</td>
      <td>3</td>
      <td>$5</td>
    </tr>
    <tr>
      <td>Plátanos</td>
      <td>2</td>
      <td>$3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colSpan="2">Total</td>
      <td>$8</td>
    </tr>
  </tfoot>
</table>`} 
            />
            <Web>
                <h2>Lista de productos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Manzanas</td>
                            <td>3</td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>Plátanos</td>
                            <td>2</td>
                            <td>$3</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>$8</td>
                        </tr>
                    </tfoot>
                </table>
            </Web>
        </MainCap>
    );
}