import MainCap from "@/app/catalogo/componentes/main/main";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Consola from "@/componentes/cursos/consola/consola";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";

export default function PooJs() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`Programacion orientada a objetos`}/>
                <Texto texto={` la Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el código en clases y objetos para hacerlo más modular, reutilizable y fácil de mantener.`}/>
                <Codigo lenguaje={"javascript"} codigo={`class Animal{
  constructor(animal,color){
    this.animal = animal;
    this.color = color;
  }
}

class Ave extends Animal{
  constructor(animal,color,patas,sonido){
    super(animal,color);
    this.patas = patas;
    this.sonido = sonido;
  }
  descripcionDetallada(){
    console.log(\`El ave es ${"${this.animal}"}
es de color ${"${this.color}"}
tiene ${"${this.patas}"} patas
y hace ${"${this.sonido}"}\`)
  }
  static descripcionGenera(){
    console.log("Las aves tienen plumas y picos , la mayoria puede volar sin embargo otras al no poder volar pueden planear.")
  }
  set cambio(color){
    this.color = color
  }
  get accederColor(){
    return this.color
  }
}

const ave = new Ave("Pato","blanco","2","cuac");
Ave.descripcionGenera()
ave.color = "negro"
ave.descripcionDetallada()`}/>
            </Resumen>
            <Titulo text={`Programacion orientada a objetos`}/>
            <Texto texto={`En POO, usamos clases para definir plantillas de objetos. En JavaScript se usa la palabra clave class.`}/>
            <Codigo lenguaje={"javascript"} codigo={`class Puerta {
    constructor(color, material) {
        this.color = color;
        this.material = material;
    }
}`}/>
            <Texto texto={`Crear un objeto a partir de una clase`}/>
            <Codigo lenguaje={"javascript"} codigo={`const puerta = new Puerta("negro", "madera");`}/>
            <Texto texto={`Podemos ver el objeto completo:`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log(puerta);`}/>
            <Texto texto={`O acceder a sus propiedades:`}/>
            <Codigo lenguaje={"javascript"} codigo={`console.log(puerta.color);     // "negro"
console.log(puerta.material);  // "madera"`}/>


            {/* Métodos */}
            <Titulo level={2} text={` Métodos`}/>
            <Texto texto={`Podemos agregar métodos dentro de una clase para que el objeto haga algo:`}/>
            <Codigo lenguaje={"javascript"} codigo={`class Puerta {
    constructor(color, material) {
        this.color = color;
        this.material = material;
    }

    describir() {
        console.log(\`La puerta es de color ${"${this.color}"} y está hecha de ${"${this.material}"}.\`);
    }
}`}/>
            <Titulo level={2} text={`Usar un método:`}/>
            <Codigo lenguaje={"javascript"} codigo={`const puerta = new Puerta("negro", "madera");
puerta.describir();`}/>
            <Consola language={"javascript"} result={`La puerta es de color negro y está hecha de madera.`}/>


            {/* Herencia */}
            <Titulo level={2} text={`Herencia`}/>
            <Texto texto={`Una clase puede heredar de otra con extends y usar super() para acceder al constructor de la clase padre.`}/>
            <Codigo lenguaje={"javascript"} codigo={`class Puerta {
    constructor(color, material) {
        this.color = color;
        this.material = material;
    }

    describir() {
        console.log(\`La puerta es de color ${"${this.color}"} y está hecha de ${"${this.material}"}.\`);
    }
}

class Ventana extends Puerta {
    constructor(color, material, forma) {
        super(color, material);
        this.forma = forma;
    }
}`}/>
            

            <Titulo level={2} text={`Métodos estáticos`}/>
            <Texto texto={`Los métodos static no necesitan crear una instancia para usarse.`}/>
            <Codigo lenguaje={"javascript"} codigo={`class Objeto {
    static describir() {
        console.log("Este es un objeto de color verde");
    }
}

Objeto.describir();  // Llamada directa sin crear objeto`}/>
            <Consola language={"javascript"} result={`Este es un objeto de color verde`}/>



            {/* Métodos accesores (get y set)  */}
            <Titulo level={2} text={`Métodos accesores (get y set)`}/>
            <Texto texto={`Sirven para controlar el acceso a propiedades del objeto.`}/>
            <Codigo lenguaje={"javascript"} codigo={`class Objeto {
    constructor(forma, material) {
        this.forma = forma;
        this.material = material;
    }

    set cambio(material) {
        this.material = material;
    }

    get acceder() {
        return this.material;
    }
}`}/>
            <Titulo level={2} text={`Usar metodos accesores`}/>
            <Codigo lenguaje={"javascript"} codigo={`const pared = new Objeto("cuadrada", "madera");
pared.cambio = "hierro";                 // set
console.log(pared.acceder);              // get → "hierro"`}/>
            <Consola language={"javascript"} result={`hierro`}/>


            <Titulo level={2} text={`Ejemplo final`}/>
            <Codigo lenguaje={"javascript"} codigo={`class Objeto {
    constructor(color, material) {
        this.color = color;
        this.material = material;
    }
}

class Mesa extends Objeto {
    constructor(color, material, forma) {
        super(color, material);
        this.forma = forma;
    }

    static algo() {
        console.log("xd");
    }

    set cambio(objeto) {
        this.forma = objeto;
    }

    get acceder() {
        return this.forma;
    }
}

// Usamos el método estático
Mesa.algo();

// Creamos una mesa
const mesa = new Mesa("madera", "rectangular");

// Cambiamos la forma con set
mesa.cambio = "cuadrada";

// Mostramos la forma con get
console.log(mesa.acceder);"`}/>
            <Consola language={"javascript"} result={`cuadrada`}/>
            
        </MainCap>
    )
}