"use client";

// importar css
import "./resumen.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';



function Resumen({children}) {
  const [showMsg, setShowMsg] = useState(false); // mostrar mensaje de indicacion
  const [showInfo, setShowInfo] = useState(false); // mostrar resumen



  return (  
    <div className='contentResumen'>

      <div className='contentResumen__iconContent'>
        <div 
          className='contentResumen__iconContent--icono'
          onMouseOver={()=>setShowMsg(true)}
          onMouseOut={()=>setShowMsg(false)}
          onClick={()=>setShowInfo(!showInfo)}
        >
          {
            !showInfo ? <FontAwesomeIcon icon={faClipboardList}/> : <p>X</p>
          }
        </div>
        {
          showMsg && <p className='contentResumen__iconContent--parrafo'>Resumen</p>
        }
      </div>

      {
        showInfo && <div className="contentResumen__infoContent">
            <div className="contentResumen__infoContent--info">
            {children}
            </div>
        </div>
      }



    </div>
  );
}

export default Resumen;