import image_cf28e0d2fafafd53a0a0d7997fa32c2f8c213b8b from 'figma:asset/cf28e0d2fafafd53a0a0d7997fa32c2f8c213b8b.png';
import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bioImg from 'figma:asset/82b5e8a8cb277e971897c1d50b434b06cd88891f.png';

export function Bio() {
  return (
    // Background updated to dark coffee #3E2C22
    <section className="py-24 bg-[#3E2C22] text-[#F0E6E0] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/3 relative">
            <div className="absolute top-4 -left-4 w-full h-full border border-[#754B2F]/50 rounded-sm"></div>
            <div className="relative aspect-[3/4] w-full bg-[#2C1E18] rounded-sm overflow-hidden hover:grayscale-0 transition-all duration-500">
               <ImageWithFallback
                 src={image_cf28e0d2fafafd53a0a0d7997fa32c2f8c213b8b}
                 alt="Niceia Fronza"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="md:w-2/3">
             <span className="text-[#F3DBB2] font-semibold tracking-widest text-sm uppercase mb-2 block">Sua Mentora</span>
             <h2 className="text-3xl md:text-4xl font-light mb-6">
               Niceia Fronza
             </h2>
             
             <div className="space-y-4 text-[#D4C5BC] mb-8 leading-relaxed">
               <p className="flex items-center gap-2">
                 <span className="h-1 w-1 bg-[#F3DBB2] rounded-full"></span> Graduada em Administração de Empresas
               </p>
               <p className="flex items-center gap-2">
                 <span className="h-1 w-1 bg-[#F3DBB2] rounded-full"></span> Pós-graduada em Administração Financeira
               </p>
               <p className="flex items-center gap-2">
                 <span className="h-1 w-1 bg-[#F3DBB2] rounded-full"></span> 20 anos de experiência em gestão empresarial
               </p>
                 <p className="flex items-center gap-2">
                 <span className="h-1 w-1 bg-[#F3DBB2] rounded-full"></span> Consultora Empresarial há mais de 5 anos
               </p>
               <p className="flex items-center gap-2">
                 <span className="h-1 w-1 bg-[#F3DBB2] rounded-full"></span> Especialista em Finanças e Gestão Empresarial
               </p>
             </div>

             <blockquote className="bg-[#543D32] p-6 rounded-sm border-l-4 border-[#754B2F] italic text-[#E6D5C8] mb-8">
               "Niceia não ensina teoria. Ela ensina o que funciona na prática, dentro da realidade do empresário brasileiro."
             </blockquote>
             
             <p className="text-[#A89890]">
               Já ajudou dezenas de empresas a organizarem processos, estruturarem a gestão e crescerem com consistência.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}
