"use client";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./catalogo.css";
import { faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";



function CatalogoNav() {

    // funciones para mostrar y ocultar el nav de cursos.
    const [showHideNav, setShowHideNav] = useState(false);
    function showHideNavSearch() {
        setShowHideNav(!showHideNav);
    }

    // funciones para mostrar y ocultar el boton de eliminar contenido de input.
    const [showHideBtnDel, setShowHideBtnDel] = useState(false);


    // input de busqueda
    const [inputSearch, setInputSearch] = useState("");
    // manejar valores de input.
    function manejarInput(valor) {
        setInputSearch(valor);
        valor.length > 0 ? setShowHideBtnDel(true) : setShowHideBtnDel(false);
    }
    // funcion para eliminar el contenido del input de busqueda.
    function delContentInputSearch(){
        setInputSearch("");
        setShowHideBtnDel(false);
    }


    // obtener todas las rutas.
    const [rutas, setRutas] = useState([]);
    async function getData(){
        const apiUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3001/api/catalogo" : "https://buscores-server-gi-2.onrender.com";
    
        const res = await fetch(apiUrl);
        const data = await res.json();
        setRutas(data);
    }

    useEffect(()=>{getData()},[]);

    // mostrar y ocultar lenguaje y capitulos.
    const [openRutaIndex, setOpenRutaIndex] = useState(null);
    const [openCapituloIndex, setOpenCapituloIndex] = useState(null);
    
    return ( 
        <div className="catalogoContent">
            
            <nav className={`navCatalogoContent ${showHideNav ? "navCatalogoContentShow" : ""}`}>

                {/* buscador */}
                <div className="navCatalogoContent__inputContent">
                    <div className="navCatalogoContent__inputContent--input">
                        <input 
                            type="text" 
                            placeholder="Buscar"
                            onInput={(e)=> manejarInput(e.target.value)}
                            value={inputSearch || ""}
                        />
                        {
                            showHideBtnDel && <button   
                                className="navCatalogoContent__inputContent--input--btnDel"
                                onClick={delContentInputSearch}
                            >
                                <FontAwesomeIcon icon={faX}/>
                            </button>
                        }

                    </div>
                </div>

                {
                    rutas.map((ruta, rutaIndex) => (
                        <div key={rutaIndex}>
                            <button 
                                onClick={() => setOpenRutaIndex(openRutaIndex === rutaIndex ? null : rutaIndex)}
                                className="navCatalogoContent__btnRuta"
                            >
                                <span>
                                    {ruta.name}
                                    <FontAwesomeIcon icon={openRutaIndex === rutaIndex ? faChevronUp : faChevronDown}/>
                                </span>
                            </button>
                            {openRutaIndex === rutaIndex && (
                                <ul>
                                    {
                                        ruta.capitulos.map((capitulo, capituloIndex) => (
                                            <li 
                                                key={capituloIndex}
                                                className="navCatalogoContent__capitulos"
                                            >
                                                <h4 
                                                    onClick={() => setOpenCapituloIndex(openCapituloIndex === capituloIndex ? null : capituloIndex)}
                                                    className="navCatalogoContent__lenguajes"
                                                >
                                                    capitulo {capituloIndex + 1}
                                                </h4>
                                                {openCapituloIndex === capituloIndex && (
                                                    Object.values(capitulo)[0].map((link, linkIndex) => (
                                                        <Link
                                                            key={linkIndex} 
                                                            href={link.link}
                                                            className="navCatalogoContent__link"
                                                        >{link.title}</Link>
                                                    ))
                                                )}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )}
                        </div>
                    ))
                }

            </nav>


            <button 
                className={`catalogoContent--btnOpen ${showHideNav ? "catalogoContent--btnOpenRotate" : ""}`}
                onClick={showHideNavSearch}
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
}

export default CatalogoNav;