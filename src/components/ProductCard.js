export default function ProductCard({ nome, descricao, preco, imagem }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition-transform transform hover:scale-105 w-full max-w-xs flex flex-col">
        
        {/* Caixa cinza com imagem + descrição */}
        <div className="bg-gray-100 p-4 flex flex-col items-center">
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden rounded">
            <img
              src={imagem}
              alt={nome}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="mt-4 text-gray-700 text-center">{descricao}</p>
        </div>
  
        {/* Nome e preço */}
        <div className="p-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{nome}</h2>
          <p className="text-green-600 font-bold text-lg">R$ {preco}</p>
        </div>
      </div>
    );
  }
  
  