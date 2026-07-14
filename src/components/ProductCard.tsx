import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  slug: string;
  imageUrl: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative bg-surface border border-border p-6 shadow-xl transition-all duration-500 group overflow-hidden flex flex-col hover:border-primary">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative h-48 w-full bg-black rounded-sm mb-4 flex items-center justify-center border-b-2 border-primary overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>

      <Link to={`/produtos/${product.slug}`} className="relative">
        <h2 className="text-xl font-serif font-bold text-foreground mb-5 group-hover:text-primary transition-colors">
          {product.name}
        </h2>
      </Link>

      <div className="flex-col items-center mb-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-foreground">
            R$ {product.price.toFixed(2)}
          </span>
          <span className="text-[10px] uppercase tracking-widest bg-transparent text-primary border border-primary px-3 py-1 font-bold">
            {product.stockQuantity} em estoque
          </span>
        </div>
        
        <p className="text-foreground/60 text-sm mb-6 line-clamp-2 mt-3 font-sans">
          {product.description}
        </p>
      </div>

      <button className="w-full bg-primary text-foreground font-bold py-3 hover:bg-[#b01522] transition-all duration-300 mt-auto uppercase tracking-tighter">
        Sacar Lâmina
      </button>
    </div>
  )
}

export default ProductCard;