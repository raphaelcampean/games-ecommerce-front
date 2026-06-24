import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-[#141416]/80 border-b border-[#2A2C31] hover:border-b-[#D91A2A] transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <Link to="/" className="text-2xl font-black text-[#F4F4F6] tracking-tighter hover:text-[#D91A2A] transition-colors">
          BLADE<span className="text-[#D91A2A]">.</span>GAMES
        </Link>

        <nav className="flex gap-6 text-[#F4F4F6] font-bold text-sm uppercase tracking-widest font-sans">
          <Link to="/" className="hover:text-[#D91A2A] transition-colors relative group py-1">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D91A2A] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/cadastro" className="hover:text-[#D91A2A] transition-colors relative group py-1">
            Dojo
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D91A2A] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;