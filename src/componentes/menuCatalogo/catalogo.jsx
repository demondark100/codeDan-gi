"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faChevronUp, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./catalogo.css";

function CatalogoNav() {
    const [showHideNav, setShowHideNav] = useState(false);
    const [showHideBtnDel, setShowHideBtnDel] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const [rutas, setRutas] = useState([]);
    const [openRutaIndex, setOpenRutaIndex] = useState(null);
    const [openCapituloIndex, setOpenCapituloIndex] = useState(null);

    useEffect(() => {
        async function getData() {
            const apiUrl = "https://buscores-server-gi-2.onrender.com/api/catalogo";
            const res = await fetch(apiUrl);
            const data = await res.json();
            setRutas(data);
        }
        getData();
    }, []);

    function manejarInput(valor) {
        setInputSearch(valor);
        setShowHideBtnDel(valor.length > 0);
    }

    function delContentInputSearch() {
        setInputSearch("");
        setShowHideBtnDel(false);
    }

    function toggleNav() {
        setShowHideNav(!showHideNav);
    }

    function toggleRutaIndex(index) {
        setOpenRutaIndex(openRutaIndex === index ? null : index);
    }

    function toggleCapituloIndex(index) {
        setOpenCapituloIndex(openCapituloIndex === index ? null : index);
    }

    return (
        <div className="catalogoContent">
            <nav className={`navCatalogoContent ${showHideNav ? "navCatalogoContentShow" : ""}`}>
                <div className="navCatalogoContent__inputContent">
                    <div className="navCatalogoContent__inputContent--input">
                        <input 
                            type="text" 
                            placeholder="Buscar"
                            onInput={(e) => manejarInput(e.target.value)}
                            value={inputSearch}
                        />
                        {showHideBtnDel && (
                            <button 
                                className="navCatalogoContent__inputContent--input--btnDel"
                                onClick={delContentInputSearch}
                            >
                                <FontAwesomeIcon icon={faX}/>
                            </button>
                        )}
                    </div>
                </div>
                {rutas.map((ruta, rutaIndex) => (
                    <div key={rutaIndex}>
                        <button 
                            onClick={() => toggleRutaIndex(rutaIndex)}
                            className="navCatalogoContent__btnRuta"
                        >
                            <span>
                                {ruta.name}
                                <FontAwesomeIcon icon={openRutaIndex === rutaIndex ? faChevronUp : faChevronDown}/>
                            </span>
                        </button>
                        {openRutaIndex === rutaIndex && (
                            <ul>
                                {ruta.capitulos.map((capitulo, capituloIndex) => (
                                    <li 
                                        key={capituloIndex}
                                        className="navCatalogoContent__capitulos"
                                    >
                                        <h4 
                                            onClick={() => toggleCapituloIndex(capituloIndex)}
                                            className="navCatalogoContent__lenguajes"
                                        >
                                            Capítulo {capituloIndex + 1}
                                        </h4>
                                        {openCapituloIndex === capituloIndex && (
                                            Object.values(capitulo)[0].map((link, linkIndex) => (
                                                <Link
                                                    key={linkIndex} 
                                                    href={link.link}
                                                    className="navCatalogoContent__link"
                                                >
                                                    {link.title}
                                                </Link>
                                            ))
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
            <button 
                className={`catalogoContent--btnOpen ${showHideNav ? "catalogoContent--btnOpenRotate" : ""}`}
                onClick={toggleNav}
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
}

export default CatalogoNav;