import "../menu/menu.css";
import Link from "next/link";

function Menu() {
    return (  
        <nav className="menuContent">
            <div>
                
            </div>
            <ul>
                <li>
                    <Link href={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link href={"/apuntes"}>Apuntes</Link>
                </li>
                <li>
                    <Link href={"/proyectos"}>Proyectos</Link>
                </li>
                <li>
                    <Link href={"/about"}>Sobre mi</Link>
                </li>
            </ul>
            
        </nav>
    );
}

export default Menu;