import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

interface Product {
  id: string;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  slug: string;
  imageUrl: string;
  genres: Genre[];
  platforms: Platform[];
  developerName: string;
}

interface Genre {
  id: string,
  name: string;
}

interface Platform {
  id: string,
  name: string;
}

function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get<Product>(`/produtos/${slug}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground text-xl font-mono tracking-widest animate-pulse border-b-2 border-primary pb-2">
          REQUISITANDO ARSENAL...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
        <div className="border border-primary bg-surface p-8 max-w-md text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-tight">
            Lâmina Não Encontrada!
          </h2>

          <Link to="/" className="text-foreground/60 hover:text-primary underline transition-colors font-mono text-sm">
            Voltar para a Base
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 lg:p-20 text-foreground border border-border rounded-lg shadow-2xl m-2 md:m-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <div className="relative bg-surface border border-border p-2 shadow-xl group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>

          <div className="h-[450px] w-full bg-black flex items-center justify-center border-b-4 border-primary overflow-hidden">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <span className="text-foreground/5 text-7xl font-black italic select-none tracking-tighter">
                BLADE
              </span>
            )}
          </div>
        </div>


        <div className="flex flex-col gap-6">

          <Link to="/" className="text-xs uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors w-fit font-mono">
            ← Voltar ao arsenal
          </Link>


          <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase border-b border-border pb-4">
            {product.name}
          </h1>


          <div className="flex items-center justify-between bg-surface border border-border p-4">
            <span className="text-4xl font-black text-foreground font-mono">
              R$ {product.price.toFixed(2)}
            </span>

            <span className="text-[10px] uppercase tracking-widest text-primary border border-primary px-3 py-1 font-bold font-mono">
              {product.stockQuantity} em estoque
            </span>
          </div>


          <div className="bg-surface p-6 border-l-4 border-primary border-y border-r border-border">
            <h3 className="text-primary uppercase text-xs font-bold tracking-widest mb-3 font-mono">
              // Detalhes da Missão
            </h3>

            <p className="text-foreground/80 leading-relaxed font-sans text-base">
              {product.description}
            </p>
          </div>


          <button className="w-full bg-primary text-foreground font-black py-5 hover:bg-primaryHover transition-all duration-300 uppercase tracking-wider font-mono text-lg shadow-lg active:scale-[0.99]">
            Sacar Lâmina (Adicionar)
          </button>


          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono border-t border-border pt-6">

            <div className="flex flex-col gap-1 bg-surface p-3 border border-border">
              <span className="text-foreground/40 uppercase tracking-wider text-[10px]">// Plataforma</span>

              <span className="text-foreground font-bold uppercase">
                {product.platforms.map((platform) => platform.name).join(" / ")}
              </span>
            </div>


            <div className="flex flex-col gap-1 bg-surface p-3 border border-border">
              <span className="text-foreground/40 uppercase tracking-wider text-[10px]">// Gênero</span>

              <span className="text-foreground font-bold uppercase">
                {product.genres.map((genre) => genre.name).join(" / ")}
              </span>
            </div>


            <div className="flex flex-col gap-1 bg-surface p-3 border border-border">
              <span className="text-foreground/40 uppercase tracking-wider text-[10px]">// Desenvolvedor</span>

              <span className="text-foreground font-bold uppercase">
                {product.developerName || "Não Especificado"}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;