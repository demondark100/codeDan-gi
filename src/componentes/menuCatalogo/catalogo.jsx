"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./catalogo.css";
import { faChevronLeft, faChevronRight, faX } from "@fortawesome/free-solid-svg-icons";



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



    // const apiUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000/" : "https://tu-servidor-en-produccion.com/";

    // let datos = fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    
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