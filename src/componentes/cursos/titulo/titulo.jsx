import React from 'react';
import './titulo.css';

const Titulo = ({ level, text }) => {
    const Tag = `h${level}`;

    return (
        <div className={`${level === 1 ? 'titulo' : 'subtitulo'}`}>
            <Tag>{text}</Tag>
        </div>
    );
};

export default Titulo;