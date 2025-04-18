"use client"
import React from "react";
import "./menu.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark,faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import logo from "../../../public/logo.jpg";


// imagenes
import userLogo from "../../../public/user.png";
import CatalogoNav from "../menuCatalogo/catalogo";



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

    // mostrar o no los apuntes
    const router = usePathname();

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
                {/* contenedor de la imagen */}

                <div className="menuContent__nav--close">
                    <Image src={logo} alt="logo" />
                    <button onClick={()=>showHideMenu("h")}><FontAwesomeIcon icon={faXmark} size="2x"/></button>
                </div>

                <div className="menuContent__nav--user">
                    <Image src={userLogo} alt="usuario"/>
                    <button onClick={()=>showHideProfile()}>
                        {
                            showProfile ? 
                            <FontAwesomeIcon icon={faXmark} size="1.8x"/>:
                            <FontAwesomeIcon icon={faEllipsisH} size="1.8x"/>
                        }
                    </button>

                    <div className={`menuContent__nav--data ${!showProfile ? "":"menuContent__nav--dataShow"}`}>
                        <Link href={"/user/registrarse"}>Registrarse</Link>
                        <Link href={"/user/login"}>Iniciar secion</Link>
                    </div>
                </div>

                <ul className="menuContent__nav--ul">
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/catalogo"}>Catalogo</Link>
                    </li>
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/productos"}>Productos</Link>
                    </li>
                    <li>
                        <Link onClick={()=>showHideMenu("h")} href={"/about"}>Sobre mi</Link>
                    </li>
                </ul>

                {router.startsWith("/catalogo") && <CatalogoNav />}

            </div>

            
        </nav>
    );
}

export default Menu;