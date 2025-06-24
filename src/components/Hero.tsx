import React from 'react';

const Hero = () => (
  <section className="relative min-h-[85vh] flex flex-col justify-center items-center bg-black text-center px-4 py-16 md:py-24 overflow-hidden">
    <div className="relative z-10 pt-4 md:pt-8 max-w-7xl mx-auto">
      <div className="mb-0">
        <div className="relative inline-block mb-4 md:mb-8">
          <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-r from-teal-400/70 via-yellow-400/70 to-purple-500/70"></div>
          <span className="relative inline-block px-6 py-2 rounded-full text-base md:text-lg bg-black text-white tracking-wide" style={{letterSpacing: '0.02em'}}>
            💬📱 IA para ecommerces
          </span>
        </div>
      </div>
      <h1
  className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-[#e5e5e5] mt-0"
  style={{ textShadow: '0 4px 32px rgba(255,255,255,0.15), 0 1.5px 8px rgba(255,255,255,0.10)' }}
>
  Vendas recorrentes no automático com campanhas personalizadas de e-mail, SMS e voz
</h1>

      <p className="text-lg md:text-2xl text-[#a3a3a3] max-w-4xl mx-auto mb-12">
        Crie, dispare SMS,e-mails e ligações no momento certo para gerar mais vendas e aumentar o LTV do seu e-commerce sem depender de tráfego pago.
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
          Agendar demonstração
        </a>
      </div>
      <div className="flex justify-center mb-8">
        <img
          src="/images/ecomlyzedash.png"
          alt="Dashboard do software de SMS para e-commerce"
          className="w-full max-w-5xl h-auto object-contain rounded-2xl shadow-lg border border-gray-700/30"
        />
      </div>
    </div>
  </section>
);

export default Hero;
