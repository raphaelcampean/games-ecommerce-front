import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const carregarDados = () => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "The Witcher 3", price: 59.9, stockQuantity: 12, description: "Um RPG épico..." },
        { id: 2, name: "Sekiro", price: 99.9, stockQuantity: 5, description: "Desafie sua habilidade..." },
        { id: 3, name: "Resident Evil 4", price: 79.9, stockQuantity: 8, description: "Sobrevivência clássica..." }
      ]);
    }, 500);
  };

  carregarDados();
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
                <div key={product.id} className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl  hover:scale-105 hover:border-purple-400/40 transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl"></div>
                  <div className="relative h-40 w-full bg-black/40 rounded-2xl mb-4 flex items-center justify-center border border-white/10 overflow-hidden">
                    <span className="text-white/10 text-5xl font-black tracking-widest">
                      GAME
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {product.name}
                  </h2>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-black text-cyan-400 drop-shadow">
                      R$ {product.price}
                    </span>

                    <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/30">
                      {product.stockQuantity} em estoque
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 rounded-xl 
                  hover:opacity-90 transition-all shadow-lg shadow-purple-900/30">
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