import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectOptions from "./SelectOptions";
import api from "../services/api";
import { uploadImage } from "../api/cloudinary";
import toast from "react-hot-toast";
import axios from "axios";

interface Product {
  id?: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  imageUrl: string;
  status?: "active" | "inactive";
  platforms: Platform[];
  genres: Genre[];
  developer: Developer;
}

interface Platform {
  id: string;
  name: string;
}

interface Genre {
  id: string;
  name: string;
}

interface Developer {
  id: string;
  name: string;
}

interface ProductFormProps {
  mode: "new" | "edit";
  initialProduct?: Product;
}

const emptyProduct: Product = {
  name: "",
  price: 0,
  stockQuantity: 0,
  description: "",
  imageUrl: "",
  platforms: [],
  genres: [],
  developer: {
    id: "",
    name: "",
  },
  status: "active",
};

export default function ProductForm({ mode, initialProduct }: ProductFormProps) {
  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [product, setProduct] = useState<Product>(initialProduct ?? emptyProduct);

  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    async function loadOptions() {
      const [genresResponse, platformsResponse, developersResponse] = await Promise.all([
        api.get("/generos"),
        api.get("/plataformas"),
        api.get("/desenvolvedoras"),
      ]);

      setGenres(genresResponse.data.content);
      setPlatforms(platformsResponse.data.content);
      setDevelopers(developersResponse.data.content);
    }

    loadOptions();
  }, []);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stockQuantity" ? Number(value) : value,
    }));
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageFile(file);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let imageUrl = product.imageUrl;

    if (imageFile) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
        return;
      }
    }

    const productToSend: Product = {
      ...product,
      imageUrl,
    };

    setProduct(productToSend);

    await saveProduct(productToSend);
  }

  async function saveProduct(product: Product) {
    console.log("Produto a ser enviado:", product);
    console.log("JSON do produto:", JSON.stringify(product, null, 2));

    try {
      if (mode === "new") {
        await api.post("/admin/produtos", product);

        toast.success("Produto criado com sucesso!");
      } else {
        await api.put(`/admin/produtos/${product.id}`, product);

        toast.success("Produto atualizado com sucesso!");
      }

      navigate("/admin/produtos");
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message || "Erro ao salvar o produto.";
        toast.error(errorMessage);
      } else {
        toast.error("Erro ao salvar o produto.");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-5">
      <div>
        <label className="text-sm text-gray-600">Nome</label>

        <input
          name="name"
          value={product.name}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Descrição</label>

        <textarea
          name="description"
          rows={4}
          value={product.description}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm text-gray-600">Plataformas</label>

          <SelectOptions<Platform>
            isMulti
            options={platforms}
            value={product.platforms}
            getOptionValue={(platform) => platform.id.toString()}
            getOptionLabel={(platform) => platform.name}
            onChange={(selected) =>
              setProduct((prev) => ({
                ...prev,
                platforms: selected as Platform[],
              }))
            }
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Gêneros</label>

          <SelectOptions<Genre>
            isMulti
            options={genres}
            value={product.genres}
            getOptionValue={(genre) => genre.id.toString()}
            getOptionLabel={(genre) => genre.name}
            onChange={(selected) =>
              setProduct((prev) => ({
                ...prev,
                genres: selected as Genre[],
              }))
            }
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Desenvolvedora</label>

            <select
              value={product.developer.id}
              onChange={(e) => {
                const developer = developers.find(
                  (d) => d.id.toString() === e.target.value
                );

                if (developer) {
                  setProduct((prev) => ({
                    ...prev,
                    developer,
                  }));
                }
              }}
              className="w-full border rounded px-3 py-2"
            >
            <option value="">Selecione uma desenvolvedora</option>

            {developers.map((developer) => (
              <option key={developer.id} value={developer.id}>
                {developer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600">Preço</label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Estoque</label>

          <input
            type="number"
            name="stockQuantity"
            value={product.stockQuantity}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-600">Status</label>

        <select
          name="status"
          value={product.status}
          onChange={handleInputChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="active">Ativo</option>
          <option value="inactive">Inativo</option>
        </select>
      </div>

      <label className="cursor-pointer">
        <p className="mt-8">Imagem</p>
        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50">
          Clique para enviar uma imagem
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      <div className="flex justify-end gap-3">
        <Link to="/admin/produtos">
          <button type="button" className="rounded border px-4 py-2">
            Cancelar
          </button>
        </Link>

        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
          {mode === "new" ? "Criar Produto" : "Salvar Alterações"}
        </button>
      </div>
    </form>
  );
}