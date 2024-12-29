"use client";
import { useState } from "react";
import "./web.css";

function Web({ children }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    function toggleFullScreen() {
        setIsFullScreen(!isFullScreen);
    }

    return (
        <div className={`web-container ${isFullScreen ? "full-screen" : ""}`}>
            <div className="web-content">
                {children}
            </div>
            <button className="web-fullscreen-btn" onClick={toggleFullScreen}>
                {isFullScreen ? "Salir de pantalla completa" : "Ver en pantalla completa"}
            </button>
        </div>
    );
}

export default Web;