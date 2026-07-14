import { useEffect, useState } from "react";
import api from "../../services/api";
import Products from "../../components/Products"; 

interface Product {
  id: number;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  slug: string;
  imageUrl: string;
}


function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/produtos');
        response.data.content.length === 0 ? handleProducts() : setProducts(response.data.content);
        console.log('Produtos carregados:', response.data.content);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        handleProducts();
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
          stockQuantity: 10,
          description: "Jogo de ação e aventura desenvolvido pela FromSoftware.",
          slug: "sekiro-shadows-die-twice",
          imageUrl: "https://imgs.search.brave.com/C5GVVT4YFt1ZbxtLyKNqjFRd_aGnKUV14j7fr6FM-XM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGVh/bXZlcmRlLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8x/MC9wcm9kdWN0c182/OGQzZDZkNzE1NTUy/NDRlMzFmMzg2MTAt/NzY2eDEwMjQud2Vi/cA",
        },
        {
          id: 2,
          name: "The Witcher 3: Wild Hunt",
          price: 49.99,
          stockQuantity: 15,
          description: "Jogo de RPG de ação desenvolvido pela CD Projekt RED.",
          slug: "the-witcher-3-wild-hunt",
          imageUrl: "https://imgs.search.brave.com/HpKFwwUU9BqssGeKPk9miAJNVezGUTWE2Q4QT2P9fz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmV4dXNtb2Rz/LmNvbS9pbWFnZXMv/Z2FtZXMvdjIvOTUy/L3RpbGUuanBn",
        },
        {
          id: 3,
          name: "Cyberpunk 2077",
          price: 39.99,
          stockQuantity: 20,
          description: "Jogo de RPG de ação desenvolvido pela CD Projekt RED.",
          slug: "cyberpunk-2077",
          imageUrl: "https://imgs.search.brave.com/igRK-8pg8XfT9N4imsmTRodCmcU7-tiPdbd186sWR3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuYWthbWFpLnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzEwOTE1/MDAvZTkwNDdkOGVj/NDdhZTNkOTRiYjhi/NDY0ZmIwZmM5ZTk5/NzJiNGFjNy9oZWFk/ZXIuanBnP3Q9MTc2/OTY5MDM3Nw",
        },
      ]
    );
  }

  return (
    <div className="min-h-screen bg-background py-10 px-6 rounded-lg shadow-2xl border border-border">
      <section className="text-center px-6 mt-10 mb-16">
        <h2 className="text-5xl font-extrabold text-foreground mb-4 tracking-tight">
          Blade Games: O Arsenal
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto italic">
          "A precisão de uma lâmina. O catálogo dos seus sonhos."
        </p>
      </section>
      <Products products={products} loading={loading} />
    </div>
  );
}

export default Home;