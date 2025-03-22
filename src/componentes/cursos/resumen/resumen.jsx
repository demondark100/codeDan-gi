"use client";

import "./resumen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";

function Resumen({ children }) {
  const [showInfo, setShowInfo] = useState(false);
  const ventanaRef = useRef(null);
  const dragData = useRef({ x: 100, y: 100, offsetX: 0, offsetY: 0, dragging: false });
  const resizeData = useRef({ width: 320, height: 200, resizing: false, direction: "" });

  // Mover la ventana
  const handleMouseDown = (e) => {
    dragData.current.dragging = true;
    dragData.current.offsetX = e.clientX - dragData.current.x;
    dragData.current.offsetY = e.clientY - dragData.current.y;
  };

  const handleMouseMove = (e) => {
    if (dragData.current.dragging) {
      dragData.current.x = e.clientX - dragData.current.offsetX;
      dragData.current.y = e.clientY - dragData.current.offsetY;
      if (ventanaRef.current) {
        ventanaRef.current.style.left = `${dragData.current.x}px`;
        ventanaRef.current.style.top = `${dragData.current.y}px`;
      }
    }

    if (resizeData.current.resizing) {
      let { width, height } = resizeData.current;
      let newWidth = width, newHeight = height;

      if (resizeData.current.direction.includes("right")) {
        newWidth = Math.max(200, e.clientX - dragData.current.x);
      }
      if (resizeData.current.direction.includes("bottom")) {
        newHeight = Math.max(150, e.clientY - dragData.current.y);
      }
      if (resizeData.current.direction.includes("left")) {
        newWidth = Math.max(200, width - (e.clientX - dragData.current.x));
        dragData.current.x = e.clientX;
      }
      if (resizeData.current.direction.includes("top")) {
        newHeight = Math.max(150, height - (e.clientY - dragData.current.y));
        dragData.current.y = e.clientY;
      }

      resizeData.current.width = newWidth;
      resizeData.current.height = newHeight;

      if (ventanaRef.current) {
        ventanaRef.current.style.width = `${newWidth}px`;
        ventanaRef.current.style.height = `${newHeight}px`;
      }
    }
  };

  const handleMouseUp = () => {
    dragData.current.dragging = false;
    resizeData.current.resizing = false;
  };

  // Iniciar redimensionado
  const handleResizeMouseDown = (direction) => (e) => {
    e.stopPropagation();
    resizeData.current.resizing = true;
    resizeData.current.direction = direction;
  };

  return (
    <div className="contentResumen" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <button className="boton-flotante" onClick={() => setShowInfo(!showInfo)}>
        <FontAwesomeIcon icon={faClipboardList} /> Ver Resumen
      </button>
      {showInfo && (
        <div
          className="ventana-flotante"
          ref={ventanaRef}
          style={{ left: "100px", top: "100px", width: "320px", height: "200px" }}
        >
          <div className="barra-titulo" onMouseDown={handleMouseDown}>
            Resumen
            <button className="boton-cerrar" onClick={() => setShowInfo(false)}>✕</button>
          </div>
          <div className="contenido_content">
            <div className="contetnido">
              {children}
            </div>
          </div>

          {/* Controles de redimensionado */}
          <div className="resizer right" onMouseDown={handleResizeMouseDown("right")}></div>
          <div className="resizer bottom" onMouseDown={handleResizeMouseDown("bottom")}></div>
          <div className="resizer bottom-right" onMouseDown={handleResizeMouseDown("bottom right")}></div>
          <div className="resizer left" onMouseDown={handleResizeMouseDown("left")}></div>
          <div className="resizer top" onMouseDown={handleResizeMouseDown("top")}></div>
          <div className="resizer top-left" onMouseDown={handleResizeMouseDown("top left")}></div>
          <div className="resizer top-right" onMouseDown={handleResizeMouseDown("top right")}></div>
          <div className="resizer bottom-left" onMouseDown={handleResizeMouseDown("bottom left")}></div>
        </div>
      )}
    </div>
  );
}

export default Resumen;
