import ProductCard from "./ProductCard";

function Products({ products, loading }) {
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
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-center border border-white/10">
              <p className="text-white text-xl animate-pulse">
                {loading ? "Carregando..." : "Nenhum produto encontrado"}
              </p>
            </div>
          )}

        </div>
      </div>
  )
}

export default Products;