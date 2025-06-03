import { useState } from 'react';
import type { FC } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";

const Calculator: FC = () => {
  const [link, setLink] = useState("");
  const [views, setViews] = useState("");
  const [ticket, setTicket] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showReport, setShowReport] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const viewsNum = Number(views);
    const ticketNum = Number(ticket);
    if (isNaN(viewsNum) || isNaN(ticketNum) || viewsNum <= 0 || ticketNum <= 0 || !link) {
      setResult(null);
      setShowReport(false);
      return;
    }
    const loss = (viewsNum / 4) * ticketNum;
    setResult(loss);
    setShowReport(true);
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Perda de Faturamento | Monitorlyze</title>
        <meta name="description" content="Calcule quanto seu e-commerce pode estar perdendo de faturamento devido a reclamações no ReclameAqui. Ferramenta gratuita Monitorlyze." />
        <link rel="canonical" href="https://seusite.com/calculator" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 py-16">
          <section className="w-full max-w-md mx-auto" aria-labelledby="calculator-title">
            <h1 id="calculator-title" className="text-4xl font-bold text-center text-white mb-8">
              Calculadora de Perda de Faturamento - Reclame Aqui
            </h1>
            {!showReport ? (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 rounded-lg p-6 shadow-xl flex flex-col gap-4 items-center"
              >
                <div className="w-full">
                  <label className="block text-white mb-1" htmlFor="link">
                    Link da página do Reclame Aqui
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
                  <label className="block text-white mb-1" htmlFor="views">
                    Número de visualizações da página
                  </label>
                  <input
                    id="views"
                    type="number"
                    min={1}
                    value={views}
                    onChange={e => setViews(e.target.value)}
                    className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                    placeholder="Ex: 1000"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-white mb-1" htmlFor="ticket">
                    Ticket médio do produto ou serviço (R$)
                  </label>
                  <input
                    id="ticket"
                    type="number"
                    min={1}
                    step="0.01"
                    value={ticket}
                    onChange={e => setTicket(e.target.value)}
                    className="w-full p-2 rounded bg-gray-900 text-white border border-gray-700"
                    placeholder="Ex: 250.00"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 rounded-lg text-xl font-semibold bg-green-500 border border-green-500 text-white transition-all mt-2"
                >
                  Calcular perda de faturamento
                </button>
              </form>
            ) : (
              <div className="bg-gray-800 rounded-lg p-6 shadow-xl text-white text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-400">
                  Relatório de Perda de Faturamento
                </h2>
                <p className="mb-2">
                  <span className="font-semibold">Link analisado:</span>{" "}
                  <a href={link} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">{link}</a>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Visualizações:</span> {views}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Ticket médio:</span> R$ {Number(ticket).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
                <p className="mb-4 text-lg">
                  <span className="font-semibold text-red-400">Perda estimada de faturamento:</span>{" "}
                  <span className="text-green-300 font-bold">
                    R$ {result?.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                </p>
                <div className="text-center">
                  <button
                    onClick={() => {
                      setShowReport(false);
                      setResult(null);
                    }}
                    className="mt-4 px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    Calcular novamente
                  </button>
                </div>
              </div>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Calculator; 

