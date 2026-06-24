import { Link } from "react-router-dom";

function NotFound() {
  return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Elemento Decorativo de Fundo (Efeito de Névoa Vermelha Sutil) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D91A2A]/5 via-transparent to-transparent opacity-50"></div>

      <div className="relative z-10">
        {/* O 404 agora ganha o corte sutil do Vermelho Carmesim */}
        <h1 className="text-9xl font-serif font-black text-[#F4F4F6] tracking-tighter drop-shadow-[0_4px_10px_rgba(217,26,42,0.2)]">
          404
        </h1>
        
        <h2 className="text-4xl font-black text-[#D91A2A] mt-4 uppercase tracking-widest">
          Combate Encerrado
        </h2>

        <p className="text-[#F4F4F6]/60 mt-6 max-w-md mx-auto text-base italic font-sans">
          Sua lâmina errou o alvo. Esta rota não existe ou foi cortada do mapa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-8 py-4 bg-[#D91A2A] text-[#F4F4F6] font-bold rounded-none hover:bg-[#b01522] transition-all transform hover:scale-105 shadow-md uppercase tracking-widest text-xs"
          >
            Retornar ao Dojo
          </Link>
          
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 border border-[#2A2C31] text-[#F4F4F6] font-bold rounded-none hover:bg-[#2A2C31]/30 hover:border-[#D91A2A] transition-all uppercase tracking-widest text-xs"
          >
            Desembainhar Novamente
          </button>
        </div>
      </div>

      <p className="absolute bottom-10 text-[#F4F4F6]/20 font-mono text-xs uppercase tracking-[0.3em]">
        CÓDIGO_ERRO: ROTA_NAO_ENCONTRADA_EXCEPTION
      </p>
    </div>
  );
}

export default NotFound;