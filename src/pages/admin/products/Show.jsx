import React from "react";
import { Link } from "react-router-dom";

export default function ProductShow() {
  const product = {
    id: 1,
    name: "Elden Ring",
    description:
      "Um RPG de ação em mundo aberto desenvolvido pela FromSoftware.",
    platform: "PC / PS5 / Xbox",
    price: 249.9,
    stock: 5,
    status: "active",
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f",
  };

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500">
            Detalhes do produto #{product.id}
          </p>
        </div>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Editar
        </button>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* IMAGE */}
        <div className="bg-white rounded shadow overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* INFO */}
        <div className="lg:col-span-2 bg-white p-5 rounded shadow space-y-4">

          <div>
            <h2 className="text-gray-500 text-sm">Descrição</h2>
            <p className="text-gray-800">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">

            <div>
              <p className="text-gray-500">Plataforma</p>
              <p className="font-medium">{product.platform}</p>
            </div>

            <div>
              <p className="text-gray-500">Preço</p>
              <p className="font-medium">
                R$ {product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Estoque</p>
              <p className="font-medium">{product.stock}</p>
            </div>

            <div>
              <p className="text-gray-500">Status</p>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  product.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.status === "active"
                  ? "Ativo"
                  : "Inativo"}
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}