import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-9xl font-serif font-black text-foreground tracking-tighter drop-shadow-[0_4px_10px_rgba(217,26,42,0.2)]">
          404
        </h1>

        <h2 className="text-4xl font-black text-primary mt-4 uppercase tracking-widest">
          Combate Encerrado
        </h2>

        <p className="text-foreground/60 mt-6 max-w-md mx-auto text-base italic font-sans">
          Sua lâmina errou o alvo. Esta rota não existe ou foi cortada do mapa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-8 py-4 bg-primary text-foreground font-bold rounded-none hover:bg-primaryHover transition-all transform hover:scale-105 shadow-md uppercase tracking-widest text-xs">
            Retornar ao Dojo
          </Link>

          <button onClick={() => window.location.reload()} className="px-8 py-4 border border-border text-foreground font-bold rounded-none hover:bg-border/30 hover:border-primary transition-all uppercase tracking-widest text-xs">
            Desembainhar Novamente
          </button>
        </div>
      </div>

      <p className="absolute bottom-10 text-foreground/20 font-mono text-xs uppercase tracking-[0.3em]">
        CÓDIGO_ERRO: ROTA_NAO_ENCONTRADA_EXCEPTION
      </p>
    </div>
  );
}

export default NotFound;