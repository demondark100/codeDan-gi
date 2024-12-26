import CatalogoNav from "@/componentes/menuCatalogo/catalogo";
import "./catalogo.css";

export default function CatalogoLayout({children}) {
    return <>
        {children}
        <CatalogoNav /> 
    </>
}