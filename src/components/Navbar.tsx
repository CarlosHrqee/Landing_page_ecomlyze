import { useState, useRef, useEffect } from "react";
import { FaCalculator, FaRegCommentDots } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-2 flex items-center justify-between" aria-label="Menu principal">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient" x1="2" y1="7" x2="22" y2="7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9CA3AF" />
                <stop offset="1" stopColor="#111827" />
              </linearGradient>
            </defs>
          </svg>
          <a
            href="/"
            className="font-medium text-white"
          >
            Ecomlyze
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#channels" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Integrações</a>
          <a href="#stats" className="text-gray-300 hover:text-white transition-colors">Resultados</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="px-5 py-2 rounded-full text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            Login
          </a>
          <a
            href="/integrar"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold hover:from-gray-800 hover:to-black transition-all"
          >
            Integrar agora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;