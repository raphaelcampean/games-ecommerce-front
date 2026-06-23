import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-5">
      <Link to="/" >
        <h1 className="text-xl font-bold mb-8">GamesStore</h1>
      </Link>
      <p className="text-gray-400 text-sm mb-6">
        Bem-vindo ao painel administrativo
      </p>

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
  )
}
