"use client";

import { useState, useRef, useEffect } from "react";
import "./consola.css";

const Consola = ({ language, result, codigo=()=>{}, colorResult = "" }) => {
  const [logs, setLogs] = useState(["Esperando compilación..."]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [output, setOutput] = useState(null);
  const consoleRef = useRef(null);
  
  useEffect(() => {
    // Hacer scroll automático cuando hay nuevas líneas
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs, output]);


  
  const simulateCompilation = () => {
    setLogs([]);
    setOutput(null);
    setIsCompiling(true);

    const steps = [
      `Compilando código en ${language}...`,
      "Verificando dependencias...",
      "Optimizando archivos...",
      "Ejecutando el código...",
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prevLogs) => [...prevLogs, step]);

        if (index === steps.length - 1) {
          const resultado = codigo();  // <- Ejecutamos la función

          // Si `result` está definido, lo usamos. Si no, usamos el retorno de `codigo()`, o mostramos un mensaje por defecto.
          setOutput(result !== undefined ? result : resultado !== undefined ? resultado : "Código ejecutado sin retorno");
          setIsCompiling(false);
        }
      }, index * 1000);
    });
  };



  return (
    <div className="console-container">
      <div className="console-header">
        <span>Consola de {language}</span>
        <button onClick={simulateCompilation} disabled={isCompiling}>
          {isCompiling ? "Compilando..." : "Compilar"}
        </button>
      </div>

      <div className="console-output" ref={consoleRef}>
        {logs.length === 0 && <div className="console-placeholder">Esperando compilación...</div>}
        {logs.map((log, index) => (
          <div key={index} className="console-line">
            {log}
          </div>
        ))}
        {output && <pre className={`console-result`} style={{color: colorResult}}>{output}</pre>}
      </div>
    </div>
  );
};

export default Consola;