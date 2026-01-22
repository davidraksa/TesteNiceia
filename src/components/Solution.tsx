import image_733a615f31cc4ebb815a2c37bc3ee987acc4539d from 'figma:asset/733a615f31cc4ebb815a2c37bc3ee987acc4539d.png';
import image_2c5e26cd073c160914cf428940c19b06f74bf116 from 'figma:asset/2c5e26cd073c160914cf428940c19b06f74bf116.png';
import React from 'react';
import { Target, TrendingUp, FileText, Layout, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solution() {
  const benefits = [
    { icon: Target, text: "Organização financeira clara" },
    { icon: TrendingUp, text: "Visão real dos números do negócio" },
    { icon: FileText, text: "Tomada de decisão baseada em dados" },
    { icon: Layout, text: "Estrutura mínima de gestão" },
    { icon: Users, text: "Processos mais organizados" },
    { icon: Clock, text: "Mais previsibilidade e menos improviso" }
  ];

  return (
    // Background updated to theme light
    <section className="py-24 bg-[#F0E6E0]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-[#754B2F] font-semibold tracking-widest text-sm uppercase mb-2 block">A Solução</span>
            <h2 className="text-4xl font-light text-[#3E2C22] mb-6">
              Mentoria em Grupo <br />
              <span className="font-serif italic text-[#754B2F]">Gestão Empresarial na Prática</span>
            </h2>
            
            <div className="prose prose-lg text-[#5D4E46] mb-8">
              <p>
                Uma mentoria online, ao vivo e em grupo, criada para empresários que querem estruturar a gestão, 
                organizar as finanças e tomar decisões com clareza, aplicando tudo no próprio negócio desde o primeiro encontro.
              </p>
              <p>
                Aqui você não vai assistir aulas genéricas. Você vai trabalhar no seu negócio, com orientação estratégica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="p-2 bg-white rounded-md shadow-sm border border-[#E6D5C8] group-hover:border-[#754B2F] transition-colors">
                    <item.icon className="w-5 h-5 text-[#754B2F]" />
                  </div>
                  <span className="text-[#3E2C22] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4 pt-12">
                   <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg border border-[#E6D5C8]">
                      <ImageWithFallback 
                        src={image_2c5e26cd073c160914cf428940c19b06f74bf116} 
                        alt="Planning"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                   <div className="bg-[#543D32] p-6 rounded-sm text-white shadow-lg">
                      <h4 className="text-lg font-serif italic mb-2 text-[#F3DBB2]">Prático e Direto</h4>
                      <p className="text-[#D4C5BC] text-sm">Respeitando a realidade de micro e pequenas empresas.</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-white p-6 rounded-sm border border-[#E6D5C8] shadow-lg">
                      <h4 className="text-lg font-serif italic mb-2 text-[#3E2C22]">Sem Teoria Vazia</h4>
                      <p className="text-[#5D4E46] text-sm">Foco total em aplicação e resultados.</p>
                   </div>
                   <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg border border-[#E6D5C8]">
                      <ImageWithFallback 
                        src={image_733a615f31cc4ebb815a2c37bc3ee987acc4539d} 
                        alt="Growth"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
