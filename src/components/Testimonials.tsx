import { FaBolt, FaPlug, FaChartLine, FaCogs, FaRobot, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    name: "Disparo Inteligente",
    icon: <FaBolt className="w-16 h-16 text-white" />
  },
  {
    name: "Integração E-commerce",
    icon: <FaPlug className="w-16 h-16 text-white" />
  },
  {
    name: "Relatórios em Tempo Real",
    icon: <FaChartLine className="w-16 h-16 text-white" />
  },
  {
    name: "Automação de Fluxos",
    icon: <FaCogs className="w-16 h-16 text-white" />
  },
  {
    name: "Personalização com IA",
    icon: <FaRobot className="w-16 h-16 text-white" />
  },
  {
    name: "Segurança de Dados",
    icon: <FaShieldAlt className="w-16 h-16 text-white" />
  },
];

const FunctionalitiesBar = () => (
  <section className="w-full pt-0 pb-2 bg-black mt-12 sm:mt-0">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-6 justify-items-center items-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[100px]"
          >
            <span className="relative flex items-center justify-center w-16 h-16">
              <span className="absolute w-16 h-16 rounded-full bg-white/10 blur-sm"></span>
              <span className="relative">{f.icon}</span>
            </span>
            <span className="text-white font-semibold text-base text-center mt-4">
              {f.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FunctionalitiesBar; 