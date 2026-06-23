import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Painel Administrativo
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Olá, Admin
            </span>

            <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
              Sair
            </button>
          </div>
        </header>


        <main className="flex-1 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;