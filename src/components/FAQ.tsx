import { 
  FaBolt, 
  FaChartLine, 
  FaCogs, 
  FaPlug, 
  FaShieldAlt, 
  FaRobot, 
  FaEnvelopeOpenText, 
  FaPhoneAlt 
} from 'react-icons/fa';

const faqs = [
  {
    question: "Como funciona o disparo multicanal (SMS, e-mail e voz)?",
    answer: "A plataforma identifica o melhor canal para cada cliente com base no histórico de interação, aumentando as chances de abertura e conversão de cada campanha.",
    icon: <FaEnvelopeOpenText className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "Como a IA personaliza os disparos para aumentar a recompra?",
    answer: "A IA cria funis personalizados de recompra, entendendo o ciclo de vida de cada cliente e enviando mensagens no momento ideal com ofertas específicas.",
    icon: <FaRobot className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "É possível acompanhar os resultados em tempo real?",
    answer: "Sim! Você visualiza entregas, cliques, ligações atendidas e conversões direto no painel em tempo real, otimizando suas ações com dados precisos.",
    icon: <FaChartLine className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer: "Não! A plataforma foi feita para equipes de marketing e vendas. Em poucos minutos você configura campanhas automatizadas, mesmo sem conhecimento técnico.",
    icon: <FaCogs className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "E se eu quiser integrar com minha loja ou CRM?",
    answer: "Oferecemos integração com as principais plataformas de e-commerce e CRMs do mercado, além de suporte técnico dedicado para conectar rapidamente seus sistemas.",
    icon: <FaPlug className="text-gray-400" />,
    iconBg: "bg-gray-900/20",
  },
  {
    question: "A plataforma é segura e está em conformidade com a LGPD?",
    answer: "Sim. Utilizamos criptografia e boas práticas de segurança para proteger seus dados e dos seus clientes, em total conformidade com a LGPD.",
    icon: <FaShieldAlt className="text-gray-400" />,
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
          Tire suas dúvidas sobre como a nossa plataforma multicanal pode aumentar as vendas do seu e-commerce
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
            Integrar ao meu e-commerce
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
