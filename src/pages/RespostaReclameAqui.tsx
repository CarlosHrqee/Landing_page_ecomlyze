import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const motivos = [
  { value: "01", label: "Atraso do pedido" },
  { value: "02", label: "Troca ou devolução" },
  { value: "03", label: "Mal atendimento" },
  { value: "04", label: "Problemas de pagamento" },
  { value: "05", label: "Dúvidas gerais e atendimento" },
];

function gerarResposta({ empresa, cliente, motivo }: { empresa: string; cliente: string; motivo: string }) {
  switch (motivo) {
    case "01":
      return `Olá ${cliente}, lamentamos pelo atraso em seu pedido. A ${empresa} está trabalhando para regularizar a situação o mais rápido possível. Pedimos desculpas pelo transtorno e agradecemos sua compreensão.`;
    case "02":
      return `Olá ${cliente}, sentimos muito pelo ocorrido com seu pedido. A ${empresa} já está à disposição para realizar a troca ou devolução conforme sua necessidade. Por favor, entre em contato pelo nosso canal de atendimento para darmos andamento.`;
    case "03":
      return `Olá ${cliente}, pedimos desculpas se nosso atendimento não atendeu suas expectativas. A ${empresa} valoriza cada cliente e estamos sempre buscando melhorar. Nossa equipe está à disposição para resolver seu caso.`;
    case "04":
      return `Olá ${cliente}, identificamos sua reclamação sobre problemas de pagamento. A ${empresa} está pronta para ajudar a regularizar a situação. Por favor, envie mais detalhes pelo nosso canal de atendimento.`;
    case "05":
      return `Olá ${cliente}, agradecemos seu contato. A ${empresa} está à disposição para esclarecer dúvidas e prestar o melhor atendimento possível. Conte conosco!`;
    default:
      return "";
  }
}

const RespostaReclameAqui = () => {
  const [empresa, setEmpresa] = useState("");
  const [link, setLink] = useState("");
  const [cliente, setCliente] = useState("");
  const [motivo, setMotivo] = useState("");
  const [resposta, setResposta] = useState("");
  const [showResposta, setShowResposta] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!empresa || !link || !cliente || !motivo) return;
    setResposta(gerarResposta({ empresa, cliente, motivo }));
    setShowResposta(true);
  };

  const handleNovaResposta = () => {
    setEmpresa("");
    setLink("");
    setCliente("");
    setMotivo("");
    setResposta("");
    setShowResposta(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 py-16">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Gerador de Respostas para ReclameAqui
          </h1>
          {!showResposta ? (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 rounded-lg p-6 shadow-xl flex flex-col gap-4 items-center"
            >
              <div className="w-full">
                <label className="block text-white mb-1" htmlFor="empresa">
                  Nome da empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={empresa}
                  onChange={e => setEmpresa(e.target.value)}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                  placeholder="Ex: Monitorlyze"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-white mb-1" htmlFor="link">
                  Link da empresa no ReclameAqui
                </label>
                <input
                  id="link"
                  type="url"
                  value={link}
                  onChange={e => setLink(e.target.value)}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                  placeholder="https://www.reclameaqui.com.br/empresa..."
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-white mb-1" htmlFor="cliente">
                  Nome do cliente
                </label>
                <input
                  id="cliente"
                  type="text"
                  value={cliente}
                  onChange={e => setCliente(e.target.value)}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                  placeholder="Ex: João"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-white mb-1" htmlFor="motivo">
                  Motivo da reclamação
                </label>
                <select
                  id="motivo"
                  value={motivo}
                  onChange={e => setMotivo(e.target.value)}
                  className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                  required
                >
                  <option value="">Selecione o motivo</option>
                  {motivos.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full p-3 rounded-lg text-xl font-semibold bg-green-500 border border-green-500 text-white transition-all mt-2"
              >
                Gerar resposta
              </button>
            </form>
          ) : (
            <div className="bg-gray-800 rounded-lg p-6 shadow-xl text-white text-center flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-green-400">
                Resposta sugerida
              </h2>
              <textarea
                className="w-full bg-gray-900 text-white rounded p-4 mb-4 border border-gray-700"
                value={resposta}
                readOnly
                rows={5}
                onFocus={e => e.target.select()}
              />
              <button
                onClick={handleNovaResposta}
                className="mt-2 px-6 py-2 rounded bg-green-500 border border-green-500 text-white font-semibold"
              >
                Gerar outra resposta
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RespostaReclameAqui; 