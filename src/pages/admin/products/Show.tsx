import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

interface Product {
    id: string,
    name: string,
    platforms: Platform[],
    price: number,
    stockQuantity: number,
    status: boolean,
    description: string,
    imageUrl: string,
    slug: string,
    genres: Genre[]
}

interface Genre {
  id: string,
  name: string;
}

interface Platform {
  id: string,
  name: string;
}

export default function ProductShow() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({
    id: "",
    name: "",
    platforms: [],
    price: 0,
    stockQuantity: 0,
    status: false,
    description: "",
    imageUrl: "",
    slug: "",
    genres: []
  });

  useEffect(() => {
    async function loadProduct() {
      console.log('Carregando produto com ID:', id);

      try {
        const response = await api.get(`/admin/produtos/${id}`);
        setProduct(response.data);
        console.log('Produto carregado:', response.data);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
      }
    }

    loadProduct();
  }, [id]);

  return (
    <div className="p-6 space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500">
            Detalhes do produto #{product.id}
          </p>
        </div>

        <Link to="/admin/produtos">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Voltar
          </button>
        </Link>

        <Link to={`/admin/produtos/${product.id}/editar`}>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Editar
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded shadow overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="lg:col-span-2 bg-white p-5 rounded shadow space-y-4">

          <div>
            <h2 className="text-gray-500 text-sm">Descrição</h2>
            <p className="text-gray-800">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">

            <div>
              <p className="text-gray-500">Plataformas</p>
              <p className="font-medium">{product.platforms.map((platform) => platform.name).join(", ")}</p>
            </div>

            <div>
              <p className="text-gray-500">Gêneros</p>
              <p className="font-medium">{product.genres.map((genre) => genre.name).join(", ")}</p>
            </div>

            <div>
              <p className="text-gray-500">Preço</p>
              <p className="font-medium">
                R$ {product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Estoque</p>
              <p className="font-medium">{product.stockQuantity}</p>
            </div>

            <div>
              <p className="text-gray-500">Status</p>
              <span
                className={`px-2 py-1 text-xs rounded ${
                  product.status === true
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.status === true
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