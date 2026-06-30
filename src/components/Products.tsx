import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  slug: string;
  image: string;
}

function Products({ products, loading }: { products: Product[]; loading: boolean }) {
  return (
    <div className="flex justify-center px-6">
      <div className="w-full max-w-6xl">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-[#2A2C31] p-10 rounded-none border-l-4 border-[#D91A2A] text-center">
            <p className="text-[#F4F4F6] text-xl">
              {loading ? "Forjando itens..." : "Nenhuma lâmina encontrada"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products;