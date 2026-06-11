import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 mb-10">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-5">
        <h1 className="text-xl font-bold mb-8">Admin Panel</h1>

        <nav className="flex flex-col gap-4 text-sm">
          <a href="#" className="hover:bg-gray-800 p-2 rounded">
            📊 Dashboard
          </a>
          <Link to="/admin/produtos" className="hover:bg-gray-800 p-2 rounded">
            📦 Produtos
          </Link>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">
            👤 Usuários
          </a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">
            🛒 Pedidos
          </a>
          <a href="#" className="hover:bg-gray-800 p-2 rounded">
            ⚙️ Configurações
          </a>
        </nav>

        <div className="mt-auto text-xs text-gray-400">
          v1.0.0
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Dashboard</h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Olá, Admin</span>
            <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
              Sair
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 space-y-6">

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500 text-sm">Usuários</p>
              <h3 className="text-2xl font-bold">1.245</h3>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500 text-sm">Produtos</p>
              <h3 className="text-2xl font-bold">320</h3>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500 text-sm">Pedidos</p>
              <h3 className="text-2xl font-bold">87</h3>
            </div>

            <div className="bg-white p-5 rounded shadow">
              <p className="text-gray-500 text-sm">Receita</p>
              <h3 className="text-2xl font-bold">R$ 12.450</h3>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-2 bg-white p-5 rounded shadow">
              <h4 className="font-semibold mb-3">Atividade recente</h4>

              <div className="space-y-3 text-sm text-gray-600">
                <p>• Novo usuário cadastrado</p>
                <p>• Produto atualizado</p>
                <p>• Pedido #1023 aprovado</p>
                <p>• Estoque ajustado</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white p-5 rounded shadow">
              <h4 className="font-semibold mb-3">Status do sistema</h4>

              <div className="space-y-2 text-sm">
                <p>🟢 API: Online</p>
                <p>🟢 Banco: OK</p>
                <p>🟡 Cache: Médio uso</p>
                <p>🟢 Auth: OK</p>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}