import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "./codigo.css";


function Codigo({lenguaje,codigo}) {
    return (
        <div className='codigoContent'>
            <button className='codigo__btnCopy'>
                <FontAwesomeIcon icon={faCopy} />
            </button>
            <SyntaxHighlighter language={lenguaje} style={twilight}>
                {codigo}
            </SyntaxHighlighter>
        </div>  

    );
}

export default Codigo;