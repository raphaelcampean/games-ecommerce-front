import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const loadProducts = () => {
    api.get('/products').then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.error("Erro ao carregar produtos:", error);
    });
  };

    loadProducts();
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-6 rounded-lg shadow-2xl border border-gray-700 mt-10 mb-10">
      <section className="text-center px-6 mt-10 mb-16">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Os melhores games em um só lugar
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto">
          Explore nossa coleção de jogos e monte sua biblioteca perfeita.
        </p>
      </section>

      <div className="flex justify-center px-6">
        <div className="w-full max-w-6xl">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((product) => (
                <div key={product.id} className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl hover:scale-105 hover:border-purple-400/40 transition-all duration-300 group overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl"></div>
                  <div className="relative h-40 w-full bg-black/40 rounded-2xl mb-4 flex items-center justify-center border border-white/10 overflow-hidden">
                    <span className="text-white/10 text-5xl font-black tracking-widest">
                      GAME
                    </span>
                  </div>

                  <Link to={`/produtos/${product.slug}`} className="relative">
                    <h2 className="text-xl font-bold text-white mb-5 group-hover:text-purple-300 transition-colors">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="flex-col items-center mb-4">
                    <div className="flex justify-between">
                      <span className="text-3xl font-black text-cyan-400 drop-shadow">
                        R$ {product.price}
                      </span>

                      <span className="text-[10px] leading-3 bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-400/30 font-medium inline-flex items-center justify-center min-w-[70px]">
                        {product.stockQuantity} em estoque
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6 line-clamp-2 mt-3">
                      {product.description}
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-purple-900/30 mt-auto">
                    Adicionar ao Carrinho
                  </button>
                </div>
              ))}

            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-center border border-white/10">
              <p className="text-white text-xl animate-pulse">
                Carregando estoque de jogos...
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

export default Home;