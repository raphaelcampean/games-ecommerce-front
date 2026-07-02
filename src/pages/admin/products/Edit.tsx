import React from "react";
import { Link } from "react-router-dom";

export default function ProductEdit() {
  const product = {
    id: 1,
    name: "Elden Ring",
    description:
      "Um RPG de ação em mundo aberto desenvolvido pela FromSoftware.",
    platform: "PC",
    price: 249.9,
    stock: 5,
    status: "active",
  };

  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Editar Produto
        </h1>
        <p className="text-sm text-gray-500">
          Atualize as informações do produto
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-4">

        <div>
          <label className="text-sm text-gray-600">Nome</label>
          <input
            type="text"
            defaultValue={product.name}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Descrição</label>
          <textarea
            defaultValue={product.description}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label className="text-sm text-gray-600">Plataforma</label>
            <input
              type="text"
              defaultValue={product.platform}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Preço</label>
            <input
              type="number"
              defaultValue={product.price}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Estoque</label>
            <input
              type="number"
              defaultValue={product.stock}
              className="w-full border rounded px-3 py-2"
            />
          </div>

        </div>

        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select
            defaultValue={product.status}
            className="w-full border rounded px-3 py-2"
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Cancelar
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Salvar
          </button>
        </div>

      </div>
    </div>
  );
}