"use client"
import React from "react";
import "../menu/menu.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark,faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import logo from "../../public/logo.jpg";




function Menu() {

    // funciones para mostrar el menu.
    const [showMenu, setShowMenu] = useState(false);

    function showHideMenu(sh) {
        sh == "s" ?
            setShowMenu(true):
            setShowMenu(false)
    }
 
    // funciones para desplegar opciones de perfil.
    const [showProfile, setShowProfile] = useState(false);
    function showHideProfile() {
        setShowProfile(!showProfile);
    }


    return (  
        <nav className="menuContent">
            <button onClick={()=>showHideMenu("s")} className="menuContent__icon">
                <FontAwesomeIcon icon={faBars} size="2x"/>
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
                <div className="menuContent__nav--close">
                    <Image src={logo} alt="logo" />
                    <button onClick={()=>showHideMenu("h")}>
                    <FontAwesomeIcon icon={faXmark} size="2x"/>
                </button>
                </div>
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
                <div className="menuContent__nav--user">
                    <img src={"https://muytecnologicos.com/wp-content/uploads/2023/04/Autenticacion-de-usuario.png"} alt="usuario"/>
                    <button onClick={()=>showHideProfile()}>
                        {
                            showProfile ? 
                            <FontAwesomeIcon icon={faXmark} size="1.8x"/>:
                            <FontAwesomeIcon icon={faEllipsisH} size="1.8x"/>
                        }
                    </button>

                    <div className={`menuContent__nav--data ${!showProfile ? "":"menuContent__nav--dataShow"}`}>
                        <Link href={""}>Registrarse</Link>
                        <Link href={""}>Iniciar secion</Link>
                    </div>
                </div>

            </div>

            
        </nav>
    );
}

export default Menu;