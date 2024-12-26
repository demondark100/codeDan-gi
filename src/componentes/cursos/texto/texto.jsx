import React from 'react';
import './texto.css';
import Link from 'next/link';

const Texto = ({ texto, enlaces = {} }) => {
    const renderTextoConEnlaces = (texto, enlaces) => {
        const partes = texto.split(/{(.*?)}/);
        return partes.map((parte, index) => {
            if (enlaces[parte]) {
                return (
                    <Link 
                        className='textoLink'
                        href={enlaces[parte].url} key={index} 
                        target={enlaces[parte].target}
                    >
                        {parte}
                    </Link>
                );
            }
            return <span key={index}>{parte}</span>;
        });
    };

    return (
        <p className="texto">
            {renderTextoConEnlaces(texto, enlaces)}
        </p>
    );
};

export default Texto;