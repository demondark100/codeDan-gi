import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import "./estilos.css";



export default function GridAreaCss() {
    return (
        <MainCap>
            <Resumen>
                <Titulo text={`grid area`}/>
                <Texto texto={`Con grid-area podemos asignar de forma más sencilla un layout en CSS Grid.`}/>
                <Codigo lenguaje={"css"} codigo={`.content{
    grid-template-areas: 
        "header header header"
        "aside main main"
        "aside main main"
        "footer footer footer";
}

.grid_header {
    background-color: #91ff38;
    grid-area: header;
}

.grid_main {
    background-color: #ff650c;
    grid-area: main;
    padding: 15px;
}

.grid_aside {
    background-color: #34afe7;
    grid-area: aside;
    padding: 15px;
}

.grid_footer {
    background-color: #69ff2e;
    grid-area: footer;
}`}/>
            </Resumen>
            <Titulo text={`grid area`}/>
            <Texto texto={`CSS Grid permite organizar elementos en una cuadrícula, alineándolos de manera eficiente. Para lograr esto, utilizamos las propiedades grid-template-areas y grid-area.

1. grid-template-areas: Define el diseño de la cuadrícula asignando nombres a diferentes secciones.
2. grid-area: Se usa en los elementos hijos para asignarlos a un área específica de la cuadrícula.`}/>
            <Codigo lenguaje={"html"} codigo={`<div class="grid_content">
    <div class="grid_item grid_header">
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Más información</a></li>
            </ul>
        </nav>
    </div>
    <div class="grid_item grid_main">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptates deleniti magnam saepe iste et nemo? Perferendis quos laborum optio quasi deserunt itaque. Sequi eos accusamus iste. Aut, officia quas.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, temporibus ipsum consequuntur accusamus quo laborum! Excepturi repellendus ullam ab adipisci deleniti, veritatis quam vero. Omnis voluptatibus ratione eaque at!
        </p>
    </div>
    <div class="grid_item grid_aside">
        <b>Publicidad</b>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aut laboriosam magnam consequatur quaerat incidunt molestiae eveniet dolor, odio aperiam consectetur eaque velit, facere quisquam animi nam quos nostrum. Culpa.
        </p>
    </div>
    <div class="grid_item grid_footer">
        <p>Pie de página</p>
    </div>
</div>`}/>
            <Codigo lenguaje={"css"} codigo={`.grid_content {
    background-color: #000;
    margin: 10px;
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    border: 2px solid #000;
    height: 90%;

    grid-template-areas: 
        "header header header"
        "aside main main"
        "aside main main"
        "footer footer footer";
}

.grid_header {
    background-color: #91ff38;
    grid-area: header;
}

.grid_main {
    background-color: #ff650c;
    grid-area: main;
    padding: 15px;
}

.grid_aside {
    background-color: #34afe7;
    grid-area: aside;
    padding: 15px;
}

.grid_footer {
    background-color: #69ff2e;
    grid-area: footer;
}`}/>
            <Web>
                <div className="css--gridArea--ejemplo">
                    <div className="css--gridAreaHeader--ejemplo">
                        <nav>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Acerca de</a></li>
                                <li><a href="#">Servicios</a></li>
                                <li><a href="#">Contacto</a></li>
                                <li><a href="#">Más información</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="css--gridAreaMain--ejemplo">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptates deleniti magnam saepe iste et nemo? Perferendis quos laborum optio quasi deserunt itaque. Sequi eos accusamus iste. Aut, officia quas.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam aspernatur, temporibus ipsum consequuntur accusamus quo laborum! Excepturi repellendus ullam ab adipisci deleniti, veritatis quam vero. Omnis voluptatibus ratione eaque at!
                        </p>
                    </div>
                    <div class="css--gridAreaAside--ejemplo">
                        <b>Publicidad</b>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aut laboriosam magnam consequatur quaerat incidunt molestiae eveniet dolor, odio aperiam consectetur eaque velit, facere quisquam animi nam quos nostrum. Culpa.
                        </p>
                    </div>
                    <div class="css--gridAreaFooter--ejemplo">
                        <p>Pie de página</p>
                    </div>
                </div>
            </Web>
        </MainCap>
    )
}