import { CheckCircle, Brain, Zap, BarChart, DollarSign, MessageCircle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-8 w-8 text-gray-400" />,
    title: "Campanhas Multicanal com IA",
    subtitle: "Disparo inteligente por SMS, e-mail e chamadas de voz",
    description: "Crie campanhas personalizadas e automáticas com base no comportamento do cliente. Alcance seu público no canal certo, na hora certa, aumentando a taxa de resposta e a conversão.",
    image: "/images/SMS.png",
    buttons: [
      { text: "Iniciar teste grátis", primary: true, href: "https://wa.me/5565996203293" },
      { text: "Fale com um especialista", primary: false, href: "https://wa.me/5565996203293" }
    ]
  },
  {
    icon: <Brain className="h-8 w-8 text-gray-400" />,
    title: "Recompra Personalizada por IA",
    subtitle: "Aumente o LTV segmentando cada cliente de forma única",
    description: "Nossa IA analisa histórico de compras, preferências e comportamento para criar funis de recompra automáticos, com mensagens personalizadas que aumentam o ticket médio e a fidelidade.",
    image: "/images/IA.png"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-gray-400" />,
    title: "Impulsione Lançamentos e Upsell",
    subtitle: "Venda mais para quem já confia na sua marca",
    description: "Crie campanhas de lançamentos e upsell baseadas no interesse real do cliente. Use e-mail, SMS e voz para apresentar novos produtos com alta taxa de conversão.",
    image: "/images/SALES.png"
  },
  {
    icon: <BarChart className="h-8 w-8 text-gray-400" />,
    title: "Relatórios em Tempo Real",
    subtitle: "Monitore resultados de cada canal e mensagem",
    description: "Acompanhe aberturas, cliques, chamadas atendidas e vendas geradas por cada campanha em dashboards fáceis de interpretar. Tome decisões com base em dados reais.",
    image: "/images/DATA.png"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-gray-400" />,
    title: "Eficiência Operacional e ROI Elevado",
    subtitle: "Automatize suas campanhas e escale vendas com baixo custo",
    description: "Reduza o custo por aquisição e aumente o retorno por cliente com campanhas automáticas e segmentadas, sem depender de tráfego pago.",
    image: "/images/CART.png"
  }
];

const Features = () => {
  return (
    <section id="channels" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Recursos Exclusivos
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Resolva os problemas do seu suporte com o Agente IA especializado na sua loja ⚡
        </p>
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center border-b border-gray-800 pb-16 ${index === features.length - 1 ? 'border-b-0 pb-0' : ''}`}
            >
              <div className="md:w-1/2">
                <div className="p-4 bg-gray-800/50 inline-block rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 italic mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-300 mb-6">
                  {feature.description.split('seu').map((part, i, arr) => 
                    i < arr.length - 1 ? 
                    <span key={i}>{part}<em className="text-green-400">seu</em></span> : 
                    <span key={i}>{part}</span>
                  )}
                </p>
                
                {feature.buttons && (
                  <div className="flex flex-wrap gap-4">
                    {feature.buttons.map((button, buttonIndex) => (
                      button.href ? (
                        <a
                          key={buttonIndex}
                          href={button.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 ${button.primary
                            ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white'
                            : 'bg-transparent border border-gray-700 text-white'} px-6 py-3 rounded-lg font-medium hover:from-gray-800 hover:to-black transition-all`}
                        >
                          {button.text}
                        </a>
                      ) : (
                        <button
                          key={buttonIndex}
                          className={`inline-flex items-center justify-center gap-2 ${button.primary
                            ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white'
                            : 'bg-transparent border border-gray-700 text-white'} px-6 py-3 rounded-lg font-medium hover:from-gray-800 hover:to-black transition-all`}
                        >
                          {button.text}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
              
              <div className="md:w-1/2 bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-700/50 flex items-center justify-center">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">Imagem ilustrativa do recurso</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
