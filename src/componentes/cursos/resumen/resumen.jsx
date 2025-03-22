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

  // Mover la ventana (Mouse & Touch)
  const startDrag = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragData.current.dragging = true;
    dragData.current.offsetX = clientX - dragData.current.x;
    dragData.current.offsetY = clientY - dragData.current.y;
  };

  const handleMove = (e) => {
    if (!dragData.current.dragging && !resizeData.current.resizing) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    requestAnimationFrame(() => {
      if (dragData.current.dragging) {
        dragData.current.x = clientX - dragData.current.offsetX;
        dragData.current.y = clientY - dragData.current.offsetY;

        if (ventanaRef.current) {
          ventanaRef.current.style.transform = `translate(${dragData.current.x}px, ${dragData.current.y}px)`;
        }
      }

      if (resizeData.current.resizing) {
        let { width, height } = resizeData.current;
        let newWidth = width, newHeight = height;

        if (resizeData.current.direction.includes("right")) {
          newWidth = Math.max(200, clientX - dragData.current.x);
        }
        if (resizeData.current.direction.includes("bottom")) {
          newHeight = Math.max(150, clientY - dragData.current.y);
        }
        if (resizeData.current.direction.includes("left")) {
          newWidth = Math.max(200, width - (clientX - dragData.current.x));
          dragData.current.x = clientX;
        }
        if (resizeData.current.direction.includes("top")) {
          newHeight = Math.max(150, height - (clientY - dragData.current.y));
          dragData.current.y = clientY;
        }

        resizeData.current.width = newWidth;
        resizeData.current.height = newHeight;

        if (ventanaRef.current) {
          ventanaRef.current.style.width = `${newWidth}px`;
          ventanaRef.current.style.height = `${newHeight}px`;
        }
      }
    });
  };

  const stopActions = () => {
    dragData.current.dragging = false;
    resizeData.current.resizing = false;
  };

  // Iniciar redimensionado
  const startResize = (direction) => (e) => {
    e.stopPropagation();
    resizeData.current.resizing = true;
    resizeData.current.direction = direction;
  };

  return (
    <div className="contentResumen"
      onMouseMove={handleMove} onMouseUp={stopActions}
      onTouchMove={handleMove} onTouchEnd={stopActions}
    >
      <button className="boton-flotante" onClick={() => setShowInfo(!showInfo)}>
        <FontAwesomeIcon icon={faClipboardList} /> Ver Resumen
      </button>
      {showInfo && (
        <div
          className="ventana-flotante"
          ref={ventanaRef}
          style={{ left: "100px", top: "100px", width: "320px", height: "200px", transform: "translate(100px, 100px)" }}
        >
          <div
            className="barra-titulo"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            Resumen
            <button className="boton-cerrar" onClick={() => setShowInfo(false)}>✕</button>
          </div>
          <div className="contenido_content">
            <div className="contenido">
              {children}
            </div>
          </div>

          {/* Controles de redimensionado */}
          <div className="resizer right" onMouseDown={startResize("right")} onTouchStart={startResize("right")}></div>
          <div className="resizer bottom" onMouseDown={startResize("bottom")} onTouchStart={startResize("bottom")}></div>
          <div className="resizer bottom-right" onMouseDown={startResize("bottom right")} onTouchStart={startResize("bottom right")}></div>
          <div className="resizer left" onMouseDown={startResize("left")} onTouchStart={startResize("left")}></div>
          <div className="resizer top" onMouseDown={startResize("top")} onTouchStart={startResize("top")}></div>
          <div className="resizer top-left" onMouseDown={startResize("top left")} onTouchStart={startResize("top left")}></div>
          <div className="resizer top-right" onMouseDown={startResize("top right")} onTouchStart={startResize("top right")}></div>
          <div className="resizer bottom-left" onMouseDown={startResize("bottom left")} onTouchStart={startResize("bottom left")}></div>
        </div>
      )}
    </div>
  );
}

export default Resumen;
