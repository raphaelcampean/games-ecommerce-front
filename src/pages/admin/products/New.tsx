import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  image: string;
  status?: "active" | "inactive";
  platform?: Platform;
  category?: Category;
}

interface Platform {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

export default function ProductNew() {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    stockQuantity: 0,
    description: "",
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" || name === "stockQuantity" ? parseFloat(value) : value,
    }));
  }

  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Novo Produto
        </h1>
        <p className="text-sm text-gray-500">
          Cadastre um novo jogo no catálogo
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow space-y-5">

        <div>
          <label className="text-sm text-gray-600">Nome</label>
          <input
            type="text"
            placeholder="Ex: Elden Ring"
            className="w-full border rounded px-3 py-2"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Descrição</label>
          <textarea
            placeholder="Descrição do produto..."
            className="w-full border rounded px-3 py-2" rows={4}
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>
            <label className="text-sm text-gray-600">Plataforma</label>
            <input type="text" placeholder="PC / PS5 / Xbox" className="w-full border rounded px-3 py-2"
              name="platform"
              value={platform?.name || ""}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Preço</label>
            <input
              type="number"
              placeholder="199.90"
              className="w-full border rounded px-3 py-2"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Estoque</label>
            <input
              type="number"
              placeholder="10"
              className="w-full border rounded px-3 py-2"
              name="stockQuantity"
              value={product.stockQuantity}
              onChange={handleInputChange}
            />
          </div>

        </div>

        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select className="w-full border rounded px-3 py-2" name="status" value={product.status} onChange={handleInputChange}>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600">Imagem (URL)</label>
          <input
            type="text"
            placeholder="https://..."
            className="w-full border rounded px-3 py-2"
            name="image"
            value={product.image}
            onChange={handleInputChange}
          />
        </div>

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