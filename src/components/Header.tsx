import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

function Header() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border hover:border-primary transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link 
          to="/" 
          className="text-2xl font-black text-foreground tracking-tighter hover:text-primary transition-colors"
        >
          BLADE<span className="text-primary">.</span>GAMES
        </Link>


        <nav className="flex gap-6 text-foreground font-bold text-sm uppercase tracking-widest font-sans">

          <Link 
            to="/" 
            className="hover:text-primary transition-colors relative group py-1"
          >
            Home

            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"/>
          </Link>


          {
            user ? (
              <Link 
                to="/perfil" 
                className="hover:text-primary transition-colors relative group py-1"
              >
                Minha conta

                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"/>
              </Link>
            ) : (
              <Link 
                to="/cadastro" 
                className="hover:text-primary transition-colors relative group py-1"
              >
                Cadastro

                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"/>
              </Link>
            )
          }

        </nav>


        <div className="flex items-center gap-4">

          {
            user ? (
              <>
                <span className="text-foreground font-bold text-sm">
                  Olá, {user.username}
                </span>

                <button
                  onClick={logout}
                  className="rounded-lg bg-surface border border-border text-foreground px-4 py-2 hover:border-primary transition-colors"
                >
                  Sair
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="rounded-lg bg-primary text-white px-4 py-2 font-bold hover:opacity-80 transition-colors"
              >
                Login
              </Link>
            )
          }


          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="rounded-lg bg-surface border border-border text-foreground px-4 py-2 hover:border-primary transition-colors"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;