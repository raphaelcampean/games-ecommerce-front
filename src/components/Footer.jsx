import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-lg font-black text-white">
              GameStore
            </h2>

            <p className="text-sm text-gray-300 mt-1">
              Sua loja de games favorita.
            </p>
          </div>


          <nav className="flex gap-6 text-sm font-semibold text-white">
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/login">Login</Link>
          </nav>

        </div>


        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} GameStore. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
export default Footer;