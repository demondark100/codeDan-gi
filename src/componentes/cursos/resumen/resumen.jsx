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

  // Detectar si el evento es touch o mouse
  const getClientCoords = (e) => {
    if (e.touches) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  };

  // Mover la ventana
  const handleStart = (e) => {
    e.preventDefault();
    const { x, y } = getClientCoords(e);
    dragData.current.dragging = true;
    dragData.current.offsetX = x - dragData.current.x;
    dragData.current.offsetY = y - dragData.current.y;
  };

  const handleMove = (e) => {
    if (dragData.current.dragging) {
      e.preventDefault(); // Evita el desplazamiento en móviles
      const { x, y } = getClientCoords(e);
      dragData.current.x = x - dragData.current.offsetX;
      dragData.current.y = y - dragData.current.offsetY;
      if (ventanaRef.current) {
        ventanaRef.current.style.left = `${dragData.current.x}px`;
        ventanaRef.current.style.top = `${dragData.current.y}px`;
      }
    }

    if (resizeData.current.resizing) {
      e.preventDefault();
      const { x, y } = getClientCoords(e);
      let { width, height } = resizeData.current;
      let newWidth = width, newHeight = height;

      if (resizeData.current.direction.includes("right")) {
        newWidth = Math.max(200, x - dragData.current.x);
      }
      if (resizeData.current.direction.includes("bottom")) {
        newHeight = Math.max(150, y - dragData.current.y);
      }
      if (resizeData.current.direction.includes("left")) {
        newWidth = Math.max(200, width - (x - dragData.current.x));
        dragData.current.x = x;
      }
      if (resizeData.current.direction.includes("top")) {
        newHeight = Math.max(150, height - (y - dragData.current.y));
        dragData.current.y = y;
      }

      resizeData.current.width = newWidth;
      resizeData.current.height = newHeight;

      if (ventanaRef.current) {
        ventanaRef.current.style.width = `${newWidth}px`;
        ventanaRef.current.style.height = `${newHeight}px`;
      }
    }
  };

  const handleEnd = () => {
    dragData.current.dragging = false;
    resizeData.current.resizing = false;
  };

  // Iniciar redimensionado
  const handleResizeStart = (direction) => (e) => {
    e.stopPropagation();
    resizeData.current.resizing = true;
    resizeData.current.direction = direction;
  };

  return (
    <div
      className="contentResumen"
      onMouseMove={handleMove} onMouseUp={handleEnd}
      onTouchMove={handleMove} onTouchEnd={handleEnd}
    >
      <button className="boton-flotante" onClick={() => setShowInfo(!showInfo)}>
        <FontAwesomeIcon icon={faClipboardList} /> Ver Resumen
      </button>
      {showInfo && (
        <div
          className="ventana-flotante"
          ref={ventanaRef}
          style={{ left: "100px", top: "100px", width: "320px", height: "200px" }}
        >
          <div
            className="barra-titulo"
            onMouseDown={handleStart} onTouchStart={handleStart}
          >
            Resumen
            <button className="boton-cerrar" onClick={() => setShowInfo(false)}>✕</button>
          </div>
          <div className="contenido_content">
            <div className="contetnido">
              {children}
            </div>
          </div>

          {/* Controles de redimensionado */}
          <div className="resizer right" onMouseDown={handleResizeStart("right")} onTouchStart={handleResizeStart("right")}></div>
          <div className="resizer bottom" onMouseDown={handleResizeStart("bottom")} onTouchStart={handleResizeStart("bottom")}></div>
          <div className="resizer bottom-right" onMouseDown={handleResizeStart("bottom right")} onTouchStart={handleResizeStart("bottom right")}></div>
          <div className="resizer left" onMouseDown={handleResizeStart("left")} onTouchStart={handleResizeStart("left")}></div>
          <div className="resizer top" onMouseDown={handleResizeStart("top")} onTouchStart={handleResizeStart("top")}></div>
          <div className="resizer top-left" onMouseDown={handleResizeStart("top left")} onTouchStart={handleResizeStart("top left")}></div>
          <div className="resizer top-right" onMouseDown={handleResizeStart("top right")} onTouchStart={handleResizeStart("top right")}></div>
          <div className="resizer bottom-left" onMouseDown={handleResizeStart("bottom left")} onTouchStart={handleResizeStart("bottom left")}></div>
        </div>
      )}
    </div>
  );
}

export default Resumen;
