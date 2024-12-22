import CatalogoNav from "@/componentes/menuCatalogo/catalogo";

export default function CatalogoLayout({children}) {
    return <>
        {children}
        <CatalogoNav /> 
    </>
}