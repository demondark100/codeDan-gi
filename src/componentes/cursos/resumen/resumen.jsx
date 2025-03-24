"use client";

import OpenHideButtonResumen from "./funciones/openHideButtonResumen";
import "./resumen.css";

import React, { useState, useRef, useEffect, createPortal } from "react";

function Resumen({ children }) {
  const [isResumenOpen,setIsResumenOpen] = useState();

  return (
    
    <div className="content__resumen">

      {/* boton para abrir y cerrar resumen */}
      <OpenHideButtonResumen  setState={setIsResumenOpen} state={isResumenOpen} />

      {isResumenOpen && <div className="content__resumen--info">{children}</div>}


    </div>
  )
}

export default Resumen;
