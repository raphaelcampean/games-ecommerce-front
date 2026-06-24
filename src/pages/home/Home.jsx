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
        handleProducts(); // Chama a função handleProducts em caso de erro
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  function handleProducts(){
    setProducts(
      [
        {
          id: 1,
          name: "Sekiro: Shadows Die Twice",
          price: 59.99,
          image: "https://imgs.search.brave.com/C5GVVT4YFt1ZbxtLyKNqjFRd_aGnKUV14j7fr6FM-XM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGVh/bXZlcmRlLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/MC9wcm9kdWN0c182/OGQzZDZkNzE1NTUy/NDRlMzFmMzg2MTAt/NzY2eDEwMjQud2Vi/cA",
        },
        {
          id: 2,
          name: "The Witcher 3: Wild Hunt",
          price: 49.99,
          image: "https://imgs.search.brave.com/HpKFwwUU9BqssGeKPk9miAJNVezGUTWE2Q4QT2P9fz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmV4dXNtb2Rz/LmNvbS9pbWFnZXMv/Z2FtZXMvdjIvOTUy/L3RpbGUuanBn",
        },
        {
          id: 3,
          name: "Cyberpunk 2077",
          price: 39.99,
          image: "https://imgs.search.brave.com/igRK-8pg8XfT9N4imsmTRodCmcU7-tiPdbd186sWR3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuYWthbWFpLnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzEwOTE1/MDAvZTkwNDdkOGVj/NDdhZTNkOTRiYjhi/NDY0ZmIwZmM5ZTk5/NzJiNGFjNy9oZWFk/ZXIuanBnP3Q9MTc2/OTY5MDM3Nw",
        },
      ]
    );
  }

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