"use client";

// importar css
import "./resumen.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';


// lenguages
import Texto from '../texto/texto';
import Codigo from "../codigo/codigo";
import Titulo from "../titulo/titulo";

function Resumen({
  titulo,
  contenido
}) {
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
        showInfo && <div className='contentResumen__infoContent'>
          <Titulo level={1} text={titulo}/>

          <div className="contentResumen__infoContentInfo">
            {
              contenido.map((i,index)=>(
                <div key={index} className='contentResumen__infoContent--info'>
                  {
                    i.mensaje != undefined ? <Texto texto={i.mensaje}/> : null
                  }
                  {i.lenguaje && <Codigo lenguaje={i.lenguaje} codigo={i.codigo}/>}
                </div>
              ))
            }
          </div>

        </div>
      }

    </div>
  );
}

export default Resumen;