import { 
  FaBolt, 
  FaChartLine, 
  FaCogs, 
  FaPlug, 
  FaShieldAlt, 
  FaRobot 
} from 'react-icons/fa';

const faqs = [
  {
    question: "Como a IA melhora minhas campanhas de SMS?",
    answer: "Nossa IA analisa o comportamento e os dados dos seus clientes para criar mensagens personalizadas, aumentando a taxa de abertura, engajamento e conversão das campanhas.",
    icon: <FaRobot className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "Quais integrações estão disponíveis?",
    answer: "Você pode integrar facilmente com as principais plataformas de e-commerce, CRMs e ERPs do mercado, além de importar listas de contatos de forma simples.",
    icon: <FaPlug className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "Consigo acompanhar os resultados em tempo real?",
    answer: "Sim! O painel mostra aberturas, cliques, conversões e vendas geradas por cada campanha, permitindo ajustes rápidos para maximizar o ROI.",
    icon: <FaChartLine className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "É possível automatizar o envio de SMS?",
    answer: "Sim, você pode programar disparos automáticos com base em eventos, datas especiais ou comportamento do cliente, tudo de forma simples e intuitiva.",
    icon: <FaBolt className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "Meus dados e dos meus clientes estão seguros?",
    answer: "Sim, seguimos as melhores práticas de segurança e LGPD, garantindo total proteção e privacidade dos dados.",
    icon: <FaShieldAlt className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "Qual o diferencial do Ecomlyze?",
    answer: "Além da automação e IA, oferecemos suporte especializado, integrações rápidas e foco total em resultados para ecommerces de todos os portes.",
    icon: <FaCogs className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 text-transparent bg-clip-text">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Tire suas dúvidas sobre como o Ecomlyze pode transformar o atendimento do seu e-commerce
        </p>
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${faq.iconBg}`}>
                  {faq.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/5565996203293" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-800 hover:to-black transition-all"
          >
            <span className="w-4 h-4">
              <FaPlug className="text-white" />
            </span>
            Integrar ao meu ecommerce
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
