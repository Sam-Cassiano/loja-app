import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-lightblue min-h-screen">
      <header className="w-full flex justify-center items-center py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
  <h1 className="text-white text-5xl font-extrabold text-center">Catálogo de Produtos</h1>
</header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
