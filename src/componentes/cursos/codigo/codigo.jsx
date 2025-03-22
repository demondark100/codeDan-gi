"use client";

// cosas de react
import React, { useState } from 'react';

// iconos
import { faCopy, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// libreria de resaltado de codigo
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// importar css
import "./codigo.css";


function Codigo({lenguaje,codigo}) {
    // variable que cambia para mostrar o ocultar boton de copiar.
    const [showBtns, setShowBtns] = useState(false);

    // estado para mostrar mensaje de copiado o no.
    const [showHideMsgCopy, setShowHideMsgCopy] = useState(false);

    // expandir el codigo a pantalla completa.
    const [isComplete, setIsComplete] = useState(false);

    const copiarCodigo = () => {
        navigator.clipboard.writeText(codigo)
            .then(() => {
                setShowHideMsgCopy(true);
                setTimeout(() => {
                    setShowHideMsgCopy(false);
                }, 2000);
            })
            .catch(err => {
                console.error('Error al copiar el código: ', err);
            });
    };

    return (
        <div 
            className={`codigoContent ${isComplete ? "codigoContentComplete":""}`}
            onDoubleClick={copiarCodigo}
            onMouseOver={() => setShowBtns(true)}
            onMouseOut={() => setShowBtns(false)}
        >
            <div className='codigoContent--title'>
                <h3>{lenguaje}</h3>
            </div>
            {/* boton para copiar codigo */}
            {
                showBtns &&
                <button 
                    className='codigo__btnCopy'
                    onClick={copiarCodigo}
                >
                    <FontAwesomeIcon icon={faCopy} />
                </button>
            }
            {/* codigo en pantalla completa */}
            {
                showBtns && 
                <button
                    className='codigo__btnExpand'
                    onClick={()=>setIsComplete(!isComplete)}
                >
                    <FontAwesomeIcon icon={faExpand}/>
                </button>
            }

            {
                showHideMsgCopy && <div className='codigo__msgCopyContent'>
                    <p className='codigo__msgCopy'>
                        Codigo copiado 
                    </p>
                </div>
            }

            <SyntaxHighlighter language={lenguaje} style={dracula}>
                {codigo}
            </SyntaxHighlighter>
        </div>  
    );
}

export default Codigo;