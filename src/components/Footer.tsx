import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background/90 backdrop-blur-lg">
      <div className="mx-auto px-4 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-xl font-black text-foreground tracking-tight">
              BLADE GAMES
            </h2>
            <p className="text-sm text-foreground/60 mt-1 italic font-sans">
              Honra, precisão e o arsenal definitivo para sua jornada.
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-semibold text-foreground font-sans">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/cadastro" className="hover:text-primary transition-colors">Dojo (Cadastro)</Link>
            <Link to="/login" className="hover:text-primary transition-colors">Acessar</Link>
          </nav>

        </div>

        <div className="mt-6 pt-4 border-t border-border text-center text-xs text-foreground/40 font-mono tracking-wider">
          © {new Date().getFullYear()} BLADE GAMES. FORJADO COM HONRA. TODOS OS DIREITOS RESERVADOS.
        </div>

      </div>
    </footer>
  );
}

export default Footer;