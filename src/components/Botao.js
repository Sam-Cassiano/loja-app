// components/Botao.js
import React from "react";
import "../App.css"; // Certifique-se de importar o CSS aqui

export default function Botao({ onClick, children, tipo = "padrao" }) {
  return (
    <button onClick={onClick} className={`botao botao-${tipo}`}>
      {children}
    </button>
  );
}
