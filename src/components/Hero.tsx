const Hero = () => (
  <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-black text-center px-4 overflow-hidden">
    {/* Sombra branca de fundo, leve e à direita */}
    <div className="pointer-events-none absolute inset-0 flex justify-end items-center z-0">
      <div className="w-[40vw] h-[24vh] rounded-full blur-xl opacity-5 bg-white translate-x-1/4"></div>
    </div>
    <div className="relative z-10 pt-16 md:pt-8">
      <div className="mb-0">
        <span className="inline-block px-6 py-2 rounded-full border-2 border-gray-700 text-base md:text-lg bg-black/60 mb-8 md:mb-4 tracking-wide font-semibold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text" style={{letterSpacing: '0.02em'}}>
          💬📱 SMS para ecommerces
        </span>
      </div>
      <h1
        className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-[#e5e5e5] mt-0"
        style={{ textShadow: '0 4px 32px rgba(255,255,255,0.15), 0 1.5px 8px rgba(255,255,255,0.10)' }}
      >
        Crie campanhas no canal com maior taxa de conversão para ecommerces
      </h1>
      <p className="text-lg md:text-2xl text-[#a3a3a3] max-w-4xl mx-auto mb-10">
        Dispare campanhas de SMS com a maior taxa de entrega e visualização do mercado, aumentando o faturamento e o LTV do seu e-commerce.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/5565996203293"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-800 hover:to-black transition-all"
        >
          Começar agora
        </a>
        <a
          href="#faq"
          className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all"
        >
          Saiba mais
        </a>
      </div>
    </div>
  </section>
);

export default Hero;