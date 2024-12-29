import React from 'react';
import "./content.css";

function Content({ children, position = 'center' }) {
    const justifyContentClass = `contentCatalogo--${position}`;

    return (
        <div className={`contentCatalogo ${justifyContentClass}`}>
            {children}
        </div>
    );
}

export default Content;