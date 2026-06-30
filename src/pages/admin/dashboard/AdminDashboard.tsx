export default function AdminDashboard() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">
            Usuários
          </p>
          <h3 className="text-2xl font-bold">
            1.245
          </h3>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">
            Produtos
          </p>
          <h3 className="text-2xl font-bold">
            320
          </h3>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">
            Pedidos
          </p>
          <h3 className="text-2xl font-bold">
            87
          </h3>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p className="text-gray-500 text-sm">
            Receita
          </p>
          <h3 className="text-2xl font-bold">
            R$ 12.450
          </h3>
        </div>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white p-5 rounded shadow">
          <h4 className="font-semibold mb-3">
            Atividade recente
          </h4>

          <div className="space-y-3 text-sm text-gray-600">
            <p>• Novo usuário cadastrado</p>
            <p>• Produto atualizado</p>
            <p>• Pedido aprovado</p>
          </div>
        </div>


        <div className="bg-white p-5 rounded shadow">
          <h4 className="font-semibold mb-3">
            Status do sistema
          </h4>

          <p>🟢 API: Online</p>
          <p>🟢 Banco: OK</p>
          <p>🟡 Cache: Médio</p>
        </div>

      </div>

    </div>
  );
}