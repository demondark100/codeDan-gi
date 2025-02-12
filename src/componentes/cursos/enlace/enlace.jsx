import Link from "next/link";
import "./enlace.css";

function Enlace({ link, texto , target = "" }) {
    return (  
        <div className="enlaceContent">
            <Link href={link} target={target}>{texto}</Link>
        </div>
    );
}

export default Enlace;