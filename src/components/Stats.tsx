const stats = [
  { number: "85%", label: "Redução no tempo de resolução de chamados" },
  { number: "95%", label: "Satisfação do cliente após atendimento" },
  { number: "10min", label: "Tempo para integrar com seus sistemas" },
  { number: "30%", label: "Aumento no LTV dos clientes" },
];

const Stats = () => (
  <section id="stats" className="py-12 bg-black">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Resultados dos nossos parceiros</h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
      <div>
        <span className="text-3xl font-bold text-gray-400">+50</span>
        <p className="text-gray-300">E-commerces atendidos</p>
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-400">+98%</span>
        <p className="text-gray-300">Taxa de entrega de SMS</p>
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-400">+R$10mi</span>
        <p className="text-gray-300">em faturamento gerado</p>
      </div>
    </div>
  </section>
);

export default Stats;