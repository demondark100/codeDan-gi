"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faChevronUp, faSpinner, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./catalogo.css";
import Image from "next/image";

function CatalogoNav() {
    const [showHideNav, setShowHideNav] = useState(false);
    const [showHideBtnDel, setShowHideBtnDel] = useState(false);
    const [inputSearch, setInputSearch] = useState("");
    const [rutas, setRutas] = useState([]);
    const [openRutaIndex, setOpenRutaIndex] = useState(null);
    const [openCapituloIndex, setOpenCapituloIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [suggestions, setSuggestions] = useState([]);

    // estado para mostrar el párrafo llamado Catalogo
    const [showParrafo, setShowParrafo] = useState(false);

    useEffect(() => {
        async function getData() {
            const apiUrl = "https://buscores-server-gi-2.onrender.com/api/catalogo";
            // const apiUrl = "http://localhost:3001/api/catalogo";
            const res = await fetch(apiUrl);
            const data = await res.json();
            setRutas(data);
            setIsLoading(false);
        }
        getData();
    }, []);

    function manejarInput(valor) {
        setInputSearch(valor);
        setShowHideBtnDel(valor.length > 0);
        if (valor.length > 0) {
            const newSuggestions = [];
            rutas.forEach(ruta => {
                ruta.capitulos.forEach(capitulo => {
                    Object.values(capitulo)[0].forEach(tema => {
                        tema.words.forEach(i=>{
                            if (i.toLowerCase().includes(valor.toLowerCase())) {
                                newSuggestions.push({ ...tema, logo: ruta.logo });
                                console.log(i)
                            }
                        })
                        // if (tema.title.toLowerCase().includes(valor.toLowerCase())) {
                        //     newSuggestions.push({ ...tema, logo: ruta.logo });
                        // }
                    });
                });
            });
            setSuggestions(newSuggestions);
        } else {
            setSuggestions([]);
        }
    }

    function delContentInputSearch() {
        setInputSearch("");
        setShowHideBtnDel(false);
        setSuggestions([]);
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

                {/* buscador */}
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
                    
                        {/* sugerencias */}
                        {suggestions.length > 0 && (
                            <ul className="navCatalogoContent__suggestions">
                                {suggestions.map((suggestion, index) => (
                                    <li key={index}>
                                        <Link href={suggestion.link}>
                                            <img src={suggestion.logo} alt="logo" className="suggestion-logo"/>
                                            {suggestion.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    
                    </div>
                </div>
                
                {isLoading && (
                    <div className="catalogoContent__load">
                        <FontAwesomeIcon icon={faSpinner}/>
                        <p>Cargando...</p>
                    </div>
                )}

                {/* navegación */}
                {!isLoading && rutas.map((ruta, rutaIndex) => (
                    <div key={rutaIndex}>
                        <button 
                            onClick={() => toggleRutaIndex(rutaIndex)}
                            className="navCatalogoContent__btnRuta"
                        >
                            <span>
                                <div className="navCatalogoContent__btnRuta--imgTitle">
                                    <img src={ruta.logo} alt="lenguaje"/>
                                    {ruta.name}
                                </div>
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

            {/* botón para abrir el menú */}
            <div className="catalogoContentBtnOpenCaps">
                <button 
                    className={`catalogoContent--btnOpen ${showHideNav ? "catalogoContent--btnOpenRotate" : ""}`}
                    onClick={toggleNav}
                    onMouseOver={() => setShowParrafo(true)}
                    onMouseOut={() => setShowParrafo(false)}
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
                {showParrafo && (
                    <p className="catalogoContentBtnOpenCaps--parrafo">
                        Catálogo
                    </p>
                )}
            </div>
        </div>
    );
}

export default CatalogoNav;