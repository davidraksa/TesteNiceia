import React from 'react';
import { Check, X } from 'lucide-react';

export function Audience() {
  const forWho = [
    "Empresários e empreendedores com negócio em operação",
    "Quem quer organizar a gestão e melhorar resultados",
    "Quem está disposto a aplicar o que aprende",
    "Quem entende que crescimento exige decisão e mudança"
  ];

  const notForWho = [
    "Busca fórmulas prontas ou resultados imediatos",
    "Não gosta de aplicar o que aprende",
    "Evita assumir decisões",
    "Não tem negócio ativo",
    "Resiste a mudanças",
    "Não se adapta a mentoria em grupo"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#3E2C22] mb-4">
            Para quem é a mentoria?
          </h2>
          <p className="text-[#5D4E46] max-w-2xl mx-auto">
            Nosso foco é selecionar empresários que estejam no momento certo de dar o próximo passo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Green-ish Card adapted to Brown/Muted Green */}
          <div className="bg-[#F0E6E0] p-8 rounded-sm border-t-4 border-[#754B2F] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-[#3E2C22] mb-6 flex items-center">
              <span className="bg-[#E6D5C8] p-2 rounded-full mr-3">
                <Check className="w-5 h-5 text-[#754B2F]" />
              </span>
              É para você se:
            </h3>
            <ul className="space-y-4">
              {forWho.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-[#754B2F] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#5D4E46]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red/Gray Card */}
          <div className="bg-[#F8F5F2] p-8 rounded-sm border-t-4 border-[#D4C5BC] shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-[#7D6E66] mb-6 flex items-center">
              <span className="bg-[#E6D5C8]/50 p-2 rounded-full mr-3">
                <X className="w-5 h-5 text-[#7D6E66]" />
              </span>
              Não é para você se:
            </h3>
            <ul className="space-y-4">
              {notForWho.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <X className="w-5 h-5 text-[#A89890] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-[#7D6E66]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
