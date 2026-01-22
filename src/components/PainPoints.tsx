import React from 'react';
import { AlertCircle, BarChart3, TrendingDown, Shuffle, Layers, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PainPoints() {
  const symptoms = [
    { icon: BarChart3, text: "Seu negócio até fatura, mas falta clareza real dos números" },
    { icon: Shuffle, text: "As decisões são tomadas mais no “feeling” do que em dados" },
    { icon: AlertCircle, text: "A empresa depende demais de você" },
    { icon: TrendingDown, text: "A gestão financeira é confusa ou descentralizada" },
    { icon: Layers, text: "O crescimento existe, mas sem organização" },
    { icon: HelpCircle, text: "Você sabe que pode ter resultados melhores, mas não sabe por onde começar" }
  ];

  const problems = [
    { title: "Falta de controle financeiro", desc: "Não saber para onde o dinheiro está indo." },
    { title: "Decisões sem base", desc: "Apostar no escuro ao invés de planejar." },
    { title: "Processos desorganizados", desc: "Cada dia é um incêndio diferente para apagar." },
    { title: "Crescimento frágil", desc: "Escalar o caos só gera mais problemas." }
  ];

  return (
    <>
      {/* Identification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-[#3E2C22] mb-6">
              Sente que está carregando a empresa nas costas?
            </h2>
            <p className="text-lg text-[#5D4E46]">
              Se você é empresário ou empreendedor, é provável que já tenha se sentido assim:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {symptoms.map((item, idx) => (
              <div key={idx} className="flex items-start p-6 bg-[#F0E6E0]/50 rounded-sm border-l-4 border-[#754B2F]/30 hover:border-[#754B2F] transition-colors">
                <item.icon className="w-6 h-6 text-[#754B2F] mt-1 flex-shrink-0 mr-4" />
                <p className="text-[#3E2C22]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-2 bg-[#F3DBB2] text-[#3E2C22] font-medium rounded-full border border-[#E6CBA3]">
              👉 Essa mentoria foi criada para você.
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Dark Coffee Background */}
      <section className="py-20 bg-[#3E2C22] text-[#F0E6E0] relative overflow-hidden">
        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <ImageWithFallback 
                src="https://images.unsplash.com/photo-1768266358546-d961dca2363d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJhbCUyMGRldGFpbCUyMGNvbmNyZXRlJTIwd29vZHxlbnwxfHx8fDE3Njg4NDEwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                className="w-full h-full object-cover"
                alt="Texture"
            />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-[32px] font-light mb-6 leading-tight tracking-tight">
                O maior erro dos empresários não é falta de esforço. <br />
                <span className="font-serif italic text-[#F3DBB2]">É falta de método de gestão.</span>
              </h2>
              <p className="text-[#E6D5C8] text-lg mb-8 leading-relaxed">
                Empresas não quebram apenas por falta de vendas. Elas quebram porque crescem sem estrutura e sem controle. Ninguém te ensinou isso de verdade, mas agora é hora de mudar.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((prob, idx) => (
                <div key={idx} className="bg-[#543D32]/50 p-6 rounded-sm backdrop-blur-sm border border-[#543D32] hover:bg-[#543D32] transition-colors">
                  <div className="h-2 w-12 bg-[#754B2F] mb-4 rounded-full"></div>
                  <h3 className="text-xl font-medium text-white mb-2">{prob.title}</h3>
                  <p className="text-[#D4C5BC] text-sm">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
