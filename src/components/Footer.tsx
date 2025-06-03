import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo/texto à esquerda */}
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-gray-400 to-gray-900 flex items-center justify-center">
              <span className="text-black text-base font-bold">E</span>
            </div>
            <p className="text-gray-200 text-sm font-semibold">@ecomlyze</p>
          </div>

          {/* Texto de copyright e botão à direita */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Ecomlyze. Todos os direitos reservados
            </p>
            <a
              href="https://wa.me/5565996203293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-gray-800 hover:to-black transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;