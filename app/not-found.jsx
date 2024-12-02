import "../app/not-found.css";
import Image from "next/image";

import logo from "../public/logo.jpg";

function NotFound() {
    return (  
        <main>
            <section className="contentTileNotFound">
                <Image src={logo} alt="logo"/>
                <h1>404</h1>
                <p>No deberias estar aqui ¿Sabes?</p>
            </section>
        </main>
    );
}

export default NotFound;