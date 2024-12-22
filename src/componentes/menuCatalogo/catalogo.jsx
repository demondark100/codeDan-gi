"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./catalogo.css";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



function CatalogoNav() {
    const [showHideNav, setShowHideNav] = useState(false);

    function showHideNavSearch() {
        setShowHideNav(!showHideNav);
    }

    // const apiUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000/" : "https://tu-servidor-en-produccion.com/";

    // let datos = fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    
    return ( 
        <div className="catalogoContent">
            
            <nav className={`navCatalogoContent ${showHideNav ? "navCatalogoContentShow" : ""}`}>
                <div className="navCatalogoContent__inputContent">
                    <div className="navCatalogoContent__inputContent--input">
                        <input type="text" placeholder="Buscar"/>
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