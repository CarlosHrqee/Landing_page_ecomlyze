import { FaShopify } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";

const platforms = [
  {
    name: "Shopify",
    icon: <img src="/images/shopify.jpg" alt="Shopify" className="h-12 w-12 text-gray-400" />,
    description: "Integração completa com todas as funcionalidades da Shopify"
  },
  {
    name: "CartPanda",
    icon: <img src="/images/Cartpanda.png" alt="CartPanda" className="h-12 w-12 object-contain" />,
    description: "Suporte especializado para lojas CartPanda"
  },
  {
    name: "Yampi",
    icon: <img src="/images/Yampi.png" alt="Yampi" className="h-12 w-12 object-contain" />,
    description: "Integração rápida e fácil com Yampi"
  },
  {
    name: "Outras ferramentas",
    icon: <span className="h-12 w-12 flex items-center justify-center text-gray-400 text-2xl font-bold">+</span>,
    description: "Integre com outras plataformas e ferramentas via API ou Zapier"
  }
];

const Features = () => (
  <section className="py-16">
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text">Gestão de Reclamações</h3>
        <p className="text-gray-300">Monitoramento e resposta rápida no ReclameAqui e Google Reviews.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text">Aumento de Reputação</h3>
        <p className="text-gray-300">Estratégias para elevar sua nota e confiança do consumidor.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text">Suporte Humanizado</h3>
        <p className="text-gray-300">Equipe especializada para cuidar do seu cliente e do seu LTV.</p>
      </div>
    </div>
  </section>
);

const IntegrationPlatforms = () => {
  return (
    <section id="features" className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Integre com sua plataforma preferida
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Nossa solução se conecta facilmente com as principais plataformas de e-commerce do mercado, garantindo uma experiência perfeita para você e seus clientes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center hover:bg-gray-800/50 transition-all hover:border-gray-500/30 h-full">
              <div className="mb-4 flex items-center justify-center h-16">
                {platform.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
              <p className="text-gray-400 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">E muitas outras plataformas...</p>
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-800 hover:to-black transition-all">
            Integrar ao meu ecommerce
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPlatforms;