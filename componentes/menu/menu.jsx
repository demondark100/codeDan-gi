"use client"
import React from "react";
import "../menu/menu.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "../../public/logo.jpg";




function Menu() {

    const [showMenu, setShowMenu] = useState(false);

    function showHideMenu(sh) {
        sh == "s" ?
            setShowMenu(true):
            setShowMenu(false)
    }
 
    return (  
        <nav className="menuContent">
            <button onClick={()=>showHideMenu("s")} className="menuContent__icon">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="menuContent__logo">
                <Image src={logo} alt="logo" />
            </div>

            {/* oscurecer y funcion para quitar menu */}
            <div 
                onClick={()=>showHideMenu("h")} 
                className={`menuContent__oscurecer ${!showMenu ? "":"menuContent__oscurecerShow"}`}
            ></div>

            <div className={`menuContent__nav ${!showMenu ? "":"menuContent__navShow"}`}>
                <button onClick={()=>showHideMenu("h")} className="menuContent__nav--close">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <ul className="menuContent__nav--ul">
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/apuntes"}>Apuntes</Link>
                    </li>
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/proyectos"}>Proyectos</Link>
                    </li>
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/about"}>Sobre mi</Link>
                    </li>
                </ul>
                <div className="menuContent__nav--data">
                    <Link href={""}>Registrarse</Link>
                    <Link href={""}>Iniciar secion</Link>
                </div>
            </div>

            
        </nav>
    );
}

export default Menu;