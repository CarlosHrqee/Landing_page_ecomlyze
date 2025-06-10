import React from 'react';

const Hero = () => (
  <section className="relative min-h-[85vh] flex flex-col justify-center items-center bg-black text-center px-4 py-16 md:py-24 overflow-hidden">
    <div className="relative z-10 pt-16 md:pt-8 max-w-7xl mx-auto">
      <div className="mb-0">
        <span className="inline-block px-6 py-2 rounded-full border-2 border-gray-700 text-base md:text-lg bg-black/60 mb-12 md:mb-8 tracking-wide font-semibold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text" style={{letterSpacing: '0.02em'}}>
          💬📱 SMS para ecommerces
        </span>
      </div>
      <h1
        className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-[#e5e5e5] mt-0"
        style={{ textShadow: '0 4px 32px rgba(255,255,255,0.15), 0 1.5px 8px rgba(255,255,255,0.10)' }}
      >
        Crie campanhas no canal com maior taxa de conversão para ecommerces
      </h1>
      <p className="text-lg md:text-2xl text-[#a3a3a3] max-w-4xl mx-auto mb-12">
        Dispare campanhas de SMS com a maior taxa de entrega e visualização do mercado, aumentando o faturamento e o LTV do seu e-commerce.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
      <div className="flex justify-center mb-8">
        <img
          src="/images/dashboard.png"
          alt="Dashboard do software de SMS para e-commerce"
          className="w-full max-w-5xl h-auto object-contain rounded-2xl shadow-lg border border-gray-700/30"
        />
      </div>
    </div>
  </section>
);

export default Hero;
