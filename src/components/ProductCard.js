import React, { useState } from "react";

export default function ProductCard({ nome, descricao, preco, imagem }) {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs transition-all">
      <div className="w-full h-60 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={imagem}
          alt={nome}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">{nome}</h2>
        <p className="text-gray-600 mb-2 text-sm">{descricao}</p>
        <p className="font-bold text-base text-green-600">R$ {preco}</p>

        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={toggleInfo}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            {mostrarInfo ? "Esconder informações" : "Mais informações"}
          </button>
        </div>

        {mostrarInfo && (
          <div className="mt-4 bg-white border border-gray-300 p-3 rounded shadow-inner text-sm text-gray-700 transition-all">
            <p>Este produto é ideal para quem busca conforto, estilo e qualidade. Pode ser usado em diversas ocasiões do dia a dia.</p>
            {/* Se quiser, você pode personalizar esse texto para cada produto futuramente */}
          </div>
        )}
      </div>
    </div>
  );
}
