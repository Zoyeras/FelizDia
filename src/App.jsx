import React from 'react';
import './App.css';

function App() {
  return (
    <div className="contenedor">
      <svg
        className="corazon-svg"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="heartClip">
            {/* Corregimos el path para mejor forma */}
            <path 
              d="M200 85.4 
                 C100 0 0 100 200 314.6 
                 C400 100 300 0 200 85.4 Z"
              fill="none"
              stroke="#000"
            />
          </clipPath>
        </defs>
        
        {/* Fondo temporal para ver forma */}
        <rect width="100%" height="100%" fill="#fff0f3" />
        
        {/* Imagen con ajustes */}
        <image
          href="/Imagen de mamá.jpg"
          width="400"
          height="400"
          x="0"
          y="0"
          clipPath="url(#heartClip)"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
      <h1 className="mensaje">Te quiero mucho mamá</h1>
    </div>
  );
}
export default App;
