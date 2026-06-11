import React from "react";
import { Link } from "react-router-dom";

export default function ProductNew() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Novo Produto
        </h1>
        <p className="text-sm text-gray-500">
          Cadastre um novo jogo no catálogo
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white p-6 rounded shadow space-y-5">

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600">Nome</label>
          <input
            type="text"
            placeholder="Ex: Elden Ring"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-sm text-gray-600">Descrição</label>
          <textarea
            placeholder="Descrição do produto..."
            className="w-full border rounded px-3 py-2"
            rows="4"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label className="text-sm text-gray-600">Plataforma</label>
            <input
              type="text"
              placeholder="PC / PS5 / Xbox"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Preço</label>
            <input
              type="number"
              placeholder="199.90"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Estoque</label>
            <input
              type="number"
              placeholder="10"
              className="w-full border rounded px-3 py-2"
            />
          </div>

        </div>

        {/* STATUS */}
        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select className="w-full border rounded px-3 py-2">
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>

        {/* IMAGE */}
        <div>
          <label className="text-sm text-gray-600">Imagem (URL)</label>
          <input
            type="text"
            placeholder="https://..."
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">

          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Cancelar
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Criar Produto
          </button>

        </div>

      </div>
    </div>
  );
}