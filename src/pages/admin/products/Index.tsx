import api from "../../../services/api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
interface Product {
  id: number;
  name: string;
  platform: string;
  price: number;
  stock: number;
  status: "active" | "inactive";
  slug: string;
}

export default function ProductsIndex() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/produtos');
        setProducts(response.data.content);
        console.log('Produtos carregados:', response.data.content);
      } catch (error) {
        handleProducts();
        console.error('Erro ao carregar produtos:', error);
      }
    }

    loadProducts();
  }, []);

  function handleProducts(){
    setProducts(
      [
        {
        id: 1,
        name: "The Last of Us Part II",
        platform: "PS5",
        price: 199.9,
        stock: 12,
        status: "active",
        slug: "the-last-of-us-part-ii"
      },
      {
        id: 2,
        name: "Elden Ring",
        platform: "PC",
        price: 249.9,
        stock: 5,
        status: "active",
        slug: "elden-ring"
      },
      {
        id: 3,
        name: "Zelda: Breath of the Wild",
        platform: "Switch",
        price: 299.9,
        stock: 0,
        status: "inactive",
        slug: "zelda-breath-of-the-wild"
      },
    ]
  )}

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Produtos</h1>
          <p className="text-sm text-gray-500">
            Gerencie seus produtos cadastrados
          </p>
        </div>

        <Link to="/admin/produtos/novo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Novo Produto
        </Link>
      </div>

      <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row gap-3 md:items-center md:justify-between">

        <input
          type="text"
          placeholder="Buscar produto..."
          className="border rounded px-3 py-2 w-full md:w-1/3"
        />

        <div className="flex gap-2">
          <select className="border rounded px-3 py-2">
            <option>Todos</option>
            <option>Ativos</option>
            <option>Inativos</option>
          </select>

          <select className="border rounded px-3 py-2">
            <option>Ordenar</option>
            <option>Mais recentes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">

        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nome</th>
              <th className="p-3">Preço</th>
              <th className="p-3">Estoque</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Ações</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3">{product.id}</td>

                <td className="p-3 font-medium text-gray-800">
                  {product.name}
                </td>

                <td className="p-3">
                  R$ {product.price.toLocaleString()}
                </td>

                <td className="p-3">
                  {product.stock > 0 ? product.stock : "Esgotado"}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      product.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.status === "active" ? "Ativo" : "Inativo"}
                  </span>
                </td>

                <td className="p-3 text-right space-x-2">
                  <Link to={`/admin/produtos/${product.slug}`} className="text-blue-600 hover:underline">
                    Ver
                  </Link>
                  <Link to={`/admin/produtos/${product.id}/editar`} className="text-yellow-600 hover:underline">
                    Editar
                  </Link>
                  <Link to={`/admin/produtos/${product.id}/excluir`} className="text-red-600 hover:underline">
                    Excluir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}