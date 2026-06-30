import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t border-[#2A2C31] bg-[#141416]/90 backdrop-blur-lg">
      <div className="mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-xl font-black text-[#F4F4F6] tracking-tight">
              BLADE GAMES
            </h2>
            <p className="text-sm text-[#F4F4F6]/60 mt-1 italic font-sans">
              Honra, precisão e o arsenal definitivo para sua jornada.
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-semibold text-[#F4F4F6] font-sans">
            <Link to="/" className="hover:text-[#D91A2A] transition-colors">Home</Link>
            <Link to="/cadastro" className="hover:text-[#D91A2A] transition-colors">Dojo (Cadastro)</Link>
            <Link to="/login" className="hover:text-[#D91A2A] transition-colors">Acessar</Link>
          </nav>

        </div>

        <div className="mt-6 pt-4 border-t border-[#2A2C31] text-center text-xs text-[#F4F4F6]/40 font-mono tracking-wider">
          © {new Date().getFullYear()} BLADE GAMES. FORJADO COM HONRA. TODOS OS DIREITOS RESERVADOS.
        </div>

      </div>
    </footer>
  );
}
export default Footer;