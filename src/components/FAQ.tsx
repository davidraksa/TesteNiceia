import React, { useState } from 'react';
import { Plus, Minus, ChevronRight, Video, Calendar, MessageSquare, Target } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Essa mentoria é para empresas de qual porte?",
      a: "É indicada para micro, pequenas e médias empresas que já estão em operação e precisam organizar gestão, finanças e decisões estratégicas."
    },
    {
      q: "Preciso ter conhecimento em finanças ou gestão?",
      a: "Não. A mentoria é estruturada para empresários. Tudo é explicado de forma clara, prática e aplicável."
    },
    {
      q: "É uma mentoria só teórica?",
      a: "Não. O foco é aplicação prática no seu negócio, com orientação estratégica em cada encontro."
    },
    {
      q: "A mentoria é individual?",
      a: "Não. É uma mentoria em grupo, o que permite troca de experiências, aprendizado coletivo e diferentes visões de negócio."
    },
    {
      q: "Não tenho muito tempo. Consigo acompanhar?",
      a: "Se você é empresário, tempo sempre será um desafio. Justamente por isso, a mentoria é objetiva, direta e focada no que gera resultado."
    }
  ];

  const features = [
    { icon: Video, text: "Mentoria online e em grupo" },
    { icon: Calendar, text: "Encontros ao vivo" },
    { icon: Target, text: "Conteúdo prático e aplicável" },
    { icon: MessageSquare, text: "Espaço para dúvidas" },
  ];

  return (
    // Background light theme #F0E6E0
    <section className="py-24 bg-[#F0E6E0]">
      <div className="container mx-auto px-6">
        
        {/* How it works grid */}
        <div className="mb-20">
          <h2 className="text-3xl text-center font-light text-[#3E2C22] mb-12">
            Como funciona a Mentoria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow border border-[#E6D5C8]">
                <div className="w-12 h-12 bg-[#F0E6E0] rounded-full flex items-center justify-center mb-4 text-[#754B2F]">
                  <feat.icon className="w-6 h-6" />
                </div>
                <span className="text-[#3E2C22] font-medium">{feat.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-5">
              <h2 className="text-3xl font-light text-[#3E2C22] mb-6">
                Dúvidas Frequentes
              </h2>
              <p className="text-[#5D4E46] mb-8">
                Ainda não tem certeza se é o momento ideal? Confira as perguntas mais comuns.
              </p>
              <div className="bg-[#E6D5C8] p-8 rounded-sm">
                <h4 className="font-medium text-[#3E2C22] mb-4">Ainda tem dúvidas?</h4>
                <p className="text-sm text-[#5D4E46] mb-6">
                  Agende uma Reunião Estratégica Gratuita para entender se a mentoria faz sentido para o seu momento.
                </p>
                <button className="w-full py-3 bg-[#754B2F] text-white rounded-sm font-medium hover:bg-[#5C3A2E] transition-colors flex items-center justify-center shadow-lg">
                  Agendar Reunião Gratuita
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
           </div>

           <div className="md:col-span-7">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-[#E6D5C8] rounded-sm bg-white overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      <span className="font-medium text-[#3E2C22]">{faq.q}</span>
                      {openIndex === index ? <Minus className="w-5 h-5 text-[#754B2F]" /> : <Plus className="w-5 h-5 text-[#D4C5BC]" />}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-5 pt-0 text-[#5D4E46] leading-relaxed border-t border-[#F0E6E0] mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
