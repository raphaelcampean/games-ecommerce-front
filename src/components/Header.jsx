import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-black text-white">
          GameStore
        </h1>

        <nav className="flex gap-6 text-white font-semibold">
          <Link to="/" className="hover:text-purple-300">Home</Link>
          <Link to="/cadastro" className="hover:text-purple-300">Cadastro</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;