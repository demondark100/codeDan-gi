"use client";

// cosas de react
import React from 'react';
import { useState } from 'react';

// css
import "./imagen.css";

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Imagen = ({ src, alt, link = "" }) => {
    // mostrar opciones de la imagen
    const [showHideExpand, setShowHideExpand] = useState(false);

    // mostrar opciones de la imgen completa
    const [completeScreen, setCompleteScreen] = useState(false);
    const [showHideExpandComplete, setShowHideExpandComplete] = useState(false);
    let timeoutId;

    function showExpandOptions() {
        setShowHideExpandComplete(true);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            setShowHideExpandComplete(false);    
        }, 5000);
    }

    function closeCompleteScreen() {
        setShowHideExpandComplete(false);
        setTimeout(() => {
            setCompleteScreen(false);
        }, 300); // Tiempo de la transición CSS
    }

    return (
        <div className="imagenContent">
            {/* contenedor de la imagen */}
            <div 
                className="imagenContentImg"
                onMouseOver={()=>setShowHideExpand(true)}
                onMouseOut={()=>setShowHideExpand(false)}
                onDoubleClick={()=>setCompleteScreen(true)}
            >
                {/* fondo  */}
                <div 
                    className={`imagenContentImg__background ${showHideExpand ? "imagenContentImg__backgroundShow":""}`}
                >
                    <button 
                        className='imagenContentImg__btnExpand'
                        onClick={()=>setCompleteScreen(true)}
                    >
                        <FontAwesomeIcon icon={faExpand}/>
                    </button>

                    {
                        link != "" ? <button className='imagenContentImg__btnLink'>
                            <Link href={link} target='_blank'>visitar</Link>
                        </button>:null
                    }
                </div>

                {/* imagen */}
                <img className='imagenContentImg__img' src={src} alt={alt} />
            </div>

            {/* imagen de fondo */}
            <div 
                className={`imagenContentComplete ${completeScreen ? "imagenContentCompleteShow":""}`}
                onMouseMove={showExpandOptions}
                onMouseLeave={() => setShowHideExpandComplete(false)}
                onDoubleClick={closeCompleteScreen}
            >
                {/* fondo  */}
                <div 
                    className={`imagenContentComplete__background ${showHideExpandComplete ? "imagenContentComplete__backgroundShow":""}`}
                >
                    <button 
                        className='imagenContentComplete__btnExpand'
                        onClick={closeCompleteScreen}
                    >
                        <FontAwesomeIcon icon={faExpand}/>
                    </button>
                </div>
                {/* imagen */}
                <img className='imagenContentImg__img' src={src} alt={alt} />
            </div>
        </div>
    );
};

export default Imagen;