import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center">
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50"></div>

      <div className="relative z-10">
        <h1 className="text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          404
        </h1>
        
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-4 uppercase tracking-widest">
          Game Over
        </h2>

        <p className="text-gray-400 mt-6 max-w-md mx-auto text-lg">
          Parece que você tentou acessar uma rota que não existe ou o servidor deu um "respawn" errado.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-8 py-4 bg-white text-[#0f172a] font-black rounded-2xl hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105 shadow-xl uppercase tracking-tight"
          >
            Voltar ao Início
          </Link>
          
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all uppercase tracking-tight"
          >
            Tentar Novamente
          </button>
        </div>
      </div>

      {/* Frase Gamer de rodapé */}
      <p className="absolute bottom-10 text-white/10 font-mono text-xs uppercase tracking-[0.3em]">
        Error_Code: Page_Not_Found_Exception
      </p>
    </div>
  );
}

export default NotFound;