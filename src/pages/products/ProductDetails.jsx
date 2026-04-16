import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${slug}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <p className="text-white text-xl animate-pulse">Carregando detalhes do game...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
        <h2 className="text-2xl font-bold mb-4">Game não encontrado!</h2>
        <Link to="/" className="text-purple-400 hover:underline">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] p-6 lg:p-20 text-white mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="h-[400px] w-full flex items-center justify-center bg-gray-800/50">
             <span className="text-white/10 text-8xl font-black italic select-none">GAME</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition-colors w-fit">
             ← Voltar para o catálogo
          </Link>

          <h1 className="text-5xl font-black tracking-tight">{product.name}</h1>
          
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-cyan-400">R$ {product.price}</span>
            <span className="text-[10px] leading-3 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/30 uppercase tracking-widest font-bold">
              {product.stockQuantity} em estoque
            </span>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-3">Sobre o Jogo</h3>
            <p className="text-gray-300 leading-relaxed text-lg italic font-light">
              "{product.description}"
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-95 uppercase tracking-tighter text-xl">
            Adicionar ao Carrinho
          </button>

          <div className="mt-4 flex gap-8 text-sm text-gray-500 font-medium border-t border-white/5 pt-6">
            <div className="flex flex-col">
              <span>Plataforma</span>
              <span className="text-white">PC / PS5 / Xbox</span>
            </div>
            <div className="flex flex-col">
              <span>Gênero</span>
              <span className="text-white">Ação / RPG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;