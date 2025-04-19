import React from "react";
import ProductCard from "./ProductCard";

const produtos = [
  {
    nome: "Camiseta Branca",
    descricao: "Camiseta 100% algodão, confortável e estilosa.",
    preco: "49.90",
    imagem: "/camiseta.jpg",
  },
  {
    nome: "Tênis Esportivo",
    descricao: "Ideal para corridas e caminhadas longas.",
    preco: "199.90",
    imagem: "/tenis.jpg",
  },
  {
    nome: "Boné Preto",
    descricao: "Boné com ajuste traseiro e tecido respirável.",
    preco: "39.90",
    imagem: "/bone.jpg",
  },
  {
    nome: "Jaqueta Jeans",
    descricao: "Clássica jaqueta jeans com ótimo caimento.",
    preco: "149.90",
    imagem: "/jaqueta.jpg",
  },
  {
    nome: "Relógio Digital",
    descricao: "Resistente à água, com alarme e cronômetro.",
    preco: "129.90",
    imagem: "/relogio.jpg",
  },
  {
    nome: "Óculos de Sol",
    descricao: "Proteção UV 400 e design moderno.",
    preco: "89.90",
    imagem: "/oculos.jpg",
  },
  {
    nome: "Mochila Escolar",
    descricao: "Com divisórias e espaço para notebook.",
    preco: "99.90",
    imagem: "/mochila.jpg",
  },
  {
    nome: "bolsa",
    descricao: "bolsa.",
    preco: "120.90",
    imagem: "/bolsa.jpg",
  },
  
  {
    nome: "Calça Jeans",
    descricao: "Slim fit com elastano, muito confortável.",
    preco: "119.90",
    imagem: "/calca.jpg",
  },
  {
    nome: "Blusa de Moletom",
    descricao: "Com capuz e bolsos frontais.",
    preco: "109.90",
    imagem: "/moletom.jpg",
  },
  {
    nome: "lavas",
    descricao: "lavas.",
    preco: "60.90",
    imagem: "/luvas.jpg",
  },
  {
    nome: "Meias Coloridas",
    descricao: "Pacote com 3 pares, algodão macio.",
    preco: "29.90",
    imagem: "/meias.jpg",
  },
  
];

export default function ProductList() {
  return (
    <div className="product-container">
      <div className="product-grid">
        {produtos.map((produto, index) => (
          <ProductCard
            key={index}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>
  );
}
