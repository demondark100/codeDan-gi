import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


export default function ArreglosAsociativosJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Arreglos asociativos`}/>
                <Texto texto={`Los arreglos asociativos son objetos al cual podemos acceder a sus valores de forma mas sencilla, no son necesarios los indices.`}/>
                <Codigo lenguaje={"javascript"} codigo={`const persona = {nombre: "Ramon"} // crear objeto
console.log(persona.nombre); // acceder al valor de un objeto forma 1
console.log(persona["nombre"]); // acceder al valor de un objeto forma 2
persona.edad = "50"; // agregar un nuevo valor al objeto

Object.defineProperty( // agregar un nuevo valor al objeto
  persona, "gemero", 
  { value: "masculino" }
);

Object.defineProperty( // agregar un nuevo valor al objeto pero evitando que se sobreescriba ese nuevo valor
  persona, "trabajo", 
  { value: "Albañil", writable: false }
);

Object.preventExtensions(persona); // evitar que se agreguen mas propiedades a un objeto
delete persona.trabajo; // eliminar una propiedad del objeto
`}/>
            </Resumen>
            <Titulo text={`Arreglos asociativos`}/>
            <Texto texto={`Los "arreglos asociativos" en JavaScript son conocidos como objetos. A diferencia de los arreglos normales, los objetos no tienen un orden específico, lo que significa que no es necesario utilizar índices numéricos como "[0][1]". En su lugar, se usan claves/identificadores para acceder a los valores asociados. Aquí tienes un ejemplo en pseudocódigo y JavaScript para ilustrar cómo trabajar con objetos:`}/>
            <Titulo level={2} text={`Sintaxis`}/>
            <Codigo lenguaje={"javascript"} codigo={`// crear variable
variable = {
    identificador: valor,
    identificador: valor,
    identificador: valor
};`}/>
            <Titulo level={2} text={`Formas de acceder a los valores:`}/>
            <Titulo level={3} text={`Forma 1`}/>
            <Codigo lenguaje={"javascript"} codigo={`mostrar(variable.identificador);`}/>
            <Titulo level={3} text={`Forma 2`}/>
            <Codigo lenguaje={"javascript"} codigo={`mostrar(variable["identificador"]);`}/>
            <Titulo level={2} text={`Ejemplo en JavaScript:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const musica = {
  nombre: "Tighten Up",
  banda: "The Black Keys",
  genero: "Rock alternativo",
  integrantes: 2
};

console.log(musica.nombre);
console.log(musica["banda"]);`}/>
            <Consola language={"javascript"} result={`Tighten Up
The Black Keys`}/>


            {/* Agregar valores a un objeto: */}
            <Titulo level={2} text={`Agregar valores a un objeto:`}/>
            <Texto texto={`Agregar valores a un objeto:`}/>
            <Texto texto={`Puedes agregar más valores al objeto a medida que avanzas en tu código.`}/>
            <Codigo lenguaje={"javascript"} codigo={`const agregar = {
  anime: "Re Zero"
};

agregar.protagonista = "Subaru";
console.log(agregar);`}/>
            <Consola language={"javascript"} result={`{anime: 'Re Zero', protagonista: 'Subaru'}`}/>


            {/* Otra forma de agregar valores más complejos: */}
            <Titulo level={2} text={`Otra forma de agregar valores más complejos:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const colores = {};
Object.defineProperty(
  colores, "color", 
  { value: "verde" }
);`}/>
            

            {/* Propiedades no reescribibles con writable: */}
            <Titulo level={2} text={`Propiedades no reescribibles con writable:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const colors = {};
Object.defineProperty(
  colors, "color",
  { value: "verde", writable: false }
);

colors.color = "azul";
console.log(colors.color);`}/>
            <Consola language={"javascript"} result={`verde`}/>


            {/* Evitar agregar propiedades con preventExtensions(): */}
            <Titulo level={2} text={`Evitar agregar propiedades con preventExtensions():`}/>
            <Codigo lenguaje={"javascript"} codigo={`const obj = {
  juego: "Left 4 Dead 2"
};

Object.preventExtensions(obj);
obj.desarrollador = "Valve";
console.log(obj);`}/>
            <Consola language={"javascript"} result={`{juego: 'Left 4 Dead 2'}`}/>
            

            {/* Eliminar propiedades con delete: */}
            <Titulo level={2} text={`Eliminar propiedades con delete:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const objeto = {                         
  musica: "Adventure",
  artista: "Coldplay"
};

delete objeto.artista;
console.log(objeto);`}/>
            <Consola language={"javascript"} result={`{musica: 'Adventure'}`}/>
        </MainCap>
    )
}