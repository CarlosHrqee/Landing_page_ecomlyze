import { CheckCircle, Brain, Zap, BarChart, DollarSign, MessageCircle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-8 w-8 text-gray-400" />,
    title: "Geração de SMS com IA",
    subtitle: "Campanhas personalizadas com base nos dados dos seus clientes",
    description: "Crie e dispare campanhas de SMS automaticamente com textos otimizados por IA, segmentando públicos e aumentando a taxa de abertura e conversão do seu e-commerce.",
    image: "/images/SMS.png",
    buttons: [
      { text: "Iniciar teste grátis", primary: true, href: "https://wa.me/5565996203293" },
      { text: "Fale com um especialista", primary: false, href: "https://wa.me/5565996203293" }
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-gray-400" />,
    title: "Aumento de Conversão",
    subtitle: "Mensagens certeiras para cada etapa do funil",
    description: "Utilize IA para identificar o melhor momento e conteúdo para cada cliente, enviando SMS que realmente convertem e impulsionam o faturamento.",
    image: "/images/SALES.png"
  },
  {
    icon: <BarChart className="h-8 w-8 text-gray-400" />,
    title: "Análise de Resultados em Tempo Real",
    subtitle: "Acompanhe aberturas, cliques e vendas geradas",
    description: "Veja em tempo real o desempenho das suas campanhas de SMS, com dashboards claros e insights para otimizar cada disparo.",
    image: "/images/DATA.png"
  },
  {
    icon: <Brain className="h-8 w-8 text-gray-400" />,
    title: "Segmentação Inteligente",
    subtitle: "Aproveite o máximo dos dados do seu e-commerce",
    description: "A IA analisa o comportamento de compra, preferências e histórico dos clientes para criar segmentos altamente eficazes e personalizados.",
    image: "/images/IA.png"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-gray-400" />,
    title: "Economia e Eficiência",
    subtitle: "Automatize e reduza custos operacionais",
    description: "Automatize o envio de SMS, reduza o trabalho manual e aumente o ROI das suas campanhas, investindo apenas no que traz resultado.",
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
