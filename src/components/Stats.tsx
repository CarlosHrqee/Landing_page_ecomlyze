const stats = [
  { number: "+30%", label: "Aumento no LTV dos clientes" },
  { number: "+40%", label: "Crescimento nas taxas de recompra" },
  { number: "+98%", label: "Taxa média de entrega dos disparos" },
  { number: "10min", label: "Tempo médio de integração" },
];

const Stats = () => (
  <section id="stats" className="py-12 bg-black">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
      Resultados Reais com Nossa Plataforma Multicanal
    </h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
      <div>
        <span className="text-3xl font-bold text-gray-400">+50</span>
        <p className="text-gray-300">E-commerces com marca própria atendidos</p>
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-400">+98%</span>
        <p className="text-gray-300">Taxa de entrega entre SMS, e-mail e voz</p>
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-400">+R$10mi</span>
        <p className="text-gray-300">em faturamento adicional gerado</p>
      </div>
    </div>
  </section>
);

export default Stats;
