import { useEffect, useState } from "react";
import api from "../../services/api";
import Products from "../../components/Products"; 

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-6 rounded-lg shadow-2xl border border-gray-700">
      <section className="text-center px-6 mt-10 mb-16">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Os melhores games em um só lugar
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto">
          Explore nossa coleção de jogos e monte sua biblioteca perfeita.
        </p>
      </section>

      <Products products={products} loading={loading} />
    </div>
  );
}

export default Home;