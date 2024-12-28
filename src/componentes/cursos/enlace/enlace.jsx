import Link from "next/link";
import "./enlace.css";

function Enlace({ link, texto }) {
    return (  
        <div className="enlaceContent">
            <Link href={link}>{texto}</Link>
        </div>
    );
}

export default Enlace;